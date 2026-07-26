"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Activity, BookOpenCheck, FlaskConical, HeartPulse, House, Menu, Pill, Search, Stethoscope, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: House },
  { href: "/cc", label: "CC", icon: HeartPulse },
  { href: "/specialties", label: "Specialties", icon: Activity },
  { href: "/drugs", label: "Drugs", icon: Pill },
  { href: "/lab-img", label: "Lab & Img", icon: FlaskConical },
  { href: "/skills", label: "Skills", icon: Stethoscope },
  { href: "/review", label: "Review", icon: BookOpenCheck },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const version = process.env.NEXT_PUBLIC_APP_VERSION ?? "0.7.5";

  useEffect(() => {
    const openSearch = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTyping = target?.tagName === "INPUT" || target?.tagName === "TEXTAREA" || target?.isContentEditable;
      const isSearchShortcut = event.key === "/" || ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k");
      if (!isSearchShortcut || isTyping) return;
      event.preventDefault();
      if (pathname === "/" || pathname.startsWith("/search")) {
        window.dispatchEvent(new Event("medicine:focus-search"));
      } else {
        router.push("/search");
      }
    };
    window.addEventListener("keydown", openSearch);
    return () => window.removeEventListener("keydown", openSearch);
  }, [pathname, router]);

  const title = useMemo(() => {
    if (pathname === "/") return "The Medicine";
    if (pathname.startsWith("/search")) return "Search";
    if (pathname.startsWith("/cc")) return "Chief Complaint";
    if (pathname.startsWith("/specialty") || pathname.startsWith("/disease")) return "Disease Library";
    if (pathname.startsWith("/drugs")) return "Pharmacology";
    if (pathname.startsWith("/lab-img")) return "Lab & Imaging";
    if (pathname.startsWith("/skills")) return "Clinical Skills";
    if (pathname.startsWith("/review")) return "Review";
    return "The Medicine";
  }, [pathname]);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-950">
      <div className="mx-auto flex min-h-screen max-w-[1680px]">
        <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-slate-950 px-4 py-5 text-slate-100 xl:block">
          <Link href="/" className="mb-7 flex items-center gap-3 px-2">
            <div className="flex h-10 w-10 items-center justify-center bg-teal-500 text-white" style={{ borderRadius: 8 }}>
              <Activity className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="text-base font-semibold">The Medicine</div>
              <div className="mt-0.5 text-xs text-slate-400">v {version}</div>
            </div>
          </Link>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition ${
                    active ? "bg-teal-500 text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                  style={{ borderRadius: 8 }}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        <div className="flex min-h-screen min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
            <div className="flex h-16 items-center justify-between gap-3 px-4 sm:px-6 xl:px-8">
              <div className="flex min-w-0 items-center gap-3">
                <button
                  type="button"
                  onClick={() => setOpen((value) => !value)}
                  className="inline-flex h-10 w-10 items-center justify-center border border-slate-300 bg-white text-slate-700 xl:hidden"
                  style={{ borderRadius: 8 }}
                  aria-label="Toggle navigation"
                >
                  {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
                <div className="min-w-0">
                  <div className="truncate text-lg font-semibold text-slate-950">{title}</div>
                  {pathname === "/" ? <div className="text-xs text-slate-500 xl:hidden">v {version}</div> : null}
                </div>
              </div>
              <Link href="/search" className="secondary-action whitespace-nowrap">
                <Search className="h-4 w-4" />
                Search
              </Link>
            </div>
            {open && (
              <div className="border-t border-slate-200 bg-white px-4 py-3 xl:hidden">
                <nav className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {navItems.map((item) => {
                    const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-2 px-3 py-2 text-sm font-medium ${
                          active ? "bg-teal-600 text-white" : "border border-slate-200 bg-slate-50 text-slate-700"
                        }`}
                        style={{ borderRadius: 8 }}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
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

          <nav className="sticky bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 py-2 backdrop-blur xl:hidden">
            <div className="grid grid-cols-7 gap-1">
              {navItems.map((item) => {
                const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex h-12 flex-col items-center justify-center gap-0.5 text-[10px] font-medium ${
                      active ? "bg-teal-600 text-white" : "text-slate-600"
                    }`}
                    style={{ borderRadius: 8 }}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="max-w-full truncate px-1">{item.label}</span>
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
