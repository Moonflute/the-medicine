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
related_disease_slugs:
  - MDgg6rCQ7Je8L-uOheq4sOyXtCAoRGVuZ3VlIEZldmVyKS5tZA
  - MDgg6rCQ7Je8L-unkOudvOumrOyVhCAoTWFsYXJpYSkubWQ
  - MDgg6rCQ7Je8L-q4sOyDney2qS5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-2.5-flash
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
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


열대 지역 모기 노출 후 고열, 안구 뒤 두통, 근육통과 반구진 발진이 나타나 뎅기열 C가 가장 부합한다. 뎅기열은 모기로 전파되는 바이러스 감염이며 열대열 말라리아와는 다른 질환이다. 말라리아에서도 초기 발열이 반드시 주기적이지 않고 단회 말초도말 음성만으로 배제할 수는 없으므로 여행 후 발열의 감별을 계속한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001300 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 뎅기열을 열대열 말라리아처럼 부른 용어 오류와 단회 음성도말로 말라리아 배제하는 과장을 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001300
