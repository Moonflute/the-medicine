---
type: qbank
schema_version: 1
id: medqa-us-train-005957
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8c9cd95dd71372c95210e1e9a7408ca08448c32fcdfd89bc127e6414e0688162
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "언어 발달 지연"
  - "1세 발달 이정표"
  - "소아 발달평가"
  - "Language delay"
question_type: diagnosis
related_disease_slugs: []
difficulty: simple
answer: B
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

1세 남아가 영유아 건강검진을 위해 소아과를 방문했다. 병력과 신체검사에서 비특이적 옹알이만 하고 혼자 몇 걸음 걸으며 두 손가락으로 시리얼을 집어 먹을 수 있다. 체중은 22파운드(출생 체중 6파운드 9온스), 키는 30인치(출생 키 18인치)이다. 다음 중 발달 지연이 있는 영역은 무엇인가?

## 선택지

A. 성장 불충분
B. 언어 발달 지연
C. 대근육운동 발달 지연
D. 발달상의 우려가 없다

## 해설

1세에 비특이적인 옹알이만 있고 의미 있게 부모를 부르는 말 등이 없다면 표현언어 발달을 확인할 필요가 있어 B가 보기 중 적절하다. 혼자 몇 걸음 걷고 집게로 시리얼을 잡는 기능과 성장 증가는 다른 보기의 지연을 지지하지 않는다. CDC 1세 이정표는 부모를 엄마/아빠 또는 특별한 이름으로 부르기를 포함하며 체크리스트만으로 확진하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: non-specific babbling을 특정한 옹알이로 뒤집은 오역과 언어가 정상이면서 지연이라는 모순된 해설을 교정했다.
- https://www.cdc.gov/act-early/milestones/1-year.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005957
