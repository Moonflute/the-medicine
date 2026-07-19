---
type: qbank
schema_version: 1
id: medqa-us-train-001300
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:700562e5b886073c0c0ee7cb8bafd6ae2170d550199ab0414b19a65c6bd88614
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Babesiosis"
  - "Chagas disease"
  - "Dengue fever"
  - "Malaria"
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-2.5-flash
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

13세 남아가 3일 동안 심한 발열과 두통으로 병원에 내원했습니다. 통증은 지속적이며 주로 눈 뒤에 있습니다. 그는 1일 동안 근육통, 메스꺼움, 구토, 발진을 겪었습니다. 지난주 겨울 방학 동안 가족과 함께 브라질, 파나마, 페루를 포함한 여러 나라로 여행을 다녀왔습니다. 그들은 곤충 물림에 대한 보호 없이 여러 저녁을 야외에서 보냈습니다. 애완동물과의 접촉, 심각한 질병, 약물 사용 이력은 없습니다. 체온은 40.0℃(104.0℉)이고, 맥박은 110회/분이며, 호흡수는 18회/분이고, 혈압은 110/60 mmHg입니다. 몸통과 사지에 반점구진성 발진이 보입니다. 양쪽 목에서 여러 개의 압통성 림프절이 촉지됩니다. 말초 혈액 도말 검사에서 유기체는 보이지 않습니다. 다음 중 이 환자의 증상에 가장 가능성이 높은 원인은 무엇입니까?

## 선택지

A. 바베시아증
B. 샤가스병
C. 뎅기열
D. 말라리아

## 해설


열, 두통, 근육통, 발진, 림프절통증이 동반된 급성 열대열(뎅기열)은 모기에 물린 후 3-7일 내에 나타난다. 말라리아는 주기적 열이 특징이며 말초 혈액 도말에 원충이 보인다. 따라서 가장 가능성 높은 원인은 뎅기열이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001300
