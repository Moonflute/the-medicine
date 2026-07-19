---
type: qbank
schema_version: 1
id: medqa-us-train-006461
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:744d742eb2291b57817759d7573456e7c189f4a87c5299a1e33561dc47eabcc7
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "중증 전자간증"
  - "임신성 고혈압"
  - "간 트랜스아미나제 상승"
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

동반질환이 없는 23세 초산부가 임신 34주에 부종과 중등도 두통으로 내원했다. 활력징후는 혈압 147/90 mm Hg, 심박수 분당 82회, 호흡수 분당 16회, 체온 36.6℃(97.9℉)이다. 2+ 함요부종이 있고 소변 시험지에서 단백뇨 2+이다. 검사 결과 적혈구 320만/mm³, 혈색소 12.1 g/dL, 헤마토크릿 0.58, 망상적혈구 0.3%, 백혈구 7,300/mm³, 혈소판 190,000/mm³, 총 빌리루빈 3.3 mg/dL(56.4 µmol/L), 포합 빌리루빈 1.2 mg/dL(20.5 µmol/L), ALT 67 U/L, AST 78 U/L, 크레아티닌 0.91 mg/dL(80.4 µmol/L)이다. 다음 중 환자의 상태 진단 기준을 충족하는 검사 수치는?

## 선택지

A. 혈색소
B. 헤마토크릿
C. 간 트랜스아미나제
D. 크레아티닌

## 해설


임신 34주에 혈압 147/90, 단백뇨 2+, 혈소판 정상, AST/ALT 상승이 동반된 경우는 전자간증(중증 임신성 고혈압) 진단 기준에 해당한다. 간 트랜스아미나제 상승이 기준을 충족한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006461
