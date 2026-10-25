---
type: qbank
schema_version: 1
id: medqa-us-test-000826
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:b9f1a4895c814c9dd883c39aa8335259b75c6003a0a60cc2da06318c0f289243
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "유방 섬유선종"
  - "섬유선종"
  - "청소년 유방 종괴"
related_disease_slugs:
  - MTMg67aA7J246rO8L-yErOycoOyEoOyihSAoRmlicm9hZGVub21hKS5tZA
question_type: prognosis
difficulty: complex
answer: C
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

16세 여성이 2개월 전부터 왼쪽 유방에서 둥근 덩어리를 만져 진료를 받으러 왔다. 덩어리는 지난 두 번의 월경 직전에 커지고 압통이 생겼으며, 그 외에는 아프지 않았다. 유두 분비물이나 피부 변화는 없었다. 과거력은 없지만 72세인 외할머니가 최근 침윤성 유관암 진단을 받았다. 환자는 고등학교에서 소프트볼을 열심히 하며 음주, 흡연 및 불법 약물 사용을 부인한다. 진찰에서 양쪽 유방은 대칭이고 정상으로 보였다. 왼쪽 유방 외상부에 지름 3 cm의 둥글고 잘 움직이는 종괴가 만져졌으며 깊게 촉진할 때 약간 압통이 있었다. 양쪽 겨드랑이 림프절병증은 없었다. 이 환자 상태에서 가장 가능성 높은 경과는?

## 선택지

A. 경구피임약을 시작하면 종괴의 크기가 감소한다
B. 이 종괴 때문에 향후 유방암 위험이 약간 증가한다
C. 시간이 지나면서 종괴의 크기가 감소하거나 사라질 가능성이 가장 높다
D. 종괴가 빠르게 자라 5 cm를 초과하면 방사선치료와 화학요법이 필요하다

## 해설


청소년의 둥글고 가동성인 유방 종괴는 섬유선종을 시사한다. 경과 관찰 중 크기가 감소하거나 사라질 수 있어 선지 중 C가 가장 타당하다. 모든 병변의 소실을 보장하는 것은 아니며 성장·증상·영상 소견에 따라 추가 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000826 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 청소년 가동성 유방종괴의 fibroadenoma와 C 유지. 모두 대부분 자연 소실한다는 과도한 빈도 표현을 퇴축 가능성으로 제한.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/breast/childhood

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000826
