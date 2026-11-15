---
type: qbank
schema_version: 1
id: medqa-us-train-007053
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a5ffacb4e71d9194f56964c64f1cedba5c73ac0e1000dc0bf8517ac19d551da0
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "소아 배꼽탈장"
  - "정복 가능한 탈장"
  - "관찰"
related_disease_slugs:
  - MTEg7Jm46rO8L-uwsOq8vSDtg4jsnqUgKFVtYmlsaWNhbCBIZXJuaWEpLm1k
question_type: management
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

14개월 남아의 배꼽이 울 때 튀어나오고 누우면 들어간다. 진찰에서 결손은 1 cm이고 쉽게 정복되며 통증과 구토가 없다. 지금 적절한 관리는?

## 선택지

A. 2세 전 계획 수술
B. 정기 진찰하며 자연 폐쇄를 기다린다
C. 매일 단단히 눌러 테이프로 고정한다
D. 복부 CT로 복강 내 장기 손상을 확인한다

## 해설


작고 증상 없는 소아 배꼽탈장은 성장하면서 자연히 닫히는 경우가 많아 대개 만 4~5세까지 관찰할 수 있다. 아프거나 들어가지 않고 구토가 생기면 감돈을 의심해 바로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007053 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 관찰 전에 초음파가 필수라고 한 정답-해설 불일치를 제거했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.facs.org/for-patients/the-day-of-your-surgery/pediatric-umbilical-hernia/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007053
- https://pubmed.ncbi.nlm.nih.gov/38466296/
