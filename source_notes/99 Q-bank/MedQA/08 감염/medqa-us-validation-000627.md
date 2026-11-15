---
type: qbank
schema_version: 1
id: medqa-us-validation-000627
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:8cfe549778b052a9ec8c077db8d65efaf4bfa611b8248ae8ca0512cf8c735150
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "파종성 임균 감염"
  - "임균성 관절염"
  - "피부염-관절염 증후군"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yehOq3oCDqsJDsl7wgKEdvbm9jb2NjYWwgSW5mZWN0aW9uKS5tZA
question_type: diagnosis
difficulty: complex
answer: A
original_answer: A
answer_change_reason: "농포성 피부 병변과 급성 관절염을 동반한 파종 임균감염은 CDC에서 ceftriaxone 1g IM/IV q24h를 권고한다. Cefixime+azithromycin을 감수성 미확인 초기요법으로 쓰는 원답 A를 현행 권고에 맞는 B로 교정."
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmaXhpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

26세 환자가 발열, 여러 관절을 옮겨 다니는 통증과 손목 건초염으로 내원했다. 손과 발에 작은 농포가 몇 개 있고 배뇨통이나 생식기 분비물은 없다. 가장 가능성 높은 진단은?

## 선택지

A. 파종성 임균 감염
B. 반응성 관절염
C. 파르보바이러스 B19 관절염
D. 피부 증상을 동반한 통풍

## 해설


건초염·이동성 다발관절통·소수 농포는 파종성 임균 감염의 관절염-피부염 양상에 부합한다. 비뇨생식기 증상이 없어도 감염 가능성이 있으므로 노출 부위와 침범 부위에서 적절한 검사를 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000627 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 발열·농포성 발진·급성 무릎관절염의 파종 임균감염 초기 권고는 parenteral ceftriaxone B. 원답 cefixime+azithro A는 현재 권고가 아니며 감수성 확인 전 경구 step-down을 초기치료로 삼지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/std/treatment-guidelines/gonorrhea-adults.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000627
