---
type: qbank
schema_version: 1
id: medqa-us-train-006918
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1c8ba6f11a97124962006b732bdd4695d8a4774d034a4b1874fe9ac4afa90585
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "1도 방실차단"
  - "베라파밀 관련 PR 연장"
  - "무증상 서맥"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uwqeyLpOywqOuLqCAoQVYgYmxvY2spLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

54세 여성이 하루 동안 두 차례 발생한 선홍색 직장출혈로 응급실에 내원했다. 편두통으로 베라파밀을 예방적으로 복용한다. 전반적으로 건강하고 혈역학적으로 안정적이다. 심장은 잡음이나 추가 심음 없이 규칙적으로 뛰고 폐 청진은 깨끗하다. 복부는 반발통이나 방어성 긴장 없이 경미한 압통이 있다. 직장수지검사에서 장갑에 신선한 피가 묻는다. 혈색소 10.4 g/dL, 백혈구 5,000/mm³, 혈소판 175,000/mm³, PTT 35초이다. 심전도에서 심박수 분당 75회, 정상 축, PR 간격 280ms, QRS 80ms, 각 P파 뒤 QRS가 있으며 허혈 변화는 없다. 심혈관 평가와 관련해 가장 적절한 다음 단계는?

## 선택지

A. 관찰
B. 동기화 심율동전환
C. 메토프롤롤 치료
D. 심박동기 삽입

## 해설


ECG에서 PR 간격이 280 ms로 1도 방실 차단(AV block)이며, 증상이 없고 혈역학적으로 안정적인 경우 관찰이 권장된다. 치료적 개입(심박동기, 베타 차단제 등)은 증상이 있거나 진행성 차단일 때 고려한다. 따라서 현재는 관찰만 필요하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006918
