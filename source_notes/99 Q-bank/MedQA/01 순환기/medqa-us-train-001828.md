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
explanation_status: machine-generated
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

53세 남성이 건강검진을 위해 내원했다. 식습관은 좋지 않지만 그 외에는 건강한 생활을 한다고 한다. 과거력은 없고 종합비타민만 복용한다. 혈압 116/74 mm Hg, 맥박 76/min이다. 진찰에서 급성 병색이나 심잡음은 없고 양측 폐음은 정상이다. 지질검사에서 LDL 203, HDL 37, TG 292였다. 다음 중 어떤 약물을 시작해야 하는가?

## 선택지

A. simvastatin 10 mg 매일
B. ezetimibe 10 mg 매일
C. fenofibrate 145 mg 매일
D. atorvastatin 40 mg

## 해설


LDL이 203 mg/dL인 고위험 환자에게는 고강도 스타틴이 1차 치료이다. Atorvastatin 40 mg은 고강도 용량으로 LDL를 50% 이상 감소시킬 수 있다. 따라서 atorvastatin 40 mg을 시작하는 것이 적절하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: LDL203은 중증 고콜레스테롤혈증으로 보기 중 고강도 atorvastatin40 D가 적합. 저용량 simvastatin/중성지방약과 구별.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001423

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001828
