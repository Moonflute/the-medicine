---
type: qbank
schema_version: 1
id: medqa-us-train-001831
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:aeaa801d66abb15d5360f5f6afb74d7e24d89a734a2933439b20d731d9c5b4fe
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "infective endocarditis"
  - "septic emboli"
  - "intravenous drug use"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
  - MDEg7Iic7ZmY6riwL-qwgOyEsSDrj5nrp6XrpZggKFBzZXVkb2FuZXVyeXNtKS5tZA
question_type: mechanism
difficulty: complex
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

29세 남성이 일주일간의 흉통과 피로로 응급실에 왔다. 노숙 중이며 병력은 알려지지 않았다. 체온 103°F (39.4°C), 혈압 97/58 mmHg, 맥박 140/min, 호흡 25/min, 산소포화도 95%이다. 팔오금에 흉터가 있고 왼쪽 흉골연에서 잡음이 들린다. 중환자실에 입원해 적절히 치료받았으나 입원 3일째 오른쪽 팔과 다리의 위약 및 구음장애가 발생했다. 현재 증상의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 세균성 수막염
B. 패혈성 색전
C. 두개내 출혈
D. 혈전색전성 뇌졸중

## 해설

정답은 B이다. 발열·저혈압·주사흔과 심잡음은 감염성심내막염을 의심하게 하고 새 편측위약/구음장애는 감염된 vegetation의 뇌색전을 우려하게 한다. 혈액 속 세균만 뇌에 모이는 단순 균혈증 설명과 다르다. 본문에 폐렴은 없으며 CNS색전이면 좌심계 병변 또는 역설색전 경로 등을 평가하고 뇌영상으로 출혈도 감별한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 없는 폐렴 소견을 삭제하고 심내막 vegetation의 패혈성 색전 기전을 설명.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001831
