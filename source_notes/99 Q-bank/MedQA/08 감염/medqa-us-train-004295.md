---
type: qbank
schema_version: 1
id: medqa-us-train-004295
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5e0dac9e4ee695d6aac8cba9c40d14722275c33011469a3907c9f5745fc4370b
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "감염성 단핵구증"
  - "엡스타인-바 바이러스"
  - "단핵구증 반점검사"
related_disease_slugs:
  - MDgg6rCQ7Je8L-qwkOyXvC5tZA
question_type: 임상증례 객관식
difficulty: complex
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

19세 여성이 2주째 인후통과 심한 피로를 호소한다. 진찰에서 편도 삼출과 후경부 림프절비대가 있다. 감염성 단핵구증이 의심될 때 급성 일차 EBV 감염을 가장 잘 뒷받침하는 항체 조합은?

## 선택지

A. VCA IgM 양성, EBNA 항체 음성
B. VCA IgG 양성, EBNA 항체 양성, VCA IgM 음성
C. VCA IgM·VCA IgG·EBNA 항체 모두 음성
D. EBNA 항체만 양성

## 해설


급성 일차 EBV 감염에서는 바이러스 캡시드 항원(VCA)에 대한 IgM이 나타나지만 EBNA 항체는 대개 아직 나타나지 않는다. VCA IgG와 EBNA 항체가 모두 양성이고 VCA IgM이 음성이면 보통 과거 감염을 시사한다. 이 문항은 비특이적 이종항체가 아니라 EBV 특이 항체를 묻는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004295 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Monospot A는 해당 선택지에서 유용하나 EBV 확진/모든 연령 최민감 검사로 과장하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/epstein-barr/php/laboratories/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004295
- CDC, Epstein–Barr virus 검사 해석: https://www.cdc.gov/epstein-barr/php/laboratories/
