---
type: qbank
schema_version: 1
id: medqa-us-train-009200
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a6c89b832ef290acf7fbe311d950a254d902c2f48b007a911d9837c6575d7a73
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "thrombosed external hemorrhoid"
  - "혈전성 외치핵"
  - "external hemorrhoid"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_smbjsuZjtlbUgKEV4dGVybmFsIEhlbW9ycmhvaWQpLm1k
question_type: management
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

56세 남성이 갑자기 시작된 심한 항문 통증으로 왔다. 발생 12시간째이고 항문 바깥에 단단하고 푸르스름한 압통성 결절이 있다. 발열이나 고름은 없다. 환자는 빠른 통증 완화를 원한다. 고려할 처치는?

## 선택지

A. 국소마취하 혈전성 외치핵 절제
B. 항문 주위 농양으로 보고 절개·배농
C. 고무밴드로 결절 결찰
D. 경화제 주사

## 해설


갑자기 생긴 푸르스름한 압통성 결절은 혈전성 외치핵에 맞는다. 통증이 심하고 일찍 온 환자는 국소 절제로 더 빠른 완화를 기대할 수 있다. 경미하거나 이미 좋아지는 경우에는 보존치료도 가능하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009200 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 갑작스러운 통증성 항문주위 종괴의 혈전성 외치핵 조기 절제 취지 유지; 생존 혈전이라는 잘못된 표현 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://fascrs.org/ascrs/media/files/2024-Hemorrhoids-CPG.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009200
- https://doi.org/10.1097/DCR.0000000000003276
