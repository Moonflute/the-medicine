---
type: qbank
schema_version: 1
id: medqa-us-train-009615
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f6b243bd79457a0b66d7e5e02a3e01d2fd01289b5f4a644f61b7a5852c9cade5
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "tetralogy of Fallot"
  - "팔로사징"
  - "right axis deviation"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7YyU66GcIOyCrOynlSAoVGV0cmFsb2d5IG9mIEZhbGxvdCkubWQ
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

5개월 남아가 그날 저녁 놀다가 몇 분간 입술이 파래져 응급실에 왔다. 수유 중에도 비슷한 증상이 있었지만 빠르게 호전되었다. 만삭으로 합병증 없이 태어났고 키는 25백분위수, 체중은 5백분위수 미만이다. 체온 37°C, 맥박 130회/분, 혈압 83/55 mmHg, 호흡수 42회/분, 실내 공기 산소포화도 90%이다. 진찰 중 울자 입술과 손가락이 파래진다. 추가 검사에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 심전도에서 우축편위
B. 청진에서 기계음 잡음
C. MR 혈관조영술에서 폐정맥 환류 이상
D. 심초음파에서 작은 좌심실

## 해설

울거나 수유할 때 반복되는 청색증과 성장 부진은 Fallot 사징의 과청색증 발작을 의심하게 한다. 우심실 압력부하와 비대에 따른 우축편위가 예상되어 A가 적합하다. 모든 청색증이 우축편위를 뜻하는 것은 아니며, 실제 구조적 진단은 심초음파로 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 5개월 영아를 신생아라 부르고 청색증만으로 모든 심장질환의 축을 일반화한 설명을 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009615
