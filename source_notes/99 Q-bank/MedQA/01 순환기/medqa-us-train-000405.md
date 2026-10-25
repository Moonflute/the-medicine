---
type: qbank
schema_version: 1
id: medqa-us-train-000405
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ef88eba1f6162f0522d26c61535ffc98adab0b25b3e9d64100536458272cbc25
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "Takayasu arteritis"
  - "Interrupted aortic arch"
  - "Pheochromocytoma"
  - "Coarctation of the aorta"
related_disease_slugs:
  - MDQg64K067aE67mEL-2BrOuhrOy5nO2ZlOyEuO2PrOyihSAoUGhlb2Nocm9tb2N5dG9tYSkubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64yA64-Z66elIOy2leywqSAoQ29hcmN0YXRpb24gb2YgdGhlIEFvcnRhKS5tZA
  - MDEg7Iic7ZmY6riwL-uLpOy5tOyVvOyImCDrj5nrp6Xsl7wgKFRha2F5YXN1J3MgQXJ0ZXJpdGlzKS5tZA
question_type: diagnosis
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: machine-generated
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

5세 남아가 정기 검진을 위해 소아과에 내원하였다. 어머니는 아이가 잘 지내고 있으며 특별한 걱정거리는 없다고 보고하였다. 이 남아는 임신 39주에 자연 질식 분만으로 태어났다. 모든 예방접종은 최신 상태이며 모든 발달 이정표를 충족하고 있다. 신체 검진에서 우측 상지 혈압이 150/80 mm Hg로 측정되었다. 요골 맥박은 2+로 촉지되며 대퇴 맥박은 미약하게(trace) 촉지된다. 심장 청진상 S1과 S2는 정상이며 규칙적인 심박동과 리듬을 보인다. 좌측 흉골연과 등 부위에서 수축기 박출 클릭(systolic ejection click)을 동반한 2/6 등급의 긴 수축기 잡음이 들린다. 최대 심박동점(point of maximal impact)은 정상이다. 다음 중 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 타카야수 동맥염(Takayasu arteritis)
B. 대동맥궁 단절(Interrupted aortic arch)
C. 갈색세포종(Pheochromocytoma)
D. 대동맥 축착(Coarctation of the aorta)

## 해설


상지 혈압 상승·다리 혈압 저하·수축기 클릭·수축기 잡음은 대동맥 축착을 특징짓는다. 이는 소아에서 흔히 발견되는 혈압 차이와 청진 소견이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 상지 고혈압과 강한 radial/약한 femoral pulse·등의 수축기잡음은 대동맥축착 D. 신생아기에 위중한 대동맥궁 단절과 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000405
