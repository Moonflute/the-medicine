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
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

61세 폐경 여성이 류마티스관절염으로 프레드니솔론을 매일 복용하기 시작했다. 몇 달 이상 투여가 예상된다. 골절을 예방하기 위해 처음 할 일은?

## 선택지

A. 골절이 생길 때까지 평가하지 않는다
B. 1년 뒤 칼슘 수치만 잰다
C. 골밀도와 골절 위험을 조기에 평가한다
D. 약을 끊은 뒤에만 뼈를 검사한다

## 해설

전신 스테로이드 사용 초기에 골절 위험이 높아질 수 있다. 장기 복용이 예상되면 골밀도와 기존 골절 등 위험을 일찍 평가해 예방 치료를 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. T점수 -2.01은 골밀도 기준상 골감소증이지 -2.5 이하 골다공증 수치가 아니라는 해설 모순을 교정했다. 선지 B는 낮은 골밀도의 예상 예시로 유지한다.
- 공식/학회 근거: https://www.niams.nih.gov/health-topics/bone-mineral-density-tests-what-numbers-mean

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000624
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6288607/
