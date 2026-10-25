---
type: qbank
schema_version: 1
id: medqa-us-validation-000769
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:d2f61415e644a0c0a67ffd6f1e2ab5dc21f6293c041353917bf1722b6ce7638b
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "저마그네슘혈증"
  - "교정되지 않는 저칼륨혈증"
  - "영양결핍"
  - "Hypomagnesemia"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 남성이 알코올 남용과 조현병 병력이 있어 할로페리돌을 투여받던 중 음식이 오염되었다고 믿어 먹지 않았다. 칼륨 포함 정맥수액 후 경구 섭취도 좋아졌으나 K 3.0 mEq/L가 다음날 2.9 mEq/L였고 이후 3일간도 낮게 지속되었다. 가장 적절한 다음 처치는?

## 선택지

A. 근육 내 할로페리돌로 퇴원
B. 칼륨 포함 정맥수액
C. 마그네슘 포함 정맥수액
D. 경구 섭취 증가

## 해설

영양 섭취 저하와 알코올 사용 병력에서 칼륨 보충에도 교정되지 않는 저칼륨혈증은 동반 저마그네슘혈증을 평가하게 한다. 마그네슘 결핍은 신장 칼륨 소실을 지속시켜 보충 반응을 떨어뜨릴 수 있어 제시된 선택지 중 마그네슘 보충이 적절하다. 할로페리돌을 복용한다는 사실만으로 이 전해질 이상이 생겼다고 단정하지 않으며 실제 Mg·신기능·ECG를 확인하고 칼륨과 함께 안전하게 교정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000769

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 교정 안 되는 저칼륨혈증을 할로페리돌 자체에 귀속한 오류 수정. 원문 알코올 병력·섭취 개선에도 지속되는 경과 복원, 마그네슘과 신장 K 소실 기전으로 설명.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정하며 최신 지침 전수 검증을 뜻하지 않음).
- https://ods.od.nih.gov/factsheets/potassium-healthprofessional/
