---
type: qbank
schema_version: 1
id: medqa-us-train-003276
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6d818ad95543b5274c62cfe48b7267ef2e7f4632e6ee38d23a278c1c02a4eb25
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "biliary colic"
  - "cholelithiasis"
  - "female forty fertile fat"
  - "gallstone risk factors"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_sk7jqsJzrj4wgKEdhbGxzdG9uZSkubWQ
question_type: risk_factor
difficulty: complex
answer: B
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

환자가 저녁 식사 중 시작된 발작성 복통으로 응급실에 왔다. 통증은 어깨로 방사되고 체온 36.7°C, 혈압 120/80 mmHg, 맥박 80회/분, 호흡수 13회/분, 산소포화도 98%이다. 검사에서 혈액검사는 정상이며 복부 진찰에서 오른쪽 상복부 압통이 가장 두드러진다. 다음 중 가장 가능성 높은 환자의 인구학적 특징은?

## 선택지

A. 요소호기검사 양성인 중년 남성
B. 과체중인 중년 여성으로 자녀가 있음
C. 장 수술 병력이 있는 중년 환자
D. 통증 없는 황달이 있는 고령 흡연자

## 해설

식후 RUQ 통증이 어깨로 방사되고 발열·염증검사 이상이 없는 양상은 담석산통을 시사한다. 선택지 중 과체중인 중년의 출산 여성 B가 담석 위험인자를 가장 잘 모은 인구학적 집단이다. 질문은 제시되지 않은 인구학적 특성을 추정하게 하는 것이지 본문에서 이 환자가 실제 중년 비만 여성으로 확인되었다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 환자의 성별·연령을 이미 확인한 사실처럼 한 해설을 수정; 담석산통의 위험군을 묻는 B.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003276
