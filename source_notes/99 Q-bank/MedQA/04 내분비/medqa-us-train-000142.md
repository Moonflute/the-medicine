---
type: qbank
schema_version: 1
id: medqa-us-train-000142
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:78af87fd39272fb380948f3a5ba488eb3c1f4a77be61dd8be740c26aafe6a627
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "congestive heart failure"
  - "type 2 diabetes"
  - "altered mental status"
  - "hyperglycemia"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: management
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-2.5-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9JbnN1bGluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

울혈성 심부전과 제2형 당뇨병을 앓고 있는 61세 여성 환자가 정신 상태 변화로 인해 남편에게 응급실로 이송되었습니다. 남편은 평소 약물 복용 순응을 돕고 있었으나 며칠간 집을 비웠다고 합니다. 신체 검진상 체온 37.2 C, 혈압 85/55, 심박수 130입니다. 혈청 포도당 수치는 500 mg/dL입니다. 다음 중 이 환자 관리의 첫 번째 단계는 무엇입니까?

## 선택지

A. IV ½ NS
B. IV NS
C. IV D5W
D. IV insulin

## 해설

심한 고혈당과 의식저하에 혈압 85/55 mmHg, 빈맥이 동반되어 유효 순환혈액량 감소가 의심된다. 제시된 선택지 중 초기 처치는 B, 정맥 등장성 생리식염수로 순환을 회복시키는 것이다. 반정상식염수나 포도당액은 쇼크 초기 소생의 우선 수액이 아니며, 인슐린 전에 체액 상태와 전해질, 특히 칼륨을 평가해야 한다.

이 환자는 울혈성 심부전이 있으므로 정해진 대량 수액을 일률적으로 빠르게 투여해서는 안 된다. 작은 등장성 결정질 수액 볼루스로 시작하여 혈역학·폐울혈·소변량을 자주 재평가한다. 혈당 500 mg/dL만으로 HHS가 확진되는 것은 아니며 케톤, 산염기 상태와 삼투질농도 등도 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 B/초기 등장성 수액 원칙 유지. 심부전 동반 시 일률적 대량 급속 수액을 피하고 소량 투여·재평가하도록 안전 설명 보완.
- https://diabetesjournals.org/care/article/47/8/1257/156811/Hyperglycemic-Crises-in-Adults-With-Diabetes-A

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000142
