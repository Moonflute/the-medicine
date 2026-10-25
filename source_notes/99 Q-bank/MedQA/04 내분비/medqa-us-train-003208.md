---
type: qbank
schema_version: 1
id: medqa-us-train-003208
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e802508037257aa251249f96ff779f6ce8c2351f88730279a603588eb41e46d8
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "thyroid nodule"
  - "papillary thyroid carcinoma suspicion"
  - "TSH-first evaluation"
  - "microcalcifications"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDqsrDsoIggKFRoeXJvaWQgTm9kdWxlKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDsnKDrkZDslZQgKFRoeXJvaWQgUGFwaWxsYXJ5IENhcmNpbm9tYSkubWQ
question_type: investigation
difficulty: complex
answer: C
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

40세 여성이 일주일 전 로션을 바르다 발견한 오른쪽 목의 작은 덩이로 내원했다. 체중 변화, 두근거림, 배변 습관 변화는 없고 가족력도 없다. 생리는 30일 간격으로 규칙적이다. 진찰에서 삼킬 때 움직이는 오른쪽 목 종창이 있고 림프절병증은 없다. 목 초음파에서 오른쪽 갑상샘에 미세석회화와 불규칙한 가장자리를 가진 0.9 cm 종괴가 보인다. 다음 중 진단에서 가장 적절한 다음 단계는?

## 선택지

A. 개방 생검
B. 갑상샘 신티그래피
C. 갑상샘자극호르몬 수치
D. 목 CT

## 해설

갑상샘 결절 초기 평가에서 TSH C를 측정한다. TSH가 낮으면 자율기능성 결절 가능성을 평가하기 위해 radionuclide scan을 고려하고, 정상/높은 경우 초음파 위험도와 크기 등을 바탕으로 추가 평가한다. 미세석회화·불규칙 경계는 의심 소견이지만 0.9cm 결절에서 즉시 개방생검을 하는 것은 아니다. 낮은 TSH가 기능항진 가능성을 낮춘다는 기존 문장은 반대이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: TSH 저하이면 기능항진 결절 가능성이 높아 scan을 고려하는데 기존 해설은 반대로 서술.
- https://doi.org/10.1089/thy.2015.0020

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003208
