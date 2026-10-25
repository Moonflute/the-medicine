---
type: qbank
schema_version: 1
id: medqa-us-train-003773
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a3724123ad74624665eacc47a353901a233b8f4aab9636566d947d874462bc24
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "uterine rupture"
  - "prior classical cesarean"
  - "fetal bradycardia"
  - "loss of fetal station"
question_type: risk_factor
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2ge2MjOyXtCAoVXRlcmluZSBSdXB0dXJlKS5tZA
difficulty: complex
answer: C
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

임신 36주인 34세 여성이 강한 자궁수축 중 갑자기 심한 통증을 느낀 후 수축이 사라지고 태아심박수가 85회/분으로 감소했다. 태아 머리는 더 이상 고정되지 않고 떠 있었다. 다음 중 과거력에서 가장 가능성 높은 요인은?

## 선택지

A. 유산 후 자궁내막염
B. 자궁선근증
C. 자궁저부 제왕절개
D. 다수의 질식분만

## 해설

심한 통증 뒤 수축 소실, 급성 태아 서맥과 선진부 상승은 자궁파열을 시사한다. 자궁저부/상부 수축성 자궁체부를 침범하는 과거 절개(C)가 위험을 높인다. 고전적 절개는 상부 수직절개를 뜻하며, 자궁 하부 횡절개와 같은 말이 아니다. 기존 해설의 '횡문절제술'이나 '하부 절제' 표현은 잘못이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 상부 자궁 반흔의 위험을 하부 횡절개로 뒤집어 쓴 해설을 원문 자궁저부 제왕절개에 맞게 교정했다.
- https://www.acog.org/womens-health/faqs/vaginal-birth-after-cesarean-delivery

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003773
