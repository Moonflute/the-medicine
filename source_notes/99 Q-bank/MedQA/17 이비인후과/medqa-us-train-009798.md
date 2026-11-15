---
type: qbank
schema_version: 1
id: medqa-us-train-009798
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fc701b209ba83d91e9da7c72591ef424c205c8b7e086aed91db60f0fd84f27a6
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "악성 외이도염"
  - "녹농균"
  - "유양돌기염"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-uFueuGjeq3oCAoUHNldWRvbW9uYXMgQWVydWdpbm9zYSkubWQ
difficulty: complex
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
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

당뇨병 환자가 괴사성 외이도염과 두개저 골수염으로 입원했다. 외이도 배양은 진행 중이고 턱을 움직일 때도 통증이 심하다. 초기 치료 방침은?

## 선택지

A. 국소 항균 점이제만 쓰고 퇴원한다
B. 배양 결과가 나올 때까지 모든 치료를 미룬다
C. 경구 항진균제만 경험적으로 처방한다
D. 전신 항균제를 시작해 녹농균을 포함하고 배양 결과에 맞춰 조정한다

## 해설

괴사성 외이도염은 국소 외이도염과 달리 전신 항균치료가 필요하다. 초기에는 녹농균을 고려하고 배양, 중증도, 약제 감수성과 신기능에 따라 조정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 당뇨·외이도 육아조직·골 파괴의 괴사성 외이도염을 일반 유양돌기염/외이도 농양과 혼동하지 않도록 교정.
- 공식/학회 근거: https://www.rightdecisions.scot.nhs.uk/antimicrobial-prescribing-nhs-lothian/body-systems/ear-nose-throat-infections/necrotising-otitis-externa/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009798
- https://pubmed.ncbi.nlm.nih.gov/36806133/
- https://tac-int-qg-app-liv.azurewebsites.net/hospital-guidelines/adult-antimicrobial-guide/empiric-treatment/ent-and-orofacial/necrotising-malignant-otitis-externa/
