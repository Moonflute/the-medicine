---
type: qbank
schema_version: 1
id: medqa-us-train-003926
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:664963b39caa6052a1d1c7fb64c3d82bbebb4a2dffbc9d01e029cf32fd3167c8
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "ventricular septal defect"
  - "left-to-right shunt"
  - "holosystolic murmur"
  - "heart failure in child"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Ius7IukIOykkeqyqSDqsrDshpAgKFZlbnRyaWN1bGFyIFNlcHRhbCBEZWZlY3QpLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67Cp7IukIOykkeqyqSDqsrDshpAgKEF0cmlvdmVudHJpY3VsYXIgU2VwdGFsIERlZmVjdCkubWQ
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: diagnosis
difficulty: standard
answer: B
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

2세 남아가 체중 증가 부진과 쉽게 피로해지는 증상으로 내원했다. 호흡곤란 때문에 활동을 거의 하지 못하며 왼쪽 아래 흉골연에서 2/6도 범수축기 잡음이 들렸다. 가장 가능성 높은 진단은?

## 선택지

A. 심방중격 결손
B. 심실중격 결손
C. 대동맥 축착
D. 팔로 사징

## 해설

좌하흉골연 범수축기 잡음과 성장부진·호흡곤란은 VSD B에 부합한다. 좌심실에서 우심실로 흐르는 혈액의 좌우단락이 폐혈류/좌심계 용적부하를 증가시킬 수 있다. 전기적 전류를 의미하는 소견은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: VSD의 혈류 단락을 전류로 쓴 오역 교정; LLSB범수축기잡음·성장부진 B.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003926
