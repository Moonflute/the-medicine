---
type: qbank
schema_version: 1
id: medqa-us-train-001611
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d782740ab9f64e79a26f284abd06589879021fd481333d7aa3f3728fe7c2d0d7
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "gross hematuria"
  - "urothelial carcinoma"
  - "CT urography"
question_type: investigation
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-uwqeq0keyVlCAoQmxhZGRlciBjYW5jZXIpLm1k
difficulty: complex
answer: B
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

67세 남성이 혈뇨로 일차진료에 내원했다. 일주일 전 처음 발견했고 그 외에는 건강하다. 18년 동안 제2형 당뇨병으로 인슐린 주사를 맞고 있다. 29년 동안 하루 30–40개비를 피웠고 사회적으로 술을 마신다. 체온은 36.6°C (97.8°F), 혈압은 135/82 mm Hg, 심박수는 105회/분이다. 신체검사 소견은 없다. 소변검사에서 고배율 시야당 적혈구 15–20개가 보인다. 다음 중 상태 평가의 다음 검사로 가장 적절한 것은 무엇인가?

## 선택지

A. 소변 세포검사
B. 조영증강 CT
C. 전립선특이항원
D. 소변 종양표지자

## 해설

고령 남성의 무통성 혈뇨와 많은 흡연력은 요로 악성종양 고위험 소견이다. 네 선지 중 B, 조영증강 CT/CT urography가 상부요로 평가에 적절하다. 방광 평가에는 방광경도 필요하므로 CT 한 검사로 전체 평가를 대체하는 뜻은 아니다. 미세혈뇨가 있으면 누구나 CT를 해야 하거나 CT가 모든 요로 종양의 가장 민감한 검사라는 설명은 부정확하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 고위험 혈뇨에서 CT B의 역할을 상부요로 평가로 명확히 하고 방광경도 필요함을 보완.
- 공식/학회 근거: https://www.auanet.org/documents/Guidelines/PDF/2025%20Guidelines/MH%20Unabridged%2002.2025FINAL3-1.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001611
