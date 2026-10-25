---
type: qbank
schema_version: 1
id: medqa-us-train-007788
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dbf3e60091d8320cf75835d22ee9491bfce826542481f0206ffdeba688634e3e
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "supracondylar humerus fracture"
  - "anterior interosseous nerve palsy"
  - "pediatric elbow fracture"
  - "Supracondylar humerus fracture"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: D
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

7세 남아가 친구들과 놀다가 뻗은 오른팔로 넘어져 심한 통증이 발생해 부모와 함께 응급실에 왔다. 오른팔을 움직일 수 없어 왼팔로 받치고 있다. 활력징후는 정상이다. 우측 팔의 맥박은 정상이고 구획 부종은 없지만 움직일 때 팔꿈치 위에서 염발음이 들린다. 손목을 굽히고 펼 수 있으나 통증 때문에 제한된다. 엄지손가락의 감각이 감소하고 엄지와 검지로 “OK” 표시를 만들 수 없다. 가장 가능성 높은 진단은?

## 선택지

A. 상완골 중간부 골절
B. 주상골 골절
C. 원위 요골 골절
D. 상완골 과상부 골절

## 해설

소아의 손을 짚은 낙상, 팔꿈치 위 염발음과 운동제한은 상완골 과상부 골절(D)을 시사한다. 동반 정중신경 또는 그 운동 분지인 전골간신경(AIN) 손상은 긴엄지굽힘근·검지 깊은손가락굽힘근 약화로 끝마디를 굽힌 OK 표시를 어렵게 한다. AIN 자체는 운동신경이므로 엄지 감각저하까지 있으면 정중신경의 감각섬유 침범도 고려해야 한다. 정상 맥박만으로 모든 신경혈관 합병증이 배제되지는 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 상완골 과상부 골절의 염발음을 청진음으로, 전골간신경을 존재하지 않는 이름으로 부른 해설을 수정했다. 정중신경 감각과 전골간신경 운동 기능을 구별한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007788
