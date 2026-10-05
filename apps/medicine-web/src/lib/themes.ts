export const THEME_STORAGE_KEY = "medicine-web-theme-v1";
export const THEME_IDS = ["light", "dark", "sepia", "chat", "sheet", "terminal"] as const;
export type AppTheme = (typeof THEME_IDS)[number];

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
      { id: "chat", label: "카톡 스타일", description: "자료는 대화방, 이론은 메시지, 답안은 선택해서 보내는 대화 화면", swatch: "#fae100", chrome: "#ffffff" },
      { id: "sheet", label: "엑셀 스타일", description: "자료 목록과 답안을 셀로 읽고, 이론의 목차를 실제 시트로 전환하는 통합문서", swatch: "#217346", chrome: "#217346" },
      { id: "terminal", label: "DOS / 터미널", description: "검정 배경과 흰 글자, 디렉터리 탐색과 번호 선택으로 읽는 콘솔", swatch: "#000000", chrome: "#000000" },
    ],
  },
] satisfies Array<{
  title: string;
  description: string;
  themes: Array<{ id: AppTheme; label: string; description: string; swatch: string; chrome: string }>;
}>;

// Runs before the first paint, so a saved dark theme does not flash white.
export const themeInitScript = `(function(){var t="light";try{var v=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});if(${JSON.stringify(THEME_IDS)}.indexOf(v)!==-1)t=v}catch(e){}document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=(t==="dark"||t==="terminal")?"dark":"light"})();`;
