---
type: qbank
schema_version: 1
id: medqa-us-train-009795
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:21ae99aa5732575fe2604759bc29537f42257e2897ef1cc0c614d6eb4f15b423
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "고지혈증"
  - "만성콩팥병"
  - "스타틴"
related_disease_slugs:
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXpldGltaWJlLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRmVub2ZpYnJhdGUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
---

# MedQA US 임상문제

## 문제

54세 남성이 최근 검사 결과 상담을 위해 내원했다. 과거력으로 3기 만성콩팥병, 제2형 당뇨병, 고혈압이 있으며 고혈압은 리시노프릴과 푸로세미드로 잘 조절되고 있다. 체온 36.7°C, 혈압 126/74 mmHg, 심박수 분당 87회, 호흡수 분당 17회이다. 심장 진찰에서 좌측 상부 흉골연에서 가장 잘 들리는 3/6등급 범수축기 잡음이 있다. 호흡음은 깨끗하고 복부 이상은 없으며 양쪽 하지에 무릎까지 2+ 함요부종이 있다. 23갑년의 흡연력이 있다. 혈청 검사에서 ALT 20 U/L, AST 19 U/L, 총콜레스테롤 249 mg/dL, LDL 160 mg/dL, HDL 41 mg/dL, 중성지방 101 mg/dL이다. 이 환자의 고지혈증 치료를 위해 다음 중 어떤 약제를 시작하는 것이 가장 적절한가?

## 선택지

A. 에제티미브
B. 페노피브레이트
C. 어유
D. 심바스타틴

## 해설


정답 D. 54세, stage3 CKD와 당뇨·여러 ASCVD 위험인자는 statin 기반 치료의 적응증이다. 선택지 중 simvastatin이 statin이며 ezetimibe 단독·fibrate·fish oil보다 우선되는 약물군이다. Simvastatin은 고강도 statin이 아니며 통상 용량은 중강도다. 실제 치료 강도와 LDL 목표는 심혈관 위험·동반질환·약물 상호작용에 맞추며 모든 CKD 환자의 목표를 LDL<100 하나로 정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009795 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: simvastatin은 고강도 아닌 보통 중강도이며 CKD의 일률 LDL100 목표 주장을 교정. 선택지 유일 statin D 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://kdigo.org/wp-content/uploads/2026/04/KDIGO-2024-CKD-Guideline.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009795
