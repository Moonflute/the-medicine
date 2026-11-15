---
type: qbank
schema_version: 1
id: medqa-us-train-008030
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a27b3c54e72386b2926e61a7318f52406a47880aaa557d20073e0d03243c5e57
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "chronic lymphocytic leukemia"
  - "splenomegaly"
  - "thrombocytopenia prognostic marker"
related_disease_slugs:
  - MDkg7ZiI7JWhL-unjOyEsSDrprztlITrqqjqtazshLEg67Cx7ZiI67ORIChDTEwpIChDaHJvbmljIEx5bXBob2N5dGljIExldWtlbWlhKS5tZA
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

관찰 중이던 만성 림프구성 백혈병 환자에게 4주 사이 한쪽 쇄골 위 림프절이 빠르게 커졌다. 새 발열·야간발한과 현저한 LDH 상승이 있다. 고등급 림프종 전환을 확인할 다음 조치는?

## 선택지

A. 말초혈구 수가 안정적이면 6개월 뒤 다시 본다
B. 필요하면 PET-CT로 표적을 골라 의심 림프절을 조직검사한다
C. 말초혈액의 성숙 림프구 비율만으로 전환을 확진한다
D. 생검 없이 기존 백혈병 약만 증량한다

## 해설


비대칭으로 빠르게 커지는 림프절, 전신 증상과 높은 LDH는 리히터 전환의 단서다. 영상은 표적을 고르는 데 도움이 되며 전환의 확진에는 조직검사가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008030 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: CLL 혈소판감소 B의 불량 병기 연관 유지; 원인 구분 없이 항상 골수 침범이라는 단정 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008030
- https://doi.org/10.1002/hem3.70403
- https://pubmed.ncbi.nlm.nih.gov/40239121/
