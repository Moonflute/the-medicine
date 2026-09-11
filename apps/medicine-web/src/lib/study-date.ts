// All learning dates use the same calendar, independent of a device's time zone.
export const STUDY_TIME_ZONE = "Asia/Seoul";
export function studyDateKey(date = new Date()): string {
  return new Date(date.getTime() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
}
// A UTC date used only for calendar arithmetic, representing the Korean civil day.
export function studyDayStart(date = new Date()): Date {
  return new Date(`${studyDateKey(date)}T00:00:00Z`);
}
