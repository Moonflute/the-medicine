"use client";

import { useRef, useState } from "react";
import { useAppTheme } from "@/components/theme-provider";
import { chatFonts, chatSkins, CHAT_TEXT_SIZES, isChatFont, isChatTextSize, themeGroups } from "@/lib/themes";

export function HomeSettings() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const { theme: activeTheme, setTheme, chatSkin, setChatSkin, chatFont, setChatFont, chatTextSize, setChatTextSize } = useAppTheme();
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
                {group.title === "특수 테마" && activeTheme === "chat" ? <div className="home-settings-chat-family">
                  <h4>카톡 테마</h4>
                  <div className="home-settings-chat-skins" role="group" aria-label="카톡 테마">
                    {chatSkins.map(skin => <button type="button" key={skin.id} aria-pressed={chatSkin === skin.id} className="home-settings-chat-skin" title={skin.description} onClick={() => {
                      const saved = setChatSkin(skin.id);
                      setSaveMessage(saved ? `${skin.label} 테마가 적용되었습니다.` : "테마가 적용되었습니다. 이 브라우저에서는 선택을 저장할 수 없어요.");
                    }}>
                      <span className="home-settings-chat-preview" data-chat-preview={skin.id} style={{ backgroundColor: skin.background }} aria-hidden="true"><i /><i style={{ backgroundColor: skin.bubble }} /></span>
                      <span>{skin.label}</span>
                    </button>)}
                  </div>
                  <div className="home-settings-chat-type">
                    <label>대화 글꼴<select aria-label="대화 글꼴" value={chatFont} onChange={event => {
                      if (isChatFont(event.target.value)) {
                        const saved = setChatFont(event.target.value);
                        setSaveMessage(saved ? "대화 글꼴을 저장했습니다." : "대화 글꼴이 적용되었습니다. 이 브라우저에서는 선택을 저장할 수 없어요.");
                      }
                    }}>{chatFonts.map(font => <option key={font.id} value={font.id}>{font.label}</option>)}</select></label>
                    <label>글자 크기<select aria-label="대화 글자 크기" value={chatTextSize} onChange={event => {
                      const size = Number(event.target.value);
                      if (isChatTextSize(size)) {
                        const saved = setChatTextSize(size);
                        setSaveMessage(saved ? "대화 글자 크기를 저장했습니다." : "대화 글자 크기가 적용되었습니다. 이 브라우저에서는 선택을 저장할 수 없어요.");
                      }
                    }}>{CHAT_TEXT_SIZES.map(size => <option key={size} value={size}>{size}px{size === 15 ? " · 기본" : ""}</option>)}</select></label>
                  </div>
                  <div className="home-settings-chat-sample" aria-label="대화 글꼴 미리보기"><span>자료 대화방</span><p>오늘의 대화, 편하게 읽어요.<br />가나다 ABC 123</p><p>이 글꼴로 볼게요.</p></div>
                </div> : null}
              </fieldset>
            ))}
            <p className="home-settings-selected-description">{selectedTheme?.description}</p>
          </section>
        </div>
      </dialog>
    </>
  );
}
