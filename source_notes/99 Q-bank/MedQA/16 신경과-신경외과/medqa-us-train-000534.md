---
type: qbank
schema_version: 1
id: medqa-us-train-000534
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8320ced22be767bc50ef8278f3ea18ea75c56a44d6b7767390463df56d6d9356
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "myasthenia gravis"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_spJHspp0g6re866y066Cl7KadIChNeWFzdGhlbmlhIGdyYXZpcykubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 환자가 중증근무력증으로 확진됐다. 저녁에 안검하수와 씹기 피로가 심하지만 호흡·연하는 안정적이다. 신경근 전달을 개선해 증상을 줄이는 초기 약은?

## 선택지

A. 아트로핀
B. 레보도파
C. 피리도스티그민
D. 바클로펜

## 해설

피리도스티그민은 아세틸콜린에스테라제를 억제해 신경근접합부의 전달을 돕는다. 증상치료이므로 면역치료의 필요성은 별도로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 휴식으로 호전되는 피로성 근력저하의 MG A를 유지하고 본문이 부인한 호흡곤란과 근위축을 만들어낸 해설을 교체한다.
- 공식/학회 근거: https://www.neurology.org/doi/10.1212/wnl.0000000000002790

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000534
- https://pubmed.ncbi.nlm.nih.gov/40940171/
