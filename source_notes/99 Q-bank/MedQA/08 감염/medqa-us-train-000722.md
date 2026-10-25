---
type: qbank
schema_version: 1
id: medqa-us-train-000722
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:96e34142c4ebafff87090877fbc1d1befe2686c1a9bfaae14b9e48da1feee2a1
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "acute alcohol intoxication"
  - "hypoglycemia"
  - "macrocytosis"
related_disease_slugs:
  - MDQg64K067aE67mEL-yggO2YiOuLuSAoSHlwb2dseWNlbWlhKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIOyggO2YiOuLueymnSAoTmVvbmF0YWwgSHlwb2dseWNlbWlhKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTmFsb3hvbmUubWQ
---

# MedQA US 임상문제

## 문제

63세 남성이 길가에 의식을 잃고 쓰러져 있는 상태로 경찰에 의해 응급실로 이송되었다. 양측 동공은 정상 크기이며 빛에 반응한다. 머리 외상의 뚜렷한 징후는 없다. 손가락 끝 혈당 검사 결과 혈당 수치는 20 mg/dL이다. 그는 급성 알코올 중독으로 여러 번 응급실에 이송된 적이 있다. 활력 징후는 혈압 100/70 mm Hg, 심박수 110회/분, 호흡수 22회/분, 체온 35℃이다. 전신 검사상 창백해 보이고 흐트러진 모습이며 에탄올(EtOH) 냄새가 난다. 신체 검진에서 복부는 부드럽고 압통이 없으며 간비대나 비장비대는 없다. 정맥 내 포도당, 티아민, 날록손을 일시 투여한 후 환자는 자발적으로 눈을 뜬다. 독성 검사를 위해 혈액 및 소변 샘플을 채취하였다. 혈중 알코올 농도는 300 mg/dL로 확인되었다. 이 환자에서 가장 가능성이 높은 검사 결과는 무엇인가?

## 선택지

A. 과분엽 호중구(Hypersegmented neutrophils)
B. 낫적혈구(Sickle cells)
C. 대적혈구증가증(Macrocytosis) MCV > 100fL
D. 하웰-졸리 소체(Howell-Jolly bodies)

## 해설


반복적인 과음은 대적혈구증(MCV>100fL, C)과 관련된다. 알코올의 직접적인 골수/적혈구 생성 영향으로 영양결핍 없이도 비거대적아구성 대적혈구증이 생길 수 있으며, 엽산결핍이나 간질환 등이 동반될 수도 있다. 따라서 모든 경우를 B12·엽산 결핍으로 단정하거나 과분엽 호중구가 반드시 있다고 가정하지 않는다. 본문의 저혈당은 즉시 교정해야 하는 별도의 응급문제이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000722 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 알코올성 대적혈구증을 반드시 B12/엽산 결핍 때문이라고 단순화한 기전을 교정했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000722
