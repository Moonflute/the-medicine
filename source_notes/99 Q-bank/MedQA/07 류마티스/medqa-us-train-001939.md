---
type: qbank
schema_version: 1
id: medqa-us-train-001939
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e5be1ffa9b33eed94b44c03402f6aa502a41a8256c63c205b57540f52cda743c
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "limited cutaneous systemic sclerosis"
  - "CREST syndrome"
  - "anticentromere antibody"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDqsr3tmZTspp0gKFN5c3RlbWljIFNjbGVyb3NpcykubWQ
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTmlmZWRpcGluZS5tZA
---

# MedQA US 임상문제

## 문제

40세 여성이 2개월간 식후 흉통과 속쓰림으로 내원했다. 밤과 누울 때 특히 악화된다. nifedipine으로 치료 중인 레이노병이 있고 손과 얼굴 피부가 두꺼워지고 단단해졌으며 팔꿈치와 손끝에 단단한 흰 결절이 있다. 추가 검사에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 항 RNA 중합효소 III 항체
B. 항 U1 RNP 항체
C. 항중심체 항체
D. 항 Scl-70 항체

## 해설


레인오와 CREST 증후군에서 항중심체 항체가 가장 특이적이다. 환자는 레이노와 피부 경화, 석회화성 손가락 결절을 보여 CREST와 일치한다. 따라서 항중심체 항체가 가장 가능성 높은 검사이다. 항 Scl‑70는 확산형 전신 경화증에 더 흔하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001939 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Raynaud·손/얼굴 피부경화·석회침착·식도 증상은 제한피부형 전신경화증/CREST와 항중심체항체 C를 지지하며 원문과 해설이 일치한다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001939
