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
answer: C
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

18세 여성이 하루 동안 지속된 심한 우하복부 통증으로 응급실에 왔다. 중요한 과거력은 없다. 성생활을 하며 경구피임약을 사용한다. 혈압127/81 mmHg, 맥박101회/분, 호흡수19회/분, 체온39.0°C이다. 복부검사에서 우하복부에 국소 압통과 방어가 있다. 혈색소13 g/dL, 백혈구15,400/mm³이고 분엽호중구70%, 띠호중구5%, 림프구20%, 단핵구5%이다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 골반 진찰
B. 골반 초음파
C. 충수 초음파
D. 상부위장관 조영검사

## 해설


발열·백혈구증가와 국소 우하복부 압통·방어는 급성 충수염을 의심하게 한다. 젊은 환자에서 선택지 C의 충수 초음파는 방사선 노출 없이 사용할 수 있는 초기 영상이다. 다만 검사가 비진단적이면 추가 CT/MRI 등 평가가 필요하며 초음파가 항상 확진하는 것은 아니다. 성생활을 하는 가임 여성에서는 β-hCG와 부인과 원인도 평가한다. 피임약 복용만으로 임신·자궁외임신을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005114 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 18세 여성의 성생활·피임력과 임상정보를 복원하고 충수 초음파의 한계를 설명했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7386163/
- https://doi.org/10.1001/jamasurg.2025.6218

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005114
