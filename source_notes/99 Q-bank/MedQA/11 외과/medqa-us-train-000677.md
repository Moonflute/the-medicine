---
type: qbank
schema_version: 1
id: medqa-us-train-000677
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bd060f9588581cfda261d07f1b3c5440dba60d81cdc072729045a51798a551d1
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "urinary retention"
related_disease_slugs: []
question_type: management
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRnVyb3NlbWlkZS5tZA
---

# MedQA US 임상문제

## 문제

40세 여성이 합병증 없는 충수절제술(appendectomy) 후 외과 병동에 입원하였다. 환자는 어제 수술을 받았으며 수술 후 경과는 순조로웠다. 그러나 현재 환자는 소변을 완전히 볼 수 없다고 호소한다. 또한 치골상부(suprapubic) 부위의 통증을 호소한다. 진찰 결과 치골상부 영역의 압통과 팽만을 확인하였다. 간호사에게 방광 스캔을 시행하도록 요청하였고, 450cc가 확인되었다. 다음으로 적절한 처치는 무엇인가?

## 선택지

A. 경구 bethanechol chloride 투여
B. 정맥 내 neostigmine methylsulfate 투여
C. 정맥 내 furosemide 투여
D. 도뇨(catheterization)

## 해설


수술 후 급성 요폐는 방광에 잔량이 남아있으며, 가장 빠른 해결책은 카테터 삽입으로 방광을 비우는 것이다. 따라서 도뇨가 정답이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000677 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수술 후 통증성 방광 팽만과 450mL 잔뇨에서 도뇨 D가 적절하고 원문·해설이 일치한다. bethanechol이나 이뇨제로 급성 배액을 대체하지 않는다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.niddk.nih.gov/-/media/Files/Urologic-Diseases/UrinaryRetention_508.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000677
