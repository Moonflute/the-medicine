---
type: qbank
schema_version: 1
id: medqa-us-train-000349
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eb67c82197e7f41baf898e4483c67fefa089e7496b63faf7c9c3d6d40893dbb4
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "conjunctivitis"
question_type: management
related_disease_slugs:
  - MTgg7JWI6rO8L-qysOyEseyXvCAoQ29uanVuY3Rpdml0aXMpLm1k
difficulty: standard
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRXJ5dGhyb215Y2luLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

26세 여성이 3일 전부터 시작된 양쪽 눈의 충혈, 이물감, 분비물로 내원하였다. 매일 아침 눈이 노란 딱지로 인해 "달라붙은" 느낌이 든다고 한다. 3년 전부터 비염(nasal allergies)을 앓고 있으며, 자매가 알레르기 비염을 가지고 있다. 2명의 남성 파트너와 성생활을 하고 있으며 경구 피임약을 복용 중이고, 콘돔은 사용하지 않는다. 활력 징후는 정상 범위 내에 있다. 양안 시력은 20/20이다. 안과 검사상 양쪽 눈꺼풀의 부종, 양측 결막 충혈, 얇은 화농성 분비물이 관찰된다. 각막, 전방, 안저 검사는 정상이다. 나머지 신체 검진상 이상 소견은 없다. 가장 적절한 약물 치료는 무엇인가?

## 선택지

A. 국소 나타마이신(natamycin)
B. 국소 프레드니솔론 아세테이트(prednisolone acetate)
C. 국소 에리스로마이신(erythromycin)
D. 경구 에리스로마이신(erythromycin)

## 해설

짧은 경과의 충혈, 점액농성 분비물과 아침 눈꺼풀 붙음, 보존된 시력과 정상 각막은 급성 세균성 결막염에 합당하다. 약물 선지 중 C, 국소 erythromycin이 적절하며 진균제나 국소 steroid를 먼저 선택하지 않는다. 다만 경증 세균성 결막염도 자연 호전될 수 있어 모든 환자에서 항생제가 필수이거나 erythromycin이 다른 국소 항생제보다 우월하다고 단정할 수는 없다. 과도한 고름·각막 침범·지속성 경과가 나타나면 임균/클라미디아 등 다른 원인과 전신 치료 필요성을 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 약물 선지 중 topical erythromycin C는 유지하되 모든 경증 결막염에 항생제가 필수/단일 최상이라는 단정을 교정.
- 공식/학회 근거: https://www.aaojournal.org/article/S0161-6420(24)00009-5/fulltext

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000349
