"use client";

import Link from "next/link";
import { ArrowLeft, BrainCircuit, Bug, HeartPulse, Search, X, type LucideIcon } from "lucide-react";
import { useId, useRef, type KeyboardEvent, type ReactNode } from "react";
import { HubStatusStrip } from "@/components/hub-status-strip";

const hubs = [
  { id: "infection", label: "감염", href: "/specialty/MDgg6rCQ7Je8/hub", icon: Bug },
  { id: "maternal-child", label: "산부소아", href: "/maternal-child-hub", icon: HeartPulse },
  { id: "nervous-system", label: "신경계", href: "/nervous-system-hub", icon: BrainCircuit },
] as const;

export function HubLayout({ hub, title, description, date, dateLabel = "자료 업데이트", stats, children }: {
  hub: (typeof hubs)[number]["id"];
  title: string;
  description: string;
  date: string;
  dateLabel?: string;
  stats: Array<{ label: string; value: string | number }>;
  children: ReactNode;
}) {
  const Icon = hubs.find((item) => item.id === hub)!.icon;
  return <div className="hub-layout" data-hub={hub}>
    <div className="hub-navigation">
      <Link href="/specialties" className="hub-back"><ArrowLeft size={15} aria-hidden="true" />분과 목록</Link>
      <nav className="hub-switcher" aria-label="Hub 전환">
        {hubs.map((item) => <Link key={item.id} href={item.href} aria-current={hub === item.id ? "page" : undefined}>
          <item.icon size={15} aria-hidden="true" /><span>{item.label}</span>
        </Link>)}
      </nav>
    </div>
    <header className="hub-header">
      <div className="hub-heading">
        <span className="hub-icon"><Icon size={24} aria-hidden="true" /></span>
        <div className="min-w-0"><h1>{title}</h1><p>{description}</p></div>
      </div>
      <HubStatusStrip reviewedAt={date} dateLabel={dateLabel} items={stats} />
    </header>
    {children}
  </div>;
}

export type HubTab<T extends string> = { id: T; label: string; icon?: LucideIcon; count?: number };

export function HubTabs<T extends string>({ label, tabs, value, onChange, children }: {
  label: string;
  tabs: readonly HubTab<T>[];
  value: T;
  onChange: (value: T) => void;
  children: ReactNode;
}) {
  const id = useId();
  const tabList = useRef<HTMLDivElement>(null);
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const next = event.key === "ArrowRight" ? (index + 1) % tabs.length
      : event.key === "ArrowLeft" ? (index - 1 + tabs.length) % tabs.length
        : event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : undefined;
    if (next === undefined) return;
    event.preventDefault();
    onChange(tabs[next].id);
    tabList.current?.querySelectorAll<HTMLButtonElement>("[role=tab]")[next]?.focus();
  };
  return <>
    <div ref={tabList} className="hub-tabs" role="tablist" aria-label={label}>
      {tabs.map((tab, index) => <button key={tab.id} id={`${id}-${tab.id}`} type="button" role="tab"
        aria-selected={value === tab.id} aria-controls={`${id}-panel`} tabIndex={value === tab.id ? 0 : -1}
        onClick={() => onChange(tab.id)} onKeyDown={(event) => onKeyDown(event, index)}>
        {tab.icon ? <tab.icon size={16} aria-hidden="true" /> : null}<span>{tab.label}</span>
        {tab.count !== undefined ? <span className="hub-tab-count">{tab.count}</span> : null}
      </button>)}
    </div>
    <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-${value}`} tabIndex={0} className="hub-tab-panel">{children}</div>
  </>;
}

export function HubToolbar({ title, description, children, count }: { title: string; description?: string; children?: ReactNode; count?: string }) {
  return <section className="hub-toolbar" aria-label={title}>
    <div className="hub-section-heading"><div><h2>{title}</h2>{description ? <p>{description}</p> : null}</div>{count ? <span className="hub-result-count" aria-live="polite">{count}</span> : null}</div>
    {children ? <div className="hub-toolbar-controls">{children}</div> : null}
  </section>;
}

export function HubSearch({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (value: string) => void; placeholder: string }) {
  const id = useId();
  const input = useRef<HTMLInputElement>(null);
  return <div className="hub-search">
    <label htmlFor={id} className="sr-only">{label}</label><Search size={17} aria-hidden="true" />
    <input ref={input} id={id} type="search" value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} />
    {value ? <button type="button" onClick={() => { onChange(""); input.current?.focus(); }} aria-label={`${label} 지우기`}><X size={16} /></button> : null}
  </div>;
}

export function HubEmptyState({ onReset }: { onReset: () => void }) {
  return <div className="hub-empty" role="status"><Search size={24} aria-hidden="true" /><h3>검색 결과가 없습니다</h3><p>검색어나 필터를 바꿔 다시 찾아보세요.</p><button type="button" className="hub-button" onClick={onReset}>검색 조건 초기화</button></div>;
}
