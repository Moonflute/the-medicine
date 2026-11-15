---
type: qbank
schema_version: 1
id: medqa-us-train-008188
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:aabdba32598dbb75960d02211ebef44c0e0aed428f599571b2cc4a18424293c8
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "pelvic fracture"
  - "urethral injury"
  - "retrograde urethrogram"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yalOuPhCDshpDsg4EgKFVyZXRocmFsIGluanVyeSkubWQ
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

28세 남성이 교통사고 뒤 골반 골절로 왔다. 소변을 보지 못하고 요도구에 피가 묻어 있다. 아직 도뇨관은 넣지 않았다. 다음 조치는?

## 선택지

A. 도뇨관을 저항이 느껴질 때까지 밀어 넣는다
B. 정맥 조영 CT의 배설기 영상만 찍는다
C. 방광에 조영제를 주입해 방광조영술을 먼저 한다
D. 역행성 요도조영술로 요도 손상을 평가한다

## 해설


골반 골절 뒤 요도구 출혈과 요폐는 요도 손상의 단서다. 역행성 요도조영으로 평가하고, 반복적인 맹목적 요도 도뇨는 피한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008188 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 골반골절·요도구 출혈·배뇨불능은 도뇨관 맹목 삽입 전 역행성 요도조영술 A를 지지하고 AUA 지침과 일치한다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.auanet.org/documents/education/clinical-guidance/Urotrauma.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008188
- https://uroweb.org/guidelines/urological-trauma/chapter/urogenital-trauma-guidelines
