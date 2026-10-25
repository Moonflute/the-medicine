---
type: qbank
schema_version: 1
id: medqa-us-train-002665
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fae2264d88b957b6a82a0ce7da6aa2329e6eaf1bfb0045a799a8f14d86fe44c3
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "thiamine deficiency"
  - "cerebellar ataxia"
  - "Wernicke encephalopathy"
  - "Varicella"
question_type: diagnosis
related_disease_slugs:
  - MDgg6rCQ7Je8L-yImOuRkC3rjIDsg4Htj6zsp4Qg67CU7J2065-s7IqkIOqwkOyXvCAoVmFyaWNlbGxhLVpvc3RlciBWaXJ1cyBJbmZlY3Rpb24pLm1k
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

이전에 건강했던 5세 남아가 2일간의 균형장애와 보행곤란으로 내원했다. 여러 번 넘어지고 계단을 도움 없이 오를 수 없으며 신발끈을 묶거나 옷을 입기 어렵다. 가족은 채식주의이고 예방접종을 받지 않았다. 신체검사에서 넓은 보행, 손가락-코 검사 이상, 빠른 교대운동 불능, 근력 5/5, 심부건반사 1+가 보이며 흉부 피부에 희미한 과색소성 반점 여러 개가 있다. 다음 중 증상의 가장 가능성 높은 원인은?

## 선택지

A. 비타민 B1 결핍
B. 수두-대상포진 바이러스 감염
C. 후두개와 악성종양
D. 말초신경 탈수초화

## 해설

건강하던 어린이에서 이틀 사이 생긴 보행·사지 협응장애와 정상 근력은 급성 소뇌실조를 시사한다. 수두 백신 미접종과 흉부의 남은 피부 반점은 최근 수두 감염 후 급성 소뇌실조(B)를 뒷받침하는 단서다. 수두-대상포진 바이러스는 감염후 소뇌실조와 연관될 수 있다. 단순 채식만으로 티아민 또는 트리프토판 결핍을 진단하지 않는다. 실제 진료에서는 감염후 소뇌실조가 배제진단임을 고려해 독성물질·중추신경계 감염·종괴 등 위험 원인을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 수두와 무관한 트리프토판 결핍이라는 엉뚱한 해설을 급성 감염후 소뇌실조 설명으로 교체하고 영문 피부 단서를 복원했다.
- 공식/학회 근거: https://www.rch.org.au/clinicalguide/guideline_index/Ataxia/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002665
