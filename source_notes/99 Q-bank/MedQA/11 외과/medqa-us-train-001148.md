---
type: qbank
schema_version: 1
id: medqa-us-train-001148
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:53b9d8dd2a8b6de50eb1c543eaba0e4723ae451b74c18dda9ec3e7a860745704
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "hemorrhoids"
related_disease_slugs: []
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlsdGlhemVtLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
---

# MedQA US 임상문제

## 문제

28세 여성이 힘줄 때 나왔다가 저절로 들어가는 내치핵으로 소량의 선홍색 출혈을 겪었다. 진찰에서 다른 출혈 원인은 없고 빈혈이나 대장암 고위험 병력도 없다. 첫 치료는?

## 선택지

A. 식이섬유·수분을 늘리고 힘주거나 변기에 오래 앉는 습관을 줄인다
B. 바로 치핵절제술을 시행한다
C. 국소 딜티아젬만 장기 처방한다
D. 출혈이 있을 때마다 항생제를 처방한다

## 해설


저절로 환원되는 2도 내치핵의 초기 치료는 배변 습관과 섬유질 조절이다. 보존치료에도 출혈과 탈출이 지속되면 고무밴드결찰 등을 고려한다. 출혈이 계속되면 치핵 외 원인도 재평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001148 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 자연 환원 탈출을 1도로 분류한 오류를 2도로 교정하고 보존치료·대장암 위험평가를 분리했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://fascrs.org/ascrs/media/files/2024-Hemorrhoids-CPG.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001148
- https://pubmed.ncbi.nlm.nih.gov/38294832/
