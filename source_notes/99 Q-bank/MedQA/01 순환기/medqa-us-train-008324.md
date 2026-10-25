---
type: qbank
schema_version: 1
id: medqa-us-train-008324
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4508e5208f34122423118b05013135285ed4eb84f830241740b05808641a5042
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "reinfarction"
  - "CK-MB"
  - "recurrent myocardial infarction"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: B
answer_change_reason: "2026 제5차 심근경색 보편적 정의는 재발 허혈 증상에서 연속 심장 트로포닌 검사를 우선하며, CK-MB는 트로포닌 검사가 불가능할 때의 대안이다. 원정답 B를 C로 변경하여 현행 기준 및 해설과 일치시킴."
---

# MedQA US 임상문제

## 문제

66세 남자가 하루 동안 지속된 흉통, 두근거림, 운동 시 호흡곤란으로 응급실에 왔다. 3일 전 하벽 심근경색으로 입원해 경피적 관상동맥성형술을 성공적으로 받았고 퇴원 시 아스피린, 심바스타틴, 이소소르비드 이질산염을 복용했다. 현재 활력징후는 정상이고 안정 시 심전도에서 새로운 T파 역전이 보인다. 이 환자의 진단을 신속하게 확립하는 데 가장 신뢰할 수 있는 검사는?

## 선택지

A. 젖산탈수소효소
B. 크레아틴키나아제 MB
C. 심장 트로포닌 T
D. 코펩틴

## 해설

최근 심근경색 후 허혈성 증상이 재발하면 심장 트로포닌을 즉시 측정하고 연속 검사로 변화 양상을 평가한다. 현행 정의에서는 고감도 심장 트로포닌이 우선이며, 제시된 선택지 중 C가 적합하다. 이전 경색 때문에 값이 높을 수 있어 단일 양성값만으로 재경색을 확진하지 않는다. CK-MB는 트로포닌을 사용할 수 없을 때의 대안이지, 항상 더 신뢰할 수 있는 우선 검사는 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 재경색의 현행 검사는 연속 심장 트로포닌이며 원정답 B와 기존 해설 C의 불일치를 C로 정정.
- https://www.jacc.org/doi/10.1016/j.jacc.2026.07.025

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008324
