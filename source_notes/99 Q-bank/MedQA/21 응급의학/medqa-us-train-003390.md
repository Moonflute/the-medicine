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
explanation_status: manual-reviewed
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

37세 남성이 자동차를 수리하다 손을 베여 응급실에 왔다. 얼굴과 몸통에 여러 멍이 있었고, 오른손 두 번째와 세 번째 중수지관절 등쪽에 깊은 열상이 두 개 있었다. 파상풍 예방접종을 하고 상처를 세척한 뒤이다. 다음 중 이 환자에게 적절한 처치는?

## 선택지

A. 시프로플록사신과 국소 에리트로마이신
B. 봉합사로 상처를 봉합한다
C. 추가 처치는 필요하지 않다
D. 수술적 세척과 변연절제술 및 아목시실린-클라불란산

## 해설

등쪽 MCP 관절의 깊은 열상은 주먹으로 치아를 때린 손상을 의심하게 한다. 관절·힘줄 침범을 평가하고 깊은 오염/침범이면 수술적 세척·변연절제와 amoxicillin-clavulanate(D)가 적합하다. 단순 일차 봉합이나 추가 처치 없이 종료하면 안 된다. 외모·정신과 진단이나 수감력 자체로 상처 원인을 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 빠진 얼굴/몸통 멍과 등쪽 MCP 상처의 fight-bite 단서를 대조. 사회적 진단에 의존하지 않고 D의 손 상처 치료 근거 보완.
- 공식/학회 근거: https://www.nice.org.uk/guidance/NG184/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003390
