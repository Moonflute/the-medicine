---
type: qbank
schema_version: 1
id: medqa-us-train-002479
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ea72cd7491304cbc939d8b13ae4e0af271c9f1582bf03fd7a3b7341677abdfa0
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "circumferential full-thickness burn"
  - "escharotomy"
  - "vascular compromise"
  - "compartment pressure"
  - "compartment syndrome"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-uzteqwlSDqtaztmo0g7Kad7ZuE6rWwIChBYmRvbWluYWwgQ29tcGFydG1lbnQgU3luZHJvbWUpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MZXZldGlyYWNldGFtLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NaWRhem9sYW0ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9QaGVueXRvaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

간질이 발프로산, 페니토인, 레베티라세탐에 반응하지 않는 24세 남성이 뇌 MRI 중 심전도 전극으로 왼쪽 다리 둘레에 심한 열화상을 입었다. 지속적 뇌파 모니터링을 위해 미다졸람을 주입하고 화상 지지치료를 받던 중 왼쪽 발가락이 차갑고 심한 부종이 생겼으며 족배동맥과 후경골동맥 맥박이 만져지지 않는다. 왼쪽 다리 구획의 델타 압력은 25 mmHg이다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 절단
B. 가피절개술
C. 근막절개술
D. 화상센터로 이송

## 해설

환상성 심한 열화상 뒤 차가운 발가락·부종·원위 맥박 소실은 비탄성 가피가 부은 조직을 조여 관류를 방해하는 응급상황을 시사한다. 우선 가피를 충분히 절개하여 외부 조임을 푸는 가피절개술(B)이 필요하다. 델타압은 이완기혈압−구획압이며25 mmHg처럼 낮을수록 관류가 위험하다는 뜻이지 혈압25 이상이 수술 기준이라는 뜻이 아니다. 가피절개 후 관류·구획압을 재평가하고, 깊은 구획압 상승이 지속되거나 근육층 구획증후군이 확인되면 근막절개술이 추가로 필요하다. 이송만 하며 감압을 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 델타압25를 혈압25 이상이라는 임계값으로 잘못 설명한 오류를 수정했다. 환상 화상의 외부 조임 해소 B와 깊은 구획증후군의 근막절개를 구별한다.
- 공식/학회 근거: https://ameriburn.org/wp-content/uploads/2019/08/2018-abls-providermanual.pdf
- 공식/학회 근거: https://www.boa.ac.uk/resource/boast-10-pdf.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002479
