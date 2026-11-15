---
type: qbank
schema_version: 1
id: medqa-us-train-004225
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c8ee6771f97c1efdd2b08b23dd307bfdd1d17b5cded926503b2681b3e5d27103
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "급성 유양돌기염"
  - "급성 중이염 합병증"
  - "측두골 CT"
  - "Acute mastoiditis"
question_type: management
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-q4ieyEsSDsnKDslpHrj4zquLDsl7wgKEFjdXRlIE1hc3RvaWRpdGlzKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUGhlbnlsZXBocmluZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

9개월 아이가 중이염을 앓은 뒤 고열과 귀 뒤의 발적·압통을 보인다. 귓바퀴가 바깥쪽으로 밀리고 귀 뒤가 물렁하게 만져진다. 적절한 다음 조치는?

## 선택지

A. 비충혈제거제를 주고 귀가시킨다
B. 경구 아목시실린만 주고 일주일 뒤 확인한다
C. 급성 유양돌기염 합병증을 의심해 응급 이비인후과 평가·정맥 치료와 영상을 진행한다
D. 외이도에만 점이제를 쓰고 경과를 본다

## 해설

중이염 뒤 귀 뒤 부종과 귓바퀴 변위는 유양돌기염의 경고다. 골막하 농양이나 다른 합병증이 의심되면 입원 치료와 함께 영상 및 배농 필요성을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 측두골 CT B의 근거는 단순 고막 천공이 아니라 유양돌기염의 귀뒤 염증·귓바퀴 변위임을 명확히 함.
- 공식/학회 근거: https://www.rch.org.au/clinicalguide/guideline_index/Acute_otitis_media/
- 공식/학회 근거: https://www.bsac.org.uk/paediatricpathways/otitis-media-mastoiditis.php

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004225
- https://www.chop.edu/clinical-pathway/acute-otitis-media-children-2-months-12-years-old-complications
