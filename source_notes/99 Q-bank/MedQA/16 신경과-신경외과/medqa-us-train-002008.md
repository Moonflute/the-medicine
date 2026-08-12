---
type: qbank
schema_version: 1
id: medqa-us-train-002008
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7d4bdf016090b4c7d4c8b7b31507d8eed4b642189db7e892c8dd88fdacc3dc26
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "progressive multifocal leukoencephalopathy"
  - "JC virus"
  - "HIV"
  - "Progressive multifocal leukoencephalopathy"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

48세 여성이 7년 전 HIV 진단을 받았고 항레트로바이러스제와 trimethoprim-sulfamethoxazole을 빠뜨려 복용해 왔다. 최근 방향감각과 혼란이 생겼고 오른쪽 근력 4/5, 왼쪽 3/5, 보행이 약간 조화롭지 않으며 복시가 있다. CD4는 75 cells/μL이고 MRI에서 양측에 비대칭성 비조영 고신호 병변이 여러 개 보이며 뇌생검에서 탈수초와 비정형 성상세포가 보인다. 현재 상태의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 자가면역성 탈수초
B. HIV 관련 신경인지장애
C. John Cunningham 바이러스 (JC virus)
D. 원발성 중추신경계 림프종

## 해설


CD4 75 이하, 비조영 고신호 병변, 비정형 세포는 JC 바이러스에 의한 진행성 다핵성 백질증(PML)을 특징으로 한다. 따라서 정답은 C이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002008
