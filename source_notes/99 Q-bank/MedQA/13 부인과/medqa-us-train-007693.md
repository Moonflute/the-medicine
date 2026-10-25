---
type: qbank
schema_version: 1
id: medqa-us-train-007693
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:96f1f16e0c548eae7279b99906e8b87dd4e46e997df0ba1b6b9b75517e64b6a3
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "cervical cancer screening"
  - "Pap test"
  - "HPV cotesting"
question_type: prevention
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gOyVlCAoQ2VydmljYWwgQ2FuY2VyKS5tZA
difficulty: simple
answer: "C"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 세포검사 단독 음성 뒤의 선별 간격 교정."
curation_status: "revised"
curation_reason: "세포검사 단독 음성 뒤의 선별 간격 교정."
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

58세 여성이 정기 부인과 진료를 위해 내원했다. 급성 증상은 없고 지난 1년간 성생활을 하지 않았다고 한다. 마지막 자궁경부 세포검사는 비정상 세포가 없었다. 이번 방문에서 시행한 골반검사와 자궁경부 세포검사도 특이 소견이 없었다. 다음 중 이 환자에게 가장 적절한 자궁경부암 선별검사 방법은?

## 선택지

A. 세포검사 결과 확인을 위해 이번 방문에 질확대경검사
B. 3년 후 질확대경검사
C. 세포검사 단독 선별을 계속한다면 3년 후 자궁경부 세포검사
D. 5년 후 자궁경부 세포검사만 시행

## 해설

평균위험 30~65세에서 세포검사만을 사용하는 선별 전략의 간격은 3년이다. HPV 단독 또는 cotest의 5년 간격은 해당 HPV 기반 음성 결과가 있을 때의 전략이다. 이 사례에는 HPV 음성이 제시되지 않았으므로 세포검사 음성만으로 5년을 기다리게 하지 않는다. 최근 성생활이 없다는 이유로 검사를 중단하거나 정상 세포검사에 질확대경을 시행하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 세포검사 단독 음성 뒤의 선별 간격 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.cdc.gov/std/treatment-guidelines/hpv-cancer.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007693

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
