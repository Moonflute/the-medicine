---
type: qbank
schema_version: 1
id: medqa-us-train-000784
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4905af6034e83a394396bcce413d7c5c56a18d441d8c97ca015913069f22040f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "type 2 diabetes mellitus"
  - "hypertension"
  - "aortic regurgitation"
  - "left ventricular hypertrophy"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpe2MkOuniSDsl63rpZggKEFvcnRpYyBSZWd1cmdpdGF0aW9uKS5tZA
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2FwdG9wcmlsLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

61세 백인 남성이 진행성 피로감과 운동 시 및 누웠을 때의 호흡곤란으로 응급실에 내원하였다. 환자는 25년간 제2형 당뇨병과 15년간 고혈압을 앓아왔다. 당뇨병과 고혈압 치료를 위해 메트포르민(metformin)과 캡토프릴(captopril)을 복용 중이다. 지난 12년간 하루 10개비의 담배를 피웠으며 가끔 음주를 한다. 체온은 36.7°C(98.0°F)이고 혈압은 130/60 mmHg이다. 신체 검진상 동맥 맥박은 급격한 상승과 빠른 허탈을 보인다. 좌측 상부 흉골연에서 초기 이완기 잡음이 들린다. 심초음파상 좌심실 박출률 55%–60%와 경미한 좌심실 비대를 동반한 중증 만성 대동맥판막 역류증이 확인된다. 이 환자에서 대동맥판막 치환술의 적응증이 되는 것은 무엇인가?

## 선택지

A. 고령
B. 장기간의 전신 고혈압 병력
C. 좌심실 기능 부전 증상의 존재
D. 박출률 > 55%

## 해설

정답은 C이다. 중증 만성 AR에 의한 호흡곤란 등 증상이 있으면 수술 위험 등을 평가하여 판막 수술을 권고하며 LVEF가 55–60%로 유지되어 있어도 적응증이 될 수 있다. 증상과 함께 EF까지 반드시 감소해야 한다는 뜻은 아니다. 무증상 환자는 별도의 LV 크기·기능 기준으로 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 증상성 중증 AR 수술에 LVEF 감소까지 필요하다는 해설 오류 교정.
- https://www.escardio.org/static-file/Escardio/Guidelines/Products/Slide%20sets/2025/2025%20official%20slides_VHD.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000784
