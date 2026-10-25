---
type: qbank
schema_version: 1
id: medqa-us-train-000434
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:599c6bee27fda81b195cbfa424be75f5ef491354f615d085037610cd62b745d3
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "supracondylar humerus fracture"
  - "Supracondylar humerus fracture"
question_type: diagnosis
related_disease_slugs: []
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

5세 남아가 쉬는 시간에 정글짐에서 놀다가 떨어진 후 45분 만에 오른쪽 팔꿈치 부종과 통증으로 응급실에 내원했다. 낙상 이후 오른쪽 팔꿈치를 움직일 수 없는 상태이다. 진찰 결과 오른쪽 팔꿈치에 반상출혈, 부종, 압통이 관찰되며 통증으로 인해 관절 가동 범위가 제한된다. 그 외 신체 검진상 이상 소견은 없다. 오른쪽 팔의 X-선 사진이 제시되었다. 이 환자의 손상으로 발생할 가능성이 가장 높은 합병증은 무엇인가?

## 선택지

A. 다균성 감염(Polymicrobial infection)
B. 요골 맥박 소실(Absent radial pulse)
C. 상완골두의 무혈성 괴사(Avascular necrosis of the humeral head)
D. 유착성 관절낭염(Adhesive capsulitis)

## 해설

5세에서 낙상 후 팔꿈치 종창·운동 제한은 상완골 과상부골절을 우선 의심하게 한다. 전위된 원위상완골 골편이 상완동맥을 손상·포착하거나 꺾이게 하면 원위 요골맥박이 소실될 수 있어 선지 중 B가 가장 적절하다. 실제 X선이 제공되지 않았으므로 골절 형태·전위 정도를 확인했다고 단정하지 않는다. 이는 상완골두의 근위 골절이나 요골동맥 자체 손상을 뜻하지 않으며 모든 골절에서 가장 흔한 합병증이라고 일반화하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 전형 소아 팔꿈치 골절의 혈관 합병증 B는 지지되지만 손상 부위를 상완골 상부, 혈관을 요골동맥으로 잘못 적은 설명을 원위상완골·상완동맥으로 교정한다.
- 공식/학회 근거: https://surgeryreference.aofoundation.org/orthopedic-trauma/pediatric-trauma/distal-humerus/further-reading/patient-examination

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000434
