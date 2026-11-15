---
type: qbank
schema_version: 1
id: medqa-us-train-002988
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6078986102173591ecc97ae40ed04a8897cacc8f6484602cd625a97890b21521
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "spinal epidural hematoma"
  - "postoperative neurologic deficit"
  - "epidural catheter complication"
  - "urgent decompression"
  - "Spinal epidural hematoma"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

수술 뒤 경막외 카테터를 유지 중인 환자가 새 허리 통증과 양쪽 다리 위약을 호소한다. 응급 MRI에서 신경근 다발을 누르는 큰 척추 경막외혈종이 확인됐다. 다음 처치는?

## 선택지

A. 카테터의 다음 정기 점검까지 기다린다
B. 요추천자로 경막외 압력을 낮춘다
C. 즉시 척추 수술팀과 감압 및 항응고 관리 계획을 시행한다
D. 경구 진통제를 투여하고 보행 연습을 한다

## 해설

신경축 시술 뒤 발생한 진행성 결손과 압박성 경막외혈종은 응급상황이다. 신경 기능을 보존하려면 신속한 감압과 항응고 상황 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 급성신경결손의경막외혈종 수술감압 A 유지. L2–L5에서성인척수압박이라고한원문해부오류를마미신경압박으로수정.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC2869280/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002988
- https://rapm.bmj.com/content/early/2025/09/16/rapm-2024-105766
