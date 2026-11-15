---
type: qbank
schema_version: 1
id: medqa-us-test-000338
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:5420dd655ba0d204366f43905d5a81d565c98500ede8f0da337145108fe8ca09
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심방중격결손"
  - "아이젠멩거 증후군"
  - "임신 중 심혈역학 변화"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Ius67CpIOykkeqyqSDqsrDshpAgKEF0cmlhbCBTZXB0YWwgRGVmZWN0KS5tZA
question_type: mechanism
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 19주인 22세 여성에게 치료하지 않은 심방중격결손과 중증 폐고혈압이 있다. 심초음파에서 양방향 단락이 보이고 임신이 진행되면서 말단 청색증과 숨참이 악화됐다. 우좌단락을 늘려 저산소증을 악화시키는 임신 중 변화는?

## 선택지

A. 심박수 증가
B. 전신혈관저항 감소
C. 심박출량 증가
D. 혈액량 증가

## 해설

폐혈관저항이 높은 상태에서 임신으로 전신혈관저항이 떨어지면 우심에서 좌심으로 흐르는 혈액이 늘 수 있다. 산소가 적은 혈액이 체순환으로 들어가 청색증이 심해진다. 이 임신은 고위험이어서 다학제 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 B 유지. SVR 감소가 좌→우 단락을 늘려 청색증을 만든다는 반대 방향 설명을 우→좌 단락 증가로 교정하고 폐혈관질환 전제의 한계 명시.
- https://academic.oup.com/eurheartj/article/46/43/4462/8234487

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000338
