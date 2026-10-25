---
type: qbank
schema_version: 1
id: medqa-us-validation-000152
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:05e984031ba5d61e89c667d33d5569ce05db8b963a30b72e4f98b41d0ef714f5
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "공황발작"
  - "과호흡"
  - "알프라졸람"
question_type: management
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-qzvO2YuO2doSAoSHlwZXJ2ZW50aWxhdGlvbikubWQ
difficulty: standard
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbHByYXpvbGFtLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

26세 여성이 병원에 있는 남자친구를 방문하다 10분 전부터 발한, 심계항진, 오심, 오한을 동반한 흉통이 생겨 응급실에 왔다. 빈맥, 고혈압, 빈호흡이 있지만 심전도는 빈맥 외에 특이소견이 없고 갑상선검사와 소변 약물검사는 정상이었다. 가장 적절한 즉시 처치는?

## 선택지

A. 모르핀, 산소, 니트로글리세린, 아스피린, 베타차단제, ACE 억제제와 헤파린
B. 알프라졸람, 안심시키기, 호흡을 늦추도록 격려
C. 알부테롤 흡입치료
D. 인지행동치료

## 해설

원문은 공황발작 양상에서 즉시 안심시키고 호흡을 천천히 하도록 돕는 접근과 단기 알프라졸람을 선택한다. 제시된 선택지 중 이에 해당하는 조합이 적절하나, 실제 흉통·호흡곤란의 의학적 위험을 먼저 평가해야 한다. CBT는 장기 관리에 중요하고 알부테롤은 기관지수축 치료제이므로 다른 선지를 모두 심혈관 약물로 분류하지 않는다. 벤조디아제핀의 진정·의존 위험을 고려하며 장기 기본 치료로 삼지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000152

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 공황발작 단기 처치 답 유지. 나머지 선지를 모두 심혈관 치료로 분류한 오류와 무조건 벤조 일차라는 단정 제거.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
