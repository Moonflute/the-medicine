---
type: qbank
schema_version: 1
id: medqa-us-train-006212
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ec07c469df9553d6b96df499c94f8d8dd27b2cfede395419d3c3694bb34662b5
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "유방암 의심 종괴"
  - "중심침생검"
  - "유방암 진단"
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
question_type: investigation
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

57세 환자의 유방에서 새 단단한 종괴가 만져진다. 진단용 유방촬영과 초음파에서 불규칙한 고형 종괴가 보이며 BI-RADS 5로 분류됐다. 다음 검사는?

## 선택지

A. 6개월 뒤 유방촬영만 반복한다
B. 영상 유도 중심바늘생검
C. 혈청 CA 15-3 검사로 확진한다
D. 조직 확인 없이 바로 전유방절제술을 한다

## 해설


악성이 강하게 의심되는 종괴는 영상 유도로 중심바늘생검을 시행해 조직학적 진단과 수용체 검사에 필요한 검체를 얻는다. 추적 영상이나 혈청 표지자만으로 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006212 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 영상에서 의심되는2cm 유방종괴의 조직확진으로 core needle biopsy D를 원문 및 현행 진단 원칙과 대조해 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.radiologyinfo.org/en/info/acs-palpable-breast-masses

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006212
- https://pubmed.ncbi.nlm.nih.gov/37236740/
