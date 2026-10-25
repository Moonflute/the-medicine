---
type: qbank
schema_version: 1
id: medqa-us-train-005867
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:94e198178b40f3930f35164afe23620048210e7aa466724e011762330043d36b
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "공황장애"
  - "반복적 공황발작"
  - "인지행동치료"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-qzte2ZqSDsnqXslaAgKFBhbmljIERpc29yZGVyKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbHByYXpvbGFtLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 남성이 흉통으로 응급실에 왔다. 식료품점에서 심한 작열성 흉통과 심계항진 및 오심이 발생해 구급차를 불러 달라고 소리쳤다. 이전에도 이런 일이 있었으며 지난 한 달 동안 서로 다른 장소에서 최소 4회 발생했고 한 번은 집에서도 생겼다. 직장에서 발생해 고용 상태에 영향을 줄까 봐 걱정한다. 특별한 과거력은 없지만 약물 복용을 좋아하지 않고 부작용 때문에 과거에도 순응도가 낮았다. 체온은 98.9°F(37.2°C), 혈압은 133/74 mmHg, 맥박은 분당 110회, 호흡수는 분당 20회, 산소포화도는 99%이다. 떨림과 발한이 있고 산소와 진통제를 달라고 반복해서 요청한다. 심전도에서 빈맥이 보이지만 초기 트로포닌, 소변 약물검사, TSH 및 유리 T4는 정상이다. 다음 중 장기 관리의 일차 치료는 무엇인가?

## 선택지

A. 알프라졸람
B. 부스피론
C. 인지행동치료
D. 플루옥세틴

## 해설

반복되는 예기치 않은 발작과 다음 발작에 대한 걱정은 공황장애를 시사한다. 약물 부작용과 복약에 대한 우려가 있어 제시된 장기 관리 선택지 중 인지행동치료가 적절하다. 원문에 실제 장소 회피 행동이 기술된 것은 아니다. 현재 흉통의 의학적 원인은 별도로 평가해야 하며 초기 트로포닌 한 번이 음성이라는 사실만으로 급성 관상동맥증후군을 배제하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005867

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 약물 부작용·불순응 선호에서 CBT 정답 유지. 원문에 없는 회피행동 제거 및 초기 트로포닌 단회 음성만으로 심장 원인 배제 아님을 명시.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
