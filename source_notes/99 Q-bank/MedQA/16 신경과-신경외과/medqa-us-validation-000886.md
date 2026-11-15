---
type: qbank
schema_version: 1
id: medqa-us-validation-000886
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:95d7caea309c2595dd2f57ad85047f61abbebf30b413c7a9e9ef8552b5604778
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "벨마비"
  - "말초성 안면신경마비"
  - "각막 보호"
question_type: management
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-uyqOuniOu5hCAoQmVsbCdzIHBhbHN5KS5tZA
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

45세 환자가 24시간 전부터 이마 주름을 포함한 한쪽 얼굴 전체를 움직이기 어렵고 눈을 완전히 감지 못한다. 다른 신경학적 이상이나 귀의 수포는 없다. 벨마비로 판단했을 때 초기 치료는?

## 선택지

A. 항바이러스제만 사용하고 눈은 그대로 둔다
B. 경구 스테로이드를 시작하고 해당 눈을 윤활·보호한다
C. 안구 윤활만 하고 스테로이드 적용 여부는 2주 뒤 정한다
D. 발병 24시간이라는 이유로 정맥 혈전용해를 시행한다

## 해설

성인의 벨마비는 발병 72시간 이내 경구 스테로이드가 권고된다. 눈이 닫히지 않으면 눈물 보충과 안구 보호로 각막 손상을 예방한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 안구보호 D는 필요한 조치지만 단순 윤활제 퇴원이 모든 치료라는 오해를 교정. 동반 고혈압/당뇨 위험도 복원.
- 공식/학회 근거: https://aao-hnsfjournals.onlinelibrary.wiley.com/doi/10.1177/0194599813506835

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000886
- https://www.entnet.org/resource/aao-hnsf-clinical-practice-guideline-bells-palsy-press-release-fact-sheet/
