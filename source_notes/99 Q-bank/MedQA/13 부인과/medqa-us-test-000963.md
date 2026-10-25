---
type: qbank
schema_version: 1
id: medqa-us-test-000963
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:b49901d408f5efdd2015052f221d83adf3d4a791f633e6a28d4378e6f2d8a831
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "골반염증성 질환"
  - "난관난소농양"
  - "입원 정맥항생제"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-qzqOuwmOuCtCDqsJDsl7wgKFBlbHZpYyBJbmZsYW1tYXRvcnkgRGlzZWFzZSkubWQ
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2Vmb3RldGFuLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 여성이 6일간의 하복부 통증으로 응급실에 왔다. 증상이 진행되어 열감과 오심이 생겼고 이틀 전 비혈성 설사를 한 번 했다. 응급실에서 세 차례 구토했다. 최근 단순 요로감염으로 시프로플록사신을 복용했고 월경이 불규칙하며 마지막 월경은 6주 전이다. 최근 1년간 성 파트너가 3명이고 피임기구 사용은 일관되지 않았다. 체온 100.5°F(38.1°C), 혈압 102/68 mmHg, 맥박 97회/분, 호흡 14회/분이었다. 치골상부와 오른쪽 하복부에 심한 압통과 자발적 방어가 있었고 반발통은 없었다. 골반검사에서 중등도 화농성 질분비물, 자궁경부 이동통, 오른쪽 압통성 부속기 종괴가 있었다. 가장 적절한 치료는?

## 선택지

A. 근육 세프트리악손과 경구 독시사이클린 후 외래 추적
B. 정맥 세포테탄과 독시사이클린을 투여하며 입원
C. 경구 반코마이신 후 외래 추적
D. 메토트렉세이트 후 외래 추적

## 해설

PID와 TOA가 의심되고 반복 구토로 경구 치료가 어렵기 때문에 입원 IV 세포테탄+독시사이클린(B)이 적절하다. 초음파 및 임신검사로 농양·자궁외임신 등을 평가한다. 호전 후에도 총14일 치료를 완수하며 TOA에서는 충분한 혐기성 범위를 포함하도록 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: TOA 의심의 입원·항생제와 임신 확인, 후속 혐기성 치료 보강.
- https://www.cdc.gov/std/treatment-guidelines/pid.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000963
