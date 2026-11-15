---
type: qbank
schema_version: 1
id: medqa-us-test-000670
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:5cb470c51aa6e2a1c84d524524028d9b5468a675bf09abcde71882776a6aca9a
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "말로리-바이스 열상"
  - "상부 위장관 출혈"
  - "알코올 남용"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_sg4HrtoAg7JyE7J6l6rSAIOy2nO2YiCAoVXBwZXIgR2FzdHJvaW50ZXN0aW5hbCBUcmFjdCkubWQ
question_type: management
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

43세 남성이 여러 번 심하게 구토한 뒤 소량의 피를 토했다. 수액 후 활력징후는 안정적이고, 내시경에서 위식도 접합부의 얕은 선상 열상이 보이지만 활동성 출혈은 없다. 적절한 다음 처치는?

## 선택지

A. 활동성 출혈이 없어도 모든 열상을 결찰한다
B. 새 출혈 여부를 관찰하는 등 보존적으로 치료한다
C. 외과적 식도 봉합을 바로 시행한다
D. 정맥류로 보고 경화제를 주입한다

## 해설


심한 구토 뒤 위식도 접합부의 얕은 열상은 말로리–바이스 열상이다. 안정적이고 활동성 출혈이 없으면 대개 보존적으로 치료한다. 출혈이 지속되거나 재발하면 내시경 지혈을 고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: GE 접합부 세로 열상에 활동성 출혈이 없고 활력 안정. 지혈시술보다 수액/관찰 B가 적합하며 achalasia 치료 선택지와 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000670
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12285778/
