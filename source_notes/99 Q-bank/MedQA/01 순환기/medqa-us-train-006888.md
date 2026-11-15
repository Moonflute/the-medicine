---
type: qbank
schema_version: 1
id: medqa-us-train-006888
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fe178513c28654a58339af84a863a60cad679ed14d61450dadcbd12dc4e163b7
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "아미오다론 유발 폐섬유화"
  - "청회색 피부 변색"
  - "간독성"
  - "Pulmonary fibrosis"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2KueuwnOyEsSDtj5DshKzsnKDspp0gKElQRikgKElkaW9wYXRoaWMgUHVsbW9uYXJ5IEZpYnJvc2lzKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1pb2Rhcm9uZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

70세 남성이 두 달째 심해지는 마른기침과 숨참으로 내원했다. 항부정맥제를 장기간 복용했고 얼굴과 손에 청회색 변색이 있다. 양측 폐기저부에서 미세 수포음이 들리고 흉부 CT에서 양측 간질성 음영이 새로 관찰된다. 가장 의심되는 약은?

## 선택지

A. 리시노프릴
B. 와파린
C. 메토프롤롤
D. 아미오다론

## 해설


아미오다론은 간질성 폐렴이나 폐섬유화 등 폐독성을 일으킬 수 있고 햇빛에 노출되는 피부가 청회색으로 변하기도 한다. 폐독성이 의심되면 감염과 심부전 등 다른 원인을 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 청회색피부·간효소상승·간질성폐병변의 다기관독성조합은 amiodarone D와 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006888
