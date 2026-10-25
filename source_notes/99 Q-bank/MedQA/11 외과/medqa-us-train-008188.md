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
answer: A
translation_status: machine-verified
explanation_status: machine-generated
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

28세 남자가 한 시간 전 길을 건너다 차에 치여 응급실에 왔다. 의식소실은 없고 우측 팔, 이마, 골반에 통증이 있으며 소변이 마려운데 사고 후 소변을 보지 못했다. 체온 37.1°C(98.9°F), 맥박 72회/분, 호흡수 18회/분, 혈압 118/82 mm Hg이다. 두피와 얼굴에 찰과상, 우측 눈 위 1×3 cm 멍, 치골상부 압통, 요도구에 소량의 혈액이 있다. 골반 X선에서 골반가지 골절이 보이고 두부·경부 CT는 정상이다. 가장 적절한 다음 처치는?

## 선택지

A. 역행성 요도조영술
B. 정맥 신우조영술
C. 조영증강 복부 CT
D. 후복막 초음파

## 해설


골반 골절과 요도 출혈이 동반된 경우 요도 손상의 여부를 확인해야 한다. 요도 손상 진단에 표준 검사는 역행성 요도조영술이며, 이는 요도 손상의 위치와 정도를 평가한다. 따라서 역행성 요도조영술이 적절한 다음 검사이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008188 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 골반골절·요도구 출혈·배뇨불능은 도뇨관 맹목 삽입 전 역행성 요도조영술 A를 지지하고 AUA 지침과 일치한다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.auanet.org/documents/education/clinical-guidance/Urotrauma.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008188
