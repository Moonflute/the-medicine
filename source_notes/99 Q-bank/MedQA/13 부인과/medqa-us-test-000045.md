---
type: qbank
schema_version: 1
id: medqa-us-test-000045
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:eee34abe88af3888e9f9c4a23947b0ed26dd6a399af626ab26d0e9bbcebe6db1
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "자궁근종"
  - "과다월경"
  - "구형 자궁"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geq3vOyihSAoVXRlcmluZSBGaWJyb2lkcykubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 G5P4105 여성이 6개월 동안 점점 심해지는 과다월경으로 산부인과에 내원했다. 이제 매 주기 5일 동안 2시간마다 초대형 탐폰 하나를 흠뻑 적실 정도이다. 지난 2개월 동안 월경 사이 출혈이 생기고 주기도 불규칙해졌다. 심한 월경곤란증으로 대부분의 월경 기간에 4시간마다 이부프로펜 400mg이 필요하다. 새로 경도의 성교통과 골반에 ‘묵직한 느낌’이 있고 빈뇨도 있지만 배변 변화는 없다. 비만과 메트포르민으로 치료 중인 제2형 당뇨병 병력이 있다. 마지막 아이는 4년 전 태어났고 자연 질식분만을 5회 했다. 다음 중 가장 가능성 높은 신체검사 소견은?

## 선택지

A. 임신 10주 크기의 구형 자궁
B. 부속기 종괴
C. 임신 14주 크기의 불규칙한 자궁
D. 특이한 신체검사 소견 없음

## 해설

다산부의 심한 월경통, 과다월경과 성교통·골반 압박감은 자궁선근증에 부합하며, 흔한 진찰 소견은 전체적으로 균일하게 커진 구형 자궁(A)이다. 자궁근종은 흔히 불규칙한 결절성 자궁 비대를 보여 C와 구별한다. 본문에 없는 ‘골반 부종’을 근거로 삼지 않는다. 이 문항은 예상 진찰소견을 묻지만, 실제로 45세의 불규칙·월경간 출혈과 비만·당뇨가 있으면 자궁내막 병변도 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 미표시 실제 검수. 구형자궁을 근종으로 연결한 질환오류를 자궁선근증으로 교정. A 유지, 불규칙근종 C와 구별.
- https://www.nhs.uk/conditions/adenomyosis/
- https://www.nice.org.uk/guidance/ng88/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000045
