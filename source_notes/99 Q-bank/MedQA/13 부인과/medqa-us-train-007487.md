---
type: qbank
schema_version: 1
id: medqa-us-train-007487
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0fdf1b934b3d5e708ba2d318c2ad2f4f69cc8cac504999c317d295bebb5598db
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "칸디다 외음질염"
  - "위균사"
  - "정상 질 pH"
  - "플루코나졸"
  - "Candidiasis"
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 비임신 여성에게 심한 외음부 홍반·부종과 균열이 있다. 질 분비물 KOH 검사에 가성균사가 보인다. 국소 치료를 원할 때 적절한 방법은?

## 선택지

A. 클로트리마졸 질내 1회
B. 클로트리마졸 등 국소 아졸제 7–14일
C. 질내 메트로니다졸 5일
D. 외음부 국소 스테로이드만 사용

## 해설

심한 외음부 홍반·부종·균열이 있는 칸디다증은 짧은 치료의 반응이 낮다. 비임신 환자에서 7–14일 국소 아졸제가 적절하고, 경구 플루코나졸 반복 투여도 대안이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 비임신 칸디다 질염의 환자 경구 플루코나졸 D 유지. 국소 플루코나졸 표현을 국소 아졸제로 교정.
- https://www.cdc.gov/std/treatment-guidelines/candidiasis.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007487
- https://stiguide.kr/%EC%A7%88%EC%97%BC-vaginitis/
