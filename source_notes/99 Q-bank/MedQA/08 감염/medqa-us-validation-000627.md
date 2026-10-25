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
question_type: management
difficulty: complex
answer: B
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

33세 남성이 관절통과 발진으로 응급실에 왔다. 발열과 농포성 피부병변, 따뜻하고 아픈 오른쪽 무릎의 염증이 있다. 가장 가능성 높은 진단의 적절한 치료는?

## 선택지

A. 세픽심과 아지트로마이신
B. 세프트리악손
C. 세프트리악손과 반코마이신
D. 피페라실린과 타조박탐

## 해설


발열, 농포성 피부 병변과 급성 관절염은 파종 임균감염의 arthritis-dermatitis syndrome을 시사한다. 현행 CDC 권고는 ceftriaxone 1g IM 또는 IV를 24시간마다 투여하는 것으로 선택지 B가 맞다. Chlamydia가 배제되지 않았다면 doxycycline을 추가한다. 입원 평가, 적절한 배양/NAAT와 감수성 검사 및 관절 배액 필요성을 확인한다. Cefixime+azithromycin을 감수성 정보 없이 초기 요법으로 선택하지 않으며 cefixime은 vancomycin과 다른 약이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000627 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 발열·농포성 발진·급성 무릎관절염의 파종 임균감염 초기 권고는 parenteral ceftriaxone B. 원답 cefixime+azithro A는 현재 권고가 아니며 감수성 확인 전 경구 step-down을 초기치료로 삼지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/std/treatment-guidelines/gonorrhea-adults.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000627
