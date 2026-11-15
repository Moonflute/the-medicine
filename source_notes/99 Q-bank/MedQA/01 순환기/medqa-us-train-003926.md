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
question_type: management
difficulty: standard
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

4개월 영아가 수유할 때 땀을 흘리고 숨이 차며 체중이 잘 늘지 않는다. 심초음파에서 큰 심실중격결손, 뚜렷한 좌우 단락과 좌심실 용적 부담이 확인됐다. 이뇨제와 영양 관리를 해도 증상과 성장부진이 지속된다. 적절한 다음 조치는?

## 선택지

A. 소아심장팀에 결손의 수술적 폐쇄를 의뢰한다
B. 약을 중단하고 자연 폐쇄만 기다린다
C. 발치 전 예방적 항생제만 처방한다
D. 폐혈류를 늘리기 위해 알프로스타딜을 계속 투여한다

## 해설

큰 심실중격결손으로 폐혈류가 과도하고 약물·영양 관리에도 심부전 증상과 성장부진이 지속되면 결손 폐쇄가 필요할 수 있다. 증상이 없고 잘 자라는 작은 근육성 결손의 추적관찰과는 다르다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: VSD의 혈류 단락을 전류로 쓴 오역 교정; LLSB범수축기잡음·성장부진 B.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003926
- https://www.acc.org/Latest-in-Cardiology/Articles/2023/05/30/10/47/Clinical-Practice-Algorithm-For-the-Follow-Up-of-Unrepaired-and-Repaired-Ventricular-Septal-Defects
