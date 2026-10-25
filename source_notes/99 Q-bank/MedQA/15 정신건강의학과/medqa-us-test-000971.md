---
type: qbank
schema_version: 1
id: medqa-us-test-000971
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:f62888976b8e5bef5216c79b6e3c385ae87e52fccdc907e6ddd69bcd0a3e727e
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "범불안장애"
  - "부스피론"
  - "불안 치료"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-uylCDrtojslYgg7J6l7JWgIChHZW5lcmFsaXplZCBBbnhpZXR5IERpc29yZGVyKS5tZA
difficulty: standard
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbHByYXpvbGFtLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EaWF6ZXBhbS5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

67세 남성이 긴장과 불안감을 호소했다. 최근 일상적인 모든 일에 대한 초조함과 긴장감을 점점 조절하지 못하고 있으며 지난 2개월 동안 특히 심해졌지만 1년간 간헐적으로 있었다. 생각이 질주해 밤에 잠을 이루지 못하고 심장이 빨리 뛰며 어지러워 쓰러질 것 같은 때도 있었다. 등과 목의 통증 및 근육 긴장도 증가했다. 흡연과 음주는 하지 않지만 20~30대에 코카인과 헤로인을 사용한 적이 있다. 가장 적절한 치료는?

## 선택지

A. 디아제팜
B. 라멜테온
C. 부스피론
D. 알프라졸람

## 해설


범불안장애의 1차 치료는 SSRI이며, 부스피론은 비벤조디아제핀 항불안제로 부작용이 적어 장기 사용에 적합하다. 환자는 장기간 지속되는 불안과 초조함을 호소하므로 부스피론이 가장 적절하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000971

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 원문 장기간 여러 영역의 불안·근긴장·불면과 영한 선지·정답 확인. 제시 약물 중 의존 위험이 낮은 부스피론 선택은 적절하며 SSRI가 선택지에 없음을 확인.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
