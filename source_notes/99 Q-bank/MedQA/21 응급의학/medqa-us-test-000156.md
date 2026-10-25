---
type: qbank
schema_version: 1
id: medqa-us-test-000156
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:b28dad7941e707c7d43bc8b6c860f5c748de3b42950babb6229c765edd70dc05
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "합성 카티논"
  - "배스솔트 중독"
  - "교감신경 항진"
question_type: diagnosis
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-q4ieyEsSDspJHrj4Ug7LSd66GgIChHZW5lcmFsIE1hbmFnZW1lbnQgb2YgQWN1dGUgUG9pc29uaW5nKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbWl0cmlwdHlsaW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 남성이 파티에서 3시간 전 시작된 이상 행동으로 구급차를 타고 응급실에 왔다. 주요우울장애와 계절성 알레르기 병력이 있고 아미트립틸린과 디펜히드라민을 복용한다. 질문에 반응하지 않고 ‘정부가 어디서나 나를 따라다닌다’고 반복해서 말한다. 체온 37.9°C, 맥박 분당 115회, 호흡수 분당 24회, 혈압 160/89 mmHg이며 땀을 흘리고 장소와 시간에 대한 지남력이 없다. 양측 동공이 확장되고 전반적 과반사가 있으며 발은 차갑고 모세혈관 재충만은 3초이다. 진찰 후 비명을 지르고 의사를 물려고 한다. 소변 독성검사에서 에틸글루쿠로나이드 양성이다. 다음 중 증상의 가장 가능성 높은 원인은?

## 선택지

A. 단기 정신병적 장애
B. 신경이완제 악성 증후군
C. 항콜린성 독성
D. 합성 카티논 중독

## 해설

급성 초조·편집증, 발한·고혈압·빈맥·동공확대·과다반사는 교감신경흥분성 약물 중독을 지지하며 선지 중 합성 cathinone(D)이 가장 적절하다. Anticholinergic 독성은 보통 건조한 피부·점막이 특징이어서 발한과 대비된다. Ethyl glucuronide(EtG)는 ethanol 노출의 대사 표지자이지 cathinone 대사산물이나 합성 cathinone 확진검사가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. EtG를 카티논 대사산물로 잘못 설명한 핵심 오류를 수정한다. 임상 교감신경 항진에 근거한 D는 유지한다.
- 공식/학회 근거: https://www.niaaa.nih.gov/sites/default/files/SAMHSA-Advisory-Role-of-Biomarkers-in-the-Treatment-of-Alcohol-Use-Disorder-2012.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000156
