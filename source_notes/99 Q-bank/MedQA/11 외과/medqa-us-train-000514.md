---
type: qbank
schema_version: 1
id: medqa-us-train-000514
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3845c0724d2f56feacad97c007f24a1add73672bae38a12f69a0e0bf70c2195f
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "liver transplantation"
  - "jaundice"
  - "chronic rejection"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIO2ZqeuLrCAoTmVvbmF0YWwgSmF1bmRpY2UpLm1k
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

간이식 5일 뒤 황달과 간효소 상승이 새로 생겼다. 반복 도플러 초음파에서 이식간의 간동맥 혈류가 잡히지 않는다. 혈압은 안정적이다. 가장 적절한 다음 조치는?

## 선택지

A. 이식팀에 즉시 연락해 조영 CT 혈관조영 등으로 간동맥 폐색을 확인한다
B. 혈류 이상은 무시하고 거부반응 치료용 스테로이드부터 시작한다
C. 조영제 없이 일반 복부 CT만 하고 다음 날 재평가한다
D. 담도 폐색으로 보고 자기공명 담췌관조영만 시행한다

## 해설


이식 초기 간동맥 혈류 소실과 이식간 기능 이상은 간동맥 혈전증의 경고다. 이식팀이 신속히 혈관 영상으로 확인하고 재관류 등 치료를 판단해야 한다. 혈관 원인 평가를 간 생검으로 대체하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000514 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 만성 이식거부의 혈관병증과 섬유화는 유지하고 간세포 침윤이라는 세포 구분 오류를 고쳤다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000514
- https://doi.org/10.1097/LVT.0000000000000715
