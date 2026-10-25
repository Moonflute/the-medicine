---
type: qbank
schema_version: 1
id: medqa-us-train-002933
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:863730be5271c66ef827f805e47dc968a91da1575bebc87f4f0d2e54df9838b3
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "abdominal compartment syndrome"
  - "intra-abdominal hypertension"
  - "damage-control laparotomy"
  - "open abdomen"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-uzteqwlSDqtaztmo0g7Kad7ZuE6rWwIChBYmRvbWluYWwgQ29tcGFydG1lbnQgU3luZHJvbWUpLm1k
difficulty: complex
answer: A
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

고속 교통사고로 비장 파열과 간 열상 수술을 받은 지 18시간 후 23세 남성의 맥박은 140회/분, 혈압은 80/50 mmHg, 중심정맥압은 19 cmH₂O이다. 수술 중 농축적혈구 6단위를 수혈받았다. 경정맥 팽창이 있고 정중선 수술 절개에는 홍반이나 분비물이 없다. 복부는 단단하고 팽창되어 있으며 지난 6시간 총 소변량은 90 mL이다. BUN 80 mg/dL, 크레아티닌 3.0 mg/dL, 중탄산염 29 mEq/L이다. 다음 중 가장 적절한 관리 단계는?

## 선택지

A. 복부를 다시 열고 플라스틱으로 덮는다
B. 정맥 항생제 투여
C. 혈관조영 색전술
D. 반결장 절제술

## 해설

복부 수술·소생술 후 팽팽한 복부와 저혈압·핍뇨·장기기능 악화는 복부 구획증후군을 강하게 시사한다. 복강내압을 평가하며 명백한 ACS에서는 감압 개복과 임시 복부 폐쇄(A)가 필요하다. 상승한 복강내압은 정맥 환류를 방해하면서 측정 CVP를 높일 수 있으므로 높은 CVP만으로 적절한 전부하를 보장하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 복부 구획증후군의 감압 A 확인. 높은 CVP 자체가 순환혈량 충분의 증거가 아님을 보완.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC3680657/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002933
