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
answer: D
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

25세 미혼 여자가 비정상 질 분비물과 질 가려움으로 내원했다. 과거력은 특이사항이 없고 복용 약물도 없다. 남성 파트너 3명과 성생활을 하며 콘돔은 사용하지 않는다. 골반검사에서 걸쭉하고 냄새가 없는 흰색 분비물이 보이고 외음부에 현저한 홍반과 부종이 있다. 질 pH는 정상이다. 현미경에서 위균사와 백혈구가 보인다. 다음 중 가장 적절한 치료 계획은 무엇인가?

## 선택지

A. 환자와 파트너에게 경구 클린다마이신
B. 환자에게 경구 클린다마이신
C. 환자와 파트너에게 경구 플루코나졸
D. 환자에게 경구 플루코나졸

## 해설

정상 pH, 두꺼운 무취 분비물과 위균사는 칸디다 외음질염이다. 비임신 환자는 경구 플루코나졸(D) 또는 국소 아졸제로 치료하며 증상 없는 파트너는 통상 치료하지 않는다. 심한 홍반·부종이면 더 긴 국소 치료 또는 반복 경구 투여가 필요할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 비임신 칸디다 질염의 환자 경구 플루코나졸 D 유지. 국소 플루코나졸 표현을 국소 아졸제로 교정.
- https://www.cdc.gov/std/treatment-guidelines/candidiasis.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007487
