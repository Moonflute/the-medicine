---
type: qbank
schema_version: 1
id: medqa-us-train-007860
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d935248c88867e0d726465bcf23de10568e1148e7787ea040973ea7cf0fd698f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "acute limb ischemia"
  - "arterial embolism"
  - "atrial fibrillation source"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDrj5nrp6Ug7Y-Q7IOJIChBY3V0ZSBBcnRlcmlhbCBPY2NsdXNpb24pLm1k
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
question_type: investigation
difficulty: complex
answer: A
publication_status: "withheld"
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUmFtaXByaWwubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 남성이 갑자기 오른쪽 다리에 심한 통증을 느꼈다. 다리는 차갑고 족부 맥박이 약하며 감각과 근력이 떨어져 있다. 맥박은 불규칙하다. 급성 사지허혈의 항응고·재관류 처치를 지연하지 않는 범위에서 심장 내 색전 원천을 평가할 검사는?

## 선택지

A. 심초음파
B. 하지 도플러 초음파
C. 표재정맥 생검
D. 디지털 감산 혈관조영술

## 해설

급작스러운 통증·냉감·맥박 감소와 감각·근력 이상은 급성 사지허혈이다. 불규칙한 맥박은 심방세동의 단서다. 심초음파로 심장 내 색전 원천을 평가할 수 있으나, 이 검사 때문에 응급 항응고와 재관류를 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 색전 원천 확인용 심초음파 A와 즉시 필요한 급성 사지허혈 치료를 구별.
- https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007860
