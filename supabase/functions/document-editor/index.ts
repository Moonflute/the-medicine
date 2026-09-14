import { createHandler } from "./handler.ts";

Deno.serve(createHandler({
  token: Deno.env.get("DOCUMENT_EDITOR_GITHUB_TOKEN") ?? "",
  authenticate: async (token) => {
    // Validate against Auth; never trust decoded, unverified client claims.
    const response = await fetch(`${Deno.env.get("SUPABASE_URL")}/auth/v1/user`, {
      headers: { Authorization: `Bearer ${token}`, apikey: Deno.env.get("SUPABASE_ANON_KEY") ?? "" },
      signal: AbortSignal.timeout(10_000),
    });
    return response.ok ? await response.json() : null;
  },
}));
