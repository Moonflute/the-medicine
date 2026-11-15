---
type: qbank
schema_version: 1
id: medqa-us-train-004673
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:024c68def3f33983256a75d782599f731c5d0e4f9df1e0f4f571d875248e14bc
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "악성 외이도염"
  - "두개저 골수염"
  - "당뇨병성 외이도염"
question_type: diagnosis
related_disease_slugs:
  - MDgg6rCQ7Je8L-uFueuGjeq3oCAoUHNldWRvbW9uYXMgQWVydWdpbm9zYSkubWQ
difficulty: standard
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
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

당뇨병이 있는 60세 환자가 3주째 심한 야간 귀 통증을 겪는다. 외이도에 육아조직이 있고 같은 쪽 얼굴이 약해졌다. 우선 의심해야 할 질환은?

## 선택지

A. 단순 급성 중이염
B. 괴사성 외이도염
C. 귀지 매복
D. 삼출성 중이염

## 해설

당뇨 환자의 지속적 심한 귀 통증, 외이도 육아와 뇌신경 이상은 두개저까지 퍼질 수 있는 괴사성 외이도염의 단서다. 신속한 이비인후과 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 안면신경마비를 동반한 괴사성 외이도염에서 장기 전신 항녹농균 요법이라는 A의 취지는 유지하되 모든 환자에게 6주 내내 정맥 ciprofloxacin 단독이 일률적 1차라는 설명을 교정.
- 공식/학회 근거: https://www.rightdecisions.scot.nhs.uk/antimicrobial-prescribing-nhs-lothian/body-systems/ear-nose-throat-infections/necrotising-otitis-externa/
- 공식/학회 근거: https://richtlijnendatabase.nl/richtlijn/necrotiserende_otitis_externa_osteomyelitis_schedelbasis/duration_of_treatment.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004673
- https://pubmed.ncbi.nlm.nih.gov/36806133/
