---
type: qbank
schema_version: 1
id: medqa-us-train-004025
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:21e14e034e44ae1325bfa9976c6bc8582f617dbad76b421c5536b64e21887e3b
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "내치핵"
  - "치질"
  - "직장 출혈"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rgrTsuZjtlbUgKEludGVybmFsIEhlbW9ycmhvaWQpLm1k
question_type: 임상증례 객관식
difficulty: standard
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

62세 남성이 배변 뒤 휴지에 묻는 선홍색 피와 힘줄 때 항문 밖으로 나오는 덩이를 호소한다. 덩이는 배변이 끝나면 손을 대지 않아도 들어간다. 항문경에서 치상선 위의 치핵이 확인됐다. 치핵의 분류는?

## 선택지

A. 1도 내치핵
B. 3도 내치핵
C. 2도 내치핵
D. 혈전성 외치핵

## 해설

배변 때 탈출했다가 저절로 들어가면 2도 내치핵이다. 1도는 탈출하지 않고 3도는 손으로 밀어 넣어야 한다. 치핵이 있다고 모든 직장 출혈을 치핵으로 돌리지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 2도 내치핵 C의 결정근거는 자발환원 탈출. 모든 외치핵 통증이라는 오설명 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004025
- https://doi.org/10.1097/dcr.0000000000003276
