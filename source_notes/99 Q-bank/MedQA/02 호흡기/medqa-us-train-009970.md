---
type: qbank
schema_version: 1
id: medqa-us-train-009970
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:86103d760bab2611b8f878d3aac3663a53a040a6e7e0587295918490fcc3e585
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "폐렴"
  - "폐실질 경화"
  - "기관지 호흡음"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 남성이 2일 동안 지속된 호흡곤란, 흉통, 기침으로 내원했다. 깊이 숨쉴 때 통증이 악화된다. 울혈성 심부전, 고혈압, 제2형 당뇨병, 고지혈증 병력이 있다. 메토프롤롤, 리시노프릴, 스피로놀락톤, 메트포르민, 심바스타틴을 복용한다. 25년 동안 매일 담배 반 갑을 피웠다. 체온 38.5°C, 맥박 분당 95회, 호흡수 분당 18회, 혈압 120/84 mmHg, 실내 공기 산소포화도 93%이다. 진찰에서 오른쪽 하폐야의 타진 탁음과 촉각 진탕음 증가가 보이며, 해당 부위 청진에서 기관지 호흡음과 속삭임 음성증강이 들린다. 나머지 진찰은 정상이다. 다음 중 이 소견의 가장 가능성 높은 원인은?

## 선택지

A. 폐실질 경화
B. 흉막액 축적
C. 폐수포 파열
D. 폐경색

## 해설

타진 둔탁음, 촉각진탕 증가, 기관지 호흡음과 속삭임 음성증강은 공기 대신 삼출물 등으로 채워진 폐실질 경화(A)에 부합한다. 발열과 급성 기침은 폐렴을 시사한다. Consolidation은 폐섬유증과 같은 말이 아니며, 흉막액은 보통 촉각진탕을 감소시킨다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 폐실질 경화를 폐섬유증과 동의어로 쓴 오역을 폐렴성 consolidation으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009970
