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
question_type: prevention
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

48세 남성이 천식과 재발하는 비강용종으로 치료 중이다. 무릎 통증으로 나프록센을 복용한 뒤 한 시간 이내에 코막힘과 천명이 생겼다. 이전 이부프로펜 복용 때도 같은 반응이 있었다. 천식 악화가 가라앉은 뒤 재발을 피하는 방법은?

## 선택지

A. 나프록센 대신 이부프로펜을 복용하면 안전하다
B. 나프록센·이부프로펜 등 강한 COX-1 억제제를 피하고 대체 진통제를 상의한다
C. 모든 진통제가 같은 반응을 일으키므로 치료법이 없다
D. 항히스타민제를 먹으면 나프록센을 언제든 다시 복용할 수 있다

## 해설

천식, 비강용종과 여러 COX-1 억제제에 대한 호흡기 반응은 NSAID 악화 호흡기질환을 시사한다. 성분이 다른 약끼리도 교차 반응할 수 있다. 필요한 진통제나 항혈소판제는 전문 평가를 통해 안전한 대안을 정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Naproxen을 aspirin 그 자체로 쓴 오역 교정; COX-1 NSAID 유발 천식·pulsus paradoxus B.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002691
- https://new.lungkorea.org/board/guide/view/14959
- https://ginasthma.org/2026-gina-strategy-report/
