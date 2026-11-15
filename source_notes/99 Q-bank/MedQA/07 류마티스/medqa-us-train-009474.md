---
type: qbank
schema_version: 1
id: medqa-us-train-009474
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:db2481aff33aba2263cf7f0797769be4fb098a37db0563050a6c124eeac6396e
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "ankylosing spondylitis"
  - "강직성 척추염"
  - "TNF inhibitor screening"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwleyngeyEsSDsspnstpTsl7wgKEFua3lsb3NpbmcgU3BvbmR5bGl0aXMpLm1k
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0FsbG9wdXJpbm9sLm1k
---

# MedQA US 임상문제

## 문제

40세 남성이 충분한 소염진통제와 운동치료에도 축성 척추관절염 활동성이 지속돼 TNF 억제제를 고려 중이다. 국내에서 투약 전에 결핵 위험을 평가할 조치는?

## 선택지

A. 흉부 영상 없이 혈청 결핵 항체만 검사한다
B. 기침이 생길 때까지 검사를 미룬다
C. 결핵 병력·증상, 흉부 X선 및 IGRA 등으로 활동성·잠복결핵을 평가한다
D. BCG 접종력이 있으면 별도 평가는 하지 않는다

## 해설


TNF 억제제는 결핵 재활성화 위험을 높인다. 병력 및 흉부영상과 잠복결핵 검사를 함께 시행하고, 결과에 따라 치료 시점을 조정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009474 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: TNF억제 전 잠복결핵 평가 C 유지, PPD만 유일검사·LFT불필요라는 오류 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://ard.bmj.com/content/82/6/742

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009474
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6960050/
