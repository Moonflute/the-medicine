---
type: qbank
schema_version: 1
id: medqa-us-train-006300
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f0ebb3cef246c97699ec9e7d4f45f0f2334d435661de29470ee1ef1808116249
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "식도 선암"
  - "식도 종괴"
  - "위식도역류질환"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITsi53rj4Qg7Jet66WYIOyniO2ZmCAoR0VSRCkgKEdhc3Ryb2Vzb3BoYWdlYWwgUmVmbHV4IERpc2Vhc2UpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_si53rj4TslZQgKEVzb3BoYWdlYWwgQ2FuY2VyKS5tZA
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남성이 4개월 전부터 고형식을 삼키기 어려웠고 최근에는 물도 넘기기 어렵다. 특별히 식사량을 줄이지 않았는데 6 kg이 감소했다. 오랜 역류 증상이 있다. 기계적 폐색이나 식도암을 평가할 다음 검사는?

## 선택지

A. 상부위장관 내시경 및 의심 병변 조직검사
B. 제산제를 증량하고 3개월 기다린다
C. 기질적 병변을 확인하기 전에 식도내압검사만 한다
D. 헬리코박터 혈청검사만 한다

## 해설


고형식에서 액체로 진행하는 연하곤란과 체중 감소는 기계적 폐색을 시사하는 경고 소견이다. 내시경으로 병변을 확인하고 조직검사를 시행한다. 종양 위치나 역류 병력만으로 조직형을 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 역류·비만 배경의 진행연하곤란/체중감소와 하부식도종괴는 선암 A에 가장 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006300
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8521465/
