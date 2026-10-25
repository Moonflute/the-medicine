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

55세 여성이 1년 동안 지속된 관절통과 뻣뻣함을 호소하며 내원했다. 통증은 주로 손에 집중되고 보통 늦은 오후에 더 심하다. 관절을 둘러싸는 화끈거리는 양상이며 약간의 저림과 따끔거림이 동반된다. 아침에 특히 뻣뻣하고 약 15~20분 지속된다. 과거력으로 반복되는 위궤양이 있다. 어머니가 루푸스를 앓았던 병력이 있어 자신도 같은 병일까 걱정한다. 발열, 발진, 궤양, 비뇨생식기 증상, 체중 감소 또는 배변 변화는 없다. 신체검사에서 양측 원위지간관절에 경한 압통이 있다. 이 환자에게 처방할 가장 적절한 초기 약물은 무엇인가?

## 선택지

A. 아세트아미노펜
B. 아스피린
C. 하이드록시클로로퀸
D. 인플릭시맙

## 해설


짧은 아침 경직·사용 후 악화되는 DIP 통증은 손 골관절염을 지지한다. 반복 위궤양 병력 때문에 aspirin 등 경구 NSAID의 위장관 위험이 높아 선택지 중 acetaminophen(A)을 단기간/간헐적으로 고려할 수 있다. 약효는 제한적이며 모든 OA의 보편적 최강 1차약은 아니다. 운동·손 기능 중재와 국소 NSAID 등도 고려하고 간질환·음주·총복용량을 확인한다. Hydroxychloroquine·infliximab은 손 OA에 통상 쓰는 질병조절 치료가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004381 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Acetaminophen을 모든 OA에서 가장 효과적인 1차약이라 한 표현을 반복 위궤양 환자의 제한적 대안으로 수정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11488261/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004381
