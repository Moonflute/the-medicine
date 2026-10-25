---
type: qbank
schema_version: 1
id: medqa-us-validation-000624
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:78dd216fb2609296f5563cf681ea69443d1cce48a4bc2447dd3f3a6c56a41c69
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "골다공증"
  - "스테로이드 유발 골감소"
  - "DEXA 검사"
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
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

61세 여성이 류마티스관절염으로 메틸프레드니솔론을 복용하고 있으며, 최근 1년간 가벼운 낙상으로 상완골과 경골 골절이 두 번 있었다. 폐경 후 호르몬대체요법은 받지 않고, 운동을 하지 않는다. 선별검사에서 예상되는 결과는?

## 선택지

A. PHQ-9 점수 17점
B. DEXA 검사 T 점수 -2.01
C. 복부 초음파에서 대동맥 확장
D. 유방촬영술에서 국소 고음영

## 해설

폐경, 류마티스관절염, 전신 스테로이드와 저에너지 골절은 낮은 골밀도·골절 위험 증가를 시사하여 선지 중 DEXA T점수 -2.01(B)이 가장 합당하다. -2.01은 골밀도 수치 분류상 골감소증 범위(-1에서 -2.5 사이)이며 -2.5 이하라는 골다공증 역치를 만족하는 수치가 아니다. 임상적 골절 위험과 치료 필요성은 골밀도 수치만이 아니라 취약골절·스테로이드 등도 종합한다. 이 병력만으로 실제 T점수가 정확히 -2.01일 것이라고 예측할 수는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. T점수 -2.01은 골밀도 기준상 골감소증이지 -2.5 이하 골다공증 수치가 아니라는 해설 모순을 교정했다. 선지 B는 낮은 골밀도의 예상 예시로 유지한다.
- 공식/학회 근거: https://www.niams.nih.gov/health-topics/bone-mineral-density-tests-what-numbers-mean

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000624
