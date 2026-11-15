---
type: qbank
schema_version: 1
id: medqa-us-train-007980
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:804d66e60d247a1fa3acc0931c459e85a2b3c111d063e887c4c1df685cc2f309
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "osteoporosis"
  - "raloxifene"
  - "hot flashes"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzqOuLpOqzteymnSAoT3N0ZW9wb3Jvc2lzKS5tZA
question_type: management
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9BbGVuZHJvbmF0ZS5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9SYWxveGlmZW5lLm1k
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0xvcmF0YWRpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 여성이 골다공증으로 데노수맙을 3년간 투여받았다. 치료를 중단하기로 했고 신기능은 정상이며 비스포스포네이트 금기가 없다. 중단 후 골절 위험을 줄일 대책은?

## 선택지

A. 칼슘과 비타민 D만 사용
B. 아무 약 없이 2년 후 골밀도만 확인
C. 비스포스포네이트로 연속 치료를 계획한다
D. 테리파라타이드 단독으로 즉시 전환한다

## 해설

데노수맙을 대체 치료 없이 중단하면 골흡수가 급증해 척추골절 위험이 올라갈 수 있다. 중단 시점에 맞춰 비스포스포네이트 등 골흡수 억제제의 연속 치료를 계획한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 신생아 호흡곤란 해설을 랄록시펜의 선택적 에스트로겐수용체 조절 및 안면홍조 부작용 해설로 교체. 유방암 가족력의 maternal aunt를 외할머니에서 이모로 수정. 원정답 C 유지.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c05521f8-95d2-44b8-8433-eba539c0f84c

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007980
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11439573/
