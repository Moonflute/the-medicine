---
type: qbank
schema_version: 1
id: medqa-us-train-008762
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c6f91fe1228f56b6e6268bd4069512bf682dd060c6359114c4d33e13b841100d
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "celiac disease"
  - "vitamin D deficiency"
  - "selective IgA deficiency"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv67mE7YOA66-8IEQg6rKw7ZWN7KadIChWaXRhbWluIEQgRGVmaWNpZW5jeSkubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shYDrpqzslYXrs5EgKENlbGlhYyBEaXNlYXNlKS5tZA
  - MDgg6rCQ7Je8L-uptOyXreyggO2VmOyekCDqsJDsl7wgKEltbXVub2NvbXByb21pc2VkIEhvc3QgSW5mZWN0aW9uKS5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
---

# MedQA US 임상문제

## 문제

27세 여성이 뼈와 근육의 가벼운 통증으로 일차진료를 받으러 왔다. 이런 증상은 평생 지속되었으나 대학에 진학한 뒤 최근 악화되었다. 신체활동이 많고 균형 잡힌 식사를 한다. 전일제 학생이며 한 명의 파트너와 성생활을 한다. 최근 기말고사 공부로 스트레스를 많이 받고 가끔 설사를 한다. 피부의 단순포진바이러스 감염으로 아시클로버를 복용했지만 호전이 거의 없다. 상·하지 근력이 4/5이고 사지에 비특이적 압통이 광범위하다. 혈청 Na⁺ 144mEq/L, Cl⁻ 102mEq/L, K⁺ 4.7mEq/L, HCO₃⁻ 24mEq/L, Ca²⁺ 5.0, BUN 15mg/dL, 포도당 81mg/dL, 크레아티닌 1.0mg/dL, ALP 225U/L이며 AST와 ALT는 정상이다. 다음 중 이 환자 상태와 가장 관련이 높은 것은 무엇인가?

## 선택지

A. 수혈 시 아나필락시스
B. 조기 난소부전
C. 중수지관절 위의 발진
D. 수면 부족

## 해설


설사, 골통·근력저하·높은 ALP와 치료에 반응하지 않는 피부병은 셀리악병 관련 흡수장애·골연화증을 의심하게 한다. 셀리악병은 선택적 IgA 결핍과 연관되며, 일부 심한 IgA 결핍 환자의 항IgA 관련 수혈 아나필락시스(A)가 출제 연결이다. 그러나 대다수 IgA 결핍 환자에게 아나필락시스가 생기는 것은 아니고 실제 IgA/반응력 평가가 필요하다. 원문 Ca5.0은 단위가 없어 확인이 필요하며 심한 저칼슘이 의심되면 즉시 별도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008762 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 정답 A와 무관하다고 한 자기모순 해설 교체. 설사·골연화·치료 무반응 피부병의 celiac 가능성과 선택적 IgA 결핍 연관을 설명하되 모두 수혈 anaphylaxis가 생긴다고 단정하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://professionaleducation.blood.ca/en/transfusion/publications/anaphylactic-transfusion-reactions-and-iga-deficiency

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008762
