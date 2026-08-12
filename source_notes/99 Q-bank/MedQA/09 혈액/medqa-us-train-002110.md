---
type: qbank
schema_version: 1
id: medqa-us-train-002110
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:052c775c18805244d9a829467ffa7494f7f3f04a8c971b8abf89286145bef3e3
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "immune thrombocytopenia"
  - "immune thrombocytopenic purpura"
  - "antiplatelet IgG"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2KueuwnOyEsSDtmIjshoztjJDqsJDshozshLEg7J6Q67CY7KadIChJZGlvcGF0aGljIFRocm9tYm9jeXRvcGVuaWMgUHVycHVyYSwgSVRQKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

33세 여성이 2주간 지속된 잇몸 출혈로 내원했다. 출혈은 특별한 자극 없이 발생하며 저절로 멎는다. 2개월 전부터 다리에 자주색 피부 병변도 생겼다. 지난주 혈뇨가 한 번 있었고 물설사도 있었으나 둘 다 치료 없이 호전되었다. 경미한 천식이 있다. 남동생은 혈우병을 앓고 있다. 유일한 약물은 페노테롤 흡입기이다. 전반적으로 건강해 보인다. 체온 37.1°C, 맥박 88회/분, 호흡 14회/분, 혈압 122/74 mmHg이다. 심폐검사는 정상이고 복부는 부드럽고 압통이 없으며 장기비대도 없다. 구강인두검사에서 잇몸 출혈이 보인다. 목과 오른쪽 상지에 점상출혈, 양쪽 하지에 자반이 있다. 혈색소 13.3 g/dL, 평균적혈구용적 94 μm³, 백혈구 8,800/mm³, 혈소판 18,000/mm³, 출혈시간 9분, 프로트롬빈시간 14초(INR 0.9), 부분트롬보플라스틴시간 35초이다. 혈당 88 mg/dL, 크레아티닌 0.9 mg/dL이다. 다음 중 이 환자 증상의 가장 가능성 높은 기전은?

## 선택지

A. 폰빌레브란트인자 결핍
B. 시가 유사 독소
C. 소모성 응고병증
D. 혈소판에 대한 IgG 항체

## 해설


혈소판 18,000/µL와 정상 PT/PTT, 출혈시간 연장된 점은 면역성 혈소판 감소증을 시사한다. 이 경우 IgG 항체가 혈소판을 파괴한다는 기전이 가장 흔하다. 따라서 혈소판에 대한 IgG 항체가 정답이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002110
