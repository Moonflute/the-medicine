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
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
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

57세 남성이 당뇨병과 만성 신장질환을 배경으로 악취 나는 오른쪽 발 궤양, 발열, 발적, 부종으로 내원했다. 궤양 주위 파동감이 있고 홍반은 경계에서 3 cm까지 뻗었다. 다음 중 가장 적절한 초기 처치는?

## 선택지

A. 표재성 면봉배양
B. 항생제와 지지요법
C. 혈관내 중재
D. 소절단술

## 해설

발열·빈맥과 염증성 발궤양은 전신 항생제와 지지치료(B)가 필요한 당뇨병 발 감염이다. 원문의 파동감은 농양을 우려하게 하므로 신속한 외과 평가와 배농/변연절제 필요성을 함께 검토한다. 심부 조직 배양을 선호하고 표재 swab만으로 평가를 끝내지 않는다. 혈류와 골수염도 평가하며 항생제만이 확정치료라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 항생제 B를 유지하되 원문 파동감/농양 단서를 복원하고 항생제만으로 종료하는 해설 보완.
- 공식/학회 근거: https://www.idsociety.org/practice-guideline/diabetic-foot-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003922
