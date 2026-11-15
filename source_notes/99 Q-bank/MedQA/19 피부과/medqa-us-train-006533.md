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
question_type: investigation
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-yVheyEsSDtnZHsg4nsooUgKE1hbGlnbmFudCBNZWxhbm9tYSkubWQ
difficulty: standard
answer: B
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

60세 남성이 등에 있던 점이 최근 몇 달 사이 커졌다고 내원했다. 8 mm 병변은 비대칭이고 가장자리와 색조가 불규칙하다. 재건 없이 온전히 제거할 수 있는 위치다. 가장 적절한 다음 단계는?

## 선택지

A. 육안 소견만으로 흑색종을 확정해 바로 광범위 절제한다
B. 좁은 정상피부 여유를 두고 병변 전체를 절제생검한다
C. 레이저로 색소만 제거한다
D. 모든 색소 병변은 먼저 1년 뒤 사진과 비교한다

## 해설

크기나 색이 변하고 비대칭·불규칙한 색조를 보이면 흑색종을 의심한다. 전체 절제생검이 가능한 경우 좁은 여유를 두고 제거해 진단과 두께 평가에 필요한 조직을 얻는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 선지 중 단일 색조 D가 상대적으로 덜 의심스러운 특징이나 급격히 커지는 병변을 양성이라고 안심시킨 설명을 수정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006533
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7618628/
