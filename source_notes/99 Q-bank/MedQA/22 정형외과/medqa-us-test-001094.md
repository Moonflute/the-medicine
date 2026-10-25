---
type: qbank
schema_version: 1
id: medqa-us-test-001094
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:3b17d219c7b3ac16842b33f94c215effe409c6d5129c4d88924d59b4e336b0ac
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "골다공증 선별"
  - "저체중"
  - "DEXA"
question_type: prevention
related_disease_slugs:
  - MDQg64K067aE67mEL-qzqOuLpOqzteymnSAoT3N0ZW9wb3Jvc2lzKS5tZA
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

62세 여성이 정기 건강검진을 받으러 왔다. 6개월 전 독감 예방접종을 받았고 1년 전 유방촬영, 2년 전 자궁경부 세포검사와 대장내시경은 정상이었다. 고혈압 병력이 있고 아버지는 50세에 심근경색으로 사망했다. 일본에서 30년 전 이주했고 18년간 하루 반 갑 흡연, 매일 와인 4~5잔을 마신다. 키 165 cm, 체중 50 kg, BMI 18 kg/m²이다. 다음 중 가장 적절한 처치는?

## 선택지

A. 자궁경부 세포검사
B. 이중에너지 X선 흡수계측
C. 복부 초음파
D. 경식도 심초음파

## 해설

이 62세 여성은 저체중·흡연·과음 등 골절 위험인자가 있어 선지 중 골밀도 평가를 위한 DXA(B)가 가장 적절하다. 65세 미만 폐경 여성은 먼저 위험인자를 확인하고 임상 골절위험평가로 검사 필요성을 판단한다. 본문에 폐경 상태가 직접 명시되지는 않았으므로 실제 진료에서는 함께 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 위험인자 있는 65세 미만 여성의 DXA B를 유지하되 저체중 하나만으로 일괄 검사가 아니라 폐경 및 임상 위험평가를 반영한다.
- 공식/학회 근거: https://www.uspreventiveservicestaskforce.org/uspstf/index.php/recommendation/osteoporosis-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001094
