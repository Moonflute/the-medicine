---
type: qbank
schema_version: 1
id: medqa-us-train-001405
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:db8f5adf6bfe23e66000575c1b5854a7c0ad86e7813fe74b65a9f2e377f87e4d
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "diabetes mellitus"
  - "peripheral artery disease"
  - "statin therapy"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

69세 남성이 하지 죽상경화성 말초동맥질환으로 추적 진료를 받고 있다. 아스피린을 복용하지만 지질강하제는 복용하지 않는다. LDL 콜레스테롤은 85 mg/dL이다. 심혈관 사건 재발 위험을 줄이기 위한 처치는?

## 선택지

A. LDL이 100 mg/dL을 넘기 전에는 약물치료를 하지 않는다
B. 페노피브레이트 단독치료를 시작한다
C. 내약성을 고려해 스타틴 치료를 시작한다
D. 아스피린을 중단하고 오메가-3 제제로 대체한다

## 해설

죽상경화성 말초동맥질환은 이미 심혈관질환이 있는 경우다. LDL이 100 mg/dL보다 낮아도 스타틴으로 심혈관 사건 위험을 줄인다. 치료 강도는 기저 LDL, 목표 및 내약성을 고려해 정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: LDL40 이상이라는 가공 기준을 제거하고 기존PAD/DM의 statin 적응증으로 설명.
- https://diabetesjournals.org/care/article/49/Supplement_1/S216/163933/10-Cardiovascular-Disease-and-Risk-Management
- https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001405
- https://lipid.or.kr/reference/guideline.php?idx=1454&mode=view
