---
type: qbank
schema_version: 1
id: medqa-us-train-000698
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ece44e7fb26e811bdefb806ad29f53e6471f10f008371f303a218c6c6060e258
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "Atrial septal defect"
  - "Patent foramen ovale"
  - "Endocardial cushion syndrome"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Ius67CpIOykkeqyqSDqsrDshpAgKEF0cmlhbCBTZXB0YWwgRGVmZWN0KS5tZA
question_type: diagnosis
difficulty: standard
answer: B
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

3세 아동이 부모와 함께 응급실에 내원하였다. 아동은 현저하게 빠른 호흡을 보이며 상태가 좋지 않아 보인다. 진찰 결과, 간 크기가 같은 연령대 아동보다 1.5배 크며, 다리에 경미한 함요 부종(pitting edema)이 있다. 이 아동은 체중-연령 및 신장-연령 백분위수도 낮다. 청진 시 경미한 수포음(rales)이 관찰되었고, 흡기 시 고정된 S2 분열(fixed split S2)이 들렸다. 선천성 질환이나 대사 증후군에 대한 가족력은 없다. 다음 중 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 간부전
B. 심방중격결손(Atrial septal defect)
C. 난원공개존(Patent foramen ovale)
D. 심내막상결손(Endocardial cushion syndrome)

## 해설

정답은 B이다. 고정된 S2 분열과 폐혈류 증가·우심계 용적 과부하의 맥락은 ASD를 지지한다. 큰 단락은 소아에서도 심부전·성장부진을 유발할 수 있어 무해한 심방 연결이라고 설명하지 않는다. 고정 분열은 호흡에 따른 S2 간격 변화가 적다는 뜻이며 흡기 때만 나타나는 분열과 다르다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ASD를 임상적으로 무해한 연결처럼 묘사한 설명 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000698
