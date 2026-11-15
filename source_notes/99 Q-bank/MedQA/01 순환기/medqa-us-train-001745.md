---
type: qbank
schema_version: 1
id: medqa-us-train-001745
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1b11c4f0470efb0b292f4e84d711687a7ea4bbb41c671b420360351432b7f8a9
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "reperfusion injury"
  - "compartment syndrome"
  - "acute limb ischemia"
related_disease_slugs:
  - MTEg7Jm46rO8L-uzteqwlSDqtaztmo0g7Kad7ZuE6rWwIChBYmRvbWluYWwgQ29tcGFydG1lbnQgU3luZHJvbWUpLm1k
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDrj5nrp6Ug7Y-Q7IOJIChBY3V0ZSBBcnRlcmlhbCBPY2NsdXNpb24pLm1k
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 여성이 급성 하지허혈로 색전제거술을 받았다. 재관류 2시간 뒤 발등동맥 맥박은 살아 있지만 종아리 통증이 심해지고 근육이 팽팽하며 저림이 생겼다. 발목을 수동으로 위로 젖히면 심한 통증을 호소한다. 사지를 보존하기 위한 다음 조치는?

## 선택지

A. 하지를 압박하고 경과를 관찰한다
B. 급성 구획증후군으로 판단해 응급 근막절개술을 시행한다
C. 정맥 초음파 결과가 나올 때까지 기다린다
D. 진통제를 증량하고 다음 날 재평가한다

## 해설


재관류 뒤 생긴 팽팽한 종아리, 수동 신장 통증과 감각 이상은 급성 구획증후군의 단서다. 맥박이 만져져도 배제할 수 없으며, 임상적으로 명확하면 검사를 기다리며 근막절개를 미루지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 한·영 본문/선지/정답 B/해설 읽음. 동맥 재개통 직후 심한 통증·부종·신장통과 감각이상은 재관류 손상에 의한 구획압 상승과 일치. 맥박이 일부 있어도 구획증후군이 배제되지 않음. 응급 술기/치료지침 검증 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001745
- https://www.jacc.org/doi/10.1016/j.jacc.2024.02.013
