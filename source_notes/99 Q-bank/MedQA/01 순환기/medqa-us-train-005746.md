---
type: qbank
schema_version: 1
id: medqa-us-train-005746
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dd9ab86c63ec73cd0ba846f621df0645bd985227565b12295597774078a6b51f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "죽상색전증"
  - "블루토 증후군"
  - "혈관시술 합병증"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
question_type: diagnosis
difficulty: complex
answer: A
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

63세 여성이 관상동맥 시술 5일 뒤 아프고 파랗게 변한 새끼발가락으로 내원했다. 양쪽 발에서 발등동맥 맥박은 잘 만져진다. 발에 그물 모양 피부변색도 새로 생겼다. 가장 가능성 높은 기전은?

## 선택지

A. 죽상판 조각이 말단 소동맥을 막음
B. 대퇴동맥 전체가 혈전으로 폐쇄됨
C. 당뇨병으로 인한 말초 감각신경 손상
D. 피부 세균감염에 의한 발적

## 해설

혈관 시술 뒤 청색 발가락과 그물 모양 변색이 생겼다면 콜레스테롤 죽상색전을 의심한다. 작은 혈관은 막혀도 큰 동맥의 맥박은 유지될 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 시술후 말단통증·보존맥박의 죽상색전 A는 유지하되 대동맥판을 통과한 색전이라는 해부 오류 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005746
