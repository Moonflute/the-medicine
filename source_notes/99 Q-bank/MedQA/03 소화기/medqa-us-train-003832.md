---
type: qbank
schema_version: 1
id: medqa-us-train-003832
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e0f3e67ad38c26f56e9bd9a0cf42d93f70d88d5584412d3607d6c35b71f2a41b
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "multiple endocrine neoplasia type 1"
  - "gastrinoma"
  - "primary hyperparathyroidism"
  - "hypercalcemia and nephrolithiasis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsIDsiqTtirjrprDsooUgKEdhc3RyaW5vbWEpLm1k
  - MDQg64K067aE67mEL-u2gOqwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVycGFyYXRoeXJvaWRpc20pLm1k
question_type: mechanism
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 여성이 악취 나는 옅은 설사, 오른쪽 옆구리 통증, 반복되는 무릎 관절통으로 내원했다. 불응성 역류와 위·십이지장 궤양으로 오메프라졸을 복용 중이며, 초음파에서 우측 요관신우접합부에 이동성 고에코 구조물이 보였다. 다음 중 추가 평가에서 가장 가능성 높은 소견은?

## 선택지

A. 고혈압 위기
B. 피부 홍조
C. 고칼슘혈증
D. 심전도 QT 연장

## 해설


MEN 1은 고칼슘혈증을 일으키는 부갑상선 종양을 포함한다. 고칼슘혈증은 신장결석과 연관이 있어 추가 평가에서 가장 가능성 높은 소견이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 난치궤양/설사의 gastrinoma와 신결석은 MEN1의 부갑상샘항진/고Ca C 조합을 시사.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003832
