---
type: qbank
schema_version: 1
id: medqa-us-train-006523
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0a51cb7b37faf4d07c4d80d7819b67b0816a7832032ff9392f5e4d47fd9f62a2
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "골다공증 선별"
  - "폐경 후 여성"
  - "예방 건강검진"
question_type: prevention
related_disease_slugs:
  - MDQg64K067aE67mEL-qzqOuLpOqzteymnSAoT3N0ZW9wb3Jvc2lzKS5tZA
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

65세 여성이 건강검진을 위해 주치의를 방문했다. 최근 건강했고 걱정되는 점은 없다. 12갑년의 흡연력이 있고 일주일에 술 3잔을 마신다. 은퇴하여 남편과 집에서 살고 있다. 8년 전 대장내시경은 정상이었고 1년 전 유방촬영술도 정상이었다. 마지막 자궁경부 세포검사 시기는 기억하지 못하지만 62세 때였던 것 같다고 한다. 체온은 98.1°F(36.7°C), 혈압은 137/78 mmHg, 맥박은 분당 80회, 호흡수는 분당 13회, 실내 공기에서 산소포화도는 98%이다. 신체진찰은 정상이다. 다음 중 처치로 가장 적절한 다음 단계는?

## 선택지

A. 이중에너지 X선 흡수계측법(DEXA)
B. 유방촬영술
C. 중재 불필요
D. 자궁경부 세포검사

## 해설

65세 여성은 DXA를 통한 골다공증 선별 대상이므로 A가 적절하다. 다만 자궁경부 선별 중단은 충분한 최근 음성 이력을 확인해야 하며 마지막 검사 시점이 불확실한 이 환자에서 연령만으로 중단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 65세 골밀도 선별 A 유지. 불명확한 자궁경부 선별 이력만으로 추가 검사가 모두 불필요하다는 설명 수정.
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/osteoporosis-screening%20
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/cervical-cancer-screening

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006523
