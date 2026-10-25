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

69세 남성이 일반 추적 진료를 위해 내원했다. 잘 지내고 있으며 건강한지 확인하고 싶다고 한다. 제2형 당뇨병, 말초혈관질환 및 고혈압 병력이 있다. 메트포르민, 글리부리드, 리시노프릴, 메토프롤롤 및 히드로클로로티아지드를 복용한다. 혈압은 130/90 mmHg, 맥박은 80회/분이다. 지난주 공복 지질검사에서 LDL 85 mg/dL, 중성지방 160 mg/dL였다. 마지막 방문 이후 증상은 없었다. 이번 방문 혈당은 100 mg/dL이다. 다음 중 이 환자에게 권장되는 것은 무엇인가?

## 선택지

A. 리시노프릴 용량 증가
B. 메트포르민 용량 증가
C. 스타틴 치료 시작
D. 메토프롤롤을 중단하고 프로프라놀롤을 시작

## 해설

정답은 C이다. 이 환자는 PAD라는 임상 ASCVD와 DM이 있어 LDL85라도 statin 치료 적응증이 있다. 기본적으로 가능한 충분한 강도의 statin으로 이차예방 위험을 줄이고 내약성·목표 LDL을 평가한다. LDL40mg/dL 이상이면 치료한다거나 10년 이하 위험이라는 기준은 없다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: LDL40 이상이라는 가공 기준을 제거하고 기존PAD/DM의 statin 적응증으로 설명.
- https://diabetesjournals.org/care/article/49/Supplement_1/S216/163933/10-Cardiovascular-Disease-and-Risk-Management
- https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001405
