// Run against serve-document-editor-harness.cjs with fake Supabase env.
// Intercepts every editor API request: never writes real GitHub content.
/* eslint-disable @typescript-eslint/no-require-imports -- Standalone CommonJS test runner accepts an external Playwright installation. */
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
(async () => {
  const { replaceBlocks } = await import('../src/lib/document-edit-core.ts');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.stack || error.message));
  let sha = 'a'.repeat(40);
  let source = fs.readFileSync(path.resolve('../../source_notes/01 Chief Complaint/가슴통증.md'), 'utf8');
  let saves = 0;
  let failSave = false;
  await context.route('https://editor-test.invalid/**', async route => {
    const request = route.request();
    const headers = { 'access-control-allow-origin': '*', 'access-control-allow-headers': '*', 'access-control-allow-methods': '*' };
    if (request.method() === 'OPTIONS') return route.fulfill({ status: 204, headers });
    if (!request.url().includes('/functions/')) return route.fulfill({ status: 200, headers, json: {} });
    const input = request.postDataJSON();
    if (input.action === 'save') {
      saves++;
      if (failSave) return route.fulfill({ status: 502, headers, json: { error: '저장 연결 실패 검증' } });
      if (input.sha !== sha) return route.fulfill({ status: 409, headers, json: { error: '다른 기기에서 변경되었습니다.' } });
      source = replaceBlocks(source, input.changes, input.path);
      sha = 'd'.repeat(40);
      return route.fulfill({ headers, json: { source, sha, commit: 'b'.repeat(40), url: 'https://github.com/Moonflute/the-medicine/commit/' + 'b'.repeat(40) } });
    }
    if (input.action === 'status') return route.fulfill({ headers, json: { state: 'deployed' } });
    return route.fulfill({ headers, json: { source, sha } });
  });
  try {
    await page.goto(process.env.EDITOR_TEST_URL || 'http://127.0.0.1:3018/', { waitUntil: 'domcontentloaded', timeout: 120000 });
    await page.getByRole('button', { name: '편집기 열기', exact: true }).click();
    await page.getByRole('button').filter({ hasText: '클릭하여 편집' }).first().click();
    const editor = page.locator('[contenteditable=true]').first();
    await editor.click();
    await page.keyboard.press('Control+End');
    await page.keyboard.insertText(' 편집 복구 검증');
    await page.waitForFunction(() => Object.keys(localStorage).some(key => key.startsWith('medicine:document-draft:') && localStorage.getItem(key).includes('편집 복구 검증')));
    assert.equal(saves, 0, 'typing must not commit');
    await page.getByRole('button', { name: '닫기', exact: true }).click();
    await page.getByRole('button', { name: '편집기 열기', exact: true }).click();
    await page.getByRole('button', { name: '복구하기', exact: true }).click();
    await page.getByRole('button').filter({ hasText: '편집 복구 검증' }).waitFor();
    sha = 'c'.repeat(40); source = source.replace('흉통은', '다른 기기의 변경: 흉통은');
    await page.getByRole('button', { name: '최신 원본 확인', exact: true }).click();
    await page.getByText('GitHub 원본이 변경되어 저장을 멈췄습니다.').waitFor();
    assert.equal(await page.getByRole('button', { name: '변경사항 저장', exact: true }).isDisabled(), true);
    assert.equal(saves, 0);
    const desktop = path.resolve('tmp/document-editor-desktop.png');
    await page.screenshot({ path: desktop });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.screenshot({ path: path.resolve('tmp/document-editor-mobile.png') });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
    await page.getByRole('button', { name: '닫기', exact: true }).click();
    await page.evaluate(() => localStorage.clear());
    await page.getByRole('button', { name: '편집기 열기', exact: true }).click();
    await page.getByRole('button').filter({ hasText: '클릭하여 편집' }).first().click();
    await page.locator('[contenteditable=true]').first().click();
    await page.keyboard.press('Control+End');
    await page.keyboard.insertText(' 저장 검증');
    await page.screenshot({ path: path.resolve('tmp/document-editor-mobile-editing.png') });
    failSave = true;
    await page.getByRole('button', { name: '변경사항 저장', exact: true }).click();
    await page.getByRole('alert').filter({ hasText: '저장 연결 실패 검증' }).waitFor();
    assert.equal(await page.evaluate(() => Object.keys(localStorage).some(key => key.startsWith('medicine:document-draft:'))), true);
    failSave = false;
    await page.getByRole('button', { name: '변경사항 저장', exact: true }).click();
    await page.getByRole('status').filter({ hasText: 'GitHub 원본 저장 완료' }).waitFor();
    assert.equal(saves, 2);
    assert.ok(source.includes('저장 검증'));
    await page.getByRole('button', { name: '배포 확인', exact: true }).click();
    await page.getByRole('status').filter({ hasText: '사이트 반영 완료' }).waitFor();
    assert.equal(await page.evaluate(() => Object.keys(localStorage).some(key => key.startsWith('medicine:document-draft:'))), false);
    assert.deepEqual(errors, []);
    console.log(JSON.stringify({ passed: true, checks: ['Tiptap input', 'local draft', 'restore', 'no auto commits', 'conflict blocks save', 'mobile overflow', 'explicit save', 'saved draft cleanup', 'deployment status', 'no page errors'], screenshot: desktop }));
  } catch (error) {
    await page.screenshot({ path: path.resolve('tmp/document-editor-failure.png') });
    console.error(JSON.stringify({ pageErrors: errors, body: (await page.locator('body').innerText()).slice(-2200) }));
    throw error;
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
