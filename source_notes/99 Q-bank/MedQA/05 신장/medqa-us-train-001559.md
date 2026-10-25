---
type: qbank
schema_version: 1
id: medqa-us-train-001559
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fbe5c261939a918a7b5c6add9b6ddeab5c631a62bad7c933623b990484d6c967
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "SIADH"
  - "carbamazepine-induced hyponatremia"
  - "euvolemic hyponatremia"
related_disease_slugs:
  - MDQg64K067aE67mEL-2VreydtOuHqO2YuOultOuqrCDrtoDsoIHsoIgg67aE67mEIOymne2bhOq1sCAoU0lBREgpIChTeW5kcm9tZSBvZiBJbmFwcHJvcHJpYXRlIEFudGlkaXVyZXRpYyBIb3Jtb25lIFNlY3JldGlvbiAoU0lBREgpKS5tZA
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmFsc2FydGFuLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9EZXNtb3ByZXNzaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: A
answer_change_reason: "원정답 A는 의식소실 및 지속 졸림/혼돈을 동반한 중증 증상성 저나트륨혈증의 초기 응급치료를 놓친다. ESE/ESICM/ERA 지침과 Society for Endocrinology 응급 지침에 따라 모니터링하 정량 3% 고장성 식염수 볼루스에 해당하는 B를 선택한다. 급속 정상화/과교정을 의미하지 않는다."
---

# MedQA US 임상문제

## 문제

65세 여성이 집에서 의식 없이 누워 있는 채 남편에게 발견되어 응급실로 왔다. 일주일 동안 쇠약과 혼란이 점점 심해졌다고 한다. 고혈압, 전신홍반루푸스 및 삼차신경통 병력이 있으며 메토프롤롤, 발사르탄, 프레드니손 및 카바마제핀을 복용한다. 내원 시 혈압은 130/70 mm Hg, 맥박 100회/분, 호흡수 17회/분, 체온 36.5°C (97.7°F)였다. 이송 중 의식을 회복했지만 졸리고 지남력이 떨어져 있다. 검사에서 혈당 110 mg/dL, Na+ 120 mEq/L, K+ 3.5 mEq/L, Cl− 107 mEq/L, 크레아티닌 0.8 mg/dL, 혈청 삼투질농도 250 mOsm/kg, 소변 Na+ 70 mEq/L, 소변 삼투질농도 105 mOsm/kg이다. 다음 중 상태의 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 수분 제한
B. 고장성 식염수로 신속한 소생
C. 데스모프레신
D. 톨밥탄

## 해설

저삼투압성 저나트륨혈증(Na 120 mEq/L, 혈청 삼투질농도 250 mOsm/kg)에 의식소실 병력과 지속되는 졸림·지남력 저하가 동반되어 중증 증상성 저나트륨혈증을 우선 다뤄야 한다. 보기 중 B, 고장성 식염수의 신속한 초기 투여가 적절하다. 수분 제한은 안정된 SIADH 등의 후속 치료일 수 있으나 이 환자의 응급 신경학적 증상에 대한 단독 초기 치료로는 부족하다.

선지 B는 모니터링하면서 정량의 3% 식염수 소량 볼루스로 초기 증상을 완화한다는 의미이지, 혈청 나트륨을 급속히 정상화하거나 대량으로 주입한다는 뜻이 아니다. 혈청 나트륨과 소변량을 반복 확인하고 지침의 교정 상한을 지켜 삼투성 탈수초화를 예방한다. 카바마제핀 등 원인 약물과 다른 원인을 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 의식소실 후 지속되는 졸림·지남력 저하와 Na 120의 중증 증상성 저삼투압성 저나트륨혈증에서 수분 제한 단독은 초기 처치로 부적절. 공식 응급 지침에 따라 A에서 B로 변경하고 과도한 급속 교정 금지 명시.
- https://academic.oup.com/ejendo/article/170/3/G1/6668028
- https://pmc.ncbi.nlm.nih.gov/articles/PMC5314809/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001559
