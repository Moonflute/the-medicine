---
type: qbank
schema_version: 1
id: medqa-us-train-001371
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ef5b965f83c06478035d5c5c1788cf67a4dcb3668eedf6fbdb721b6a106d4dd3
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "bleomycin toxicity"
  - "drug-induced interstitial lung disease"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-qwhOyniOyEsSDtj5Dsp4jtmZggKEludGVyc3RpdGlhbCBsdW5nIGRpc2Vhc2UpLm1k
question_type: mechanism
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

45세 여성이 피로와 의도하지 않은 체중 감소로 내원했다. 진찰에서 경부에 단단한 림프절이 만져진다. 림프절 생검에서 호지킨 림프종이 확인되었다. 표준 화학요법을 시작하기로 동의했다. 몇 달 후 3회 치료를 성공적으로 마친 뒤 마른기침과 점점 악화되는 호흡곤란으로 내원했다. 체온은 37°C (98.6°F), 혈압은 110/70 mm Hg, 맥박은 72회/분, 호흡수는 16회/분이다. 실내 공기 산소포화도는 94%이다. 폐활량검사에서 FEV1/FVC 비율은 정상이다. 흉부 CT에서 중간 및 하부 폐야에 양측성 미만성 낭성 공기공간이 보인다. 다음 중 현재 증상의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 약물 유발 간질성 폐질환
B. 폐로 전이된 종양
C. 만성폐쇄성폐질환 발생
D. 면역저하 상태로 인한 세균성 폐렴 발생

## 해설


Hodgkin 림프종 치료 후 마른기침·진행성 호흡곤란과 양측 미만성 폐 변화는 약물 유발 간질성 폐질환(A)을 의심하게 한다. 과거 표준 ABVD에 포함되는 bleomycin은 중요한 원인 약물이지만 이 문항에는 실제 투여 약제가 명시되지 않았으므로 약물력을 확인해야 한다. 정상 FEV1/FVC만으로 제한성 환기장애를 확진하지 않으며 폐용적·DLCO와 감염 등 감별을 평가한다. 원문 CT 소견은 양측성이지 비대칭성이라고 하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001371 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 존재하지 않는 약물명·비대칭 영상이라는 오류를 bleomycin 폐독성의 조건부 설명으로 교체했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.eviq.org.au/clinical-resources/side-effect-and-toxicity-management/respiratory/1792-pulmonary-toxicity-associated-with-anti-cance

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001371
