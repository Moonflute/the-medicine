---
type: qbank
schema_version: 1
id: medqa-us-train-004968
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e134e359ff5d2be8fa8e894534f5bf1fcd4034390ceed6a6357159f3cb37891a
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "안구 파열"
  - "개방성 안구 손상"
  - "외상성 전방출혈"
question_type: management
related_disease_slugs:
  - MTgg7JWI6rO8L-yViOq1rCDsmbjsg4EubWQ
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
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

외상 뒤 환자의 동공이 뾰족하게 변했고 시력이 갑자기 떨어졌다. 개방성 안구손상이 의심된다. 안과 수술을 준비하면서 눈을 어떻게 보호할까?

## 선택지

A. 압박 안대를 붙여 안구를 고정한다
B. 손가락으로 안압을 비교한다
C. 초음파 탐촉자를 눈에 대고 즉시 검사한다
D. 눈을 누르지 않는 단단한 보호막을 씌운다

## 해설

개방성 안구손상에서는 안구에 압력을 가하지 않는 보호막을 씌우고 긴급 안과 평가를 진행한다. 안압 측정이나 압박 검사로 안구 내용물이 더 손상되지 않도록 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 개방성 안구 손상의 항생제 D는 유지하면서 압박 안대와 비접촉 보호막을 구분하고 한 가지 고정 항생제 조합만 필수라는 설명을 완화.
- 공식/학회 근거: https://eyewiki.aao.org/Ruptured_Globe

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004968
- https://www.aao.org/education/disease-review/open-globe-injury
