---
type: qbank
schema_version: 1
id: medqa-us-train-009285
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:da62a75217891b8812c8ebbef930b2ba52ca1164f8df5dd71f699d460bba1e13
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "diabetic gastroparesis"
  - "당뇨병성 위마비"
  - "gastroparesis"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: management
difficulty: standard
answer: A
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
---

# MedQA US 임상문제

## 문제

57세 여성이 수개월 동안 점점 심해진 오심, 구토, 복통, 복부팽만으로 내원했다. 식후 가끔 구토하고 구토물에는 소화되지 않은 음식물이 섞여 있다. 식사 중 몇 입만 먹어도 포만감을 느낀다. 고혈압과 제2형 당뇨병 병력이 있으며 초기 검사에서 HbA1c 14% 외에는 이상이 없다. 가장 적절한 초기 치료는 무엇인가?

## 선택지

A. 식이 조절
B. 에리트로마이신
C. 근절개술
D. 수술적 절제

## 해설


정답 A. 조절되지 않는 당뇨병, 조기 포만감과 소화되지 않은 음식 구토는 위마비를 의심하게 한다. 우선 혈당 조절과 함께 작은 입자·저지방 식이를 소량씩 나누어 섭취하도록 한다. 기계적 폐색을 제외하고 객관적 위배출 지연을 확인해야 진단이 확정된다. 지속 증상에서는 약물치료 등을 추가 검토하지만 제시된 식이 조절은 적절한 초기 관리다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009285 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 당뇨병성 위배출 지연 의심 사례의 식이 A를 작은 입자·저지방 식이로 구체화; 증상만으로 확진하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9373497/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009285
