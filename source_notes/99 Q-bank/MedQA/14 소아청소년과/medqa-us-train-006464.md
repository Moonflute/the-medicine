---
type: qbank
schema_version: 1
id: medqa-us-train-006464
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2e7b0964a3406873adf863c2767047f48be4ca75a6719c27749b1c736310197f
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "신생아 소생술"
  - "낮은 아프가 점수"
  - "양압환기"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Zi47Z2h6rOk656AIOymne2bhOq1sCAoUmVzcGlyYXRvcnkgRGlzdHJlc3MgU3luZHJvbWUpLm1k
difficulty: standard
answer: B
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

남아 신생아가 출생 1분 후 평가를 받았다. 임신 38주에 28세 여성(Gravida 3)이 질식분만으로 출산했다. 어머니는 산전 진찰을 간헐적으로 받았고 임신성 당뇨병이 있었다. 양수는 맑았다. 신생아의 맥박은 분당 70회이고 호흡은 불규칙하며 울음은 느리고 약하다. 허벅지를 살짝 꼬집으면 낑낑거리며 반응하고 사지 근육의 긴장도는 중등도이며 약간 굴곡되어 있다. 몸통은 분홍색이고 사지는 파랗다. 따뜻한 수건으로 닦은 후 평평한 보온대 위에 바로 눕혔고, 구상 주사기로 입과 코의 분비물을 흡인했다. 다음 중 처치로 가장 적절한 다음 단계는?

## 선택지

A. 흉부압박과 백-마스크 환기
B. 양압환기 후 5분에 아프가 점수 재평가
C. 비강 캐뉼라로 산소를 보충하고 5분에 아프가 점수 재평가
D. 기관내 삽관과 기계환기

## 해설

초기 보온·건조 후 심박수 70회/분과 불규칙한 약한 호흡이 있어 즉시 양압환기(B)를 시행한다. 심박수와 흉곽 움직임으로 환기 효과를 신속히 재평가하며 5분 Apgar 기록을 기다려 처치를 지연하지 않는다. 비강 산소만으로는 환기를 대체하지 못한다. 효과적 환기 후에도 심박수 60회/분 미만이면 흉부압박을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 정답 B와 다른 비강 산소 C를 지지한 오연결 해설을 PPV로 교체.
- https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/neonatal-resuscitation

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006464
