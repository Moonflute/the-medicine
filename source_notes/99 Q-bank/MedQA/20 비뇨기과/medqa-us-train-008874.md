---
type: qbank
schema_version: 1
id: medqa-us-train-008874
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7d9be1b4f1dd561ac5a9078d8933fa556648c0dde49170342ed7e81883ecc1b1
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "latex contact urticaria"
  - "allergic contact dermatitis"
  - "cetirizine"
question_type: management
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-ygkey0ie2UvOu2gOyXvCAoQ29udGFjdCBEZXJtYXRpdGlzKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvRmFtb3RpZGluZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0NldGlyaXppbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

18세 남성이 한 시간 동안 지속된 음경 가려운 발진으로 여자친구와 함께 응급실에 내원했다. 여자친구와 처음으로 콘돔을 사용한 성관계를 한 직후 발진이 생겼고 여자친구에게는 증상이 없다. 5일 전 친구 집에 방문했는데 친구는 팔꿈치, 손목, 사타구니, 겨드랑이에 심한 가려움이 있어 침구, 옷, 수건을 뜨거운 물로 세탁하는 치료를 받았다. 2년 전 생일 파티에서 풍선을 불고 난 뒤 입 주변에 가려운 발진이 생긴 적이 있다. 호흡은 편안하고 활력징후는 정상이다. 음경 기저부에서 귀두까지 경계가 뚜렷하고 융기된 홍반성 판이 여러 개 있으며 가벼운 긁힌 자국이 있다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 정맥 아시클로버
B. 경구 크로몰린 나트륨
C. 경구 파모티딘
D. 경구 세티리진

## 해설

콘돔 사용 직후 생긴 융기성 소양성 발진과 이전 풍선 접촉 후 반응은 즉시형 라텍스 접촉두드러기를 지지한다. 이는 보통 지연형 제4형 알레르기접촉피부염과 구별된다. 국소 두드러기만 있고 호흡·순환이 안정적인 이 환자에서는 세티리진(D) 같은 2세대 H1 항히스타민제와 노출 회피가 적절하다. 호흡곤란·저혈압 등 아나필락시스가 생기면 항히스타민제가 아니라 근육주사 에피네프린이 우선이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 즉시형 라텍스 접촉두드러기를 지연형 알레르기접촉피부염과 동일시한 오류 수정. cetirizine D 유지.
- 공식/학회 근거: https://worldallergy.org/component/content/article/contact-dermatitis-fonacier-l-feldman-e?Itemid=101&catid=16
- 공식/학회 근거: https://worldallergy.org/component/content/article/urticaria-kaplan-ap-updated-2019

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008874
