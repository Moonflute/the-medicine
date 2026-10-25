---
type: qbank
schema_version: 1
id: medqa-us-train-006637
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bbcb3b88e0da4f665cf7d7fb91e42bb57b10c0218d4f6d94091fc2edbf9c4eb4
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "공황장애"
  - "광장공포증"
  - "반복 공황발작"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-qzte2ZqSDsnqXslaAgKFBhbmljIERpc29yZGVyKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-q0keyepSDqs7Xtj6zspp0gKEFnb3JhcGhvYmlhKS5tZA
difficulty: standard
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강했던 24세 여성이 3개월 동안 반복되는 목이 막히는 느낌, 심계항진, 전신 발한 및 호흡곤란으로 내원했다. 증상은 예고 없이 발생하고 약 10분 지속된 후 서서히 사라진다. 한 번은 쇼핑센터에서 발생했으며 또 생길까 봐 붐비는 곳을 피한다. 이러한 증상으로 응급실에서 두 번 평가받았으나 두 번 모두 심전도는 정상 동율동이고 심장효소와 갑상샘호르몬 농도는 정상이었다. 현재 증상은 없지만 언제든 재발하고 심장에 문제가 있을까 걱정한다. 흡연과 음주는 하지 않고 경구피임약만 복용한다. 활력징후와 신체진찰은 정상이며 소변 독성검사는 음성이다. 다음 중 처치로 가장 적절한 것은?

## 선택지

A. 플루옥세틴 처방
B. D-이합체 측정
C. 심초음파
D. 로라제팜 투여

## 해설

반복되는 갑작스러운 발작과 예기불안·회피는 공황장애에 부합하며 제시된 장기 치료 중 플루옥세틴이 적절하다. 현재 무증상이고 이전 평가와 진찰에 추가 의학적 원인을 시사하는 단서가 없어 일률적인 D-dimer나 심초음파를 추가하지 않는다. 다만 D-dimer가 호흡곤란 진단에 항상 무관한 것은 아니며 폐색전증 의심 여부는 임상 사전확률에 따라 판단한다. 로라제팜은 장기 기본 치료를 대체하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006637

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 플루옥세틴 원정답 유지. D-dimer가 진단에 무관하다는 일반적 단정을 이 사례에서 추가 검사 근거 부족으로 교정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
