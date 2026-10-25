---
type: qbank
schema_version: 1
id: medqa-us-train-009539
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1a46dac34c8f967454226165beb4a56e363e79a557d9f108ce7605493672f67c
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Barrett esophagus"
  - "바렛 식도"
  - "esophageal adenocarcinoma"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkCDshKDslZQgKEFkZW5vY2FyY2lub21hKS5tZA
question_type: prognosis
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
---

# MedQA US 임상문제

## 문제

46세 과체중 남자가 연례 검진을 위해 내원했다. 오메프라졸로 치료 중인 위식도 역류병과 생검으로 확인된 바렛 식도가 있다. 다른 증상은 없고 활력징후는 정상이다. 바렛 식도와 관련된 장기 후유증 때문에 오메프라졸을 계속 복용하라고 권고한다. 가장 가능성 높은 후유증은 무엇인가?

## 선택지

A. 선암
B. 편평세포암
C. 위장관 기질종양
D. MALT 림프종

## 해설


정답 A. Barrett 식도는 식도 편평상피가 장상피화생으로 대체된 상태로 식도 선암 위험 증가와 연관된다. 모든 환자가 암으로 진행하는 것은 아니며 이형성 정도 등에 따라 위험이 다르다. PPI로 증상이 조절되어도 Barrett 관련 위험이 사라졌다고 해석하지 않는다. 이 문항은 식도 선암과의 연관성을 묻는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009539 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Barrett 식도의 장상피화생–식도선암 위험을 설명하고 오역 및 필연적 진행처럼 보이는 표현 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009539
