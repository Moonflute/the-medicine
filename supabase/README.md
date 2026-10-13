# Supabase setup for The Medicine

The app remains a static Next.js export. The browser uses Supabase only after a user logs in, and local-only learning data remains available before login.

## 1. Create the project

1. Create a Supabase project.
2. In **SQL Editor**, run `migrations/202607270001_learning_sync.sql` once.
3. In **Authentication > Providers > Google**, enable Google and enter the OAuth Client ID and Client Secret created in Google Cloud.

## 2. Google OAuth settings

In Google Cloud's OAuth client, add this authorized redirect URI exactly:

```text
https://<project-ref>.supabase.co/auth/v1/callback
```

In Supabase **Authentication > URL Configuration**:

- Set **Site URL** to the production site URL.
- Add the production callback URL: `https://<site-host>/auth/callback/`.
- Add local development: `http://localhost:3000/auth/callback/`.
- If GitHub Pages is used, also add `https://<account>.github.io/the-medicine/auth/callback/`.

## 3. Build environment variables

Add the following to the environment that runs the static build (GitHub Actions secrets/variables for production, and `apps/medicine-web/.env.local` for local development):

```text
NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=<Supabase publishable key>
```

Both are browser-visible configuration values. Do **not** add `service_role` to a Next public environment variable or to GitHub Pages.

## 4. Before production sync

- Confirm the SQL ran with no error.
- Confirm all seven public tables have RLS enabled.
- Test that account A cannot read or update account B's rows.
- Test Google login on the actual deployment URL, not only localhost.

The app uses account-scoped learning records and active question sets; a login on another device reuses the same user ID.

## 5. One-time login from an authenticated device

Apply the `device_login_codes` migration and deploy `functions/device-login` with the function configuration in `config.toml`. This works with the static GitHub Pages app; it does not require a Next.js API server or SMTP delivery.

- On the signed-in phone, use the key icon beside Sign out to generate an eight-digit code.
- On the other device, open Sign in and use **번호로 로그인**.
- Codes expire after three minutes, can be consumed only once, and regeneration replaces the previous code for that account. **번호 취소** revokes it immediately; closing the dialog alone does not revoke it.
- Creation/revocation validate the user with Supabase Auth. Only existing, confirmed Google accounts without enrolled MFA can use the feature. The receiver obtains its own Auth session through a generated one-time magic-link hash, not the phone's access or refresh token.
- `verify_jwt = false` is intentional for this function only: redemption has custom authentication using the one-time code, while creation/revocation explicitly verify the JWT. Per-account, per-IP and global counters are atomic in Postgres. Browser roles cannot access the code/rate-limit tables or their RPCs.
- The Edge Function uses the built-in `SUPABASE_URL`, `SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY`; no server key is included in the static frontend. Login codes and IP addresses are stored only as domain-separated HMACs.
- **이 기기에 로그인 유지** is off by default. Temporary sessions use a separate per-tab sessionStorage key; Google sessions keep their existing storage. Temporary login reloads the current page so all learning-sync subscribers use the correct session. Always sign out after using a shared PC; browsers may restore closed tabs.
- Sign out uses `scope: "local"`, leaving other devices signed in. Do not clear or merge account data as part of this flow.

Targeted checks: `node --experimental-strip-types --test scripts/test-device-login.mjs` from `apps/medicine-web`, plus lint/type checking. Authentication hashes and session credentials must never appear in logs or URLs.
