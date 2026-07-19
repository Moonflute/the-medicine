---
type: qbank
schema_version: 1
id: medqa-us-train-001146
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:84fbdecf78a99f9bd97eb56ca5ffdb925ed91f165bbb06b7dbdb7931778a977c
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "Boerhaave syndrome"
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

17세 여아가 심한 흉골하 흉통으로 응급실에 내원하였다. 통증은 과식 후 스스로 유도한 구토 직후 갑자기 시작되었다. 환자의 부모에 따르면 환자는 음식 섭취를 매우 제한하며 식사 후 자주 구토를 유도한다고 한다. 활력 징후는 혈압 100/60 mm Hg, 심박수 98회/분, 호흡수 14회/분, 체온 37.9℃이다. 환자는 창백하고 심한 고통을 호소하고 있다. 폐 청진상 깨끗하다. 심장 검진에서 심장 박동과 동기화된, 으드득거리는 거친 소리가 앞가슴 부위(precordium)에서 청진된다. 복부는 부드럽고 압통은 없다. 이 환자에서 진단을 확진할 가능성이 가장 높은 검사는 무엇인가?

## 선택지

A. 상부 위장관 내시경(Upper endoscopy)
B. 심전도(ECG)
C. 조영제 식도 조영술(Contrast esophagram)
D. D-이량체(D-dimer) 측정

## 해설


구토 후 흉통·청진에서 으드득거리는 소리는 식도 파열(Boerhaave 증후군)과 일치하며, 조영제 식도 조영술이 파열 부위를 가장 정확히 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001146
