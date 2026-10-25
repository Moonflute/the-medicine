---
type: qbank
schema_version: 1
id: medqa-us-train-008063
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:202e30a4e50ca0f07900da702b34e202c67590c486ebc855b669cde31a50f1e0
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "intussusception"
  - "currant jelly stool"
  - "air enema"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7J6l7KSR7LKp7KadIChJbnR1c3N1c2NlcHRpb24pLm1k
difficulty: complex
answer: D
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

11개월 남아가 4시간 동안 간헐적으로 달래지지 않는 울음 때문에 응급실에 왔다. 발작 사이에는 불편해 보이지 않고 정상적으로 움직이며 논다. 약 15분 간격으로 몇 분간 지속되는 발작이 반복되었고 이후 세 번 구토했다. 첫 구토물은 음식물 같았고 두 번째와 세 번째는 옅은 녹색이었다. 만삭에 태어나 건강했으며 예방접종은 최신이다. 50백분위수의 키와 60백분위수의 체중이다. 진찰 중 무릎을 가슴으로 끌어당기며 울다가 혈액과 점액이 섞인 변을 보면서 증상이 호전된다. 복부 우상부에서 소시지 모양 종괴가 만져진다. 가장 적절한 다음 처치는?

## 선택지

A. 탐색적 개복술
B. 복부 X선
C. 복부 MRI
D. 공기 관장

## 해설

간헐적인 심한 보챔과 무릎을 가슴으로 끌어당기는 자세, 혈액·점액변, 우상복부 소시지 모양 종괴는 회맹부 장중첩증을 강하게 시사한다. 제시된 선택지 중 공기 관장(D)은 적합한 환자에서 진단과 비수술적 정복에 사용할 수 있다. 수액 소생과 통증 조절을 포함한 초기 평가, 소아외과·영상의학 협력 및 천공·복막염·쇼크 여부 확인이 선행한다. 실제 진료에서 초음파가 주요 진단검사이며 다른 검사가 모두 불필요하다는 뜻은 아니다. 천공·복막염 또는 불안정 상태라면 관장 정복은 부적절하고 수술적 접근이 필요할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 다른 검사 불필요라는 과도한 일반화 제거. 전형적 회맹부 장중첩에서 안정화/금기 확인 후 공기관장 D의 역할 설명.
- https://www.rch.org.au/clinicalguide/guideline_index/intussusception_guideline/
- https://resources.schn.health.nsw.gov.au/policies/policies/pdf/2014-5002.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008063
