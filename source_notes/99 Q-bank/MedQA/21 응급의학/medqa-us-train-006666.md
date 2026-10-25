---
type: qbank
schema_version: 1
id: medqa-us-train-006666
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:04abe250cf58bf2b5b38aebc05acf333d7aa4d35cd37852d3666b87d2b6a0cb0
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "연가양 흉곽"
  - "다발성 늑골 골절"
  - "외상성 호흡부전"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-2dieu2gCDsmbjsg4EubWQ
difficulty: complex
answer: A
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

27세 남성이 교통사고 45분 후 초조한 상태로 응급실에 내원했다. 오른쪽 위팔이 아파 왼팔로 감싸고 있다. 체온은 36.7°C(98°F), 맥박은 분당 135회, 호흡수는 분당 25회, 혈압은 145/90 mm Hg이다. 호흡은 얕고 100% 산소를 비재호흡 마스크로 투여해도 산소포화도는 83%이다. 혼돈되어 사람만 인지한다. 오른쪽 앞가슴벽에 여러 멍이 있고 동공은 대칭적으로 빛에 반응한다. 들이쉴 때 오른쪽 흉벽이 안쪽으로 움직이는 역설적 움직임이 보이고 오른쪽 앞쪽 갈비뼈를 누르면 통증과 염발음이 있다. 그 외 진찰은 정상이다. 흉부 X선 사진이 제시되어 있고 큰 구경 정맥로 두 개를 확보했다. 수액 소생과 진통 후 처치로 가장 적절한 다음 단계는?

## 선택지

A. 양압환기를 동반한 기관내 삽관
B. 침상 개흉술
C. 흉부 CT
D. 오른쪽 제3~6번 갈비뼈 외과적 고정

## 해설

역설적 흉벽 운동은 동요흉을 시사하며 폐좌상이 동반될 수 있다. 이 환자는 고농도 산소를 투여해도 산소포화도가 83%이고 혼돈이 있어 심한 호흡부전 상태이므로 기관삽관과 양압환기(A)가 우선이다. 동요흉은 흉벽 안정성 상실과 폐 손상 때문에 호흡을 방해하지만, 반드시 기도 폐쇄를 의미하지는 않는다. 모든 동요흉 환자에게 예방적으로 삽관하는 것이 아니라 실제 호흡·의식 상태에 따라 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 동요흉이 곧 기도 폐쇄라는 해설을 교정한다. 고농도 산소에도 심한 저산소혈증과 의식 변화가 있어 A가 필요하다는 근거를 명확히 한다.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC12522690/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006666
