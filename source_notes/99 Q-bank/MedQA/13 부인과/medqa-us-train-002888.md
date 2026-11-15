---
type: qbank
schema_version: 1
id: medqa-us-train-002888
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e2b8662ae4f681fa62c54621af78d5a4de46534e35351ae905b6f5e6a40216d1
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "initial prenatal screening"
  - "HIV screening"
  - "syphilis screening"
  - "hepatitis B screening"
question_type: investigation
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
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

임신 8주인 여성이 첫 산전 진료를 받는다. 이전 검사 기록은 없고 감염 증상도 없다. 국내 초기 산전 검사에 포함할 감염 선별 조합은?

## 선택지

A. B형간염 표면항원, 매독 혈청검사, HIV 선별검사
B. B군사슬알균 배양, 단순포진 PCR, 톡소플라스마 PCR
C. HIV 웨스턴블롯 단독, 결핵 피부검사, HPV 유전자형 검사
D. 임균 항체, CMV IgM, 인플루엔자 PCR

## 해설

국내 첫 산전 방문에서는 B형간염, 매독과 HIV를 선별한다. 이는 무증상 산모에서 모자감염 예방을 위한 검사들이며, HIV 웨스턴블롯을 선별검사로 쓰지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 기존D는적절한검사묶음이나현행초기선별전체와HIV검사방식보강.
- https://www.cdc.gov/pregnancy-hiv-std-tb-hepatitis/about/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002888
- https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=7019
