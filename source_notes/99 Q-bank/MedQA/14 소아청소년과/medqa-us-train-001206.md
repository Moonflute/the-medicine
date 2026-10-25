---
type: qbank
schema_version: 1
id: medqa-us-train-001206
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3d22baa708b76bb29a5dda5a110c5405227589ffdd67640db92a268a4a6eeb2f
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "pyloric stenosis"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE64yAIOuCoOusuCDtmJHssKnspp0gKEh5cGVydHJvcGhpYyBQeWxvcmljIFN0ZW5vc2lzKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

신생아가 격렬한 구토를 주소로 부모에 의해 응급실로 내원하였다. 구토는 약 3일 전 시작되었으며 서서히 악화되었다. 대부분의 수유 후에 구토를 하지만 일부 분유는 소화하는 것으로 보인다. 어머니는 아이가 구토 증상 사이에도 수유를 갈망하며 체중이 늘고 있는 것 같다고 언급하였다. 합병증 없는 클라미디아 결막염(chlamydia conjunctivitis)을 앓았던 것 외에는 건강하였다. 아이는 임신 39주에 자연 질식 분만으로 태어났다. 모든 예방접종은 최신 상태이며 발달 이정표를 모두 충족하고 있다. 신체 검진상 우상복부에서 촉진되는 종괴가 확인되었다. 일차 확진 검사와 그와 관련된 소견은 무엇인가?

## 선택지

A. 바륨 상부 위장관 조영술; 위식도 접합부와 위 일부가 흉곽 내에 위치
B. 바륨 상부 위장관 조영술; 새 부리 징후(bird beak sign)와 코르크 따개 모양(corkscrewing)
C. 공기 관장; 충만 결손과 코일 스프링 징후(coil spring sign)
D. 복부 초음파; 연장된 유문관과 근육 비대

## 해설

수유 후 진행하는 격렬한 구토, 계속 먹으려는 모습, 우상복부 종괴는 영아 비후성 유문협착을 시사한다. 유문은 위에서 십이지장으로 이어지는 출구이며 구강-식도 이음부가 아니다. 초음파에서 유문근의 비후와 유문관의 연장이 관찰되는 D가 적절하다. 원문에 없는 모유와 분유에 대한 반응 차이는 진단 근거로 추가하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 유문을 구강-식도 이음부로 설명한 해부학 오류 및 원문에 없는 수유 종류별 반응을 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001206
