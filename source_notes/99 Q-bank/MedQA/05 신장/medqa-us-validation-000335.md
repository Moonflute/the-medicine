---
type: qbank
schema_version: 1
id: medqa-us-validation-000335
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:e6a04eb8098751b4d2ee286940648e24143dfebef8d826ad9a6dace2839d148b
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "신동맥 섬유근이형성증"
  - "이차성 고혈압"
  - "경피적 혈관성형술"
related_disease_slugs:
  - MDUg7Iug7J6lL-yLoO2YiOq0gOyEsSDqs6DtmIjslZUgKFJlbm92YXNjdWxhciBIeXBlcnRlbnNpb24pLm1k
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUmFtaXByaWwubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmFsc2FydGFuLm1k
curation_status: "revised"
curation_reason: "FMD 치료를 모든 환자에게 고정된 ramipril+시술 처방으로 일반화하지 않음."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

19세 여성이 세 가지 항고혈압제를 복용해도 혈압이 168/98 mmHg이다. 복부 혈관잡음이 들리며 신동맥 조영술에서 원위부에 협착과 확장이 번갈아 나타난다. 압력차 검사에서 혈류를 유의하게 제한하는 병변으로 확인됐다. 적절한 혈관 재개통 방법은?

## 선택지

A. 신동맥 스텐트의 일률적 일차 삽입
B. 스텐트 없이 경피적 풍선혈관성형술
C. 신동맥 색전술
D. 일차적으로 대동맥–신동맥 우회술

## 해설

젊은 환자의 원위부 신동맥에서 보이는 염주 모양은 섬유근이형성증에 합당하다. 저항성 고혈압이 있고 혈역학적으로 유의한 병변에 재개통이 필요하다면 풍선혈관성형술을 우선한다. 스텐트는 혈관 박리 같은 합병증 등 특별한 상황에 고려한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000335
- 섬유근이형성증 진단·관리 국제 합의: https://pubmed.ncbi.nlm.nih.gov/30648921/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: FMD 치료를 모든 환자에게 고정된 ramipril+시술 처방으로 일반화하지 않음.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.ahajournals.org/doi/10.1161/HYP.0000000000000217
