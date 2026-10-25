---
type: qbank
schema_version: 1
id: medqa-us-train-002465
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:43395ac5ad24dc835f778abfedafa7c7305abb77651b7850aa129bb0a8a10eb7
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "solitary brain metastasis"
  - "breast cancer metastasis"
  - "surgical resection"
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

58세 여성이 한 달간 지속된 두통으로 내원했다. 2년 전 왼쪽 유방 침윤성 소엽암으로 왼쪽 유방절제술과 여러 차례 항암치료를 받았지만 이후 건강했다. 신경학적검사는 정상이고 뇌 MRI에서 뇌 표면 가까이에 4 cm 크기의 측두엽 고신호 종괴가 보인다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 전뇌 방사선치료
B. 수술적 절제
C. 항암화학요법
D. 항생제 치료

## 해설


유방암 병력이 있는 환자에서 새 두통과 표재성4cm 뇌 종괴는 전이를 의심하게 한다. 제시된 크기와 수술 접근성을 고려하면 수술적 절제(B)는 진단 조직 확보와 국소 조절에 적절하다. 다만 영상만으로 유방암 전이를 확정하지 않으며 다른 원발성 종양도 감별한다. 수술 후 국소 방사선 등은 병리·다른 병변·전신질환 상태에 따라 계획하고 모든 뇌 전이에서 수술이 항상 최선인 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002465 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 뇌 종괴를 병리 확인 전 유방암 전이로 확정하거나 모든 전이에서 수술이 최고라는 일반화를 수정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8917399/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002465
