---
type: qbank
schema_version: 1
id: medqa-us-train-003637
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:95ce98dac4ba924d004ba242cd17fcc28a7b46709ec710b8d155947cb287a3a6
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "petrous apicitis"
  - "Gradenigo syndrome"
  - "otitis media complication"
  - "abducens nerve palsy"
question_type: management
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-ykkeydtOyXvCAoT3RpdGlzIG1lZGlhKS5tZA
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmYXpvbGluLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

10세 남아가 4일간의 왼쪽 귀 통증과 발열에 이어 발생한 두통, 오심, 구토로 내원했다. 왼쪽 고막은 발적되고 고름이 나왔으며 왼쪽 눈의 가쪽 주시가 제한되었다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 정맥 세프트리악손과 클린다마이신 치료
B. 정맥 세파졸린과 메트로니다졸 치료
C. 뇌 MRI
D. 두개골 천공 배액

## 해설

정답은 C, 뇌 MRI이다. 화농성 중이염에 두통·구토와 같은 쪽 외전신경마비가 동반되면 단순 중이염을 넘어 추체첨부염, 두개내 농양 또는 정맥동 혈전증 등 합병증을 평가해야 한다. 추체첨부염은 Gradenigo 증후군과 연관되지만, 이 문항에는 전형적인 삼차신경 영역 통증까지 모두 기술되어 있지는 않다. 제시된 선택지 중 뇌 MRI로 두개내 병변의 위치·범위를 확인하는 것이 적절하다. 세균성 합병증이 의심되면 이비인후과·감염 전문 평가와 항균치료도 신속히 진행하며, 전신상태가 나쁜 환자에서 영상 때문에 응급치료를 지연하는 의미는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 중이염·두통·외전신경마비의 두개내 합병증 평가 필요. Gradenigo를 고막염/농양으로 단정한 해설 수정, 뇌 MRI C 유지하며 불안정 환자의 치료 지연 경고.
- 공식/학회 근거: https://acsearch.acr.org/docs/3195157/Narrative/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003637
