---
type: qbank
schema_version: 1
id: medqa-us-train-001375
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d49d3fee0d1c9d8a72467b17a18495b2eaa67ae055992f7162f420072c4f0cc8
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "atrial septal defect"
  - "right ventricular volume overload"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Ius67CpIOykkeqyqSDqsrDshpAgKEF0cmlhbCBTZXB0YWwgRGVmZWN0KS5tZA
question_type: investigation
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: machine-generated
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

15세 남아가 수개월 동안 점점 심해지는 쉽게 피로해짐과 운동 불내성으로 소아과에 내원했다. 임신 39주에 자연 질식분만으로 태어났고 예방접종은 최신이며 발달 이정표를 모두 충족한다. 심계항진, 호흡곤란 또는 하지 부종은 없다. 활력징후는 안정적이다. 흉부 청진에서 제2심음의 넓고 고정된 분열이 들린다. 왼쪽 중간 및 상부 흉골 가장자리에서 가장 잘 들리는 중간 정도 음높이의 수축기 박출 잡음이 있다. 청진기의 벨로 들을 때 왼쪽 하부 흉골 가장자리에서 짧은 중간이완기 잡음도 들린다. 다음 중 심장초음파에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 우심실 확장기말 직경 감소
B. 수축기 동안 심실중격의 전방 이동
C. 좌심실 유출로의 거위목 변형
D. 좌심실 단축률 증가

## 해설


심방중격 결함(ASD)으로 좌→우 혈류가 증가하면 우심실 부피 과부하가 일어나 심실중격이 수축기 동안 전방으로 이동한다. 이는 초음파에서 관찰되는 특징이다. 따라서 심실중격 전방 이동이 가장 가능성 높은 소견이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 고정S2분열·폐동맥 및 삼첨판 통과 혈류 잡음은 ASD의 RV volume overload. 역설적 중격운동 B가 선택지 중 적합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001375
