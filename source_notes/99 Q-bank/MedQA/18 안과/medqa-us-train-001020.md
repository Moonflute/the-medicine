---
type: qbank
schema_version: 1
id: medqa-us-train-001020
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:46a8a84410efff4c7067660857e14688bb07b77f010424263bf6e5e5056de4ec
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "Choroidal melanoma"
  - "Macular degeneration"
  - "Open-angle glaucoma"
  - "Retinal detachment"
question_type: investigation
related_disease_slugs:
  - MTgg7JWI6rO8L-uCmOydtOq0gOugqO2ZqeuwmOuzgOyEsSAoYWdlIHJlbGF0ZWQgbWFjdWxhciBkZWdlbmVyYXRpb24pLm1k
  - MTgg7JWI6rO8L-unneunieuwleumrCAocmV0aW5hbCBkZXRhY2htZW50KS5tZA
difficulty: simple
answer: A
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

75세 환자가 전에는 반듯하던 문틀이 최근 한쪽 눈으로 보면 휘어 보인다고 한다. 황반에 드루젠이 있고 새로 중심시력이 떨어졌다. 황반의 삼출과 망막하액을 확인할 우선 검사는?

## 선택지

A. 황반 광간섭단층촬영
B. 전방각경검사
C. 시신경유두 사진만 촬영
D. 각막 지형도 검사

## 해설


나이관련 황반변성 환자의 새 변형시나 중심시력 저하에서는 신생혈관성 변화를 의심한다. 황반 광간섭단층촬영은 망막하액·망막내액 등을 확인하는 데 적합하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001020
- https://pubmed.ncbi.nlm.nih.gov/39918524/
