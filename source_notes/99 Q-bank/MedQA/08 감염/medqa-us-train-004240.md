---
type: qbank
schema_version: 1
id: medqa-us-train-004240
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9e65cef217c8f94b1e045e5a2e70bbf0bfb5444e078168cdc30d73c5162f458a
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "뎅기열"
  - "뎅기출혈열"
  - "혈장 누출 증후군"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uOheq4sOyXtCAoRGVuZ3VlIEZldmVyKS5tZA
question_type: 임상증례 객관식
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

25세 여자가 토혈과 쇼크로 중환자실에 입원했다. 5일 전 40.0°C의 고열, 안구 뒤 통증, 오심, 근육통이 있었고 며칠 후 고열은 감소했지만 심한 복통과 잇몸 출혈이 생겼다. 중환자실 입원 전 토혈을 한 번 했다. 매년 겨울 라틴아메리카를 여행하며 2주 전 브라질에서 야외 활동을 많이 했다. 안절부절못하고 체온 38.0°C, 맥박 110회/분, 호흡수 33회/분, 혈압 90/70 mmHg이다. 결막 충혈, 차가운 사지, 몸통과 사지의 반구진 발진, 하지의 멍이 있다. 폐기저부에서 호흡음이 없고 타진 시 둔탁하며 복부는 팽만되고 간 변연이 만져지고 간 span이 15cm이며 이동탁음이 있다. 헤모글로빈 16.5 g/dL, 백혈구 3,500/mm³, 호중구 55%, 림프구 30%, 혈소판 90,000/mm³, ALT 75 U/L, AST 70 U/L이다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 치쿤구니야 바이러스 감염
B. 뎅기열
C. 샤가스병
D. 황열

## 해설


해열기에 악화되는 복통·점막출혈·좁은 맥압·혈소판감소와 흉수/복수는 혈장누출을 동반한 중증 dengue B를 시사한다. 황열은 중증 간손상·황달이 상대적으로 두드러지며 이 사례와 덜 부합한다. 간 span은15cm라는 원문 측정치이며 간이 늑골연 아래15cm까지 내려와 있다는 의미가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004240 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 간 span15cm를 늑골연 아래15cm 촉지로 오역한 부분 교정; 혈장누출·쇼크의 중증 dengue B 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004240
