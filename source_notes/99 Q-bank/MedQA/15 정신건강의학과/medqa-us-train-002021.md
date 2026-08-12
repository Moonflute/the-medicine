---
type: qbank
schema_version: 1
id: medqa-us-train-002021
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bec7d6e2211ee13f6035489a8463f2faa1b2e1e0b732a1be132f909a75e1679b
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "lithium toxicity"
  - "NSAID interaction"
  - "bipolar disorder"
question_type: adverse_effect
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

37세 여성이 정부 건물 밖에서 알몸으로 발견되어 경찰과 함께 응급실에 왔다. 남편은 ‘미친’ 생각을 한다고 말한다. 말이 빠르고 주제가 급격히 바뀌며 자신이 대통령이 되고 연말까지 20개 언어를 유창하게 배우겠다고 한다. 지난 1년간 우울 삽화가 2회 이상 있었고 최근 요로감염으로 nitrofurantoin을 복용했다. 급성 통풍 발작으로 indomethacin을 복용 중이다. lithium을 처방받은 후 오심, 구토, 빈뇨, 거친 떨림과 전반적 반사항진이 생겼다. 현재 증상을 일으킨 약물은 무엇인가?

## 선택지

A. Acetazolamide
B. Atorvastatin
C. Indomethacin
D. Metoprolol

## 해설


리튬은 NSAID(인도메타신)와 함께 복용 시 신장 배설이 감소해 독성 위험이 증가한다. 환자는 인도메타신 복용 후 리튬 중독 증상을 보였다. 따라서 증상을 일으킨 약물은 인도메타신이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002021
