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

29세 남성이 황색포도알균 균혈증과 승모판 증식물로 입원 치료 중이다. 3일째 갑자기 오른쪽 팔다리 힘이 빠지고 말이 어눌해졌다. 뇌 MRI에서 서로 다른 동맥 영역에 여러 급성 허혈성 병변이 보이며 출혈은 없다. 가장 가능성 높은 기전은?

## 선택지

A. 세균이 뇌척수액으로 퍼져 발생한 수막염
B. 감염된 승모판 증식물에서 떨어져 나간 뇌동맥 색전
C. 고혈압에 의한 단일 심부 뇌출혈
D. 저혈압에 의한 전반적인 저산소성 뇌손상

## 해설

좌심계 감염성 심내막염에서는 판막의 감염성 증식물이 떨어져 전신 색전을 일으킬 수 있다. 갑작스러운 국소 신경결손과 다발성 동맥 영역의 급성 뇌경색이 뇌색전을 지지한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 없는 폐렴 소견을 삭제하고 심내막 vegetation의 패혈성 색전 기전을 설명.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001831
- https://academic.oup.com/eurheartj/article/44/39/3948/7243107
