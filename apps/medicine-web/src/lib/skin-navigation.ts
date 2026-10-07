export const skinDestinations = [
  { href: "/", title: "홈", short: "채팅", code: "HOME", summary: "자료와 대화 모아보기", initials: "홈" },
  { href: "/cc", title: "증상 노트", short: "증상", code: "CC", summary: "증상별 접근 · 문진 · 감별진단", initials: "증상" },
  { href: "/specialties", title: "진료과 자료", short: "진료과", code: "THEORY", summary: "질환 이론과 진료과별 자료", initials: "이론" },
  { href: "/drugs", title: "약물 자료", short: "약물", code: "DRUGS", summary: "기전 · 용량 · 주의사항", initials: "약물" },
  { href: "/lab-img", title: "검사실", short: "검사", code: "LAB", summary: "검사 수치 · 영상 · 계산 도구", initials: "검사" },
  { href: "/skills", title: "술기 및 처치", short: "술기", code: "SKILLS", summary: "술기 원칙 · 처치 · 시행과 확인", initials: "술기" },
  { href: "/review", title: "내 보관함", short: "복습", code: "REVIEW", summary: "저장한 문서와 복습 기록", initials: "저장" },
  { href: "/review/qbank", title: "문제은행", short: "문제", code: "QBANK", summary: "문제풀이 · 오답 · 학습 통계", initials: "문제" },
] as const;

export function skinDestination(pathname: string) {
  if (pathname.startsWith("/review/qbank")) return skinDestinations[7];
  if (/^\/(specialty|specialties|disease|microbiology|maternal-child-hub|nervous-system-hub|pathology)/.test(pathname)) return skinDestinations[2];
  return skinDestinations.find(item => item.href !== "/" && pathname.startsWith(item.href)) ?? skinDestinations[0];
}
