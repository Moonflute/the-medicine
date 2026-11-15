---
type: qbank
schema_version: 1
id: medqa-us-train-007362
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:25e9ccdb079ca1abe33ccad687586c20d4e5c88b35b80fbaf4c32cff3c78613e
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "급성 췌장염"
  - "리파아제 상승"
  - "식후 복통"
  - "음주"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7LeM7J6l7Je8IChBY3V0ZSBQYW5jcmVhdGl0aXMpLm1k
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

61세 여성이 갑자기 시작된 심한 명치 통증으로 왔다. 통증은 등으로 뻗치고 구토가 있다. 리파아제는 정상 상한의 6배다. 발병 첫날의 CT에서 뚜렷한 췌장 변화가 보이지 않았다. 적절한 해석은?

## 선택지

A. CT가 정상이므로 급성 췌장염이 아니다
B. 정상 CT를 근거로 급성 담낭염으로 진단한다
C. 전형적 통증과 리파아제 상승으로 급성 췌장염 진단 기준을 충족한다
D. 리파아제가 정상의 10배를 넘기 전에는 급성 췌장염이 아니다

## 해설


전형적인 통증, 췌장효소가 정상 상한의 3배 이상, 특징적인 영상 중 두 가지가 있으면 급성 췌장염에 부합한다. 초기 CT가 정상이어도 전형적인 증상과 효소 상승을 무효로 하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 전형상복통·현저lipase상승은초기/정상CT여도AP C에부합. 알코올은가능원인이지확진원인아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007362
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9840919/
