---
type: qbank
schema_version: 1
id: medqa-us-train-006476
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:24f5828fe5ec144f4b3350e298a64f23bcc2e5f18cf2d67736bd6fd8f63b42d4
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "무기폐"
  - "수술 후 무기폐"
  - "전신마취 합병증"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv66y06riw7Y-QIChBdGVsZWN0YXNpcykubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

전신마취로 복부 수술을 받은 35세 여성이 이틀 뒤 숨이 차다고 한다. 흉부 X선에서 왼쪽 하엽 음영과 함께 열구가 병변 쪽으로 끌려가고 왼쪽 횡격막이 올라갔다. 이 영상의 가장 가능성 높은 원인은?

## 선택지

A. 폐포에 고름이 차는 폐렴
B. 흉막강에 공기가 차는 긴장성 기흉
C. 하엽 용적이 줄어든 무기폐
D. 폐혈관 투과성 증가로 인한 양측 폐부종

## 해설


폐 음영과 함께 열구·횡격막이 병변 쪽으로 끌리는 용적 감소 소견은 무기폐를 지지한다. 폐렴의 경화는 대개 이런 뚜렷한 용적 감소 없이 나타난다. 영상 소견만으로 다른 수술 후 저산소증의 원인을 모두 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 전신마취후 열구이동을 동반한 하엽 용적감소 음영은 무기폐의 폐포허탈 C에 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006476
