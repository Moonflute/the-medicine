---
type: qbank
schema_version: 1
id: medqa-us-train-001268
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2d6c96bb5060f30377adcf73fe06eaed64112925cad1864247b1ab019495f492
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "isoniazid toxicity"
  - "sideroblastic anemia"
  - "pyridoxine deficiency"
related_disease_slugs:
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
---

# MedQA US 임상문제

## 문제

32세 남성이 잠복결핵 추적 진료를 위해 내원했다. 환자는 의료종사자이며 PPD 피부반응검사에서 12 mm 경결이 확인되어 3개월 전부터 이소니아지드를 복용하고 있다. 4년 전부터 채식주의자였고, 가족 중에 ‘간질환’ 병력이 있다. 양쪽 하지 말단에서 가벼운 핀 찌르기 감각 저하가 있다. 간비장비대는 없다. 검사 결과는 헤모글로빈 9.6 g/dL, 헤마토크릿 34%, 백혈구 9,200/mm3(감별계산 정상), 혈소판 270,000/mm3, 평균 적혈구 용적(MCV) 77 µm3, AST 92, ALT 84, 페리틴 302(정상 15–200), 총 철 273(정상 50–170), 총 철결합능 150(정상 250–370)이다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 코발라민 투여
B. 피리독신 투여
C. 연속 사혈
D. 이소니아지드 중단

## 해설


Isoniazid는 pyridoxine 대사를 방해하여 말초신경병증과 드물게 철적모구빈혈을 일으킬 수 있다. B6 의존 ALA synthase를 통한 heme 합성이 저하되면 소구성 빈혈에 철·ferritin 상승이 동반될 수 있다. 이 환자는 MCV77 fL이므로 거대적아구성 빈혈이 아니다. 선택지 중 pyridoxine(B) 보충이 적절하며 간효소 변화와 다른 원인도 추적한다. 무증상 경도 간효소 상승만으로 isoniazid를 일률 중단하지 않으며 증상·상승 정도에 따른 약물성 간손상 기준을 적용한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001268 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Isoniazid/B6 결핍을 거대적아구성 빈혈이라 한 오류를 철적모구성 소구성 빈혈로 교정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f0b46d1d-2300-457d-a7bd-a88a3f8d2235
- https://www.idsociety.org/practice-guideline/treatment-of-drug-susceptible-tb/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001268
