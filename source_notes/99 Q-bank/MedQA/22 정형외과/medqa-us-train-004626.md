---
type: qbank
schema_version: 1
id: medqa-us-train-004626
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:160bde2046370bc495b971866f0dbfb78c545b2ee1fbeb564407d477028f9900
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "급성 구획증후군"
  - "사지 허혈"
  - "외상성 근육 손상"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-uzteqwlSDqtaztmo0g7Kad7ZuE6rWwIChBYmRvbWluYWwgQ29tcGFydG1lbnQgU3luZHJvbWUpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

아래팔 골절 뒤 통증이 갈수록 심해지고 진통제에도 가라앉지 않는다. 아래팔이 팽팽하며 손가락을 수동으로 펼 때 통증이 심하다. 감각이 둔해지지만 손목 맥박은 만져진다. 다음 처치는?

## 선택지

A. 맥박이 사라질 때까지 기다린다
B. 석고를 더 조인다
C. 냉찜질 뒤 퇴원시킨다
D. 응급 근막절개술을 준비한다

## 해설

수동 신장 통증, 팽팽한 구획과 진행하는 감각 저하는 급성 구획증후군의 단서다. 맥박이 남아 있어도 배제할 수 없다. 조이는 외부 물질을 풀고 즉시 정형외과 감압을 진행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 명확한 임상적 구획증후군에서는 압력 측정 때문에 감압을 지연하지 않는다는 점과 혈관 손상 평가도 필요함을 보완했다. 중독 자체만으로 측정이 수술보다 우선은 아니다.
- 공식/학회 근거: https://www.boa.ac.uk/resource/boast-10-pdf.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004626
