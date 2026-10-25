---
type: qbank
schema_version: 1
id: medqa-us-train-002243
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6bf8b1f45f7ac220b9eb2a0adbf76848cab605311d135a4ca2fd9708125e6637
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "diabetic ketoacidosis"
  - "total body potassium depletion"
  - "hyperkalemia"
  - "anion gap metabolic acidosis"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
  - MDUg7Iug7J6lL-qzoOy5vOulqO2YiOymnSAoSHlwZXJrYWxlbWlhKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

제1형 당뇨병이 있는 20세 여성이 의식변화로 응급실에 왔다. 친구는 그녀가 늦게까지 시험공부를 하거나 기도 모임에 참석했다고 한다. 이틀 전 요로감염으로 트리메토프림-설파메톡사졸을 처방받기 전까지는 평소와 같았다. 약이 오심과 복부팽만을 유발한다고 호소했다. 혈당 조절을 위해 글라르진과 리스프로를 사용한다. 체온 100.5°F(38.1°C), 혈압 95/55 mmHg, 맥박 130회/분, 호흡 30회/분이다. 동공은 양쪽이 같고 빛에 반응한다. 기본 대사 패널은 나트륨 116 mEq/L, 염소 90 mEq/L, 칼륨 5.0 mEq/L, 중탄산염 2 mEq/L, BUN 50 mg/dL, 포도당 1,200 mg/dL, 크레아티닌 1.5 mg/dL이다. 다음 중 이 환자 상태에 대해 옳은 것은?

## 선택지

A. 저나트륨혈증은 독립적으로 나쁜 예후와 관련된다
B. 고칼륨혈증은 환자의 총 체내 칼륨 저장량과 독립적이다
C. 이 정도의 고혈당은 고삼투성 비케톤성 증후군을 지지한다
D. 이 정도의 저염소혈증은 순수한 음이온차 대사성 산증을 지지한다

## 해설


DKA에서는 인슐린 결핍과 산증으로 세포외로 K⁺가 이동해 혈청 K⁺가 정상 혹은 상승하지만 실제 체내 총 K⁺는 감소한다. 따라서 고칼륨혈증은 총 체내 칼륨 저장량과 독립적이다. 이는 환자의 혈청 K⁺ 5.0 mEq/L가 실제 저칼륨 상태를 감추고 있음을 의미한다. 반면 저나트륨혈증은 DKA에서 수분 재분배와 삼투압성 이뇨에 의해 발생하지만, 독립적인 예후 인자는 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 심한 산증·고혈당에서 혈중K 5여도 총체내K 결핍 가능. B는 혈중 K와 총저장량의 불일치를 묻는 문항.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002243
