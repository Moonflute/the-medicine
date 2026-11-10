import { setTimeout as sleep } from 'node:timers/promises';

// Pages may return an empty status when its backend publication times out:
// https://github.com/actions/deploy-pages/issues/166
// https://github.com/actions/deploy-pages/blob/v4/src/internal/deployment.js
// https://docs.github.com/en/rest/pages/pages#create-a-github-pages-deployment
const terminalFailures = new Set([
  'deployment_failed', 'deployment_perms_error', 'deployment_content_failed',
  'deployment_cancelled', 'deployment_lost',
]);
const unknownStates = new Set(['unknown_status', 'not_found']);
const requestOptions = { timeout: 30_000 };

export async function cancelPages({ github, context, core, deploymentId }) {
  try {
    await github.request('POST /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}/cancel', {
      ...context.repo, pages_deployment_id: deploymentId, request: requestOptions,
    });
    core.info(`Cancelled unfinished Pages deployment ${deploymentId}.`);
    return true;
  } catch (error) {
    core.warning(`Could not cancel Pages deployment ${deploymentId}: ${error.message}`);
    return false;
  }
}

export async function deployPages({
  github, context, core, artifactId,
  timeoutMs = 25 * 60_000, intervalMs = 15_000,
  unavailableTimeoutMs = 2 * 60_000, retryDelayMs = 30_000, startupTimeoutMs = 2 * 60_000,
  runAttempt = process.env.GITHUB_RUN_ATTEMPT || '1',
  now = Date.now, wait = sleep,
}) {
  const id = Number(artifactId);
  if (!Number.isSafeInteger(id) || id <= 0) throw new Error('Missing Pages artifact ID from the build job.');
  if (![timeoutMs, intervalMs, unavailableTimeoutMs, startupTimeoutMs].every(value => Number.isFinite(value) && value > 0)
    || !Number.isFinite(retryDelayMs) || retryDelayMs < 0) throw new Error('Pages wait intervals must be positive.');
  if (!context.sha || !context.runId || !runAttempt) throw new Error('Missing Pages workflow identity.');

  const started = now();
  const deadline = started + timeoutMs;
  // One recovery attempt, using the already-built artifact. Never overlap publishers.
  for (let attempt = 1; attempt <= 2; attempt++) {
    // Despite the API documentation's "unique string", an invented build version
    // returns 404. Use the real commit and remember its old terminal status so a
    // rerun cannot immediately mistake that status for this publication's result.
    // https://github.com/actions/deploy-pages/issues/383
    let previousStatus;
    let baselineUnavailable = false;
    try {
      const previous = await github.request('GET /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}', {
        ...context.repo, pages_deployment_id: context.sha, request: requestOptions,
      });
      previousStatus = previous.data?.status;
      baselineUnavailable = !previousStatus || unknownStates.has(previousStatus);
    } catch (error) {
      if (error.status !== 404) {
        if (error.status && error.status !== 429 && error.status < 500) throw error;
        baselineUnavailable = true;
        core.warning('Could not read the prior Pages state; a fresh progress state will be required.');
      }
    }
    const oidcToken = await core.getIDToken();
    core.setSecret(oidcToken);
    // Do not retry an ambiguous POST failure: it may already have created a deployment.
    const created = await github.request('POST /repos/{owner}/{repo}/pages/deployments', {
      ...context.repo, artifact_id: id, pages_build_version: context.sha,
      oidc_token: oidcToken, request: requestOptions,
    });
    const deployment = created.data;
    const deploymentId = deployment.id || context.sha;
    core.setOutput('deployment_id', deploymentId);
    core.setOutput('page_url', deployment.page_url || '');
    core.info(`Pages attempt ${attempt}/2 (workflow ${context.runId}/${runAttempt}): deployment ${deploymentId}, artifact ${id}; previous status ${previousStatus || 'unavailable'}; request ${created.headers?.['x-github-request-id'] || 'unavailable'}.`);

    let lastStatus = '';
    let lastReport = now();
    const startupDeadline = now() + startupTimeoutMs;
    let freshProgress = false;
    let unavailableSince;
    let settled = false;
    let retry = false;
    let cancelled = false;
    try {
      while (now() < deadline) {
        // Like deploy-pages, let creation propagate before the first status read.
        await wait(Math.max(0, Math.min(intervalMs, deadline - now())));
        if (now() >= deadline) break;
        let result;
        let diagnostic;
        try {
          result = await github.request('GET /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}', {
            ...context.repo, pages_deployment_id: deploymentId, request: requestOptions,
          });
          diagnostic = `HTTP ${result.status || 200}; keys ${Object.keys(result.data || {}).join(',') || '(empty)'}; request ${result.headers?.['x-github-request-id'] || 'unavailable'}`;
        } catch (error) {
          // Retry read-only polling for transient service/network errors, not permission errors.
          if (error.status && error.status !== 404 && error.status !== 429 && error.status < 500) throw error;
          diagnostic = `HTTP ${error.status || 'network error'}; request ${error.response?.headers?.['x-github-request-id'] || 'unavailable'}`;
        }
        const status = result?.data?.status;
        const terminal = status === 'succeed' || terminalFailures.has(status);
        if (!freshProgress && terminal && (status === previousStatus || baselineUnavailable)) {
          if (now() >= startupDeadline) throw new Error(`Pages did not expose a fresh publication state; refusing to reuse previous ${status}. Deployment: ${deploymentId}. ${diagnostic}`);
          core.info(`Pages is still reporting previous ${status}; waiting for this publication to start.`);
          continue;
        }
        if (status && !terminal && !unknownStates.has(status)) freshProgress = true;
        if (status === 'succeed') {
          settled = true;
          core.setOutput('status', 'succeed');
          core.info(`Pages publication succeeded after ${Math.round((now() - started) / 1000)} seconds (attempt ${attempt}).`);
          return deployment;
        }
        if (terminalFailures.has(status)) {
          settled = true;
          throw new Error(`Pages publication failed: ${status}. Deployment: ${deploymentId}. ${diagnostic}`);
        }
        // Empty status is neither success nor a confirmed deployment failure.
        // Recover once after sustained unavailability; do not count polling calls.
        const unavailable = !status || unknownStates.has(status);
        unavailableSince = unavailable ? unavailableSince ?? now() : undefined;
        const label = status || 'status unavailable';
        if (label !== lastStatus || now() - lastReport >= 60_000) {
          core.info(`Pages: ${label}; elapsed ${Math.round((now() - started) / 1000)} seconds; ${diagnostic}.`);
          lastStatus = label;
          lastReport = now();
        }
        if (attempt === 1 && unavailable && now() - unavailableSince >= unavailableTimeoutMs
          && now() + retryDelayMs + intervalMs < deadline) {
          core.warning(`Pages status has been unavailable for ${unavailableTimeoutMs / 60_000} minutes. Cancelling only ${deploymentId} before one fresh publication attempt.`);
          retry = true;
          break;
        }
      }
      if (!retry) throw new Error(`Pages publication exceeded ${timeoutMs / 60_000} minutes; last status: ${lastStatus}. Deployment: ${deploymentId}.`);
    } finally {
      // Retain the last published site. A replacement requires acknowledged cancellation.
      if (!settled) cancelled = await cancelPages({ github, context, core, deploymentId });
    }
    if (!cancelled) throw new Error(`Could not confirm cancellation of ${deploymentId}; refusing an overlapping publication.`);
    await wait(Math.min(retryDelayMs, Math.max(0, deadline - now())));
    if (now() >= deadline) throw new Error('Pages publication deadline reached before recovery.');
  }
}
