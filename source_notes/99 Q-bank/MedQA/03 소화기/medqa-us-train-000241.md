---
type: qbank
schema_version: 1
id: medqa-us-train-000241
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ae78b7144cecb7b55899ccaa8dcae36c038eb7ea23f5c42061f465d38d8d33f5
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "peptic ulcer disease"
  - "proton pump inhibitor"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC9QVUQubWQ
question_type: management
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-2.5-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

최근 위궤양 진단을 받고 현재 경구용 양성자 펌프 억제제를 하루 두 번 복용 중인 51세 남성이 2시간도 채 되지 않아 갑자기 시작된 급성 복통을 호소하며 응급실을 방문했습니다. 신체 검진 시 복부가 약간 팽만되어 있고, 전반적으로 촉진 시 압통이 있으며, 반발 압통이 양성으로 나타납니다. 다음 선택지 중에서 환자 관리를 위한 다음 최선의 조치는 무엇입니까?

## 선택지

A. 복부 방사선 촬영
B. 응급 복부 및 골반 CT 촬영
C. 헬리코박터 파일로리 검사
D. 혈청 가스트린 수치 측정

## 해설


급성 복통과 복부 반발통은 복막염을 의심하게 하며, 진단을 위해서는 복부·골반 CT가 가장 민감하고 빠른 영상법이다. 따라서 응급 복부 및 골반 CT 촬영이 최선의 조치이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: PUD 뒤 급성 복막자극 소견에서 천공 평가를 위한 응급 CT B가 선택지 중 적합. H.pylori/gastrin 확인 때문에 급성 평가 지연하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000241
