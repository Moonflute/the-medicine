---
type: qbank
schema_version: 1
id: medqa-us-validation-000292
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:af0d8272854d1f137822c8dad99c56ce55283c9cc769b0dbd563cc93e8673df7
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "중증 납중독"
  - "납성 신경병증"
  - "킬레이트 치료"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-uLpOuwnOyZuOyDgSAoUG9seXRyYXVtYSkubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

8세 남아가 복통과 변비로 진료를 받으러 왔다. 증상은 2개월 전부터 서서히 시작되었고 중등도에서 중증의 쥐어짜는 듯한 전반적 복통이다. 과거력과 복용약은 없다. 1990년대에 지어진 집에서 부모와 살며 여동생은 어린이집에 다닌다. 평소에는 공부를 잘하지만 최근 과민해졌고 숙제에 부주의한 실수가 가득하다. 왼쪽 손목이 처져 있고 잇몸 위에 압통 없는 편평한 청색 선이 보인다. 혈색소 10.3 g/dL, MCV 65, 크레아티닌 1.7 mg/dL, 혈중 납 농도 72 mcg/dL이다. 다음 중 가장 적절한 처치는?

## 선택지

A. 디메르캅토숙신산(숙시머) 킬레이트 치료
B. 디메르카프롤 킬레이트 치료
C. 디메르카프롤과 칼슘 디나트륨 에데테이트(EDTA) 병용 킬레이트 치료
D. 단순 복부 방사선촬영

## 해설

혈중 납 72 μg/dL에 복통·변비, 소구성 빈혈과 손목처짐이 있어 중증 납 노출을 의심한다. ATSDR 지침은 소아에서 70 μg/dL 초과 또는 뇌병증이 있으면 입원하여 디메르카프롤과 칼슘 디나트륨 EDTA(C)를 사용하는 치료를 제시한다. 현재 신기능 저하도 있어 독성학 전문의와 킬레이트제 선택·수분 상태·신장 기능을 면밀히 평가해야 한다. WHO는 고농도 소아에서 반복 신경학적 평가와 개별화된 킬레이트 치료를 강조하므로 단순 수치만으로 모든 조건에서 한 조합이 유일하게 최효과라고 일반화하지 않는다. 노출원 제거와 재노출 방지도 필수이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 혈중 납 72 μg/dL인 소아의 입원·전문 킬레이트 치료 C를 확인하되 혈청 납 표현과 일률적 최효과 단정을 교정하고 신기능 감시를 명시한다.
- 공식/학회 근거: https://wwwn.cdc.gov/tsp/MMG/MMGDetails.aspx?mmgid=1203&toxid=22
- 공식/학회 근거: https://www.ncbi.nlm.nih.gov/books/NBK575289/?report=reader

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000292
