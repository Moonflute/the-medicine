---
type: qbank
schema_version: 1
id: medqa-us-train-007334
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:de04928956f879807177191a9892c5affb98378f27188d0cad591e69b36f5f5d
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "베타 지중해빈혈 중증형"
  - "헤모글로빈 F"
  - "골수 확장"
  - "용혈성 빈혈"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yaqe2YiOyEsSDruYjtmIggKEhlbW9seXRpYyBBbmVtaWEpLm1k
  - MDkg7ZiI7JWhL-yngOykke2VtCDruYjtmIggKFRoYWxhc3NlbWlhKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

18개월 남아가 체중이 늘지 않아 부모와 함께 내원했다. 임신과 자연 질식분만은 순조로웠다. 체온은 37.0°C(98.6°F), 혈압 102/57 mmHg, 맥박 97회/분이다. 키는 30백분위수, 체중은 연령과 성별 기준 25백분위수이다. 신체검사에서 전반적인 창백, 경미한 공막 황달, 간비장비대가 보인다. 검사에서 헤모글로빈 8.9 g/dL, MCV 67 μm³, RDW 12.7%, 백혈구 수 11,300/mm³, 혈소판 수 420,000/mm³이다. 두개골 단순 방사선 사진이 제시되어 있다. 이 환자에서 가장 우세한 헤모글로빈 종류는 무엇인가?

## 선택지

A. 헤모글로빈 Bart
B. 헤모글로빈 F
C. 헤모글로빈 A2
D. 헤모글로빈 S

## 해설


영아기 이후 성장부전·간비장비대·소구성 용혈성 빈혈은 beta-thalassemia major를 의심하게 하며 이 경우 주된 hemoglobin은 HbF B다. 다만 두개골 이미지가 누락되어 hair-on-end 등을 직접 확인했다고 할 수 없고 실제 Hb 분획/유전검사로 진단한다. Alpha-thal major의 HbBart는 대개 태아기 중증 빈혈과 연결된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007334 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 영아기 thal major의 HbF B 추론 유지; 누락된 두개골 그림에서 골수확장을 보았다고 단정하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007334
