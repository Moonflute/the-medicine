import { setTimeout as sleep } from 'node:timers/promises';

// The official action uses this API too, but caps its wait at 600,000 ms:
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
  } catch (error) {
    core.warning(`Could not cancel Pages deployment ${deploymentId}: ${error.message}`);
  }
}

export async function deployPages({
  github, context, core, artifactId,
  timeoutMs = 25 * 60_000, intervalMs = 15_000,
  now = Date.now, wait = sleep,
}) {
  const id = Number(artifactId);
  if (!Number.isSafeInteger(id) || id <= 0) throw new Error('Missing Pages artifact ID from the build job.');
  if (!(timeoutMs > 0) || !(intervalMs > 0)) throw new Error('Pages wait intervals must be positive.');

  const oidcToken = await core.getIDToken();
  core.setSecret(oidcToken);
  // Do not retry creation: a lost response may still have created a deployment.
  const { data: deployment } = await github.request('POST /repos/{owner}/{repo}/pages/deployments', {
    ...context.repo, artifact_id: id, pages_build_version: context.sha,
    oidc_token: oidcToken, request: requestOptions,
  });
  const deploymentId = deployment.id || context.sha;
  core.setOutput('deployment_id', deploymentId);
  core.setOutput('page_url', deployment.page_url || '');
  core.info(`Pages deployment ${deploymentId} started; waiting up to ${timeoutMs / 60_000} minutes.`);

  const started = now();
  const deadline = started + timeoutMs;
  let lastStatus = '';
  let lastReport = started;
  let unavailable = 0;
  let settled = false;
  try {
    while (now() < deadline) {
      let result;
      try {
        result = await github.request('GET /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}', {
          ...context.repo, pages_deployment_id: deploymentId, request: requestOptions,
        });
      } catch (error) {
        // Retry read-only polling for transient service/network errors, not permission errors.
        if (error.status && error.status !== 404 && error.status !== 429 && error.status < 500) throw error;
        core.warning(`Pages status is temporarily unavailable (HTTP ${error.status || 'network error'}).`);
      }
      const status = result?.data?.status;
      if (status === 'succeed') {
        settled = true;
        core.setOutput('status', 'succeed');
        core.info(`Pages publication succeeded after ${Math.round((now() - started) / 1000)} seconds.`);
        return deployment;
      }
      if (terminalFailures.has(status)) {
        settled = true;
        throw new Error(`Pages publication failed: ${status}. Deployment: ${deploymentId}.`);
      }
      // Empty JSON must never be mistaken for a successful deployment.
      unavailable = !status || unknownStates.has(status) ? unavailable + 1 : 0;
      if (unavailable >= 20) throw new Error(`Pages returned no usable status for 20 consecutive polls. Deployment: ${deploymentId}.`);
      const label = status || 'status unavailable';
      if (label !== lastStatus || now() - lastReport >= 60_000) {
        core.info(`Pages: ${label}; elapsed ${Math.round((now() - started) / 1000)} seconds.`);
        lastStatus = label;
        lastReport = now();
      }
      await wait(Math.max(0, Math.min(intervalMs, deadline - now())));
    }
    throw new Error(`Pages publication exceeded ${timeoutMs / 60_000} minutes; last status: ${lastStatus}. Deployment: ${deploymentId}.`);
  } finally {
    // Release only this run's unfinished deployment; retain the last published site.
    if (!settled) await cancelPages({ github, context, core, deploymentId });
  }
}
