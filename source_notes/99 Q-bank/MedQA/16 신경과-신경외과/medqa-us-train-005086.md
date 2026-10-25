---
type: qbank
schema_version: 1
id: medqa-us-train-005086
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:31fb1b2b094ee5fbe93635e58457adcd509563643376e437f7f48ec340ab5f14
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "국소발작"
  - "양측 강직간대성 발작"
  - "발작 후 혼돈"
  - "Focal seizure"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rsJzsnpEgKFNlaXp1cmUpLm1k
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강하던 10세 남아가 발작 후 응급실에 왔다. 갑작스러운 메스꺼움과 번쩍이는 불빛을 본 뒤 입가와 얼굴이 떨렸고, 큰 소리를 지른 후 의식을 잃어 팔다리를 약 2분간 경련했다. 병원으로 오는 동안 의식은 회복되었으나 5분간 혼란스럽고 말을 명확히 하지 못했다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 국소발작에서 양측 강직간대성 발작으로 진행
B. 경련성 실신
C. 시든햄 무도병
D. 전신 강직간대성 발작

## 해설

메스꺼움·번쩍이는 빛이라는 초기 주관 증상 뒤 입꼬리·얼굴의 국소 경련이 먼저 나타나고, 이후 의식소실과 양측 사지 강직간대성 경련으로 퍼졌다. 따라서 국소발작에서 양측 강직간대성 발작으로 진행(A)이 가장 적절하다. 발작후 혼란도 이를 지지한다. 전신 강직간대성 발작(D)처럼 양측에서 처음부터 동시에 시작한 것으로 설명하면 초기 국소 증상을 놓치게 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 초기 국소 안면 경련과 오라를 명확히 하여 처음부터 전신 발작인 D와 국소-양측 진행 A를 구별하는 해설로 교체했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005086
