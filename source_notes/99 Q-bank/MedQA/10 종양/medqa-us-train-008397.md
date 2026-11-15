---
type: qbank
schema_version: 1
id: medqa-us-train-008397
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:08cc068aaff59eba0f1a843e1ffb1f806f9c382ebd2ba30f0c79130b5a2b4b71
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "carcinoid syndrome"
  - "neuroendocrine tumor"
  - "pellagra"
related_disease_slugs:
  - MTAg7KKF7JaRL-y5tOultOyLnOuFuOydtOuTnCDspp3tm4TqtbAgKENhcmNpbm9pZCBTeW5kcm9tZSkubWQ
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
---

# MedQA US 임상문제

## 문제

전이성 신경내분비종양으로 카르시노이드 증후군이 있는 65세 여성이 새로 숨이 차고 다리가 붓는다. 경정맥압이 높고 흉골 왼쪽 아래에서 수축기 잡음이 들린다. 의심하는 심장 합병증을 확인할 검사는?

## 선택지

A. 흉부 CT
B. 운동부하 심전도
C. 관상동맥 CT
D. 경흉부 심장초음파

## 해설


카르시노이드 심장병은 주로 삼첨판과 폐동맥판을 침범한다. 우심부전 징후와 새 심잡음이 생기면 심장초음파로 판막과 우심실 기능을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008397 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 설사·광과민피부염·인지변화의 pellagra와carcinoid/5HIAA연관을보완; serum5HIAA는검증assay를전제로가능함을1차연구확인.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9539661/
- https://pubmed.ncbi.nlm.nih.gov/26438520/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008397
