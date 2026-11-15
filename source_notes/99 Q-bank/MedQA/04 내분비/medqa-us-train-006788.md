---
type: qbank
schema_version: 1
id: medqa-us-train-006788
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7835e1fc443e7d009fd2820c0f80adc534756aaabab9f109c1aa1e5e00fe3469
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "당뇨병성 다발신경병증"
  - "신경병성 통증"
  - "가바펜틴 치료"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsi6Dqsr3rs5Hspp0gKERpYWJldGljIE5ldXJvcGF0aHkpLm1k
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbWl0cmlwdHlsaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9HYWJhcGVudGluLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9WZW5sYWZheGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

53세 제2형 당뇨병 환자가 양쪽 발의 작열통으로 잠을 못 잔다. 발끝부터 감각이 떨어져 통증성 당뇨병성 신경병증으로 판단했다. 최근 심근경색이 있었고 신장기능은 정상이다. 통증 완화를 위해 고려할 약은?

## 선택지

A. 아미트립틸린
B. 가바펜틴
C. 프레드니솔론
D. 이부프로펜

## 해설

가바펜틴은 통증성 당뇨병성 신경병증의 치료 선택지다. 최근 심근경색 환자에서는 삼환계 항우울제의 심장 부작용을 고려한다. 발 보호와 다른 신경병증 원인 평가도 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Gabapentin B의 GABA-B작용 오류를 α2δ로 교정하고 다른신경통약의 효능을 부정한 설명 교정.
- https://www.ema.europa.eu/en/documents/referral/neurontin-article-30-referral-annex-i-ii-iii_en.pdf
- https://doi.org/10.1212/WNL.0000000000013038

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006788
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
