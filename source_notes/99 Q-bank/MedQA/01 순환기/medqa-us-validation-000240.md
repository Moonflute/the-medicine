---
type: qbank
schema_version: 1
id: medqa-us-validation-000240
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:e5342127bb355d4a6c1d3df7e1ae358ea26cc6b09353a8dccfd6e4ee8f0a5a43
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심근경색 후 좌심실 자유벽 파열"
  - "심장압전"
  - "ST분절 상승 심근경색"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL1NU67aE7KCIIOyDgeyKuSDsi6zqt7zqsr3sg4nspp0gKFNURU1JKSAoU1QtRWxldmF0aW9uIE15b2NhcmRpYWwgSW5mYXJjdGlvbikubWQ
  - MDEg7Iic7ZmY6riwLyjquInsgqzspp3tm4TqtbApLm1k
question_type: diagnosis
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

50세 여성이 전벽 심근경색 4일째 갑자기 의식을 잃었다. 모니터에는 조직화된 리듬이 있지만 맥박이 없다. 경정맥이 팽창했고 침상 심초음파에서 새로 생긴 심낭삼출과 우심실 허탈이 보인다. 가장 가능성 높은 원인은?

## 선택지

A. 급성 섬유소성 심낭염
B. 좌심실 자유벽 파열
C. 유두근 파열
D. 심실중격 파열

## 해설

심근경색 수일 뒤 좌심실 자유벽이 파열되면 혈액이 심낭으로 유출되어 압전을 일으킬 수 있다. 유두근 파열은 급성 승모판 역류, 심실중격 파열은 새로운 좌우 단락을 일으킨다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 자유벽 파열 B의 기전을 명확히 하고 이를 전체 MI 사망의 최빈 원인으로 일반화한 오류를 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000240
