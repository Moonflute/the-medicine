---
type: qbank
schema_version: 1
id: medqa-us-train-000791
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f9a42e53191bed69aee494923066324e10b05f38d73ac47391159cc95e960dfa
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "oligohydramnios"
  - "fetal growth restriction"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yWkeyImCDqs7zshozspp0gKE9saWdvaHlkcmFtbmlvcykubWQ
  - MTIg7IKw6rO8L-2DnOyVhCDshLHsnqUg7KeA7JewIChGZXRhbCBHcm93dGggUmVzdHJpY3Rpb24pLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

30세 임산부(임신 2회, 출산 1회)가 임신 33주차 산전 진찰을 위해 내원하였다. 첫째 아이는 임신 38주차에 자연 분만하였으며, 당시 임신은 양수과소증(oligohydramnios)으로 합병증이 있었다. 다른 심각한 질환 병력은 없다. 혈압은 100/70 mm Hg이다. 골반 검사에서 자궁 크기가 임신 주수에 비해 작게 측정되었다. 태아는 종위(longitudinal lie)이며 두위(vertex presentation)이다. 태아 심박수는 분당 144회이다. 초음파 검사상 추정 태아 체중이 10분위수 미만이며, 양수량이 감소해 있다. 이 환자에게 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 안심시키기만 함
B. 연속적인 무자극 검사(nonstress test)
C. 매주 태아 체중 추정
D. 양수주입술(amnioinfusion)

## 해설

EFW <10백분위수와 양수 감소는 성장제한 및 태반 기능 저하 가능성을 시사한다. 선택지 중 반복 NST(B)가 태아 안녕 평가에 적절하다. 실제 관리에는 제대동맥 도플러, 성장 추적 및 양수량 평가가 포함되고 결과에 따라 검사 빈도·분만 시점을 정한다. 주마다 체중을 재는 것만으로 대체하거나 일상적 양수주입으로 치료하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: FGR 감시의 NST 및 제대동맥 도플러 역할 구분.
- https://publications.smfm.org/publications/289-society-for-maternal-fetal-medicine-consult-series-52/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000791
