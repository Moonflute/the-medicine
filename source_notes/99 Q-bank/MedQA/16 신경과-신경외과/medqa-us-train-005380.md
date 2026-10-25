---
type: qbank
schema_version: 1
id: medqa-us-train-005380
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f40177c7b0519831db21aec9f1a271406e2a8a28f9d772d89b798aacfc324879
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "전신 강직간대성 발작"
  - "발작 후 젖산산증"
  - "혈청 중탄산염 감소"
  - "Generalized tonic-clonic seizure"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rsJzsnpEgKFNlaXp1cmUpLm1k
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강하던 24세 남자가 의식소실과 4분간 지속된 사지의 격렬한 경련 후 응급실에 왔다. 이후 혼란스러웠고 입안에 피가 있다. 두부 CT는 정상이다. 추가 평가에서 가장 가능성 높은 검사 소견은?

## 선택지

A. 혈청 칼슘 증가
B. 혈청 나트륨 증가
C. 혈청 중탄산염 감소
D. 혈청 마그네슘 증가

## 해설

전신 경련 직후 격렬한 근활동과 일시적 산소 요구 증가로 젖산이 증가하여 고음이온차 대사성 산증과 혈청 중탄산염 감소(C)가 나타날 수 있다. 이는 호산구 또는 '호산성 대사' 때문이 아니다. 발작이 멈춘 뒤 젖산은 비교적 빠르게 감소할 수 있으므로 지속 산증이 있으면 다른 원인도 평가한다. 경련과 발작후 혼란·구강 출혈은 전신 강직간대성 발작을 지지한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 발작후 산증을 호산성 대사로 설명한 오류를 격렬한 근활동의 젖산산증으로 교정했다. 중탄산염 감소 C를 유지한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005380
