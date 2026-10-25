---
type: qbank
schema_version: 1
id: medqa-us-train-002691
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eaa5a6f3342f06d372efc8aa86ad672f863adba0dbbc3eadca2fe172ffc104ff
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "status asthmaticus"
  - "Aspirin-exacerbated respiratory disease"
  - "pulsus paradoxus"
  - "nasal polyps"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yVhOyKpO2UvOumsCDqs7zrr7zshLEg7LKc7IudLm1k
question_type: diagnosis
difficulty: simple
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

비염 병력이 있는 48세 남성이 2일간 호흡곤란과 천명으로 내원했다. 한 주 전 무릎 통증으로 나프록센을 시작했으며 비강폴립이 있고 깊게 숨을 들이쉴 때 양쪽 요골맥박이 사라진다. 다음 중 신체검사 소견의 가장 가능성 높은 원인은?

## 선택지

A. 폐고혈압
B. 천식
C. 폐색전증
D. 심장눌림증

## 해설

비염·비강폴립 환자에서 naproxen 투여 후 천명이 나타나 NSAID 악화 호흡기질환을 시사한다. Naproxen은 aspirin 그 자체는 아니지만 COX-1 억제로 교차 반응을 유발할 수 있다. 심한 천식 악화에서 흡기 시 수축기 혈압이 과도하게 떨어지는 기이맥이 나타날 수 있어 B가 가장 적절하다. 기이맥이 심장눌림증에만 특이적인 소견은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Naproxen을 aspirin 그 자체로 쓴 오역 교정; COX-1 NSAID 유발 천식·pulsus paradoxus B.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002691
