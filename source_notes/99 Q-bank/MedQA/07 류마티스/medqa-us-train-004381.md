---
type: qbank
schema_version: 1
id: medqa-us-train-004381
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:04812e62ebaedbcc5f30a37ece0113f04eeaaa8ffb5a65908381cb284b79c162
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "손 골관절염"
  - "원위지간관절 골관절염"
  - "골관절염"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qzqOq0gOygiOyXvCAoT3N0ZW9hcnRocml0aXMpLm1k
question_type: management
difficulty: standard
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0luZmxpeGltYWIubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2hsb3JvcXVpbmUubWQ
---

# MedQA US 임상문제

## 문제

55세 여성이 손을 많이 쓴 날 심해지는 손가락 끝마디 통증과 짧은 아침 강직이 있다. 손 골관절염으로 진단됐고 반복 위궤양 때문에 경구 NSAID는 피하려 한다. 운동과 관절 보호 교육에 더해 먼저 고려할 국소 약물은?

## 선택지

A. 국소 디클로페낙
B. 경구 아스피린
C. 경구 하이드록시클로로퀸
D. 국소 고용량 스테로이드 연고

## 해설


손 골관절염에는 국소 NSAID를 고려할 수 있다. 전신 노출이 경구제보다 적지만 위장관 위험 등이 전혀 없지는 않으므로 사용 범위와 병용약을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004381 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Acetaminophen을 모든 OA에서 가장 효과적인 1차약이라 한 표현을 반복 위궤양 환자의 제한적 대안으로 수정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11488261/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004381
- https://www.nice.org.uk/guidance/ng226/chapter/Recommendations
