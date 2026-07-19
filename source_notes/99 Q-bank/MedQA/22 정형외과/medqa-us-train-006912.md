---
type: qbank
schema_version: 1
id: medqa-us-train-006912
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:729d77745da9e6cdde73cc56295ecaaac32ab9d072dedd016fd3b86de14ff781
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "척추 골절"
  - "외상성 요통"
  - "기능성 증상 감별"
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

24세 남성이 교통사고 후 응급실에 내원했다. 정차 중 시속 11마일 차량에 뒤에서 추돌되었다. 심한 요통 외에는 괜찮다고 한다. 매일 아침 발생하고 활동하면 완화되며 움직이지 않으면 악화되는 요통으로 물리치료를 받고 있다. 대학생으로 성적에 어려움을 겪고 있다. 체온은 98.4°F(36.9°C), 혈압은 117/78 mmHg, 맥박은 분당 116회, 호흡수는 분당 12회, 산소포화도는 99%이다. 척추 운동 범위가 감소되고 척추를 누르면 압통이 있다. 통증 때문에 기말시험과 일을 면제해 달라는 소견서를 요청한다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 추간판 탈출증
B. 꾀병
C. 척추전방전위증
D. 척추 골절

## 해설


교통사고 후 급성 요통과 압통, 운동범위 감소는 외상성 척추 골절을 시사한다. 젊은 환자라도 고에너지 충격이 있으면 압축 골절이 발생할 수 있으며, 통증이 심하고 신경학적 이상이 없더라도 영상평가가 필요하다. 따라서 가장 가능성 높은 진단은 척추 골절이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006912
