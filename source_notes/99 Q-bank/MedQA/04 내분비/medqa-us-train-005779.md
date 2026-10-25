---
type: qbank
schema_version: 1
id: medqa-us-train-005779
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f0cf4563f676f4c0d4c47620cf7135f8259a38c0646dbe0bb09c77803af4ad4c
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "선천성 갑상선기능저하증"
  - "갑상선 발생 이상"
  - "신생아 황달과 제대탈장"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rCR7IOB7ISgIOq4sOuKpSDsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
question_type: diagnosis
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 26일 된 신생아가 2주 동안 지속된 수유곤란과 무기력으로 내원했다. 이 기간 동안 쉰 울음소리가 있었다. 만삭으로 집에서 태어났고 아직 의사의 진찰을 받지 않았다. 머리둘레는 90백분위수, 키는 50백분위수, 체중은 60백분위수이다. 활력징후는 정상이다. 공막 황달과 큰 혀가 보인다. 복부가 팽창되어 있고 배꼽에 부드럽고 환원되는 돌출 종괴가 있다. 네 사지 모두 근긴장도가 감소되어 있다. 다음 중 이러한 소견의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 갑상선 발생 이상
B. 산성 말타아제 결핍
C. 21번 삼염색체증
D. 11p 염색체 이상

## 해설

신생아의 지속 공막황달·거대혀·쉰울음·제대탈장·저긴장은 선천성 갑상선기능저하를 시사하며 원인 중 갑상선 발생이상 A가 적합하다. 다른 증후군도 일부 소견을 공유할 수 있으므로 실제로 TSH/freeT4 확인이 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 선천갑상선저하 A의 구막 오타와 다른 질환은 전혀 설명 못한다는 단정 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005779
