---
type: qbank
schema_version: 1
id: medqa-us-train-006615
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eadfa86e06130d73e1c3d648365e42134a52b5d346549495e435638f771cc391
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "인슐린종"
  - "공복 저혈당"
  - "72시간 공복검사"
  - "Insulinoma"
related_disease_slugs:
  - MDQg64K067aE67mEL-yggO2YiOuLuSAoSHlwb2dseWNlbWlhKS5tZA
question_type: investigation
difficulty: complex
answer: C
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMiDtmLjtnaHquLAvQnVkZXNvbmlkZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

60세 남성이 6개월 동안 반복되는 피로감, 심계항진, 오심 및 발한으로 응급실에 내원했다. 최근 2주 동안 증상이 더 잦아져 여러 번 직장을 빠졌다. 주스를 마시고 쉬면 보통 호전된다. 지난 6개월 동안 체중이 2kg(4.5lb) 증가했다. 양극성 장애, 고혈압 및 천식 병력이 있다. 여동생은 제2형 당뇨병이 있고 어머니는 갑상샘 수질암 병력이 있다. 리튬, 히드로클로로티아지드, 아스피린 및 부데소니드 흡입제를 복용한다. 체온은 36.3°C(97.3°F), 맥박은 규칙적으로 분당 92회, 호흡수는 분당 20회, 혈압은 118/65 mm Hg이다. 복부 진찰은 정상이다. 혈청 Na+ 145, K+ 3.9, Cl− 103 mEq/L, 칼슘 9.2 mg/dL, 포도당 88 mg/dL이다. 진단을 위한 다음 단계로 가장 적절한 것은?

## 선택지

A. 경구 포도당부하검사
B. 24시간 소변 카테콜아민 검사
C. 72시간 공복검사
D. 수분 제한 검사

## 해설

공복성 저혈당 의심 증상이 반복되나 현재 glucose88은 정상이다. 자연발작 때 혈장glucose와 insulin/Cpeptide 등 검체로 Whipple삼징후를 확인하는 것이 중요하며 포착이 어려우면 C의 감시하 최대72시간 공복으로 재현할 수 있다. 검사중 저혈당이면 정해진 중단/채혈기준을 적용하며 무조건72시간 굶기는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 72시간 공복 C는 감시하 저혈당 재현검사이며 증상만으로 insulinoma확진한 설명 한정.
- https://academic.oup.com/jcem/article/94/3/709/2596247

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006615
