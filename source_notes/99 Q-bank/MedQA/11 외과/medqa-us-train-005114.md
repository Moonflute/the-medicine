---
type: qbank
schema_version: 1
id: medqa-us-train-005114
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4b8c0ccdefebe68d36840cda04324fd8bca9bd483fb54ac6d1cc803c79250f21
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "급성 충수염"
  - "우하복부 통증"
  - "충수 초음파"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_quInshLEg7Lap7IiY7Je8IChBY3V0ZSBBcHBlbmRpY2l0aXMpLm1k
question_type: investigation
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

14세 여성이 배꼽 주위에서 오른쪽 아랫배로 이동한 통증과 발열로 왔다. 우하복부에 국소 압통이 있고 혈역학적으로 안정적이다. 임신반응검사는 음성이다. 충수염을 평가할 첫 영상은?

## 선택지

A. 조영 복부 CT부터 시행
B. 단계적 압박 충수 초음파
C. 복부 단순 X선
D. 상부위장관 조영검사

## 해설


소아·청소년에서 충수염이 의심되면 초기 영상으로 초음파를 사용해 방사선 노출을 줄인다. 초음파가 불확실하지만 의심이 지속되면 MRI나 CT 등 추가 영상을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005114 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 18세 여성의 성생활·피임력과 임상정보를 복원하고 충수 초음파의 한계를 설명했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7386163/
- https://doi.org/10.1001/jamasurg.2025.6218

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005114
- https://pubmed.ncbi.nlm.nih.gov/41604201/
