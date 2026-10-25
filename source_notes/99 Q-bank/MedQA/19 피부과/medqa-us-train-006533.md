---
type: qbank
schema_version: 1
id: medqa-us-train-006533
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e00fdf5439cc04f51b1ce6649a56199a89a5eedd54f2c4bbeb7eed4318904192
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "흑색종 감별"
  - "색소성 모반"
  - "피부 병변 ABCDE 평가"
  - "melanoma"
question_type: diagnosis
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-yVheyEsSDtnZHsg4nsooUgKE1hbGlnbmFudCBNZWxhbm9tYSkubWQ
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

고혈압과 고지혈증 병력이 있는 60세 백인 남성이 귀에 ‘점’이 생겼다고 가족의학과에 내원했다. 35년 동안 건설 노동자로 일하며 대부분의 시간을 야외에서 보냈다. 가족력은 특이사항이 없다. 진찰에서 왼쪽 귀에 어두운 병변이 보인다. 예전부터 그 자리에 점이 있었지만 최근 훨씬 커졌다고 한다. 그 외 계통문진은 음성이다. 다음 중 이 환자에서 안심할 수 있는 병변 특징은?

## 선택지

A. 불규칙하고 경계가 불분명함
B. 병변 비대칭
C. 시간에 따른 변화
D. 한 가지 어두운 색

## 해설

흑색종을 의심하는 특징에는 비대칭·불규칙 경계·색조 다양성·변화가 있다. 제시 선지 중 한 가지 색조(D)가 상대적으로 덜 의심스럽지만 단일 색의 흑색종도 가능하다. 이 환자는 기존 점의 빠른 성장을 보고했으므로 D만으로 양성 모반이라 확정하거나 평가를 중단해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 선지 중 단일 색조 D가 상대적으로 덜 의심스러운 특징이나 급격히 커지는 병변을 양성이라고 안심시킨 설명을 수정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006533
