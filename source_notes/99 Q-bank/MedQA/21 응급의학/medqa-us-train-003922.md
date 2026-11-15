---
type: qbank
schema_version: 1
id: medqa-us-train-003922
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:aa0fae3029b4269d07d3f38fd4d4e689d4296aea8aed4712d2d927d0997075f4
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "diabetic foot infection"
  - "cellulitis"
  - "infected foot ulcer"
  - "antibiotics"
question_type: management
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsobHrtoDsp4jtmZgubWQ
  - MDgg6rCQ7Je8L-yXsOyhsOyngeyXvCAoQ2VsbHVsaXRpcykubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

당뇨병이 있는 57세 남성이 열과 함께 악화한 발 궤양으로 내원했다. 전신 항생제를 시작했고, 진찰과 초음파에서 깊은 발바닥 농양이 확인됐다. 추가로 필요한 조치는?

## 선택지

A. 응급 외과 평가로 배농과 변연절제를 계획한다
B. 표재 면봉배양 결과가 나올 때까지 항생제만 준다
C. 염증 부위를 압박 붕대로 단단히 감는다
D. 퇴원 후 한 달 뒤 상처를 다시 본다

## 해설

당뇨병성 발감염에 깊은 농양이 있으면 항생제에 더해 신속한 감염원 조절이 필요하다. 배농·변연절제 시 심부 검체를 얻고 혈류와 골수염 가능성도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 항생제 B를 유지하되 원문 파동감/농양 단서를 복원하고 항생제만으로 종료하는 해설 보완.
- 공식/학회 근거: https://www.idsociety.org/practice-guideline/diabetic-foot-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003922
