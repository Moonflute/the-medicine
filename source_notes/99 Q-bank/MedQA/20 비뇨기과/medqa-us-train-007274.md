---
type: qbank
schema_version: 1
id: medqa-us-train-007274
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:467d2fe959de51c48011a2ddb12b24506e43fe3e9aafe20f5662767e222e4037
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "전립선암"
  - "전립선 결절"
  - "전립선 생검"
  - "PSA 상승"
question_type: investigation
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yghOumveyDmOyVlCAoUHJvc3RhdGUgY2FuY2VyKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 아프리카계 미국인 남자가 6개월 동안 지속된 배뇨 시작 곤란, 약한 소변줄기, 말기 배뇨 후 요점적이 있어 추적 진료를 받으러 내원했다. 피나스테리드와 탐스로신 병용요법에도 반응이 없다. 그 외 과거력은 특이사항이 없다. 아버지와 형제가 55세에 전립선암을 진단받았다. 활력징후는 정상이다. 항문괄약근 긴장도와 구해면체근 반사는 정상이다. 직장수지검사에서 전립선은 손가락 두 마디 크기이며 단단한 결절이 있고 변동이나 압통은 없다. 혈청 전립선특이항원은 5 ng/mL이다. 다음 중 확정 진단을 내릴 가능성이 가장 높은 검사는 무엇인가?

## 선택지

A. 4Kscore 검사
B. 영상 유도 침생검
C. 전립선 건강 지수(PHI)
D. 3개월 후 PSA 재검사

## 해설

암을 확정하는 검사는 B, 영상 유도 조직생검이다. 결절성 DRE와 강한 가족력이 있고, 특히 finasteride 복용 중 PSA 5 ng/mL는 무조건 정상이라고 해석할 수 없다. 4Kscore·PHI는 위험 평가 보조이지 조직학적 확진을 대신하지 못한다. 실제 생검 계획은 MRI·감염 위험과 경로 등을 고려하며 이 문항은 확정 진단 수단을 묻는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. PSA 5를 정상 범위라고 설명한 오류를 교정하고 finasteride의 PSA 억제를 고려.
- 공식/학회 근거: https://uroweb.org/guidelines/prostate-cancer/chapter/diagnostic-evaluation
- 공식/학회 근거: https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts/chapter/disease-management

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007274
