---
type: qbank
schema_version: 1
id: medqa-us-train-005562
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:81f75081d4f480dbabfb7112e94f10618c04683b34bea67ac32c7ffbc3ba8095
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "전환장애"
  - "기능성 신경학적 증상"
  - "심리적 스트레스"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yghO2ZmCDsnqXslaAgKENvbnZlcnNpb24gRGlzb3JkZXIpLm1k
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
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 여자가 남자친구와 헤어진 뒤 갑자기 발생하는 요실금과 시야 흐림, 두통, 대변실금이 반복된다고 호소한다. 시야 흐림·맹점과 두통은 수년간 반복되었고, 환자는 다툼 탓이라 생각한다. 남자친구의 반복적인 언어적·간헐적 신체적 학대도 보고했다. 감정 상태 때문에 신체검사는 아직 시행하지 않았다. 다음 중 가장 적절한 처치는?

## 선택지

A. 두부 MRI
B. 퇴행 증상에 대한 인지행동치료
C. 소변시험지와 배양검사
D. 전환장애에 대한 심리평가

## 해설

반복되는 시야 이상과 방광·장 기능 이상은 신경학적 질환을 평가해야 하는 증상이며 심리적 스트레스나 학대가 있다는 사실만으로 전환장애로 확정할 수 없다. 제시된 선택지 중 두부 MRI로 중추신경계 병변을 평가하는 접근이 적절하다. 실제로는 신경학적 진찰·병력과 필요한 추가 검사를 함께 하고 학대에 대한 안전 평가도 병행한다. 모든 전환장애 의심 환자에게 MRI가 일률적으로 첫 단계라는 뜻은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005562

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 검사도 하지 않은 환자를 전환장애로 확정하고 MRI가 그 진단의 일률적 첫 검사라고 설명한 오류 교정. 신경학적 증상 경과와 학대 원문 복원.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/ng220/chapter/Recommendations
