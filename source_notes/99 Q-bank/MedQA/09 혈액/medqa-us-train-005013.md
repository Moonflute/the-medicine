---
type: qbank
schema_version: 1
id: medqa-us-train-005013
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a3a24405906b4c2d8f765f0984f5fb790676d33b923e3bb46c618d1e6bb374ff
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "급성 전골수구성 백혈병"
  - "t(15;17) 전좌"
  - "좋은 예후 인자"
related_disease_slugs:
  - MDkg7ZiI7JWhL-q4ieyEsSDsoITqs6jsiJjshLEg67Cx7ZiI67ORIChBUEwgTTMpIChBY3V0ZSBQcm9teWVsb2N5dGljIExldWtlbWlhKS5tZA
question_type: prognosis
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

70세 남자가 한 달 동안 심한 피로와 2 kg의 의도하지 않은 체중 감소로 내원했다. 결막이 창백하고 다리와 구개에 점상출혈, 양측 무통성 경부 림프절병증이 있다. 다음 중 병력이나 검사 결과에서 좋은 예후를 가장 잘 시사하는 요인은?

## 선택지

A. 골수형성이상증후군 병력
B. 백혈구 수 100,000/mm³ 초과
C. 이전에 세포독성 약물 치료를 받은 병력
D. t(15;17) 전좌

## 해설


나열된 소견 중 t(15;17), PML::RARA는 APL을 지지하며 적절한 분화/표적치료에 좋은 반응을 보여 상대적으로 양호한 예후 인자 D이다. 이는 초기 DIC·출혈 위험이 낮다는 뜻은 아니며 의심 APL은 응급 평가·치료가 필요하다. 기존 MDS·세포독성 치료나 극심한 백혈구증가는 일반적으로 유리한 예후 인자가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005013 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: PML::RARA t(15;17) D의 표적치료 반응 및 상대적 양호 예후 유지; 초기 치명적 응고병증 위험과 구분.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005013
