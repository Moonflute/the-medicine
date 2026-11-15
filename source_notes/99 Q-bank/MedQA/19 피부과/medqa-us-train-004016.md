---
type: qbank
schema_version: 1
id: medqa-us-train-004016
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fda2d34a0bd67c622ec6c8064f9b6d8935e63120dc35e501c4b83099124a8201
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "두부백선"
  - "피부사상균 감염"
  - "탈모"
question_type: management
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-uwseyEoCAoVGluZWEpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVGVyYmluYWZpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

10세 아이에게 인설성 탈모반이 있고 모발 검사에서 트리코피톤에 의한 두부백선이 확인됐다. 필요한 초기 치료는?

## 선택지

A. 항진균 샴푸만 사용한다
B. 경구 테르비나핀을 사용한다
C. 국소 스테로이드만 사용한다
D. 경구 독시사이클린을 사용한다

## 해설

두부백선은 모발과 모낭까지 침범하므로 경구 치료가 필요하다. 트리코피톤에 테르비나핀을 사용할 수 있고 샴푸는 보조 치료다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 두피 소양성 환상 병변·탈모·후경부 림프절의 두부백선은 본문으로 충분히 지지되어 경구 terbinafine D를 유지하고 질환명 오류와 샴푸 단독치료 혼동을 수정한다.
- 공식/학회 근거: https://www.bad.org.uk/pils/tinea-capitis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004016
- https://pubmed.ncbi.nlm.nih.gov/42444404/
