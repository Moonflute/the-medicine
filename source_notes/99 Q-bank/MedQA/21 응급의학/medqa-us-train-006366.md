---
type: qbank
schema_version: 1
id: medqa-us-train-006366
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9d206309a17f3471514bd001e80ccc8f5cedc55ddf191ed8ca32cfb191e3a078
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "삽관 실패"
  - "외상성 기도 폐쇄"
  - "윤상갑상막절개술"
  - "Airway obstruction"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: C
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

외상 환자의 기관삽관에 실패했다. 최적화한 마스크 환기와 성문상 기도기구로도 산소화되지 않고 포화도가 계속 떨어진다. 숙련된 응급기도팀이 도착했다. 다음 조치는?

## 선택지

A. 같은 방법으로 삽관을 반복한다
B. 산소화가 안 된 상태로 CT실에 보낸다
C. 응급 전경부 기도를 확보한다
D. 기도 부종이 가라앉을 때까지 기다린다

## 해설

삽관과 산소화가 모두 불가능하면 반복 시도로 시간을 보내지 않는다. 응급 전경부 기도 확보로 가능한 빨리 산소 공급을 회복해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 윤상갑상막 절개술을 비침습적 처치로 기술한 오류를 교정한다. 삽관과 산소화 실패가 함께 지속되는 구조 상황에서 D를 유지한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng39/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006366
- https://pubmed.ncbi.nlm.nih.gov/41203471/
