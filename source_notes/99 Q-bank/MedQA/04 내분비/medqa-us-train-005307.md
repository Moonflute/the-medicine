---
type: qbank
schema_version: 1
id: medqa-us-train-005307
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5977593a584333cd031c22415c0ce464ef236041ab2dd88f1f07151c9d966c11
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "갑상샘 유두암"
  - "방사선 유발 갑상샘암"
  - "전갑상샘절제술"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDsnKDrkZDslZQgKFRoeXJvaWQgUGFwaWxsYXJ5IENhcmNpbm9tYSkubWQ
  - MDQg64K067aE67mEL-qwkeyDgeyDmOyVlCAoVGh5cm9pZCBDYW5jZXIpLm1k
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 여성의 갑상선 한쪽에 1.2 cm 유두암이 확인됐다. 다른 엽은 정상이고 림프절 전이나 갑상선 밖 침범은 없다. 가족력과 두경부 방사선 치료력도 없다. 환자가 수술을 선택했다면 우선 논의할 절제 범위는?

## 선택지

A. 전절제 뒤 방사성요오드 치료까지 일률적으로 시행
B. 갑상선 협부만 절제
C. 반대쪽 정상 엽만 절제
D. 암이 있는 쪽 갑상선 엽절제술

## 해설

일측에 국한된 저위험 1.2 cm 유두암은 엽절제가 적절한 선택이다. 양측 병변, 전이, 뚜렷한 갑상선 외 침범 등은 별도로 수술 범위를 바꿀 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 방사선병력 PTC 수술 D는 가능하나 모든 작은 방사선관련암의 전절제가 의무라는 과장 교정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13090833/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005307
- https://www.kci.go.kr/kciportal/landing/article.kci?arti_id=ART003086064
- https://doi.org/10.1177/10507256251363120
