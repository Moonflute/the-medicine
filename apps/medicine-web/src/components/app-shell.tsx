"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Activity, BookOpenCheck, ChevronLeft, FileSpreadsheet, FlaskConical, HeartPulse, House, Menu, MessageCircle, Pill, Search, Stethoscope, Terminal, X } from "lucide-react";
import { useAppTheme } from "@/components/theme-provider";
import { AuthStatus } from "@/components/auth-status";
import { LearningSyncProvider } from "@/components/learning-sync-provider";
import { AudioReviewProvider } from "@/components/audio-review-provider";
import { PersonalHighlighter } from "@/components/personal-highlighter";

const navItems = [
  { href: "/", label: "Home", icon: House },
  { href: "/cc", label: "CC", icon: HeartPulse },
  { href: "/specialties", label: "Specialties", icon: Activity },
  { href: "/drugs", label: "Drugs", icon: Pill },
  { href: "/lab-img", label: "Lab & Img", icon: FlaskConical },
  { href: "/skills", label: "Skills", icon: Stethoscope },
  { href: "/review", label: "Review", icon: BookOpenCheck },
];

function isNavItemActive(pathname: string, href: string) {
  const roots = href === "/specialties" ? [href, "/specialty", "/disease"] : [href];
  return roots.some((root) => pathname === root || (root !== "/" && pathname.startsWith(`${root}/`)));
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const atlas = pathname === "/atlas" || pathname === "/atlas/";
  const immersive = atlas || pathname.startsWith("/interactive/") || pathname === "/nervous-system-hub" || pathname === "/nervous-system-hub/";
  const [open, setOpen] = useState(false);
  const { theme } = useAppTheme();
  const specialTheme = theme === "chat" || theme === "sheet" || theme === "terminal";
  const isHome = pathname === "/";
  const documentPage = (/^\/(disease|drugs|skills|lab-img)\/[^/]+\/?$/.test(pathname)
    && !/\/(category|antibiotics|medcalc|numeric-input|blood-reference)\/?$/.test(pathname))
    || /^\/cc\/category\/[^/]+\/[^/]+\/?$/.test(pathname)
    || (/^\/cc\/[^/]+\/?$/.test(pathname) && !pathname.startsWith("/cc/category"));
  const pageNames = ["홈", "증상", "진료과", "약물", "검사", "술기", "복습"];
  const shellTitle = theme === "chat" ? (isHome ? "채팅" : "노트") : theme === "sheet" ? "업무 노트.xlsx" : theme === "terminal" ? "DEV CONSOLE" : undefined;
  const headerRef = useRef<HTMLElement>(null);
  const version = process.env.NEXT_PUBLIC_APP_VERSION ?? "0.8.5";

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const measure = () => document.documentElement.style.setProperty("--app-header-height", `${header.getBoundingClientRect().height}px`);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

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
    <AudioReviewProvider>
    <div className={`app-shell min-h-screen bg-slate-100 text-slate-950 ${immersive ? "immersive-shell" : ""} ${atlas ? "atlas-shell" : ""}`} data-page={isHome ? "home" : "content"} data-view={documentPage ? "document" : "browse"}>
      <LearningSyncProvider />
      <div className="mx-auto flex min-h-screen max-w-[1680px]">
        <aside className="app-sidebar sticky top-0 hidden h-screen w-64 shrink-0 self-start border-r border-slate-200 bg-slate-950 px-4 py-5 text-slate-100 xl:block">
          <Link href="/" className="mb-7 flex items-center gap-3 px-2">
            <div className="flex h-10 w-10 items-center justify-center bg-teal-500 text-white" style={{ borderRadius: 8 }}>
              {theme === "chat" ? <MessageCircle className="h-5 w-5" /> : theme === "sheet" ? <FileSpreadsheet className="h-5 w-5" /> : theme === "terminal" ? <Terminal className="h-5 w-5" /> : <Activity className="h-5 w-5" />}
            </div>
            <div className="min-w-0">
              <div className="text-base font-semibold">{shellTitle ?? "The Medicine"}</div>
              <div className="mt-0.5 text-xs text-slate-400">v {version}</div>
            </div>
          </Link>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const active = isNavItemActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
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
          <header ref={headerRef} className="app-header sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
            <div className="flex h-16 items-center justify-between gap-3 px-4 sm:px-6 xl:px-8">
              <div className="flex min-w-0 items-center gap-3">
                {specialTheme && !isHome ? <Link href="/" className="skin-home-link" aria-label="홈으로"><ChevronLeft className="h-5 w-5" /></Link> : null}
                <button
                  type="button"
                  onClick={() => setOpen((value) => !value)}
                  className="app-menu-button inline-flex h-10 w-10 items-center justify-center border border-slate-300 bg-white text-slate-700 xl:hidden"
                  style={{ borderRadius: 8 }}
                  aria-label="Toggle navigation"
                >
                  {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
                <div className="min-w-0">
                  <div className="app-header-title truncate text-lg font-semibold text-slate-950">{shellTitle ?? title}</div>
                  {isHome && !specialTheme ? <div className="text-xs text-slate-500 xl:hidden">v {version}</div> : null}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <AuthStatus />
                <Link href="/search" className="app-search-action secondary-action whitespace-nowrap" aria-label="검색">
                  <Search className="h-4 w-4" />
                  <span>Search</span>
                </Link>
              </div>
            </div>
            {open && (
              <div className="border-t border-slate-200 bg-white px-4 py-3 xl:hidden">
                <nav className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {navItems.map((item) => {
                    const active = isNavItemActive(pathname, item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                  aria-current={active ? "page" : undefined}
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

          {theme === "sheet" && !immersive ? <div className="sheet-toolbar" aria-label="문서 도구 모음">
            <span className="sheet-file-icon"><FileSpreadsheet className="h-4 w-4" />문서</span>
            <span className="sheet-toolbar-label">홈</span><span className="sheet-toolbar-label">읽기</span>
            <span className="sheet-readonly">보기 전용</span>
          </div> : null}
          {theme === "sheet" && !immersive ? <div className="sheet-formula-bar"><span className="sheet-cell-name">A1</span><span className="sheet-fx" aria-hidden="true">ƒx</span><span className="sheet-formula-value">{isHome ? "문서 목록" : title}</span></div> : null}
          {theme === "terminal" && !immersive ? <div className="terminal-status"><span>LOCAL / READ MODE</span><span>UTF-8 · READY</span></div> : null}

          <main data-personal-highlight-root className="app-main flex-1 px-4 py-6 sm:px-6 xl:px-8">
            <div className="mx-auto max-w-7xl">{children}</div>
          </main>
          <PersonalHighlighter />

          <nav className="app-bottom-nav sticky bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 py-2 backdrop-blur xl:hidden" aria-label="주 메뉴">
            <div className="grid grid-cols-7 gap-1">
              {navItems.map((item, index) => {
                const active = isNavItemActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                  aria-current={active ? "page" : undefined}
                    className={`flex h-12 flex-col items-center justify-center gap-0.5 text-[10px] font-medium ${
                      active ? "bg-teal-600 text-white" : "text-slate-600"
                    }`}
                    style={{ borderRadius: 8 }}
                  >
                    {theme === "chat" && item.href === "/" ? <MessageCircle className="h-4 w-4" /> : <item.icon className="h-4 w-4" />}
                    <span className="max-w-full truncate px-1">{specialTheme ? (theme === "chat" && item.href === "/" ? "채팅" : pageNames[index]) : item.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </div>
    </AudioReviewProvider>
  );
}
