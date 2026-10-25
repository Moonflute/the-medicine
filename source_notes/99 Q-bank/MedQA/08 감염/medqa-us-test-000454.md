---
type: qbank
schema_version: 1
id: medqa-us-test-000454
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:c91bd86e585a3e6684abcc07b4ba22c2df204c26a210f770cd50bada9b5c3450
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "감염성 심내막염"
  - "황색포도상구균"
  - "주사 약물 사용"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
question_type: diagnosis
difficulty: complex
answer: B
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
---

# MedQA US 임상문제

## 문제

34세 남성이 4일 동안 두통, 발열, 오한, 기침, 호흡곤란, 흉통으로 응급실에 왔다. 하루에 담배 2갑과 맥주 2~3병을 마신다. 계절성 알레르기 외에는 병력이 없고 가끔 디펜히드라민을 복용한다. 체온 40.0°C(104.0°F), 혈압 140/80 mmHg, 심박수 98회/분, 호흡 28회/분이었다. 마르고 위생 상태가 좋지 않아 보였으며 양쪽 팔오금 부위에 작은 흉터가 보였다. 양측 폐에서 수포음이 들렸고 심장 청진에서 왼쪽 겨드랑이로 방사되는 수축기 심잡음이 있었다. 경구개와 손바닥에 점상출혈이 보였다. 흉부 X선과 혈액배양을 시행할 예정이다. 증상의 가장 가능성 높은 원인균은?

## 선택지

A. 비리단스 연쇄상구균
B. 황색포도상구균
C. Aspergillus fumigatus
D. 표피포도상구균

## 해설


급성 고열, 새 심잡음과 점상출혈은 감염성 심내막염을 시사하고 양팔의 주사 흔적은 주사약물 사용 가능성을 뒷받침한다. 선지 중 S. aureus(B)가 가장 타당하다. 폐렴구균성 폐렴·폐농양이나 양성 혈액배양 결과는 아직 제시되지 않았다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000454 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 급성 발열·심잡음·점상출혈과 주사 흔적으로 S. aureus IE B 지지. 미제시 폐렴구균 폐렴·폐농양을 생성한 해설 삭제, decubitus arm을 팔오금 맥락으로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://academic.oup.com/eurheartj/article/44/39/3948/7243107

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000454
