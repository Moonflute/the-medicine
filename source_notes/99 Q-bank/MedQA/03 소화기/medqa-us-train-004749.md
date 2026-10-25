---
type: qbank
schema_version: 1
id: medqa-us-train-004749
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9cde0ac39faad19fd4b31fe1b3b002199a5eabb9c71068ea3adac5570b776bf8
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "오피오이드 유발 변비"
  - "말초 μ수용체 길항제"
  - "날록세골"
  - "opioid-induced constipation"
related_disease_slugs: []
question_type: adverse_effect
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
  - ZHJ1ZzowMyDshoztmZTquLAvUmFuaXRpZGluZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세의 건강한 여성이 도미니카공화국에서 선택적 유방확대술을 받은 지 6주 후 일차진료를 받으러 왔다. 미국으로 돌아온 뒤 수술 후 관리를 받으라는 안내를 받았다. 현재 오심과 조기 포만감이 불편하다. 과거력으로 라니티딘을 복용하는 위식도 역류질환만 있다. 수술 후 외과의가 준 정체불명의 오피오이드 진통제를 복용해 왔으며 하루에 약 10알씩 먹는다고 한다. 발열은 없고 활력징후는 정상이며 수술 절개부는 잘 아물고 있다. 복부가 팽창되고 고음성이다. 진통제 중단을 거부하고 완하제도 효과가 없을 때 위장 증상을 완화하기 위해 처방할 수 있는 약물은 무엇인가?

## 선택지

A. 판토프라졸
B. 센나
C. 날록세골
D. 나프록센

## 해설

오피오이드 복용 후 발생하고 완하제 반응이 불충분한 변비에서 C의 naloxegol은 말초 μ-opioid 수용체를 차단해 오피오이드의 장운동 억제 효과를 줄인다. 장수축을 억제하는 약이 아니다. 장폐색이 의심되면 금기이며, 약명도 불명확한 하루 10정 복용의 용량·적응증·안전성과 감량 가능성도 함께 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Naloxegol이 장수축을 억제한다는 역방향 기전을 말초 μ길항으로 교정.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=300a6474-ebcd-4404-8040-48fdcfcc1635

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004749
