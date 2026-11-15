---
type: qbank
schema_version: 1
id: medqa-us-train-000499
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:45618aaf71fbead99c362045adbfef2ed3378f3bcca1523d4c5fe6d3216548c5
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "stress urinary incontinence"
  - "cystocele"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-yalOyLpOq4iCAoVXJpbmFyeSBJbmNvbnRpbmVuY2UpLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

61세 여성이 기침과 운동 때만 소변이 샌다. 절박뇨·배뇨곤란·과거 요실금 수술·골반장기탈출은 없고, 잔뇨는 정상이다. 방광을 채운 뒤 기침 시 누출이 확인됐다. 수술 상담 전 요역동학검사에 관해 맞는 설명은?

## 선택지

A. 수술을 고려할 때 언제나 처음부터 요역동학검사를 한다
B. 병력과 진찰에서 명확한 단순 복압성 요실금이면 다채널 검사를 일률적으로 하지 않는다
C. 정상 잔뇨라면 기침 시 누출은 진단에 쓸 수 없다
D. 모든 환자에서 방광내시경으로 먼저 진단을 확정한다

## 해설

진찰에서 복압성 누출이 재현되고 배뇨장애·현저한 탈출·이전 수술 등 복잡 요인이 없다면 수술 전 다채널 요역동학검사를 일률적으로 하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Q-tip양성을질벽손상검사처럼서술한오류교정. 요도과이동성과복압성요실금D.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000499
- https://www.nice.org.uk/guidance/ng123/chapter/Recommendations
