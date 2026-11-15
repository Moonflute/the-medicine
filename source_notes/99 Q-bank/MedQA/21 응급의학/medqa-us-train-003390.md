---
type: qbank
schema_version: 1
id: medqa-us-train-003390
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f9fdbc921cc96ce7ac102dd2a8a828deb8193b05fd80e7d0b2e3020f16c1192b
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "fight bite"
  - "human bite"
  - "hand laceration"
  - "amoxicillin-clavulanate"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-ywveyDgSDrsI8g7Je07IOBIChXb3VuZHMgYW5kIExhY2VyYXRpb25zKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

주먹이 상대방의 치아에 닿은 뒤 손등 중수지관절 위에 작은 상처가 생겼다. 손가락을 펴면 아프고 상처가 관절까지 이어진다. 세척과 파상풍 예방 평가 뒤 필요한 처치는?

## 선택지

A. 상처를 바로 봉합하고 항생제는 쓰지 않는다
B. 진통제만 주고 경과를 본다
C. 국소 항생제만 바른다
D. 손외과에 신속히 의뢰해 관절 세척을 평가하고 전신 항생제를 투여한다

## 해설

치아에 닿은 손등 상처는 작아도 관절이나 힘줄을 오염시킬 수 있다. 관절 침범이 있으면 수술적 세척과 구강 세균을 포괄하는 전신 항생제가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 빠진 얼굴/몸통 멍과 등쪽 MCP 상처의 fight-bite 단서를 대조. 사회적 진단에 의존하지 않고 D의 손 상처 치료 근거 보완.
- 공식/학회 근거: https://www.nice.org.uk/guidance/NG184/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003390
- https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/
