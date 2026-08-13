---
type: qbank
schema_version: 1
id: medqa-us-train-002153
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:537d21ad2ff65042319df168aa9de7c70683da1fc44b9534012a75fdb4b6b42b
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "statin-associated muscle symptoms"
  - "statin myopathy"
  - "hyperlipidemia"
  - "pravastatin"
related_disease_slugs:
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRmVub2ZpYnJhdGUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJhdmFzdGF0aW4ubWQ
---

# MedQA US 임상문제

## 문제

55세 남성이 추적검사를 위해 내원했다. 고지혈증과 제2형 당뇨병이 있으며 중간 용량의 심바스타틴과 메트포르민을 복용한다. 4개월 전 공복 혈청검사에서 LDL 콜레스테롤이 136 mg/dL여서 약물을 조정했다. 활력징후는 정상이다. 신체검사에서 근위부 근육의 전신적 위약이 보이고 양측 심부건반사는 2+이다. 공복검사에서 총 콜레스테롤 154 mg/dL, HDL 35 mg/dL, LDL 63 mg/dL, 중성지방 138 mg/dL, 포도당 98 mg/dL, 크레아티닌 1.1 mg/dL, 크레아틴키나아제 260 mg/dL이다. 다음 중 이 환자의 고지혈증 치료에서 가장 적절한 다음 단계는?

## 선택지

A. 심바스타틴을 중단하고 3주 후 프라바스타틴을 시작한다
B. 심바스타틴을 계속하고 나이아신을 추가한다
C. 심바스타틴을 중단하고 지금 페노피브레이트를 시작한다
D. 심바스타틴 용량을 늘린다

## 해설


근육통과 CK 상승이 statin 관련 근육증상을 시사한다. 근육증상이 지속될 경우 statin을 중단하고, 근육증상이 가라앉은 후 다른 statin(프라바스타틴)으로 교체한다가 권장된다. 따라서 심바스타틴을 중단하고 3주 후 프라바스타틴을 시작한다가 정답이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002153
