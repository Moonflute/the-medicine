---
type: qbank
schema_version: 1
id: medqa-us-train-001828
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c7eeae544a3c5216a4e4a3930ede56931751b6aa1417977bf240363c4625430e
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "severe hypercholesterolemia"
  - "high-intensity statin"
  - "dyslipidemia"
related_disease_slugs:
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
question_type: management
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXpldGltaWJlLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRmVub2ZpYnJhdGUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvU2ltdmFzdGF0aW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

53세 남성이 두 차례 공복 검사에서 LDL 콜레스테롤 203 mg/dL 안팎을 보였다. 갑상선기능저하증 등 이차 원인이 없고 아직 지질강하제를 복용하지 않는다. 적절한 초기 약물은?

## 선택지

A. 저강도 심바스타틴 10 mg
B. 에제티미브 단독
C. 페노피브레이트 단독
D. 고강도 아토르바스타틴 40 mg

## 해설


LDL 콜레스테롤이 반복해서 190 mg/dL 이상이면 단기 위험점수만으로 스타틴 치료를 미루지 않는다. 내약 가능한 고강도 스타틴이 우선이며, 가족력 등을 확인해 가족성 고콜레스테롤혈증도 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: LDL203은 중증 고콜레스테롤혈증으로 보기 중 고강도 atorvastatin40 D가 적합. 저용량 simvastatin/중성지방약과 구별.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001423

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001828
- https://manage.lipid.or.kr/dtp/therapy.php
- https://lipid.or.kr/reference/guideline.php?idx=1454&mode=view
- https://www.kjim.org/journal/view.php?doi=10.3904%2Fkjim.2022.121
