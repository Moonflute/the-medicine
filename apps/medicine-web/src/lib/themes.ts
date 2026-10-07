export const THEME_STORAGE_KEY = "medicine-web-theme-v1";
export const THEME_IDS = ["light", "dark", "sepia", "chat", "sheet", "terminal", "mail", "social", "editor"] as const;
export type AppTheme = (typeof THEME_IDS)[number];
export type ConceptTheme = "mail" | "social" | "editor";
export const isConceptTheme = (theme: AppTheme): theme is ConceptTheme => theme === "mail" || theme === "social" || theme === "editor";
export const isSpecialTheme = (theme: AppTheme) => theme !== "light" && theme !== "dark" && theme !== "sepia";

export const CHAT_SKIN_STORAGE_KEY = "medicine-web-chat-skin-v1";
export const CHAT_FONT_STORAGE_KEY = "medicine-web-chat-font-v1";
export const CHAT_SIZE_STORAGE_KEY = "medicine-web-chat-size-v1";
export const chatSkins = [
  { id: "classic", label: "기본 카톡", description: "하늘색 대화방과 노란 말풍선", background: "#b2c7d9", bubble: "#fae100", chrome: "#b2c7d9" },
  { id: "clear-blue", label: "Clear Blue", description: "맑은 하늘색 대화방, 흰 받은 톡과 파란 내 톡 · 버튼", background: "#cfe8ff", bubble: "#246bce", chrome: "#cfe8ff" },
  { id: "con", label: "콘 · 그린", description: "작은 초록 악어와 산뜻한 민트색 대화방", background: "#dceacb", bubble: "#bce07c", chrome: "#dceacb" },
  { id: "blossom", label: "벚꽃", description: "연분홍 대화방과 부드러운 꽃잎색 말풍선", background: "#f3e0e7", bubble: "#f9bfce", chrome: "#f3e0e7" },
  { id: "midnight", label: "미드나잇", description: "어두운 대화방과 차분한 회색 말풍선", background: "#1c2028", bubble: "#e6d36b", chrome: "#1c2028" },
] as const;
export type ChatSkin = (typeof chatSkins)[number]["id"];
export const chatFonts = [
  { id: "system", label: "기본" }, { id: "gothic", label: "고딕" },
  { id: "serif", label: "명조" }, { id: "mono", label: "고정폭" },
] as const;
export type ChatFont = (typeof chatFonts)[number]["id"];
export const CHAT_TEXT_SIZES = [10, 11, 12, 13, 14, 15, 16, 17, 18] as const;
export type ChatTextSize = (typeof CHAT_TEXT_SIZES)[number];
export const isChatSkin = (value: unknown): value is ChatSkin => chatSkins.some(skin => skin.id === value);
export const isChatFont = (value: unknown): value is ChatFont => chatFonts.some(font => font.id === value);
export const isChatTextSize = (value: unknown): value is ChatTextSize => CHAT_TEXT_SIZES.some(size => size === value);

export function isAppTheme(value: unknown): value is AppTheme {
  return typeof value === "string" && THEME_IDS.some((theme) => theme === value);
}

export const themeGroups = [
  {
    title: "기본 테마",
    description: "읽기 편한 화면 색상",
    themes: [
      { id: "light", label: "라이트", description: "밝고 깔끔한 기본 화면", swatch: "#ffffff", chrome: "#ffffff" },
      { id: "dark", label: "다크", description: "검정 배경과 밝은 글자", swatch: "#000000", chrome: "#000000" },
      { id: "sepia", label: "세피아", description: "따뜻한 종이색과 차분한 갈색 글자", swatch: "#eee2c9", chrome: "#f8f1e3" },
    ],
  },
  {
    title: "특수 테마",
    description: "익숙한 앱과 업무 문서의 화면 구성",
    themes: [
      { id: "chat", label: "카톡 스타일", description: "대화방, 공지, + 메뉴와 답장을 쓰는 입력창", swatch: "#fae100", chrome: "#b2c7d9" },
      { id: "sheet", label: "엑셀 스타일", description: "자료 목록과 답안을 셀로 읽고, 이론의 목차를 실제 시트로 전환하는 통합문서", swatch: "#217346", chrome: "#217346" },
      { id: "terminal", label: "DOS / 터미널", description: "검정 배경과 흰 글자, 디렉터리 탐색과 번호 선택으로 읽는 콘솔", swatch: "#000000", chrome: "#000000" },
      { id: "mail", label: "네이버 메일 스타일", description: "메일함의 자료 목록, 메일 본문으로 읽는 이론과 답장으로 제출하는 문제", swatch: "#03c75a", chrome: "#ffffff" },
      { id: "social", label: "인스타 스타일", description: "스토리와 자료 피드, 목차를 넘기는 게시물과 투표처럼 고르는 답안", swatch: "#dd2a7b", chrome: "#ffffff" },
      { id: "editor", label: "코드 에디터", description: "파일 탐색기, 문서 탭과 접히는 코드, 답안을 실행하고 확인하는 출력 패널", swatch: "#007acc", chrome: "#181818" },
    ],
  },
] satisfies Array<{
  title: string;
  description: string;
  themes: Array<{ id: AppTheme; label: string; description: string; swatch: string; chrome: string }>;
}>;

// Runs before the first paint, so a saved dark theme does not flash white.
export const themeInitScript = `(function(){var t="light",c="classic",f="system",s=15;try{var v=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});if(${JSON.stringify(THEME_IDS)}.indexOf(v)!==-1)t=v;v=localStorage.getItem(${JSON.stringify(CHAT_SKIN_STORAGE_KEY)});if(${JSON.stringify(chatSkins.map(skin => skin.id))}.indexOf(v)!==-1)c=v;v=localStorage.getItem(${JSON.stringify(CHAT_FONT_STORAGE_KEY)});if(${JSON.stringify(chatFonts.map(font => font.id))}.indexOf(v)!==-1)f=v;v=Number(localStorage.getItem(${JSON.stringify(CHAT_SIZE_STORAGE_KEY)}));if(${JSON.stringify(CHAT_TEXT_SIZES)}.indexOf(v)!==-1)s=v}catch(e){}var h=document.documentElement;h.dataset.theme=t;h.dataset.chatSkin=c;h.dataset.chatFont=f;h.dataset.chatSize=String(s);h.style.colorScheme=(t==="dark"||t==="terminal"||t==="editor"||(t==="chat"&&c==="midnight"))?"dark":"light"})();`;
