---
type: qbank
schema_version: 1
id: medqa-us-train-006899
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ee828d3cf80be9c728e48b252377b93dfcc06a9e9a16ec63b0056a20ff9c83fe
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "급성 게실염"
  - "좌하복부 통증"
  - "복부 CT"
  - "Acute diverticulitis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsozsi6Tsl7wgKERpdmVydGljdWxpdGlzKS5tZA
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

70세 남성이 이틀간 지속된 왼쪽 아랫배 통증과 발열로 왔다. 국소 압통과 백혈구 증가가 있어 급성 게실염이 의심된다. 혈압과 콩팥기능은 안정적이다. 농양·천공 여부까지 함께 확인할 초기 영상검사는?

## 선택지

A. 복부 단순 X선
B. 조영증강 복부·골반 CT
C. 흉부 CT
D. 응급 대장내시경

## 해설


조영증강 CT는 게실 주변 염증을 확인하고 농양이나 천공 등 합병증을 평가한다. 급성기에 대장내시경을 초기 검사로 시행하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 본문·4선지·B 정답·해설 및 영어 원문 대조. 좌하복부 통증·발열·백혈구 증가의 게실염 의심에서 CT 선택이 일치하며 불일치 플래그는 확인되지 않음. 자동 플래그만으로 해설 교체하지 않음.
- https://acsearch.acr.org/list/TopicNarrativePdf?topicId=20

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006899
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13434530/
