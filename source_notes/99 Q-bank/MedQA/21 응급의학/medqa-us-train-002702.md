---
type: qbank
schema_version: 1
id: medqa-us-train-002702
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ae6f5f95cfd51615aa9bbbbcf6fb86b469816b0e67523ffab72c60b0fe2a756b
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "acute limb ischemia"
  - "arterial embolism"
  - "atrial fibrillation"
  - "urgent revascularization"
question_type: management
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDrj5nrp6Ug7Y-Q7IOJIChBY3V0ZSBBcnRlcmlhbCBPY2NsdXNpb24pLm1k
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세 환자가 한 시간 전 갑자기 시작된 심한 오른쪽 다리 통증과 저림으로 아내와 함께 응급실에 왔다. 아내에 따르면 환자는 심장 리듬 이상이 있어 혈액희석제를 복용하지만 약을 잘 복용하지 않는다. 15년 동안 하루 10~15개비의 담배를 피웠다. 체온은 36.9°C, 혈압은 140/90 mmHg, 맥박은 불규칙하게 85회/분이다. 환자는 불안해하며 오른쪽 다리가 차갑고 창백하다. 오금 부위를 촉진하면 오른쪽 오금동맥 맥박이 왼쪽보다 약하다. 다음 중 이 환자의 상태에 대한 가장 적절한 초기 처치는?

## 선택지

A. 감압성 추궁절제술
B. 절단 또는 혈관재개통술의 긴급 평가
C. 경구 아세트아미노펜과 국소 캡사이신
D. 관절경적 활막절제술

## 해설

갑작스러운 통증·감각저하·차갑고 창백한 다리와 감소한 맥박, AF 항응고 불순응은 급성 색전성 사지허혈을 시사한다. 즉시 혈관 전문팀이 사지 생존 가능성과 재혈관화/절단 필요성을 평가하는 B가 적절하며, 금기가 없으면 정맥 미분획 헤파린으로 혈전 확장을 억제한다. 감각·운동결손과 도플러 소견 등으로 긴급도를 정하며 모든 환자에게 똑같이 6시간을 기다리거나 그 이후에는 무조건 절단한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 급성 사지허혈을 반드시 6시간이라는 단일 역치로 설명한 일반화를 제거했다. 생존 가능성에 따른 긴급 평가 B와 즉시 헤파린 원칙을 설명한다.
- 공식/학회 근거: https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002702
