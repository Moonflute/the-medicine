---
type: qbank
schema_version: 1
id: medqa-us-train-000411
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0d4a8e78171c8e25b9be49c5ef1c3ca3c6a4ee271e05314dd6ad0c8b35e7b39c
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "Tetralogy of Fallot"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7YyU66GcIOyCrOynlSAoVGV0cmFsb2d5IG9mIEZhbGxvdCkubWQ
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

생후 2개월 영아가 수유할 때 입술과 혀가 파래지고 쉽게 지친다. 울면 청색증이 더 뚜렷해진다. 안정 시에도 산소포화도는 90%이고, 왼쪽 위 흉골연에서 수축기 박출성 잡음이 들린다. 청색증을 일으키는 구조적 심장질환을 확인할 첫 검사는?

## 선택지

A. 흉부 X선
B. 흉부 CT 혈관조영술
C. 12유도 심전도
D. 도플러 경흉부 심초음파

## 해설


중심성 청색증과 심잡음이 있으면 팔로사징 등 선천성 심장질환을 고려한다. 경흉부 심초음파로 심장 구조, 단락과 우심실 유출로를 직접 평가한다. 심하게 저산소증이 생기면 안정화와 소아심장 평가를 병행한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 수유/울음 때 청색증과 좌상흉골연 박출성잡음은 구조적 선천심장병 의심. 초기 해부/혈류 평가 echo D가 적합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000411
