---
type: qbank
schema_version: 1
id: medqa-us-train-005778
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:37cc75d1cd00681d51688c1a8b806ad3b17753c3bc49d61ce39c1d6e7b857658
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "팔로 4징 발작"
  - "슬흉위"
  - "전신혈관저항 증가"
  - "tetralogy of Fallot"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7YyU66GcIOyCrOynlSAoVGV0cmFsb2d5IG9mIEZhbGxvdCkubWQ
question_type: mechanism
difficulty: complex
answer: C
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

팔로사징으로 진단된 9개월 남아가 울던 중 갑자기 청색증이 심해졌다. 소아 응급 처치를 시작하면서 무릎을 가슴 쪽으로 굽혀 준다. 이 자세가 청색증을 줄이는 주된 기전은?

## 선택지

A. 폐포의 확산 장애 해소
B. 전신혈관저항 감소
C. 전신혈관저항 증가로 우좌단락 감소
D. 심실중격결손을 즉시 폐쇄

## 해설

슬흉위는 전신혈관저항을 높여 심실중격결손을 통해 오른쪽에서 왼쪽으로 빠지는 혈액을 줄이고 폐혈류를 개선한다. 저산소 발작의 응급 처치는 자세 조정만으로 끝나지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 슬흉위의 SVR증가 C가 우좌단락을 줄이는 기전으로 역방향 설명 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005778
