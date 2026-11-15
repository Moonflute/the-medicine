---
type: qbank
schema_version: 1
id: medqa-us-train-007332
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dbc19b9422fcdf00245678b32a7536ff4f7791f0ce72b569cd35001e9b9faecb
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "급성 사지 허혈"
  - "심방세동 색전"
  - "와파린"
  - "비타민 K 의존성 응고인자"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDrj5nrp6Ug7Y-Q7IOJIChBY3V0ZSBBcnRlcmlhbCBPY2NsdXNpb24pLm1k
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
question_type: prevention
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 여성이 3시간 전 갑자기 시작된 오른쪽 다리 통증과 저림으로 내원했다. 오른발은 차고 창백하며 발등동맥 맥박이 만져지지 않고 발목 힘이 떨어져 있다. 심전도에서 심방세동이 확인됐다. 응급 혈관 재개통을 준비하면서, 금기가 없다면 바로 시작할 약물은?

## 선택지

A. 경구 아스피린 단독
B. 와파린 단독
C. 정맥 비분획 헤파린
D. 실로스타졸

## 해설

갑자기 생긴 통증, 냉감, 맥박 소실과 근력 저하는 급성 사지 허혈을 시사한다. 즉시 혈관팀에 의뢰하고, 금기가 없다면 진단 시 비분획 헤파린으로 혈전 진행을 막는다. 항응고로 긴급 재개통을 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Warfarin기전 C는유지하되모든AF에서유일/최강예방약으로오용하지않음.
- https://www.jacc.org/doi/10.1016/j.jacc.2023.08.017

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007332
- ACC/AHA 하지 말초동맥질환 진료지침(2024): https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251
