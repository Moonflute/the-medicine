---
type: qbank
schema_version: 1
id: medqa-us-train-003798
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:201c6c9713f71b2ab22b91a95be18645fdfab3fef600a08c3d6e96307078235e
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "diabetic ketoacidosis"
  - "high anion gap metabolic acidosis"
  - "insulin deficiency"
  - "Kussmaul respirations"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
question_type: diagnosis
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

엠파글리플로진을 복용하는 56세 제2형 당뇨병 환자가 식사를 거의 못 한 뒤 구토와 깊고 빠른 호흡으로 내원했다. 혈당 168 mg/dL, 혈중 β-하이드록시부티레이트 5.6 mmol/L, pH 7.22, 중탄산염 12 mmol/L이다. 진단은?

## 선택지

A. 고삼투압성 고혈당 상태
B. 구토에 의한 대사성 알칼리증
C. 정상혈당 당뇨병성 케톤산증
D. 병적 산증이 없는 단순 공복 케톤증

## 해설


당뇨병 병력이 있고 케톤혈증과 대사성 산증이 뚜렷하다. SGLT2 억제제 복용 중에는 혈당이 200 mg/dL 미만이어도 케톤산증이 생길 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 인슐린 중단·고혈당·Kussmaul 호흡의 DKA는 pH↓/HCO3↓/AG↑ C.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003798
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
- https://doi.org/10.2337/dci24-0032
