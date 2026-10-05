"use client";

import { useRef, useState } from "react";
import { useAppTheme } from "@/components/theme-provider";
import { themeGroups } from "@/lib/themes";

export function HomeSettings() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const { theme: activeTheme, setTheme } = useAppTheme();
  const [saveMessage, setSaveMessage] = useState("");
  const selectedTheme = themeGroups.map((group) => group.themes.find((item) => item.id === activeTheme)).find(Boolean);

  function closeSettings() {
    dialogRef.current?.close();
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="home-settings-trigger"
        aria-label="설정 열기"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="home-settings"
        title="설정"
        onClick={() => {
          dialogRef.current?.showModal();
          setOpen(true);
        }}
      >
        <span aria-hidden="true">⚙️</span>
        <span className="home-settings-trigger-label">설정</span>
      </button>

      <dialog
        ref={dialogRef}
        id="home-settings"
        className="home-settings-dialog"
        aria-labelledby="home-settings-title"
        onClose={() => {
          setOpen(false);
          triggerRef.current?.focus();
        }}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
            closeSettings();
          }
        }}
      >
        <div className="home-settings-header">
          <h2 id="home-settings-title">설정</h2>
          <button type="button" className="home-settings-close" aria-label="설정 닫기" onClick={closeSettings} autoFocus>
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <div className="home-settings-content">
          <section aria-labelledby="home-settings-theme-title">
            <h3 id="home-settings-theme-title">테마 · 스킨</h3>
            <p className="home-settings-intro">선택하면 바로 적용되고, 다음 방문에도 유지됩니다.</p>
            <p className="home-settings-save-message" role="status">{saveMessage}</p>
            {themeGroups.map((group) => (
              <fieldset key={group.title} className="home-settings-theme-group">
                <legend>{group.title}</legend>
                <p className="home-settings-group-description">{group.description}</p>
                <div className="home-settings-theme-list" role="group" aria-label={group.title}>
                  {group.themes.map((theme) => (
                    <button key={theme.id} type="button" className="home-settings-theme" title={theme.description} aria-pressed={activeTheme === theme.id} onClick={() => {
                      const saved = setTheme(theme.id);
                      setSaveMessage(saved ? `${theme.label} 테마가 적용되었습니다.` : "테마가 적용되었습니다. 이 브라우저에서는 선택을 저장할 수 없어요.");
                    }}>
                      <span className="home-settings-swatch" style={{ backgroundColor: theme.swatch }} aria-hidden="true" />
                      <span className="home-settings-theme-copy">
                        <span className="home-settings-theme-name">{theme.label}</span>
                      </span>
                      {activeTheme === theme.id ? <span className="home-settings-theme-status" aria-hidden="true">✓</span> : null}
                    </button>
                  ))}
                </div>
              </fieldset>
            ))}
            <p className="home-settings-selected-description">{selectedTheme?.description}</p>
          </section>
        </div>
      </dialog>
    </>
  );
}
