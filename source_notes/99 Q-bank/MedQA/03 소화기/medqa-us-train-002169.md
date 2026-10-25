---
type: qbank
schema_version: 1
id: medqa-us-train-002169
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8bd35595573cf2be8c3d9178c59d8589576043353fe2473cd8743dd1dfea879f
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "VIPoma"
  - "WDHA syndrome"
  - "secretory diarrhea"
  - "vasoactive intestinal peptide"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsIDsiqTtirjrprDsooUgKEdhc3RyaW5vbWEpLm1k
question_type: investigation
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
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvR2x1Y2Fnb24ubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

48세 여성이 3개월간의 안면 홍조와 쇠약, 6개월간의 복부 불편감과 팽만, 1년간의 다량의 수양성 설사로 내원했다. 처음에는 설사가 간헐적이었으나 지난 3개월 동안 지속되었다. 하루 배변 횟수는 10~12회이고 금식해도 설사가 지속된다. 혈액이나 점액이 없고 냄새가 나지 않으며 차 색깔의 물 같은 변이라고 한다. 특정 질환으로 진단받은 적이 없고 약물 사용력도 없다. 체온 36.9°C, 맥박 88회/분, 호흡 18회/분, 혈압 110/74 mmHg이다. 피부 긴장도가 감소되어 있고 복부검사에서 특이소견은 없다. 혈청 포도당 216 mg/dL, 나트륨 142 mEq/L, 칼륨 3.1 mEq/L, 염소 100 mEq/L, 칼슘 11.1 mg/dL이다. 24시간 대변량은 4 L이다. 다음 중 정확한 진단을 내리는 데 가장 유용한 검사는?

## 선택지

A. 소변 5-하이드록시인돌아세트산 배설량
B. 혈장 가스트린 수치
C. 혈장 혈관활성 장 펩타이드 수치
D. 혈장 글루카곤 수치

## 해설

금식해도 지속되는 하루 4 L의 수양성 설사, 저칼륨혈증, 홍조와 고혈당은 VIPoma를 시사하므로 혈장 VIP C를 측정한다. VIP는 장 분비를 증가시켜 수양성 설사와 저칼륨혈증을 유발한다. 무수성 설사라는 기존 용어는 잘못이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 금식에도 지속되는 대량 수양성 설사·저K는 VIPoma C. 해설의 무수성 오역을 수정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002169
