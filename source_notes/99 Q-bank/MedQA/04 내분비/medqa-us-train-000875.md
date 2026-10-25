---
type: qbank
schema_version: 1
id: medqa-us-train-000875
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:119a11def23465969ecb626106849a5c9af62f9a6411777c650c3b9b2f0c8511
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "pheochromocytoma"
related_disease_slugs:
  - MDQg64K067aE67mEL-2BrOuhrOy5nO2ZlOyEuO2PrOyihSAoUGhlb2Nocm9tb2N5dG9tYSkubWQ
question_type: management
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcmFsYXppbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 남성이 1시간 동안 지속된 심한 박동성 두통(pulsatile headache)을 주소로 응급실에 내원했다. 환자는 두근거림(palpitations)도 있다고 말한다. 그는 과거에도 여러 차례 두통 증상이 있었으나 의료적 도움 없이 호전되었다고 덧붙였다. 그는 비흡연자이며 술은 마시지 않는다. 불법 약물 사용은 부인한다. 환자는 겁에 질려 있고 불안해 보인다. 체온은 37°C, 호흡수는 분당 25회, 맥박은 분당 107회, 혈압은 221/161 mm Hg이다. 긴급 소변 검사에서 혈장 메타네프린(plasma metanephrines) 수치가 상승한 것으로 나타났다. 이 환자의 치료를 위한 다음 단계로 가장 적절한 것은 무엇인가?

## 선택지

A. 프로프라놀롤(Propranolol) 투여 후 페녹시벤자민(phenoxybenzamine) 투여
B. 페녹시벤자민(phenoxybenzamine) 투여 후 프로프라놀롤(propranolol) 투여
C. 암로디핀(Amlodipine)
D. 히드랄라진(Hydralazine)

## 해설

정답은 B이다. 심한 발작성 두통·심계항진·고혈압과 metanephrine 증가는 갈색세포종을 시사한다. 먼저 phenoxybenzamine 등으로 충분한 α차단을 시행한 뒤 필요하면 β차단제를 추가한다. β차단을 먼저 하면 α매개 혈관수축이 억제되지 않아 고혈압 위기를 악화시킬 수 있다. 급성 중증 고혈압에서는 감시하에 신속히 작용하는 정맥약 등 안정화가 필요하며 경구 수술 전 준비 순서만으로 응급치료를 대체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 정답 B와 반대였던 β→α 차단 해설을 α→β로 교정. pulsatile headache를 두근거림으로 오역한 본문도 수정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12819074/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000875
