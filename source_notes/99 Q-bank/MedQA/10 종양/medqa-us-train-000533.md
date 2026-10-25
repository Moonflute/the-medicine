---
type: qbank
schema_version: 1
id: medqa-us-train-000533
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ede5b212c41fe2f90890c7e2886b3ebe5aa27c782531a615eb12450ec4c08596
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "breast cancer"
  - "brain metastasis"
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
question_type: management
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

45세 여성이 지난 한 달간 악화된 두통으로 입원하였다. 환자는 두통이 주로 전반적이며 수면 중에 자주 발생한다고 하였다. 편두통이나 다른 유형의 두통 병력은 없다. 과거력상 1년 전 유방암을 진단받고 유방절제술을 시행받은 병력이 있다. 환자는 완전히 회복되어 곧바로 직장에 복귀하였다. 현재 뇌 CT 검사상 좌측 대뇌 반구의 회백질-백질 경계 부위에 부종을 동반한 5cm 크기의 단일 피질 종괴가 관찰된다. 환자는 추가적인 치료를 위해 입원하였다. 이 환자의 치료를 위한 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 화학요법
B. 발작 예방 및 완화적 통증 치료
C. 뇌 종괴에 대한 방사선 조사
D. 종괴의 수술적 절제

## 해설


단일 5 cm 종괴와 부종·두통은 큰 증상성 뇌전이를 의심하게 하며 절제 가능하면 수술(D)로 감압·조직진단을 얻는 것이 유리할 수 있다. 모든 뇌전이를 수술하는 것은 아니고 전신 상태·병기·위치와 수술 후 국소 방사선 등을 함께 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000533 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 증상성 단일 5cm 뇌전이 의심에서 수술 D 유지. 모든 뇌전이는 수술이 근본치료라는 과장 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8917399/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000533
