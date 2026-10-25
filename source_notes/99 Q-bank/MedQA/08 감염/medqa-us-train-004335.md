---
type: qbank
schema_version: 1
id: medqa-us-train-004335
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:326ae9f167024dc53863789126c00e03f24df8543407fef3c2530d6b5bc33156
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "바베시아증"
  - "진드기 매개 감염"
  - "혈관내 용혈"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2YiOq0gCDrgrQg7Jqp7ZiIIChJbnRyYXZhc2N1bGFyIEhlbW9seXNpcykubWQ
  - MDgg6rCQ7Je8L-udvOyehOuzkSAoTHltZSBEaXNlYXNlKS5tZA
question_type: 임상증례 객관식
difficulty: complex
answer: A
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
---

# MedQA US 임상문제

## 문제

뉴저지에 사는 78세 여자가 7월에 5일간 지속된 발열로 응급실에 왔다. 무기력하고 지난 48시간 동안 혈뇨가 있었지만 오심, 구토, 복통은 없다. 중대한 질환 병력과 복용약은 없으며 수년간 도시 밖으로 여행하지 않았다. 체온 40.8°C, 맥박 108회/분, 호흡수 20회/분, 혈압 105/50 mmHg이다. 간비장비대와 하지 점상출혈이 있고 림프절병증은 없다. 헤모글로빈 8 g/dL, 평균적혈구용적 98 μm³, 백혈구 4,200/mm³, 호중구 32%, 림프구 58%, 혈소판 108,000/mm³, 총빌리루빈 5.0 mg/dL(직접 0.7), AST 51, ALT 56, ALP 180, LDH 640 U/L, 합토글로빈 20 mg/dL이다. 소변에서 혈색소, 유로빌리노겐, 단백질이 양성이고 말초혈액도말 사진이 제시되어 있다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 바베시아증
B. 말라리아
C. 페스트
D. 리슈만편모충증

## 해설


여행 없는 뉴저지 거주자의 여름 고열과 용혈성 빈혈·혈소판감소는 Babesia A에 가장 부합한다. 현지 진드기 노출을 기억하지 못해도 가능하며 malaria는 해외/수혈 노출 등 추가 역학이 필요하다. 도말 그림이 누락되어 Maltese cross 등 특정 형태를 실제 보았다고 단정하지 않고 적절한 도말 수기판독/PCR로 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004335 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 뉴저지 여름·용혈/혈소판감소의 Babesia A 가능성 유지; 없는 도말의 형태를 확정하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/babesiosis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004335
