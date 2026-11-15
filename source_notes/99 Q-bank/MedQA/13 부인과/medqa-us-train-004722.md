---
type: qbank
schema_version: 1
id: medqa-us-train-004722
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f6f10cd0ca68593a2a8a909a4b39bf6af33ccbfff9f44a41175ad7aa714fe62a
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "외음질 칸디다증"
  - "임신 중 칸디다 질염"
  - "클로트리마졸"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-y5uOuUlOuLpCAoVnVsdm92YWdpbmFsIENhbmRpZGlhc2lzKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 20주 여성이 심한 외음부 가려움과 덩어리진 흰 분비물로 내원했다. KOH 검사에서 효모와 가성균사가 확인된다. 치료는?

## 선택지

A. 플루코나졸 경구 1회
B. 클로트리마졸 질내 7일
C. 붕산 질내 14일
D. 메트로니다졸 경구 7일

## 해설

임신 중 외음질 칸디다증은 국소 아졸계 약을 7일 사용한다. 경구 플루코나졸이나 붕산을 임신 중 1차 치료로 쓰지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 임신부 칸디다 질염의 국소 클로트리마졸 D 유지. 1회 투여 오류와 확인하지 않은 현미경 소견 창작을 제거.
- https://www.cdc.gov/std/treatment-guidelines/candidiasis.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004722
