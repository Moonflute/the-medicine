---
type: qbank
schema_version: 1
id: medqa-us-train-000259
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a834745700fbd944088922b29a7efdd34a8581ef173efbad3eadbc73919e5fd7
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "gestational diabetes mellitus"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoOyEsSDri7nrh6jrs5EgKEdlc3RhdGlvbmFsIERpYWJldGVzIE1lbGxpdHVzKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

임신 26주인 31세 초임부에게 임신성 당뇨병 2단계 선별을 시행했다. 비공복 50 g 포도당 부하 1시간 혈당이 156 mg/dL이다. 다음 단계는?

## 선택지

A. 50 g 선별검사를 반복한다
B. 공복 상태에서 100 g 경구포도당부하검사를 시행한다
C. 검사 없이 식사요법만 시작한다
D. 임신성 당뇨병으로 확진하고 인슐린을 시작한다

## 해설


대한당뇨병학회는 임신 24~28주에 75 g 1단계 검사와 50 g 선별검사를 이용한 2단계 접근을 모두 제시한다. 2단계 방식에서 50 g 검사 1시간 혈당 156 mg/dL는 선별 양성이므로 100 g 진단 검사를 시행한다. 선별 양성만으로 확진하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000259
- 대한당뇨병학회, 2025 당뇨병 진료지침: https://www.e-dmj.org/upload/pdf/dmj-2025-0469.pdf
