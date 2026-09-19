import { assertEditor, isEditablePath, replaceBlocks, type Replacement } from "../../../apps/medicine-web/src/lib/document-edit-core.ts";

type Config = {
  token: string;
  authenticate: (token: string) => Promise<{ id: string; app_metadata?: { providers?: string[] } } | null>;
  fetcher?: typeof fetch;
};
const REPO = "Moonflute/the-medicine";
const BRANCH = "master";
const ORIGINS = new Set(["https://moonflute.github.io", "http://localhost:3000", "http://localhost:3017"]);
const encoder = new TextEncoder();
const IMAGE_TYPES: Record<string, string> = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/gif": "gif" };
const MAX_IMAGE_BYTES = 3 * 1024 * 1024;

export function createHandler(config: Config) {
  const request = config.fetcher ?? fetch;
  return async (req: Request): Promise<Response> => {
    const origin = req.headers.get("origin") ?? "";
    const headers = { "Content-Type": "application/json", "Cache-Control": "no-store", "Vary": "Origin", ...(ORIGINS.has(origin) ? { "Access-Control-Allow-Origin": origin, "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info", "Access-Control-Allow-Methods": "POST, OPTIONS" } : {}) };
    const reply = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers });
    if (origin && !ORIGINS.has(origin)) return reply({ error: "허용되지 않은 요청입니다." }, 403);
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers });
    if (req.method !== "POST") return reply({ error: "POST만 허용됩니다." }, 405);
    try {
      const bearer = req.headers.get("authorization")?.match(/^Bearer (.+)$/i)?.[1];
      if (!bearer) return reply({ error: "Google 로그인이 필요합니다." }, 401);
      try { assertEditor(await config.authenticate(bearer)); }
      catch { return reply({ error: "편집 권한이 없습니다." }, 403); }
      if (!config.token) return reply({ error: "GitHub 저장 연결 설정이 아직 완료되지 않았습니다." }, 503);
      const raw = await req.text();
      if (encoder.encode(raw).length > 4_300_000) return reply({ error: "요청이 너무 큽니다." }, 413);
      const input = JSON.parse(raw);
      if (!isEditablePath(input.path)) return reply({ error: "편집 대상 문서 경로가 아닙니다." }, 403);
      const github = async (route: string, init: RequestInit = {}) => {
        const response = await request(`https://api.github.com/repos/${REPO}/${route}`, {
          ...init, headers: { Authorization: `Bearer ${config.token}`, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28", "Content-Type": "application/json", ...init.headers }, signal: AbortSignal.timeout(15_000),
        });
        const data = await response.json();
        return { response, data };
      };
      if (input.action === "status") {
        if (!/^[a-f0-9]{40}$/.test(input.commit ?? "")) return reply({ error: "잘못된 커밋입니다." }, 400);
        const { response, data } = await github(`actions/workflows/deploy-medicine-web.yml/runs?branch=${BRANCH}&per_page=20`);
        if (!response.ok) return reply({ error: "배포 상태를 확인하지 못했습니다." }, 502);
        // A later successful run may contain this save after concurrency cancels its own run.
        const run = data.workflow_runs?.find((item: { conclusion: string }) => item.conclusion === "success");
        if (run) {
          const compared = await github(`compare/${input.commit}...${run.head_sha}`);
          if (compared.response.ok && ["ahead", "identical"].includes(compared.data.status)) return reply({ state: "deployed", url: run.html_url, deployedCommit: run.head_sha });
        }
        const own = data.workflow_runs?.find((run: { head_sha: string }) => run.head_sha === input.commit);
        return reply({ state: own?.conclusion === "failure" ? "failed" : "pending", url: own?.html_url });
      }
      if (input.action === "upload-image") {
        const extension = IMAGE_TYPES[input.contentType];
        if (!extension || typeof input.content !== "string" || !/^[A-Za-z0-9+/]*={0,2}$/.test(input.content) || input.content.length % 4 !== 0) return reply({ error: "지원하지 않는 이미지 형식입니다." }, 400);
        let bytes: Uint8Array;
        try { bytes = Uint8Array.from(atob(input.content), character => character.charCodeAt(0)); }
        catch { return reply({ error: "이미지 내용을 읽지 못했습니다." }, 400); }
        if (!bytes.length || bytes.length > MAX_IMAGE_BYTES) return reply({ error: "이미지는 파일당 3MB까지 첨부할 수 있습니다." }, 413);
        const rawName = typeof input.name === "string" ? input.name : "image";
        const alt = rawName.replace(/[\\/\x00-\x1f]/g, " ").replace(/\.[a-z0-9]+$/i, "").trim().slice(0, 120) || "첨부 이미지";
        const filename = `${crypto.randomUUID()}.${extension}`;
        const assetPath = `apps/medicine-web/public/images/documents/${filename}`;
        let binary = "";
        for (let offset = 0; offset < bytes.length; offset += 0x8000) binary += String.fromCharCode(...bytes.subarray(offset, offset + 0x8000));
        const saved = await github(`contents/${assetPath.split("/").map(encodeURIComponent).join("/")}`, { method: "PUT", body: JSON.stringify({ branch: BRANCH, message: `docs: attach image for ${input.path.split("/").pop()}`, content: btoa(binary) }) });
        if (!saved.response.ok) return reply({ error: "GitHub에 이미지를 저장하지 못했습니다." }, 502);
        const src = `https://moonflute.github.io/the-medicine/images/documents/${filename}`;
        return reply({ src, alt, markdown: `![${alt}](${src})`, commit: saved.data.commit?.sha });
      }
      if (!["read", "save"].includes(input.action)) return reply({ error: "잘못된 작업입니다." }, 400);
      const route = `contents/${input.path.split("/").map(encodeURIComponent).join("/")}`;
      const latest = await github(`${route}?ref=${BRANCH}`);
      if (!latest.response.ok || latest.data.type !== "file" || latest.data.encoding !== "base64") return reply({ error: "GitHub 원본을 읽지 못했습니다." }, 502);
      const source = new TextDecoder("utf-8", { fatal: true }).decode(Uint8Array.from(atob(latest.data.content.replace(/\s/g, "")), c => c.charCodeAt(0)));
      if (input.action === "read") return reply({ source, sha: latest.data.sha, path: input.path });
      if (!/^[a-f0-9]{40}$/.test(input.sha ?? "") || !/^[a-f0-9-]{36}$/.test(input.requestId ?? "")) return reply({ error: "저장 식별값이 올바르지 않습니다." }, 400);
      if (input.sha !== latest.data.sha) return reply({ error: "다른 기기 또는 GitHub에서 원본이 변경되었습니다. 내 초안을 보존했습니다.", latest: { source, sha: latest.data.sha } }, 409);
      let content: string;
      try { content = replaceBlocks(source, input.changes as Replacement[], input.path); }
      catch (error) { return reply({ error: (error as Error).message }, 400); }
      if (content === source) return reply({ unchanged: true, source, sha: latest.data.sha });
      // GitHub checks this same blob SHA atomically, closing the read/write race.
      const bytes = encoder.encode(content);
      let binary = "";
      for (const byte of bytes) binary += String.fromCharCode(byte);
      const saved = await github(route, { method: "PUT", body: JSON.stringify({ branch: BRANCH, sha: input.sha, message: `docs: edit ${input.path.split("/").pop()}\n\nWeb-Edit-Request: ${input.requestId}`, content: btoa(binary) }) });
      if (saved.response.status === 409) return reply({ error: "저장 중 원본이 변경되었습니다. 최신 원본을 다시 확인해주세요." }, 409);
      if (!saved.response.ok) return reply({ error: "GitHub 저장이 완료되지 않았습니다. 초안을 유지하고 원본을 다시 확인해주세요." }, 502);
      return reply({ source: content, sha: saved.data.content.sha, commit: saved.data.commit.sha, url: saved.data.commit.html_url });
    } catch {
      // A timeout can occur AFTER GitHub commits. Never blindly retry a write.
      return reply({ error: "처리 결과를 확인하지 못했습니다. 재저장 전에 GitHub 최신 원본을 확인해주세요." }, 502);
    }
  };
}
