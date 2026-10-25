---
type: qbank
schema_version: 1
id: medqa-us-train-001914
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:26d0affea835937f7732664c3b428f59b31bd86cc35c12282c40c9fc887c94a6
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "dyslipidemia"
  - "low ASCVD risk"
  - "statin therapy"
related_disease_slugs:
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXpldGltaWJlLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRmVub2ZpYnJhdGUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: A
answer_change_reason: "원문 A(ezetimibe 추가)는 제시된 낮은 일차예방 위험도와 추가요법 적응증으로 뒷받침되지 않음. 2026 ACC/AHA 이상지질혈증 지침에 비추어 추가 약물 없음 D로 교정."
---

# MedQA US 임상문제

## 문제

58세 여성이 정기 건강검진을 위해 내원했다. 이상지질혈증과 만성 고혈압 병력이 있으며 atorvastatin, hydrochlorothiazide 및 lisinopril을 복용한다. 매일 운동하고 건강한 식사를 하며 흡연하지 않는다. 혈압은 130/80 mm Hg로 반복 측정해 확인되었고 BMI는 22 kg/m2이다. 총콜레스테롤 193 mg/dL, LDL-C 124 mg/dL, HDL-C 40 mg/dL, 중성지방 148 mg/dL이며 10년 심혈관질환 위험은 4.6%이다. 약물치료에서 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. Ezetimibe
B. Fenofibrate
C. Niacin
D. 현재 추가 약물치료를 하지 않는다

## 해설

제시된 정보에는 ASCVD, 당뇨병, LDL-C ≥190 mg/dL의 중증 고콜레스테롤혈증 또는 최대내약 스타틴에도 목표에 미달하는 고위험 상태가 없다. LDL-C 124 mg/dL라는 이유만으로 ezetimibe를 추가하지 않는다. 선택지에서는 D(추가 약물 불필요)가 가장 적절하다. 이는 기존 atorvastatin 중단을 뜻하지 않으며 생활습관, 기저 LDL·약물 반응·현재 위험도는 계속 평가한다. 원문 A와 기존 해설 D의 불일치를 바로잡았다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ASCVD·당뇨 없는 추정위험 4.6%에서 LDL 124만으로 ezetimibe 추가를 정당화하지 못함. 해설과 불일치한 A를 D로 수정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001423

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001914
