---
type: qbank
schema_version: 1
id: medqa-us-train-000476
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9acac861efaa36eeb3a6a2f7f7e001fe43daa77e417165e56b3b4b5917608f8b
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "coarctation of the aorta"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64yA64-Z66elIOy2leywqSAoQ29hcmN0YXRpb24gb2YgdGhlIEFvcnRhKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

2세 남아가 지난 2개월간 걷기 힘들어하고 발이 차갑다는 이유로 부모와 함께 내원했다. 부모는 아이가 걸을 때 금방 지친다고 보고했다. 환아는 임신 37주에 태어났으며 모든 발달 단계를 정상적으로 거쳤다. 심각한 질환에 대한 개인력이나 가족력은 없다. 키는 50백분위수, 체중은 40백분위수이다. 체온은 36.9°C, 맥박은 분당 119회, 호흡은 분당 32회, 혈압은 135/85 mm Hg이다. 좌측 척추옆 부위(left paravertebral region)에서 2/6 등급의 수축기 잡음이 들린다. 발등 맥박(pedal pulses)은 촉지되지 않는다. 이 환자에 대한 추가 평가에서 가장 나타날 가능성이 높은 소견은 무엇인가?

## 선택지

A. 늑골 패임(Rib notching)
B. 하지의 낮은 조직 산소화
C. 양팔 간의 혈압 차이
D. 우심실 유출로 폐쇄

## 해설

정답은 B이다. 상지 고혈압·약한 하지맥/차가운 발과 등 부위 잡음은 대동맥축착에 의한 하체 관류 저하를 시사한다. 혈류량 감소로 하지 조직의 산소 전달이 떨어질 수 있다. 양팔 혈압 차이가 없다는 결과는 본문에 없으며 이를 확인했다고 설명하지 않는다. 늑골 패임은 측부혈관이 발달하는 더 큰 연령에서 두드러진다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 제시되지 않은 양팔 혈압 동일 소견을 삭제하고 조직 산소화 저하를 관류 감소로 설명.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000476
