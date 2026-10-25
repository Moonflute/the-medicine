---
type: qbank
schema_version: 1
id: medqa-us-test-000151
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:bbe8da6670986874c3b4b469b9b1c2d4b1841b6bdda1ae66669f3f85ba23b658
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "레지오넬라 폐렴"
  - "비정형 폐렴"
  - "저나트륨혈증"
related_disease_slugs:
  - MDgg6rCQ7Je8L-ugiOyngOyYpOuErOudvCAoTGVnaW9uZWxsYSkubWQ
  - MDIg7Zi47Z2h6riwL-u5hOygle2YlSDtj5DroLQgKEF0eXBpY2FsIFBuZXVtb25pYSkubWQ
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
question_type: management
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
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvUmlmYW1waW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
---

# MedQA US 임상문제

## 문제

52세 남성이 6일 전 시작된 마른기침, 호흡곤란, 미열로 응급실에 내원했다. 지난 2일 동안 하루 3회 물 같은 설사를 했다. 약간 창백해 보이고 체온 38.0°C, 맥박 분당 65회, 호흡수 분당 15회, 혈압 140/78 mmHg이다. 양쪽 폐기저부에 미만성 수포음이 들린다. 혈색소 13.8 g/dL, 백혈구 16,000/mm³, 혈소판 150,000/mm³, Na⁺ 131, Cl⁻ 102, K⁺ 4.7, HCO₃⁻ 26 mEq/L, BUN 18 mg/dL, 크레아티닌 1.2 mg/dL이다. 흉부 X선에서 양쪽 폐에 반점상 침윤이 보인다. 다음 중 가장 적절한 약물치료는?

## 선택지

A. 레보플록사신
B. 트리메토프림/설파메톡사졸
C. 아목시실린
D. 리팜핀

## 해설


폐렴에 설사·저나트륨혈증이 동반되어 Legionella를 고려한다. 선지 중 세포내 병원체에 활성이 있는 호흡기 fluoroquinolone인 레보플록사신(A)이 적절하다. 감염된 물의 에어로졸 노출과 연관되며 모든 에어컨이 감염원인 것은 아니다. 병원체 검사가 필요하더라도 적절한 항생제를 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000151 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 폐렴+설사+저나트륨혈증에서 Legionella 치료 선지 A 유지. 가정용 에어컨 일반화와 유일한 1차 약제라는 표현을 제한.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/legionella/hcp/clinical-guidance/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000151
