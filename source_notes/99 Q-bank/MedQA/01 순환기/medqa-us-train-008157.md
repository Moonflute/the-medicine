---
type: qbank
schema_version: 1
id: medqa-us-train-008157
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:60a258f073f1499d92926ff818b82ce2f8e93cc9f9cc52e95c37fb6cc3ea1ca6
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "atrial septal defect"
  - "fixed split S2"
  - "left-to-right shunt"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Ius67CpIOykkeqyqSDqsrDshpAgKEF0cmlhbCBTZXB0YWwgRGVmZWN0KS5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

17세 남성이 운동하면 숨이 찬다고 한다. 왼쪽 위 흉골연에서 수축기 박출 잡음이 들린다. 제2심음은 넓게 갈라져 있고 들숨과 날숨에 따라 간격이 거의 변하지 않는다. 가장 가능성 높은 진단은?

## 선택지

A. 심방중격결손
B. 이첨 대동맥판막
C. 비후성 심근병증
D. 심실중격결손

## 해설

넓고 고정된 제2심음 분열과 좌상흉골연 박출 잡음은 심방중격결손의 단서다. 좌우단락 때문에 우심실과 폐동맥을 통과하는 혈류가 늘고, 심장초음파로 결손과 우심실 용적부하를 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ASD의 좌우단락과 고정 S2 분열을 설명하고 다른 모든 판막질환의 S2 변화를 부정하는 과장을 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008157
