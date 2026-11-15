---
type: qbank
schema_version: 1
id: medqa-us-test-000089
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:22d142a37242c48d758416d1efc4d87878b5c637b9ac2403f0e51287234ae26c
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "흉부 대동맥 파열"
  - "고속 외상"
  - "종격동 확장"
  - "Traumatic aortic injury"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpSDrsJXrpqwgKEFvcnRpYyBEaXNzZWN0aW9uKS5tZA
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

26세 여성이 고속 충돌 사고 후 흉통으로 왔다. 기도와 호흡을 안정시키고 혈압은 유지된다. 흉부 X선에서 종격동이 넓다. 둔상에 의한 흉부 대동맥 손상 확인을 위한 우선 검사는?

## 선택지

A. 추적 흉부 X선만 촬영
B. 흉부 비조영 CT
C. 핵의학 심근 관류검사
D. 흉부 CT 혈관조영술

## 해설


감속 손상 뒤 종격동이 넓으면 흉부 대동맥 손상을 의심한다. 안정된 환자는 흉부 CTA로 손상 유무와 위치를 확인하며, 단순 X선만으로 확진하거나 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000089 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고에너지 감속손상과 종격동 소견의 진단 추론을 유지하고 최빈 원인·즉시 치명적이라는 과도한 단정을 수정했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000089
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12522690/
- https://pubmed.ncbi.nlm.nih.gov/41874481/
