---
type: qbank
schema_version: 1
id: medqa-us-train-007091
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:749d566c28bc9aed95e6db2a1d8a49f53db4e988ae03254cc066a09566774d0d
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "식품 단백질 유발 알레르기성 직결장염"
  - "모유 수유"
  - "우유 단백질 알레르기"
  - "Cow milk protein allergy"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
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

생후 4주 된 영아가 3일 동안 혈액이 섞인 변을 보아 어머니와 함께 내원했다. 이 기간 동안 변에 희끄무레한 점액성 끈도 섞여 나왔다. 태아 심박수가 불안정하여 임신 38주에 하부 자궁 횡절개 제왕절개로 태어났다. 퇴원 전 하루 동안 중환자실에서 관찰되었다. 6세 형은 일주일 전 바이러스성 위장염으로 치료받았다. 환자는 완전 모유 수유 중이다. 키는 50백분위수, 체중은 60백분위수이다. 건강하고 활동적으로 보이며 활력징후는 정상이다. 복부는 부드럽고 압통이 없다. 간은 오른쪽 늑골연 바로 아래에서 만져진다. 나머지 진찰은 정상이다. 대변 잠혈검사는 양성이고 전혈구검사, 전해질, 크레아티닌은 정상이다. 다음 중 가장 적절한 치료 단계는 무엇인가?

## 선택지

A. IgA 항조직 트랜스글루타미나제 항체(tTG)를 검사한다
B. 모유 수유를 계속하고 어머니에게 유제품과 콩 제품을 피하도록 권고한다
C. 대변 항원 면역측정법을 시행한다
D. 모유 수유를 중단하고 콩 기반 분유로 바꾼다

## 해설

건강하고 성장하는 영아의 소량 혈액·점액변은 음식단백 유발 알레르기성 직결장염을 시사한다. 보기 중 모유수유를 유지하며 원인 단백을 모체 식이에서 제한하는 B가 적절하다. 대개 우유 단백 제거를 우선 평가하고, 지속 또는 병력상 필요에 따라 콩도 제한한다. 제한식은 반응 확인·재도입 계획 및 산모 영양 지원과 함께 시행하며 모든 영아 혈변에 무기한 우유·콩 제한을 적용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 혈변 일반화 대신 건강한 영아 FPIAP의 제한적 제거식·추적 원칙으로 교정.
- https://cps.ca/en/documents/position/cows-milk-protein-allergy
- https://www.allergy.org.au/patients/food-other-adverse-reactions/proctocolitis-fpiap

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007091
