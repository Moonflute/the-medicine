---
type: qbank
schema_version: 1
id: medqa-us-train-001399
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5042c23127a77bde98be9329024dd6f9a49b33e06a546ef9025dd8affa890870
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "congenital diaphragmatic hernia"
  - "neonatal respiratory distress"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ISg7LKc7ISxIO2aoeqyqeuniSDtg4jsnqUgKENvbmdlbml0YWwgRGlhcGhyYWdtYXRpYyBIZXJuaWEpLm1k
difficulty: complex
answer: D
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

체중 3900 g (8.6 lb)의 신생아가 임신 38주에 27세 여성(임신 3회, 분만 2회)에게서 자연 질식분만으로 태어났다. 출생 직후 스스로 울고 얼굴을 찡그리며 네 팔다리를 움직였다. 다음 5분 동안 청색증, 호흡곤란 및 빈호흡이 발생했다. 100% 산소로 마스크 환기를 시작했으나 분만 10분 후에도 청색증이 지속된다. 체온은 37.2°C (99.0°F), 맥박은 155회/분, 호흡수는 65회/분, 혈압은 90/60 mm Hg이다. 100% 산소 마스크 환기 중 산소포화도는 83%이다. 오른쪽 호흡음은 정상이나 왼쪽은 들리지 않는다. 심음은 오른쪽 중간 쇄골선에서 가장 잘 들리고 복부는 오목해 보인다. 흉부 X선이 아래에 제시되어 있다. 다음 중 가장 적절한 초기 관리 단계는 무엇인가?

## 선택지

A. 체외 생명유지
B. 계면활성제 투여
C. 수술적 교정
D. 기관삽관 및 기계환기

## 해설

좌측 호흡음 소실·우측 심음·오목한 복부와 지속 저산소증은 선천성 횡격막탈장을 시사한다. 기관삽관·조심스러운 기계환기(D)와 위장 감압으로 안정화한다. 마스크환기는 장 팽창을 악화시킬 수 있다. 이미지를 직접 확인하지 않았으므로 특정 X선 소견을 보았다고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 선천성 횡격막탈장 의심의 기도 확보 D 유지. 보지 못한 영상 소견 창작 제거와 마스크환기 위험 명시.
- https://cahs.health.wa.gov.au/~/media/HSPs/CAHS/Documents/Health-Professionals/Neonatology-guidelines/Congenital-Diaphragmatic-Hernia-CDH.pdf?thn=0

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001399
