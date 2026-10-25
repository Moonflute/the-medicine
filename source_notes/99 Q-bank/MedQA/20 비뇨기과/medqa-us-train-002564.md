---
type: qbank
schema_version: 1
id: medqa-us-train-002564
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9a97ae9536ff83b7390a34cd706372c6c43b2a14ee235bb033bea72e12b8fef3
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "testicular tumor"
  - "solid scrotal mass"
  - "nontransilluminating mass"
  - "Testicular tumor"
question_type: diagnosis
related_disease_slugs: []
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 남성이 어제 샤워 중 발견한 오른쪽 무통성 음낭 부종으로 내원했다. 두 여성과 성생활을 하며 콘돔은 일관되게 사용하지 않는다. 2년 전 아르헨티나에서 미국으로 이주했고 예방접종 기록은 없다. 검사에서 오른쪽 고환에 단단하고 압통 없는 고형 종괴가 있고 빛이 투과되지 않으며 누워도 줄어들지 않는다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 고환염
B. 고환수종
C. 음낭탈장
D. 고환 종양

## 해설

고환 안의 단단하고 무통성인 고형 종괴, 비투과성 및 누워도 줄지 않는 양상은 D, 고환 종양에 가장 합당하다. 수종은 보통 액체가 빛을 통과시키며, 고환염은 통증·염증 소견이 더 전형적이고 탈장은 환원성이나 크기 변화가 단서가 된다. 이 임상상만으로 종양이 비전이성이라고 병기를 정할 수는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 고환 종양을 비전이성으로 단정하고 수종의 빛 투과를 전이 가능성으로 혼동한 설명 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002564
