---
type: qbank
schema_version: 1
id: medqa-us-train-001129
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fa940533afec6f3e27ef448a6651c6907c17f951c37c81fa4806d554ab2492ad
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "disseminated gonococcal infection"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yehOq3oCDqsJDsl7wgKEdvbm9jb2NjYWwgSW5mZWN0aW9uKS5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

32세 남성이 오른쪽 무릎, 왼쪽 팔꿈치, 왼쪽 손목의 통증으로 내원하였다. 증상은 약 일주일 전 시작되었으나 특히 손목에 국한되어 나타나고 있다. 환자는 2명의 성 파트너가 있다고 밝혔다. 또한 음경에서 흰색 분비물이 나오고 가려움증과 배뇨 시 통증이 있다고 한다. 체온은 36.4°C, 혈압은 124/84 mmHg, 맥박은 80회/분, 호흡수는 12회/분, 실내 공기에서 산소 포화도는 98%이다. 신체 검진상 왼쪽 손목을 촉진할 때 통증이 있으며, 해당 부위는 발적과 부종이 관찰된다. 이 환자의 관리로 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 관절천자(Arthrocentesis)
B. 아지스로마이신(Azithromycin), 세프트리악손(Ceftriaxone), 반코마이신(Vancomycin)
C. 메토트렉세이트(Methotrexate)
D. MRI

## 해설


요도염 증상과 이동성 관절통 뒤 생긴 붉고 부은 손목은 파종 임균감염을 포함한 감염성 관절염을 의심하게 한다. 현재 쇼크가 없는 환자에서는 항생제 전 관절천자로 세포수, Gram 염색·배양과 결정 검사를 시행하는 A가 적절하다. 임균은 관절액에서 검출되지 않을 수도 있어 요도 등 노출 부위 NAAT·배양과 혈액배양도 함께 고려한다. 검사를 이유로 필요한 항생제를 지연하거나 methotrexate를 시작하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001129 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 안정된 급성 관절염에서 관절천자 우선은 적절하나 임균 관절액 배양이 항상 양성·필수 확진이라는 과장을 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9901514/
- https://www.cdc.gov/std/treatment-guidelines/gonorrhea-adults.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001129
