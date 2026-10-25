---
type: qbank
schema_version: 1
id: medqa-us-train-001821
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:327c76aa2aee85b30b21fec9b638dc0aedaab67ee05e9d5ebdcb3e2a80afa094
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "erythema nodosum"
  - "sarcoidosis"
  - "panniculitis"
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-qysOygiCDtmY3rsJggKEVyeXRoZW1hIE5vZG9zdW0pLm1k
  - MDIg7Zi47Z2h6riwL-ycoOycoeyiheymnSAoU2FyY29pZG9zaXMpLm1k
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
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
---

# MedQA US 임상문제

## 문제

달리 건강한 28세 여성이 14일간 지속된 다리의 통증성 붉은 결절과 권태감 및 경한 관절통으로 내원했다. 처음에는 결절이 작고 서로 떨어져 있었으나 지난 3~4일 동안 일부가 합쳐져 멍처럼 보인다. 발열, 외상 또는 벌레 물림 병력은 없다. 정강이의 압통성 병변 사진이 제시되어 있고 나머지 진찰은 정상이다. 혈구검사와 antistreptolysin O 역가는 정상이며 적혈구침강속도는 30 mm/h이다. 다음 중 가장 적절한 관리 단계는 무엇인가?

## 선택지

A. 경구 amoxicillin
B. 경구 isoniazid
C. 흉부 X선
D. 대변 배양

## 해설


양쪽 정강이의 압통성 홍반성 결절이 멍처럼 변하고 관절통이 동반되는 양상은 결절홍반에 합당하다. 제공되지 않은 사진을 보았다고 가정할 필요 없이 서술된 형태가 진단을 지지한다. 기저 원인으로 사르코이드증·결핵 등을 평가하기 위해 흉부 X선(C)으로 양측 폐문 림프절비대나 폐병변을 확인할 수 있다. 정상 ASO만으로 모든 연쇄구균 연관을 배제하지 않으며, 감염 근거 없이 amoxicillin이나 isoniazid를 곧바로 투여하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001821 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 결절홍반의 임상 단서와 흉부 X선 목적을 보존하고 폐양성 결절이라는 부정확한 표현을 교정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.bad.org.uk/pils/erythema-nodosum

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001821
