---
type: qbank
schema_version: 1
id: medqa-us-train-003906
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:acb8c4ebce0ca61a60cc73210f6b83b857533790ea9b20e6690c5df4c70193a3
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Cushing disease"
  - "pituitary microadenoma"
  - "hypercortisolism"
  - "central obesity and striae"
related_disease_slugs:
  - MDQg64K067aE67mEL-y_oOyLseuzkSAoQ3VzaGluZydzIERpc2Vhc2UpLm1k
question_type: diagnosis
difficulty: complex
answer: A
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

40세 남성이 3개월간 10 kg의 의도하지 않은 체중증가, 성욕저하, 지성피부, 수면장애로 내원했다. 중심성 비만, 여드름, 얇고 쉽게 멍드는 피부, 복부 선조, 점막과 피부 주름의 색소침착, 근위부 근육 위축과 고혈당이 있었다. 다음 중 영상검사에서 가장 가능성 높은 소견은?

## 선택지

A. 뇌하수체 미세선종
B. 갑상샘 크기 감소
C. 다발성 신장 낭종
D. 부신암

## 해설

전형적 Cushing 양상과 색소침착은 ACTH의존성 고코르티솔혈증 가능성을 시사한다. 선택지 중 뇌하수체 미세선종 A가 Cushing disease의 흔한 원인이다. 전체 Cushing syndrome에서는 외인성 glucocorticoid 노출을 먼저 확인해야 하며 영상만으로 진단하지 않고 cortisol/ACTH 검사와 종양 국소화를 단계적으로 시행한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 내인성 ACTH의존성 Cushing의 pituitary adenoma A를 모든 Cushing 최다원인으로 일반화한 설명 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003906
