---
type: qbank
schema_version: 1
id: medqa-us-train-005098
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:05630eb3507deb68478bf89f68aca04ea04368757f2ca3e7c5f13d6a093953de
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "파제트 골질환"
  - "골변형"
  - "파제트병 관련 청력소실"
question_type: prognosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-2MjOygnO2KuOuzkSAoUGFnZXQncyBEaXNlYXNlKS5tZA
  - MDQg64K067aE67mEL-qzqOuLpOqzteymnSAoT3N0ZW9wb3Jvc2lzKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
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

62세 남자가 2개월 동안 쉬어도 호전되지 않는 오른쪽 다리 통증으로 내원했다. 오른쪽 경골이 앞쪽으로 휘어 있고 X선에서 골밀도가 증가·감소한 다발성 병변과 피질골 비후가 보인다. 혈청 ALP가 현저히 상승하고 칼슘과 인은 정상이다. 다음 중 가장 발생하기 쉬운 합병증은?

## 선택지

A. 신부전
B. 고박출성 심부전
C. 골육종
D. 청력 저하

## 해설

경골 변형, 혼합 골용해·경화와 피질골 비후, 정상 칼슘·인에 비해 높은 ALP는 골 Paget병을 시사한다. 두개골 침범 시 청력장애(D)가 생길 수 있으며 전음성·감각신경성 또는 혼합 양상일 수 있다. 골육종과 고박출성 심부전도 가능하지만 상대적으로 드문 합병증이다. 본문에서 두개골 침범이 이미 확인되었다고 단정하지는 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Paget병의 청력저하를 감각신경성으로만 한정한 일반화를 교정했다. 다른 제시 합병증보다 청력장애 D가 전형적임을 유지한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005098
