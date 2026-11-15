---
type: qbank
schema_version: 1
id: medqa-us-train-003440
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6339b8eafb945508f6907ef60e50e4e867f13f79d4aee0e20c0532a5134546cc
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "hyperchloremic metabolic acidosis"
  - "postoperative fistula"
  - "bicarbonate loss"
  - "pancreatic surgery"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
question_type: mechanism
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

췌십이지장절제술 후 배액관으로 다량의 췌장액이 빠져나오는 환자에서 pH 7.20, Na 133, Cl 115, HCO₃⁻ 10 mEq/L이다. 이 산염기 이상의 주된 원인은?

## 선택지

A. 위산 소실
B. 젖산 축적
C. 케톤체 축적
D. 배액을 통한 중탄산염 소실

## 해설

음이온차는 133−115−10=8 mEq/L로 증가하지 않았다. 중탄산염이 많은 췌장액이 소실되면 고염소혈증성 정상 음이온차 대사산증이 생긴다. 위산을 잃는 구토는 오히려 대사성 알칼리증을 일으키기 쉽다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 D 유지. 누공 손실액을 위액으로 오해하지 않도록 췌장액/장액 중탄산염 소실로 구체화하고 AG 계산과 구토의 반대 기전 설명.
- https://site.thoracic.org/assemblies/cc/clinical-education/interpretation-of-abgs

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003440
- https://www.sciencedirect.com/science/article/abs/pii/S0261561423002455
