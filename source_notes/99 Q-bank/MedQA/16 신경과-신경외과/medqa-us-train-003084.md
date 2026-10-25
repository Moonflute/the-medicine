---
type: qbank
schema_version: 1
id: medqa-us-train-003084
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:24029042efe10a670bc9eb4688bd016e89c6d3437bc255feb31c059e3e98f549
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "myotonic dystrophy"
  - "myotonia"
  - "ptosis"
  - "distal muscle weakness"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
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

9세 남아가 건강검진을 위해 내원했다. 교사들은 쉽게 산만해지고 대부분 과목에서 반 친구들보다 뒤처지며 수업 중 자주 잠든다고 한다. 아이는 여러 번 다리 통증을 호소했다. 키는 45백분위수, 체중은 35백분위수이며 활력징후는 정상이다. 진찰에서 눈꺼풀처짐과 높은 아치형 입천장이 보인다. 얼굴과 손의 근력이 감소했지만 대퇴사두근과 햄스트링 근력은 정상이다. 감각은 정상이고 무지구를 두드리면 엄지가 외전되었다가 천천히 이완된다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 척수성 근위축증
B. 맥아들병
C. 근긴장성 이영양증
D. 소아 피부근염

## 해설

눈꺼풀처짐, 얼굴·손의 근력저하와 무지구 타진 후 엄지의 느린 이완은 근긴장성 이영양증(C)을 시사한다. 근긴장증(myotonia)은 수축 후 근육 이완이 지연되는 현상이며 '근이완성 이영양증'이라는 별도 진단을 뜻하지 않는다. 감각은 보존되고 원위부 근력저하·주간 졸림과 학습 문제가 동반될 수 있어 다른 제시 질환보다 합당하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 근긴장성 이영양증을 근이완성 질환이라고 부른 모순을 교정하고 타진 후 이완 지연이 근긴장증임을 설명했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003084
