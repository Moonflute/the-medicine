---
type: qbank
schema_version: 1
id: medqa-us-test-000325
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:8e765014bfccbc370621745faae64be0293fdf1e1ae2a172d1d97d15a1aa1219
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "급성 담관염"
  - "총담관 폐쇄"
  - "패혈성 쇼크"
related_disease_slugs:
  - MTEg7Jm46rO8L-2MqO2YiOyEsSDsh7ztgawgKFNlcHRpYyBTaG9jaykubWQ
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

55세 남성이 고열, 황달과 오른쪽 윗배 통증으로 내원했다. 혈압이 80/50 mmHg까지 떨어지고 혼돈이 생겼다. 초음파에서 총담관 확장이 보인다. 수액·혈압 지지와 정맥 항생제를 시작했다. 감염원을 조절할 다음 처치는?

## 선택지

A. 내시경적 역행성 담췌관조영술(ERCP)로 담도를 신속히 배액한다
B. 자기공명 담췌관조영술(MRCP)만 시행하고 며칠 관찰한다
C. 내시경 담도배액 없이 회복 후 담낭절제술만 한다
D. 비위관 흡인만 한다

## 해설


담도 폐쇄에 감염과 장기기능 장애가 생긴 중증 담관염이다. 소생과 항생제를 하면서 폐쇄된 담도를 신속히 배액한다. ERCP는 배액이 가능한 치료이며 MRCP는 영상 검사여서 감염원을 제거하지 못한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 발열·황달·우상복부통증에 쇼크/의식변화와 담관확장이 동반된 중증 담관염. 소생·항생제 후 배액 가능한 ERCP A가 적합.
- https://www.asge.org/home/resources/publications/guidelines/asge-guideline-on-the-management-of-cholangitis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000325
- https://www.jshbps.jp/modules/en/index.php?content_id=47
- https://www.asge.org/docs/default-source/default-document-library/piis0016510720351117.pdf
