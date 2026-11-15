---
type: qbank
schema_version: 1
id: medqa-us-test-001170
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:8f34afc0e07201deb3d25b200d0680d2c6ca15530987905f2b61dd0a29e80ccb
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "호산구성 식도염"
  - "고형식 연하곤란"
  - "아토피 질환"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_si53rj4Qg7ZiR7LCpIChFc29waGFnZWFsIFN0cmljdHVyZSkubWQ
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

천식과 아토피피부염이 있는 35세 남성이 고기를 먹을 때마다 음식이 가슴에 걸린다고 한다. 위내시경에서 폐쇄성 종괴는 없고 식도에 고리와 세로 고랑이 보인다. 의심 질환을 확인할 검사는?

## 선택지

A. 원위부 식도 한 곳에서만 생검
B. 식도 고해상도 내압검사
C. 식도 두 높이 이상에서 여러 조각을 생검
D. 24시간 식도 pH 검사

## 해설


고형식 연하곤란, 아토피와 식도 고리·고랑은 호산구성 식도염을 시사한다. 병변이 군데군데 있을 수 있어 두 높이 이상에서 총 6개 이상 생검을 얻는다. 증상과 함께 고배율 시야당 호산구 15개 이상인지 확인하고 다른 원인도 배제한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 아토피 배경에 고형식 연하곤란과 고용량 PPI에도 지속되는 증상은 EoE C를 지지. 확진에 생검이 필요하다는 해설 연결 확인.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001170
- https://doi.org/10.14309/AJG.0000000000003194
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12834631/
