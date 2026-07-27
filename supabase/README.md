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

The next implementation stages add the local-data merge prompt, sync queue, aggregate-write RPCs, and Realtime subscriptions. The schema already reserves the required rows.