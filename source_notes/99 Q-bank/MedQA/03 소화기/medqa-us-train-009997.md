---
type: qbank
schema_version: 1
id: medqa-us-train-009997
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c938866ba80caf1096175341e2e1508a45bf1abef4ccf4b65f3b7d5b36d34e1f
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "크론병"
  - "육아종"
  - "항문 열상"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tgazroaDrs5EgKENEKSAoQ3JvaG4ncyBEaXNlYXNlIChDRCkpLm1k
question_type: investigation
difficulty: standard
answer: C
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

25세 여성이 수개월 동안 지속된 설사로 일차진료의에게 내원했다. 복통과 경련성 통증도 있다. 식단을 바꿔 보았지만 호전되지 않았다. 하루에 물 같은 비혈성 변을 여러 번 보고 피로감도 있다. 최근 해외여행은 하지 않았다. 지난해 진료 이후 체중이 10파운드 감소했고 BMI는 20이다. 진찰에서 피부꼬리와 항문 열상이 보인다. 다음 중 내시경 및 생검에서 가장 가능성 높은 소견은?

## 선택지

A. 육아종을 동반한 미만성 비국소성 궤양
B. 육아종이 없는 미만성 비국소성 궤양
C. 육아종을 동반한 국소 궤양
D. 점상 출혈을 동반한 쉽게 출혈하는 점막

## 해설


정답 C. 젊은 환자의 체중감소·설사·항문주위 병변은 Crohn병을 시사한다. 장의 비연속적 침범과 국소 궤양이 특징적이며 조직검사에서 비건락성 육아종이 보이면 진단을 지지한다. 육아종은 육안 내시경 소견이 아니고 일부 환자에서만 관찰되므로 없다고 Crohn병이 배제되지는 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009997 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Crohn C의 skip ulcer·육아종 연관성 유지하되 육아종은 육안 내시경 소견 아닌 조직 소견이고 모든 사례에서 관찰되지 않음을 명시.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009997
