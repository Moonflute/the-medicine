---
type: qbank
schema_version: 1
id: medqa-us-train-002568
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ab37ec38650b06d03d05fdfa9681f8624be8caedec5723a128e4cd4c12366bfd
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "olanzapine"
  - "metabolic syndrome"
  - "type 2 diabetes mellitus"
  - "atypical antipsychotic"
question_type: investigation
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PbGFuemFwaW5lLm1k
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

제2형 당뇨병이 있는 29세 환자가 조현병 치료를 위해 올란자핀 사용을 검토 중이다. 시작 전과 시작 후 상대적으로 악화하기 쉬운 이상을 추적하려면 어떤 항목이 중요한가?

## 선택지

A. 혈청 프로락틴과 갑상샘자극호르몬
B. 혈구수와 절대호중구수
C. 체중·혈압과 혈당·지질
D. 혈청 크레아틴키나아제와 미오글로빈

## 해설

올란자핀은 체중 증가와 혈당·지질 악화 위험이 큰 편이다. 치료를 시작하기 전 기초 대사지표를 확인하고 치료 중 변화를 추적한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002568
- https://www.nice.org.uk/guidance/cg178/chapter/Recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 당뇨병에서 올란자핀 대사 위험을 피하는 선택은 유지하되 당뇨 자체를 절대금기처럼 설명하지 않음.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
