---
type: qbank
schema_version: 1
id: medqa-us-train-007094
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ab11886fb3e4fedd2e47550e9ee0ffbf503cb8b2017ca73599f137c448238892
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "일차성 고알도스테론증"
  - "콘 증후군"
  - "저칼륨혈증"
  - "대사성 알칼리증"
related_disease_slugs:
  - MDQg64K067aE67mEL-yVjOuPhOyKpO2FjOuhoOymnSAoQWxkb3N0ZXJvbmlzbSkubWQ
  - MDUg7Iug7J6lL-yggOy5vOulqO2YiOymnSAoSHlwb2thbGVtaWEpLm1k
  - MDQg64K067aE67mEL-ybkOuwnOyEsSDslYzrj4TsiqTthYzroaDspp0gKFByaW1hcnkgQWxkb3N0ZXJvbmlzbSkubWQ
question_type: diagnosis
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 여자가 두통, 시야 흐림, 피로를 호소하며 외래에 내원했다. 혈압은 171/91 mmHg, 심박수는 84회/분이다. 신체검사는 특이사항이 없다. 검사에서 칼륨은 3.1 mEq/L, 혈청 pH는 7.51이다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 일차성 고알도스테론증(콘 증후군)
B. 갈색세포종
C. 쿠싱 증후군
D. 애디슨병

## 해설

고혈압, 저칼륨혈증, 알칼리혈증은 제시된 선택지 중 원발성 알도스테론증(A)을 가장 시사한다. 실제 산염기 장애의 분류에는 HCO3와 PaCO2를 확인하고, 알도스테론과 레닌을 측정하여 평가한다. 쿠싱증후군 등도 저칼륨혈증을 동반한 고혈압을 일으킬 수 있으므로, 이 소견만으로 모든 대안을 절대적으로 배제하지는 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 고혈압/저K의 원발성aldo A는 지지하되 pH만으로대사성확정·Cushing은절대불가라는단정 한정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007094
