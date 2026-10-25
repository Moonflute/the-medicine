---
type: qbank
schema_version: 1
id: medqa-us-train-010026
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:97107131f88c577a7692d5761a51a163a734f88fc80e9fa524a6483b0afca885
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "군발두통"
  - "삼차자율신경성 두통"
  - "산소요법"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qtbDrsJzrkZDthrUgKENsdXN0ZXIgaGVhZGFjaGUpLm1k
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
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DYXJiYW1hemVwaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PeHljb2RvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 남성이 1시간 동안 지속된 심한 두통으로 내원했다. 지난 일주일 동안 매일 왼쪽 이마에 심한 통증이 3~4차례 발생했다. 각 발작은 약 30~45분 지속되고 그동안 안절부절못하며 서성거린다. 아세트아미노펜을 사용했지만 효과는 미미했다. 금융 분석가로 일하며 직업이 매우 스트레스가 많다고 한다. 4개월 전에도 비슷한 증상이 있었지만 치료받지 않았다. 중대한 질환은 없고 다른 약물은 복용하지 않는다. 7년 동안 매일 담배 한 갑을 피웠다. 불안해 보이며 왼쪽 눈의 결막충혈과 눈물이 있다. 나머지 진찰은 정상이다. 다음 중 이 두통을 급성으로 완화할 가능성이 가장 높은 처치는?

## 선택지

A. 카르바마제핀
B. 옥시코돈
C. 나프록센
D. 산소요법

## 해설

30~45분의 심한 일측 두통이 하루 여러 번 발생하고 안절부절못함, 동측 충혈·눈물이 동반되어 군발두통이다. 급성 치료로 보기 중 100% 산소요법(D)을 비재호흡 마스크와 적절한 유량으로 시행하는 것이 맞다. Carbamazepine은 주로 삼차신경통에 쓰이고 opioid는 군발두통의 일상적 급성 치료로 적합하지 않다. 산소의 효과를 단순한 한 가지 혈관수축 기전으로 확정할 필요는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 군발두통 산소 D 유지. 산소의 작용을 확정적인 단순 혈관수축으로 환원한 해설 교정.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg150/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010026
