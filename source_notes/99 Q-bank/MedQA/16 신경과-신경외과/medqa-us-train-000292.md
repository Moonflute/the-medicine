---
type: qbank
schema_version: 1
id: medqa-us-train-000292
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2e5eac90822b935f716d4ab33c4fd459834074dcb998e6e8a870d0623851b795
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "intracranial hemorrhage"
  - "diabetes insipidus"
question_type: diagnosis
related_disease_slugs:
  - MDQg64K067aE67mEL-yalOu2leymnSAoRGlhYmV0ZXMgSW5zaXBpZHVzKS5tZA
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_stpztmIjshLEg64eM7KG47KSRIChIZW1vcnJoYWdpYyBTdHJva2UpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2xvcGlkb2dyZWwubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
---

# MedQA US 임상문제

## 문제

중증 뇌출혈로 입원한 환자가 갑자기 소변을 시간당 350 mL씩 보기 시작했다. 혈청 Na는 154 mmol/L, 소변 삼투질농도는 90 mOsm/kg이다. 최근 만니톨과 이뇨제 사용은 없고 혈당은 정상이다. 가장 가능성 높은 원인은?

## 선택지

A. 삼투성 이뇨
B. 중추성 요붕증
C. 항이뇨호르몬 부적절분비증후군
D. 일차성 다음증

## 해설


혈장 나트륨이 높은데도 매우 묽은 소변이 계속 나오면 바소프레신 작용 저하를 의심한다. 급성 두개내 손상 직후에는 중추성 바소프레신 결핍을 고려한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000292
- https://pubmed.ncbi.nlm.nih.gov/29930026/
