---
type: qbank
schema_version: 1
id: medqa-us-train-004447
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:27906a8ab77d97a686ebbad9530a5f4acab0148dd65670c21f53aea1a0dc0586
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "양수과소증"
  - "태아 생물리학적 계수"
  - "전신홍반루푸스 임신"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yWkeyImCDqs7zshozspp0gKE9saWdvaHlkcmFtbmlvcykubWQ
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2hsb3JvcXVpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 39주 초임부의 태아 생물리학적 계수는 4/10이고 양수 최대 수직 깊이는 1 cm다. 태아는 두위이고 현재 심박 추적은 안정적이다. 자궁경부는 유도에 유리하고 질식분만 금기가 없다. 처치는?

## 선택지

A. 태아를 감시하면서 분만을 유도한다
B. 양수과소증만으로 즉시 제왕절개한다
C. 일주일 뒤 생물리학적 계수만 반복한다
D. 태동이 느껴지면 자연 진통까지 기다린다

## 해설

만삭에 생물리학적 계수가 낮고 양수도 적으면 분만을 진행한다. 현재 태아 상태와 경부 조건이 질식분만에 적합하면 지속 감시하에 유도할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 분만 유도의 이유는 조산 예방이 아니라 비정상 BPP·양수과소증임.
- https://www.acog.org/womens-health/faqs/special-tests-for-monitoring-fetal-well-being

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004447
- https://www.sogc.org/common/Uploaded%20files/ACSC/ACSC2024/gui441CPG2309E.pdf
- 미국산부인과학회, 태아 안녕 검사와 비정상 생물리학적 계수: https://www.acog.org/womens-health/faqs/special-tests-for-monitoring-fetal-well-being
