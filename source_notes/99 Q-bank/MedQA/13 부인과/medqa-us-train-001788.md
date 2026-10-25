---
type: qbank
schema_version: 1
id: medqa-us-train-001788
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:eff7de154b400135faf8b8abe49eafc70c89af85cba3bcf1279cd52808a84847
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "gestational hypertension"
  - "preeclampsia evaluation"
  - "protein-to-creatinine ratio"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoOyEseqzoO2YiOyVlSAoR2VzdGF0aW9uYWwgSHlwZXJ0ZW5zaW9uKS5tZA
  - MTIg7IKw6rO8L-yghOyekOqwhOymnSAoUHJlZWNsYW1wc2lhKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 여성이 임신에 대한 걱정으로 일차진료의에게 내원했다. 첫 임신이며 현재 임신 33주이다. 발목과 다리가 전반적으로 부어 이것이 비정상인지 걱정한다. 그 외에는 증상이 없다. 비만과 당뇨병 병력이 있다. 체온 98.5°F (36.9°C), 혈압 147/92 mmHg, 맥박 80/min, 호흡 15/min, 실내 공기 산소포화도 97%이다. 양측 하지 부종이 보인다. 다음 중 최선의 다음 관리 단계는 무엇인가?

## 선택지

A. 24시간 요단백 검사
B. 심초음파
C. 안심시키고 1주 후 추적관찰
D. 무작위 단백질/크레아티닌 비율

## 해설

33주 새 고혈압·부종은 전자간증 평가가 필요하므로 spot 소변 단백/크레아티닌비(D)가 신속한 정량 평가에 적절하다. 혈압 반복 확인과 혈소판·크레아티닌·간효소 등도 평가한다. 24시간 소변도 상황에 따라 유효하며 단지 모든 대안이 과도한 검사라서 D인 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 단백/크레아티닌비는 전자간증 평가의 일부이며 다른 검사 모두 과잉이라는 표현 삭제.
- https://www.nice.org.uk/guidance/ng133/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001788
