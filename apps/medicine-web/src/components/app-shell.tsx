"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, BookOpen, HeartPulse, House, Menu, Pill, Search, Stethoscope, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: House },
  { href: "/cc", label: "CC", icon: HeartPulse },
  { href: "/specialties", label: "Specialties", icon: Activity },
  { href: "/drugs", label: "Drugs", icon: Pill },
  { href: "/skills", label: "Skills", icon: Stethoscope },
  { href: "/review", label: "Review", icon: BookOpen },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const version = process.env.NEXT_PUBLIC_APP_VERSION ?? "0.0.1";

  const title = useMemo(() => {
    if (pathname === "/") return "The Medicine";
    if (pathname.startsWith("/specialty")) return "Specialty";
    if (pathname.startsWith("/disease")) return "Disease";
    if (pathname.startsWith("/review")) return "Review";
    return "The Medicine";
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(204,228,255,0.55),_transparent_40%),linear-gradient(180deg,_#fcf9f3_0%,_#f8f5ef_45%,_#f2efe7_100%)] text-stone-900">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <aside className="hidden w-72 border-r border-stone-200/80 bg-white/70 p-6 backdrop-blur xl:block">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-stone-900 text-stone-50 shadow-lg shadow-stone-900/10">
                <Activity className="h-5 w-5" />
              </div>
              <div>
                <div className="font-serif text-xl font-semibold tracking-tight">The Medicine</div>
              </div>
            </Link>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${
                    active
                      ? "bg-stone-900 font-medium text-white shadow-lg shadow-stone-900/10 [&_svg]:text-white"
                      : "text-stone-600 hover:bg-white hover:text-stone-900"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col">
          <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-[#faf7f1]/90 backdrop-blur">
            <div className="flex items-center justify-between px-4 py-3 sm:px-6 xl:px-8">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setOpen((value) => !value)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-stone-200 bg-white text-stone-700 xl:hidden"
                >
                  {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
                <div>
                  <div className="font-serif text-xl font-semibold tracking-tight">{title}</div>
                </div>
              </div>
              <Link
                href="/specialties"
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-600 shadow-sm"
              >
                <Search className="h-4 w-4" />
                Browse diseases
              </Link>
            </div>
            {open && (
              <div className="border-t border-stone-200 bg-[#faf7f1] px-4 py-4 xl:hidden">
                <nav className="space-y-2">
                  {navItems.map((item) => {
                    const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${
                          active ? "bg-stone-900 font-medium text-white [&_svg]:text-white" : "bg-white text-stone-700"
                        }`}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            )}
          </header>

          <main className="flex-1 px-4 py-6 sm:px-6 xl:px-8">
            <div className="mx-auto max-w-7xl">{children}</div>
          </main>

          <div className="pointer-events-none fixed bottom-24 right-3 z-30 rounded-full border border-stone-200 bg-white/85 px-3 py-1 text-[11px] text-stone-500 shadow-sm backdrop-blur xl:bottom-4 xl:right-4">
            v {version}
          </div>

          <nav className="sticky bottom-0 z-40 border-t border-stone-200 bg-[#faf7f1]/95 px-3 py-3 backdrop-blur xl:hidden">
            <div className="grid grid-cols-3 gap-2">
              {navItems.map((item) => {
                const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 text-[11px] ${
                      active ? "bg-stone-900 font-medium text-white [&_svg]:text-white" : "bg-white text-stone-600"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
