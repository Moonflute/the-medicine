---
type: qbank
schema_version: 1
id: medqa-us-train-002640
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:64a2aaff336cc21059152f442e873e0ae28535146e9502d99d9c9640da7a3d04
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "bullous pemphigoid"
  - "subepidermal blister"
  - "linear IgG and C3 deposition"
  - "Bullous pemphigoid"
question_type: diagnosis
related_disease_slugs: []
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

68세 남성이 몸통과 사지의 발진으로 내원했다. 3개월간 지속된 가려움이 있었고 최근 숲에서 하이킹을 했다. 가슴, 팔 굴곡부, 어깨에 미만성 수포와 팽팽한 물집이 있으며 피부를 문질러도 수포가 생기지 않는다. 구강검사는 정상이다. 다음 중 이 상태와 가장 관련된 소견은?

## 선택지

A. 혈액배양에서 그람양성균 증식
B. 혈청검사에서 조직 트랜스글루타미나제 항체
C. 직접면역형광검사에서 기저막을 따라 선형으로 침착된 IgG와 C3
D. 피부 생검에서 해면성 피부염

## 해설

노년기에 심한 가려움 뒤 생긴 팽팽한 수포, 음성 Nikolsky 징후 및 점막 보존은 수포성 유사천포창(bullous pemphigoid)을 지지한다. 표피하 수포가 형성되며 직접면역형광에서 기저막을 따라 선형 IgG와 C3 침착(C)이 보인다. 조직 transglutaminase 항체 및 과립형 IgA 침착을 특징으로 하는 포진상피부염과 구분한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 노인의 소양·팽팽한 수포 및 선형 IgG/C3 C는 맞고 수포성 유사천포창을 구진-수포증으로 잘못 번역한 해설을 수정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002640
