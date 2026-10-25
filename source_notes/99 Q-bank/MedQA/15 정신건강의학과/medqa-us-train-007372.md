---
type: qbank
schema_version: 1
id: medqa-us-train-007372
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:623cc2ab3c33abaf6f496aa536171bcf02b414241f093c75cbd0a089c0a698de
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "주의력결핍 과잉행동장애"
  - "자극제 치료"
  - "혈압 상승"
question_type: prognosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOydmOugpSDqsrDtlY0g6rO864ukIO2WieuPmSDsnqXslaAgKEFESEQpLm1k
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

11세 남아가 지난 8개월 동안 학교 성적이 좋지 않다는 교사의 지적 때문에 어머니와 함께 내원했다. 학교 과제를 할 때 주의를 지속하기 어렵고 교사의 지시를 따르지 않으며 숙제에서 부주의한 실수를 한다. 수업 중 답을 불쑥 말하고 축구 연습에서 규칙을 지키기 어렵다. 어머니가 말할 때 쉽게 산만해지고 학교에 책을 자주 두고 온다. 신체검사에서 이상은 없다. 적절한 일차 치료를 시작했다. 이 아이에서 다음 중 어떤 상태의 위험이 증가하는가?

## 선택지

A. 세로토닌 증후군
B. BMI 증가
C. 발한 감소
D. 혈압 상승

## 해설

학교와 가정에서 지속되는 부주의·충동성으로 ADHD가 의심되며, 학령기 일차 약물치료로 사용하는 자극제는 혈압과 맥박을 상승시킬 수 있어 D가 맞다. 이는 대부분에게 임상적 고혈압이 생긴다거나 모든 부작용 중 가장 흔하다는 뜻은 아니다. 치료 전후 혈압·맥박, 성장·체중 및 식욕 등을 추적한다. 자극제는 식욕 감소와 체중 증가 둔화를 유발할 수 있어 BMI 증가가 대표 반응은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: ADHD 자극제의 혈압상승 D는 맞으나 가장높은위험은 고혈압이라는 불필요한 빈도 단정 제거. 부작용 감시 범위 설명.
- https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=1a88218c-5b18-4220-8f56-526de1a276cd&type=display

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007372
