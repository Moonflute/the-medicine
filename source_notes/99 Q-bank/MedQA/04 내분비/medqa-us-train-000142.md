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

심부전이 있는 61세 여성이 의식 저하, 심한 탈수와 혈압 85/55 mmHg로 왔다. 혈당 790 mg/dL, 혈장 삼투질농도 350 mOsm/kg이며 뚜렷한 케톤산증은 없다. 폐울혈을 감시하면서 순환을 회복시킬 첫 처치는?

## 선택지

A. 0.45% 식염수를 한 번에 대량 투여
B. 등장성 결정질을 소량씩 주고 반응을 자주 재평가
C. 5% 포도당액 대량 투여
D. 수액 없이 정맥 인슐린부터 투여

## 해설

고삼투성 고혈당 상태에서 쇼크는 등장성 수액으로 먼저 소생한다. 심부전이 있으면 작은 볼루스 뒤 혈압, 관류와 폐울혈을 반복 평가해 과부하를 피하고 칼륨과 삼투질농도를 추적한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 B/초기 등장성 수액 원칙 유지. 심부전 동반 시 일률적 대량 급속 수액을 피하고 소량 투여·재평가하도록 안전 설명 보완.
- https://diabetesjournals.org/care/article/47/8/1257/156811/Hyperglycemic-Crises-in-Adults-With-Diabetes-A

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000142
- https://doi.org/10.2337/dci24-0032
