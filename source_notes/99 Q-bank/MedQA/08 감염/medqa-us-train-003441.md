---
type: qbank
schema_version: 1
id: medqa-us-train-003441
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ab98a054615cb1997e957edb8cff7487af302086b090c40db3ccfa8f97231eea
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "chronic hepatitis B"
  - "HBsAg positivity"
  - "anti-HBc IgG"
  - "HBeAg"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rp4zshLEgQu2YlSDqsITsl7wgKENocm9uaWMgSGVwYXRpdGlzIEIgKEhCVikpLm1k
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

44세 여성이 황달과 전반적인 복통으로 응급실에 왔다. B형 간염 표면항원은 양성, 표면 IgG 항체는 음성, 핵심항원 IgG 항체는 양성, e항원과 e항체는 모두 양성이었다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 급성 B형 간염
B. 만성 B형 간염
C. B형 간염 예방접종이나 감염이 없음
D. 회복된 B형 간염

## 해설


HBsAg 양성, anti‑HBc IgG 양성, HBeAg와 HBeAb 모두 양성은 지속적인 바이러스 복제를 의미하는 만성 B형 간염을 나타낸다. 급성 감염에서는 HBeAg가 양성이고 IgM anti‑HBc가 존재한다. 따라서 정답은 만성 B형 간염이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003441
