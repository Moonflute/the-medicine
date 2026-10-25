---
type: qbank
schema_version: 1
id: medqa-us-train-005196
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9a184fcd1ba122530c72b1c85738bc8e1af445be4450f35173fa91888b5d1b80
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "팔로사징"
  - "청색증형 선천성 심장병"
  - "우심실 유출로 폐쇄"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7YyU66GcIOyCrOynlSAoVGV0cmFsb2d5IG9mIEZhbGxvdCkubWQ
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

만삭으로 정상 분만된 생후 1일 남아가 구강점막 청색증을 보인다. 산소포화도는 80%이고 왼쪽 엄지가 변위되고 저형성되어 있다. 우심실 들뜸, 단일 제2심음, 왼쪽 상흉골연의 거친 3/6 수축기 박출성 잡음이 들리며 흉부 X선이 제시되어 있다. 가장 가능성 높은 진단은?

## 선택지

A. 대혈관 전위
B. 팔로사징
C. 심실중격결손
D. 신생아 일과성 빈호흡

## 해설

청색증·단일 S2·좌상흉골연 박출성잡음·우심실 부하는 선택지 중 TOF B에 부합한다. TOF는 우심실유출로/폐동맥 협착, VSD, 대동맥 기승과 우심실비대다. 대동맥판협착이나 동맥관 연결이 정의는 아니다. 누락 CXR 모양을 임의로 만들지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: TOF B의 정의를 대동맥협착/비정상 동맥관으로 설명한 해부 오류 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005196
