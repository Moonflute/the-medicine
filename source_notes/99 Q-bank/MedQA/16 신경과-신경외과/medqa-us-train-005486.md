---
type: qbank
schema_version: 1
id: medqa-us-train-005486
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:37edea41b1d1810d67122d7b5a862ea215ae5b90e03e540ed5de8b80c7b4c3b2
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "길랭-바레 증후군"
  - "알부민세포해리"
  - "혈장교환"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6ri4656RLeuwlOugiCDspp3tm4TqtbAgKEd1aWxsYWluLUJhcnJlIFN5bmRyb21lKS5tZA
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_quLjrnpEt67CU66CIIOymne2bhOq1sCAoR3VpbGxhaW4tQmFycsOpIHN5bmRyb21lKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 남자가 10일 전부터 시작된 양쪽 하지 근력저하로 내원했다. 다리가 쉽게 피로해지고 계단 오르기가 어려워졌고 양쪽 하지 근력은 1/5이며 아킬레스건과 슬개건 반사가 소실되었다. 3주 전 야영 중 여과하지 않은 물을 마신 뒤 며칠간 설사를 한 병력이 있다. 뇌척수액에서 세포 수는 거의 정상이나 단백질이 75 mg/dL로 상승했다. 가장 가능성 높은 진단의 치료에는 무엇이 포함되는가?

## 선택지

A. 아스피린
B. 아지스로마이신
C. 독시사이클린
D. 혈장교환

## 해설

급성 진행성 대칭 하지위약·무반사와 단백세포해리는 Guillain–Barré 증후군에 합당하다. 발병10일째 심한 위약으로 보행이 어려운 환자에서 혈장교환(D)은 인정되는 치료다. IVIG도 효과가 입증된 대안이며 혈장교환이 모든 경우에 일률적으로 더 우수하다는 뜻은 아니다. 호흡기능·연하·자율신경 불안정성을 면밀히 감시하고, 항생제만으로 면역성 신경병증을 치료하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 생략된1/5 하지근력과 선행 설사를 복원하고 혈장교환만이 가장 효과적이라는 단정을 IVIG와 함께 인정되는 면역치료로 제한했다.
- 공식/학회 근거: https://onlinelibrary.wiley.com/doi/10.1111/ene.16073

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005486
