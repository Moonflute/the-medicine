const statsPath = "/review/qbank/stats";
const bankParam = "bank";

export function qbankStatsHref(bank: string): string {
  return bank === "practice" ? `${statsPath}?${bankParam}=practice` : statsPath;
}

export function qbankStatsInitialBank(params: Pick<URLSearchParams, "get">): "all" | "practice" {
  return params.get(bankParam) === "practice" ? "practice" : "all";
}
