---
type: qbank
schema_version: 1
id: medqa-us-train-009441
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:16807d71370e46a85086e87481945bf0f1e6102677f8274660331b089fd9e458
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "mechanical hemolytic anemia"
  - "기계적 용혈성 빈혈"
  - "schistocytes"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yaqe2YiOyEsSDruYjtmIggKEhlbW9seXRpYyBBbmVtaWEpLm1k
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

인공 승모판막이 있는 환자에게 진행성 빈혈과 갈색 소변이 생겼다. LDH는 높고 합토글로빈은 낮으며 직접항글로불린검사는 음성이다. 분열 적혈구가 관찰되고, 경흉부 심초음파는 인공판막 주변을 충분히 보여 주지 못했다. 판막 주위 누출을 확인할 다음 검사는?

## 선택지

A. 운동부하 심전도
B. 관상동맥 CT만 시행
C. 말초혈액도말을 반복해 누출 위치를 확인한다
D. 경식도 심초음파

## 해설


인공판막 주변으로 새는 혈류가 적혈구에 기계적 손상을 줄 수 있다. 경흉부 영상이 불충분하면 경식도 심초음파로 인공판막 기능과 누출을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009441 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 판막치환 후 DAT 음성·망상적혈구/간접 bilirubin 증가 용혈은 기계적 손상이며 schistocytes A와 일치.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009441
- https://doi.org/10.1093/eurheartj/ehaf194
