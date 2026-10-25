---
type: qbank
schema_version: 1
id: medqa-us-train-002069
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ed04f7f937443ac9b359e140b6acbfabe2fd93b2becc676e8d405c8cf558e419
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "infantile hypertrophic pyloric stenosis"
  - "gastric outlet obstruction"
  - "breastfeeding"
question_type: prevention
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE64yAIOuCoOusuCDtmJHssKnspp0gKEh5cGVydHJvcGhpYyBQeWxvcmljIFN0ZW5vc2lzKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 4주 남아가 1주 전부터 수유를 끝까지 하지 못하고 수유 직후 보채는 증상으로 내원했다. 대부분의 수유 후 시큼한 냄새가 나는 우유를 토하기도 했다. 임신과 분만은 순조로웠으나 6주 전 산모의 질 도말검사에서 B군 연쇄상구균이 양성이어서 산모에게 정맥 페니실린을 한 차례 투여했다. 아이는 키 70백분위수, 체중 50백분위수이다. 체온 36.6°C, 맥박 180회/분, 호흡 30회/분, 혈압 85/55 mmHg이며 기면 상태이다. 신체검사에서 대천문이 함몰되어 있고 강한 포유반사가 보인다. 복부는 부드럽고 심와부에 1.5 cm 크기의 압통 없는 종괴가 만져진다. 생식기 검사에서 음낭의 색소침착은 정상이고, 당겨서 음낭 안으로 넣을 수 있는 견축성 고환이 있으며, 음경 모양은 정상이고 항문은 열려 있다. 다음 중 이 아이가 해당 질환에 걸릴 위험을 줄였을 가능성이 가장 큰 중재는?

## 선택지

A. 대두분유를 먹인다
B. 모유만 먹인다
C. 산모에게 페니실린을 투여하지 않는다
D. 영아에게 글루코코르티코이드를 치료제로 투여한다

## 해설

비담즙성 구토·수유 후 배고픔·올리브 종괴는 비후성 유문협착을 시사한다. 관찰 연구에서 병수유보다 완전 모유수유가 낮은 위험과 연관되어 보기 중 B가 맞다. 모유수유가 모든 경우를 예방한다거나 위장운동 기전이 확정되었다고 단정하지 않는다. 분만 중 GBS 예방 페니실린을 생략할 근거는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 유문협착의 모유수유 B 위험감소 연관 유지. 잘못된 질환명과 입증된 기전·예방 보장 단정 교정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC3457615/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002069
