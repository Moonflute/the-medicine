---
type: qbank
schema_version: 1
id: medqa-us-train-004217
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f5adeb7464940dedad1107c309b27810ffe3afce3168904a48df8459b9a03a4d
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "안검염"
  - "눈꺼풀 위생"
  - "마이봄샘 기능장애"
  - "Blepharitis"
question_type: management
related_disease_slugs:
  - MTgg7JWI6rO8L-uIiOq6vO2SgO2FjOyXvCAobWFyZ2luYWwgYmxlcGhhcml0aXMpLm1k
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
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 환자가 아침마다 속눈썹 뿌리에 딱지가 생기고 눈꺼풀 가장자리가 따갑다고 한다. 양쪽 눈꺼풀 테가 붉지만 시력은 정상이고 화농성 분비물은 없다. 초기 관리는?

## 선택지

A. 경구 항생제를 장기 사용한다
B. 항진균 점안제를 시작한다
C. 온찜질하고 눈꺼풀 가장자리를 부드럽게 세정한다
D. 스테로이드 점안제를 계속 사용한다

## 해설

속눈썹 기저 각질과 양쪽 눈꺼풀 가장자리 염증은 안검염을 시사한다. 온찜질과 눈꺼풀 위생이 기본이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 대장암 선별 해설은 무관. 만성 안검염의 눈꺼풀 위생/온찜질로 해설 교체. 원정답 D 유지.
- 공식/학회 근거: https://www.aao.org/eye-health/diseases/what-is-blepharitis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004217
- https://www.aaojournal.org/article/S0161-6420%2824%2900008-3/fulltext
