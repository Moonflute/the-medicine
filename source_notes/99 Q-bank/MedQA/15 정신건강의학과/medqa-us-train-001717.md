---
type: qbank
schema_version: 1
id: medqa-us-train-001717
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1e7a9a050ac633c4a3dee5d9e0034a9564193b54067afa55f718aa7eb7d6c189
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "bipolar disorder in pregnancy"
  - "lithium teratogenicity"
  - "mood stabilizer"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-q4sOu2hCDslYjsoJXsoJwgKE1vb2QgU3RhYmlsaXplcnMpLm1k
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG9uYXplcGFtLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MYW1vdHJpZ2luZS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 양극성장애 여성이 임신했다고 생각해 산부인과에 내원했다. 소변 임신검사는 양성이며 경한 양극성장애로 리튬을 간헐적으로 2년간 복용했지만 재발 증상은 없었다. 수개월 동안 정신과 의사를 만나지 못했다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 리튬을 감량하고 발프로산을 투여
B. 임신 내내 리튬을 계속하고 라모트리진을 추가
C. 리튬을 감량하고 카바마제핀을 투여
D. 리튬을 감량하고 필요 시 클로나제팜 처방

## 해설

재발 없이 안정적인 임신 환자는 정신과·산과와 위험·편익을 재평가한 뒤 리튬을 점진적으로 중단하는 방안을 고려할 수 있다. 중단하면 재발할 위험이 있고 이미 발생한 태아 위험이 사라지는 것은 아니므로 임의 감량하지 않는다. 제시된 선택지 중 발프로산·카바마제핀으로 교체하거나 근거 없이 라모트리진을 추가하는 것보다 리튬 감량을 고려하는 원문 선택이 적절하다. 다만 클로나제팜은 양극성 장애의 유지 대체제가 아니며, 임신 중 벤조디아제핀은 중증 불안·초조 등 필요한 상황에서 단기간만 전문적으로 고려한다. 안정 환자에게 자동으로 처방하는 안전한 보조약이라는 기존 설명은 잘못이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001717

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 리튬 일률 감량과 클로나제팜을 안전한 유지 대체약으로 설명한 오류 교정. 원정답은 재발 없는 안정 환자의 신중한 감량 옵션으로 제한.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/cg192/chapter/Recommendations
