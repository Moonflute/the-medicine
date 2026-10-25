---
type: qbank
schema_version: 1
id: medqa-us-train-008177
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d7df5843578b3e7ac907a45732f79d912a6590300a3c99b64a8589da2c55533b
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "nephrolithiasis"
  - "renal colic"
  - "noncontrast CT"
  - "Nephrolithiasis"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yalOyEnSAoVXJpbmFyeSB0cmFjdCBzdG9uZSkubWQ
question_type: investigation
difficulty: standard
answer: "C"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "조영제는 항상 신장을 손상시킨다는 일반화 없이 비조영 CT의 목적 설명."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

43세 남자가 6시간 동안 지속된 급성 좌측 옆구리 통증으로 내원했다. 통증은 심하고 간헐적이며 파도처럼 오고 왼쪽 늑골척추각을 가리킨다. 치료자가 하루 물을 두 잔만 마시라고 해 최근 수분 섭취를 제한했다. 오심과 구토도 있다. 고혈압, 통풍, 제2형 당뇨병 병력이 있다. 발열은 없고 활력징후는 정상이다. 심한 통증으로 몸부림치며 좌측 늑골척추각에 극심한 압통이 있다. 소변검사에서 육안적 혈뇨가 보인다. 가장 적절한 다음 처치는?

## 선택지

A. 조영증강 복부 및 골반 CT
B. 신장 초음파
C. 비조영 복부 및 골반 CT
D. 앙와위 복부 방사선촬영

## 해설

비임신 성인의 급성 신산통과 혈뇨에서 요로결석을 처음 확인하는 검사로 선택지 중 비조영 CT가 적합하다. 결석 위치·크기와 폐색을 볼 수 있고 조영제가 통상 필요하지 않다. 임신·방사선 노출을 줄여야 하는 상황 등에서는 초음파를 우선 고려할 수 있으며 모든 조영 CT가 신독성을 일으킨다는 뜻은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008177

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 조영제는 항상 신장을 손상시킨다는 일반화 없이 비조영 CT의 목적 설명.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://acsearch.acr.org/docs/69362/narrative/
