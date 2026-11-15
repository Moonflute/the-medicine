---
type: qbank
schema_version: 1
id: medqa-us-train-008606
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:578f59eaf3dd076ec3c0cfa262fa52b2444a787e7f16e091032d576a129eae4c
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "femoral nerve injury"
  - "hip arthroplasty complication"
  - "femoral neuropathy"
question_type: diagnosis
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-unkOy0iOyLoOqyvSDshpDsg4EubWQ
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

고관절 치환술을 받은 62세 남성이 수술 뒤 무릎을 잘 펴지 못한다. 같은 쪽 무릎반사가 줄고 앞허벅지와 안쪽 종아리 감각이 떨어졌다. 양쪽 발의 맥박은 같다. 가장 가능성 높은 손상은?

## 선택지

A. 대퇴신경 손상
B. 폐쇄신경 손상
C. 좌골신경 손상
D. 총비골신경 손상

## 해설

대퇴신경 손상은 대퇴사두근 약화로 무릎 신전과 무릎반사가 저하되고, 두렁신경 분포인 안쪽 종아리 감각도 저하시킨다. 폐쇄신경 손상이라면 고관절 모음 약화가 더 두드러진다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 대퇴신경을 무릎 굴곡 신경으로 설명하고 비복신경을 운동신경처럼 설명한 해설을 교정했다. 고관절 수술에서 가장 위험한 신경이라는 일반화도 제거했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008606
