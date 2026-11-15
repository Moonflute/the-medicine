---
type: qbank
schema_version: 1
id: medqa-us-train-009125
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9a9e40f4c773817a3d663f3c51ca54f0b6a798680845001d6bda0fb1e621c8d1
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "acute compartment syndrome"
  - "급성 구획증후군"
  - "tibial fracture"
  - "경골 골절"
related_disease_slugs:
  - MTEg7Jm46rO8L-uzteqwlSDqtaztmo0g7Kad7ZuE6rWwIChBYmRvbWluYWwgQ29tcGFydG1lbnQgU3luZHJvbWUpLm1k
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0NldGlyaXppbmUubWQ
---

# MedQA US 임상문제

## 문제

36세 남성이 경골 골절로 치료받던 중 진통제에도 종아리 통증이 빠르게 심해졌다. 종아리는 팽팽하고 발목을 수동으로 움직이면 통증이 크게 악화된다. 발 맥박은 만져지고 외부 압박은 풀었다. 급성 구획증후군이 명확할 때 처치는?

## 선택지

A. 발 맥박이 없어질 때까지 관찰
B. 응급 근막절개술
C. 동맥 도플러가 정상이라면 진통제만 증량
D. 골절 고정만 하고 다음 날 재평가

## 해설


급성 구획증후군에서는 맥박이 남아 있어도 조직 관류가 손상될 수 있다. 임상 소견이 명확하면 추가 검사 때문에 응급 감압을 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009125 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 보이지 않는 X선의 경골골절을 확정하지 않고 임상상 급성 구획증후군과 사지허혈 평가를 설명했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.aaos.org/acscpg2025

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009125
- https://www.boa.ac.uk/resource/boast-10-pdf.html
