import type { AppTheme } from "@/lib/themes";

const statusCopy = {
  questionsLoading: { tone: "busy", chat: "메시지 불러오는 중…", sheet: "시트 여는 중…", terminal: "READING DATA..." },
  documentLoading: { tone: "busy", chat: "대화 불러오는 중…", sheet: "문서 여는 중…", terminal: "OPENING FILE..." },
  imageLoading: { tone: "busy", chat: "사진 불러오는 중…", sheet: "그림 불러오는 중…", terminal: "READING IMAGE..." },
  relatedLoading: { tone: "busy", chat: "연결된 대화 찾는 중…", sheet: "연결 데이터 계산 중…", terminal: "CALCULATING LINKS..." },
  statisticsLoading: { tone: "busy", chat: "대화 기록 불러오는 중…", sheet: "집계표 계산 중…", terminal: "READING HISTORY..." },
  syncLocal: { tone: "success", chat: "이 기기에 저장됨", sheet: "이 기기에 저장됨", terminal: "SAVED LOCALLY" },
  syncPending: { tone: "busy", chat: "전송 대기", sheet: "변경 내용 반영 대기", terminal: "SYNC QUEUED" },
  syncing: { tone: "busy", chat: "전송 중…", sheet: "변경 내용 반영 중…", terminal: "SYNCING..." },
  synced: { tone: "success", chat: "전송 완료", sheet: "변경 내용 반영됨", terminal: "SYNC COMPLETE" },
  syncFailed: { tone: "error", chat: "전송하지 못했어요.", sheet: "변경 내용을 반영하지 못했습니다.", terminal: "SYNC ERROR" },
  saved: { tone: "success", chat: "보관함에 저장했어요.", sheet: "저장되었습니다.", terminal: "SAVE COMPLETE" },
  removed: { tone: "success", chat: "보관함에서 꺼냈어요.", sheet: "저장이 해제되었습니다.", terminal: "SAVE REMOVED" },
  recorded: { tone: "success", chat: "복습 기록을 남겼어요.", sheet: "기록이 입력되었습니다.", terminal: "RECORD SAVED" },
  questionsError: { tone: "error", chat: "메시지를 불러오지 못했어요.", sheet: "시트를 열지 못했습니다.", terminal: "READ ERROR" },
  documentError: { tone: "error", chat: "대화를 불러오지 못했어요.", sheet: "문서를 열지 못했습니다.", terminal: "FILE ERROR" },
  imageError: { tone: "error", chat: "사진을 불러오지 못했어요.", sheet: "그림을 불러오지 못했습니다.", terminal: "IMAGE ERROR" },
  saveError: { tone: "error", chat: "저장하지 못했어요.", sheet: "변경 내용을 저장하지 못했습니다.", terminal: "SAVE ERROR" },
  questionsEmpty: { tone: "empty", chat: "선택한 범위에 메시지가 없어요.", sheet: "선택한 범위에 데이터가 없습니다.", terminal: "NO MATCHING DATA" },
  searchEmpty: { tone: "empty", chat: "검색한 대화가 없어요.", sheet: "찾는 내용이 없습니다.", terminal: "NO MATCHES FOUND" },
  recentEmpty: { tone: "empty", chat: "아직 열어 본 대화가 없어요.", sheet: "최근 문서가 없습니다.", terminal: "HISTORY EMPTY" },
  savedEmpty: { tone: "empty", chat: "보관함이 비어 있어요. + 메뉴에서 자료를 저장해 보세요.", sheet: "저장된 문서가 없습니다. 문서 도구에서 저장하세요.", terminal: "NO SAVED FILES · USE SAVE" },
  recordsEmpty: { tone: "empty", chat: "이 범위의 풀이 기록이 아직 없어요.", sheet: "이 범위에 입력된 풀이 기록이 없습니다.", terminal: "NO ANSWER RECORDS" },
  wrongEmpty: { tone: "empty", chat: "복습할 오답이 없어요.", sheet: "복습할 오답 데이터가 없습니다.", terminal: "NO WRONG ANSWERS" },
  draftLoading: { tone: "busy", chat: "입력 내용 불러오는 중…", sheet: "임시 저장 내용 여는 중…", terminal: "READING DRAFT..." },
  draftSaved: { tone: "success", chat: "이 탭에 임시 저장됨", sheet: "이 탭에 임시 저장됨", terminal: "DRAFT SAVED IN THIS TAB" },
  draftError: { tone: "error", chat: "임시 저장을 못 했어요. 입력 내용은 그대로 있어요.", sheet: "임시 저장 실패 · 현재 입력은 유지됩니다", terminal: "DRAFT SAVE ERROR · INPUT RETAINED" },
} as const;

export type SkinStatusKind = keyof typeof statusCopy;

export function skinStatusMessage(theme: AppTheme, kind: SkinStatusKind, fallback: string): string {
  return theme === "chat" || theme === "sheet" || theme === "terminal" ? statusCopy[kind][theme] : fallback;
}

export function skinStatusTone(kind: SkinStatusKind) {
  return statusCopy[kind].tone;
}

export function skinRetryLabel(theme: AppTheme, resend = false) {
  return theme === "terminal" ? "RETRY" : theme === "chat" && resend ? "재전송" : "다시 시도";
}
