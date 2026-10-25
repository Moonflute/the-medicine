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
question_type: 임상증례 객관식
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-q4ieyEsSDsnKDslpHrj4zquLDsl7wgKEFjdXRlIE1hc3RvaWRpdGlzKS5tZA
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUGhlbnlsZXBocmluZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

9개월 여아가 3일간 지속된 발열, 보챔, 오른쪽 귀 분비물로 응급실에 왔다. 3주 전에도 귀 통증과 발열이 있었으나 진료를 받지 않고 대증치료로 호전되었다. 잦은 감염의 가족력은 없다. 아파 보이고 체온은 39.3°C이다. 오른쪽 귀 뒤에 홍반과 압통이 있으며 귓바퀴가 가쪽 및 아래쪽으로 밀려 있다. 이경검사에서 팽창하고 혼탁한 고막과 고름이 흘러나오는 소견이 보인다. 헤모글로빈 11.5 g/dL, 백혈구 15,800/mm³, 호중구 80%, 호산구 1%, 림프구 17%, 단핵구 2%, 혈소판 258,000/mm³이다. 가장 적절한 다음 관리는 무엇인가?

## 선택지

A. 페닐에프린 비강 점적
B. 측두골 CT
C. 경구 아목시실린
D. 경구 아스피린

## 해설

급성 중이염 뒤 고열, 귀뒤 홍반·압통과 귓바퀴의 가쪽/아래쪽 변위는 급성 유양돌기염 및 골막하 농양 가능성을 시사한다. 제시된 선택지에서는 B, 측두골 CT가 합병증 범위를 평가하는 데 적절하다. 단순한 고막 천공이나 이루만 있다는 이유로 모든 중이염에 CT가 필요한 것은 아니다. 이 상태는 신속한 이비인후과 평가와 정맥 항생제 치료를 필요로 하므로 경구 amoxicillin만으로 외래 치료하는 상황과 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 측두골 CT B의 근거는 단순 고막 천공이 아니라 유양돌기염의 귀뒤 염증·귓바퀴 변위임을 명확히 함.
- 공식/학회 근거: https://www.rch.org.au/clinicalguide/guideline_index/Acute_otitis_media/
- 공식/학회 근거: https://www.bsac.org.uk/paediatricpathways/otitis-media-mastoiditis.php

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004225
