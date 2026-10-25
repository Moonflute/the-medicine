---
type: qbank
schema_version: 1
id: medqa-us-train-009499
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:18d2c2479aa5050e6347c4f2b698e1f0e4cf547081188101029a96d5aa30904b
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "breastfeeding with maternal hepatitis C"
  - "산모 C형간염에서 모유수유"
  - "neonatal nutrition"
question_type: prevention
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
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

31세 G2P2002 여성이 임신 40주에 합병증 없이 건강한 남아를 질식분만했다. 신생아는 출생 시 활발하고 Apgar 점수는 1분 7점, 5분 9점이다. 산모에게 1도 열상이 있어 지혈되도록 봉합하고 산후 병동으로 옮겼다. 만성 C형간염이 있으며 정맥주사 약물 사용으로 여러 차례 입원 재활치료를 받았고 3년 전 마지막으로 사용했다. 산전 HIV 검사는 음성이며 다른 병력은 없다. 파트너는 반복적인 입술포진 병력이 있다. 신생아에게 가장 적절한 수유 방법은 무엇인가?

## 선택지

A. 염소젖
B. 모유수유
C. 우유
D. 콩 분유

## 해설

HCV 감염 자체는 모유수유의 금기가 아니므로 B가 적절하다. 모유를 통한 HCV 전파는 확인되지 않았다는 것이 근거이며, 모유에 바이러스가 절대 존재하지 않는다는 뜻은 아니다. 유두·유륜이 갈라져 출혈하면 해당 유방 수유를 잠시 중단하고 회복 후 재개한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: HCV가 모유에 존재하지 않는다는 단정을 감염 전파 근거와 유두 출혈 예외로 교정.
- https://www.cdc.gov/std/treatment-guidelines/hcv.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009499
