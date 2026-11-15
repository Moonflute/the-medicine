---
type: qbank
schema_version: 1
id: medqa-us-train-001126
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2251955ab9174cd768ebf624459801bf8533f4bc9afba7d73757a9f05d6b4b1a
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "mitral valve regurgitation"
  - "coronary artery disease"
  - "type 2 diabetes mellitus"
  - "hypertension"
  - "chronic obstructive pulmonary disease"
  - "pneumonia"
  - "valve degeneration"
  - "pulmonary embolism"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Y-Q66C0IChQbmV1bW9uaWEpLm1k
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
  - MDEg7Iic7ZmY6riwL-yKueuqqO2MkOuniSDsl63rpZggKE1pdHJhbCBSZWd1cmdpdGF0aW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUmFtaXByaWwubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

78세 남성이 생체 승모판 치환술 12년 뒤 점차 심해지는 호흡곤란과 발목 부종으로 왔다. 심첨부에서 전에 없던 이완기 잡음이 들린다. 경흉부 심초음파에서 치환 직후보다 승모판 평균 압력차가 증가하고 판막엽은 석회화돼 잘 열리지 않는다. 가장 가능성 높은 원인은?

## 선택지

A. 만성폐쇄성폐질환 악화
B. 좌심실 기능 저하만으로 인한 폐울혈
C. 구조적 생체판막 퇴행
D. 급성 폐색전증

## 해설

삽입 후 오랜 시간이 지나 새 잡음과 울혈이 생기고 판막엽 석회화·가동성 저하가 보이면 생체판막의 구조적 퇴행을 시사한다. 판막 기능 이상이 새로 보이면 과거 심초음파와 비교하고, 필요한 경우 혈전이나 감염도 구분한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 생체 승모판 퇴행에 따른 협착성 기능장애/좌심방압 상승으로 설명을 구체화.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001126
- https://academic.oup.com/eurheartj/article/46/44/4635/8234488
