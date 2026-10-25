---
type: qbank
schema_version: 1
id: medqa-us-test-001262
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:9db22af2d22e23414d95f8e44a591262b3ec474fa45821443a2330494539c8a7
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "급성 전골수성 백혈병"
  - "파종혈관내응고"
  - "전트랜스레티노산"
related_disease_slugs:
  - MDkg7ZiI7JWhL-q4ieyEsSDsoITqs6jsiJjshLEg67Cx7ZiI67ORIChBUEwgTTMpIChBY3V0ZSBQcm9teWVsb2N5dGljIExldWtlbWlhKS5tZA
  - MDkg7ZiI7JWhL-2MjOyihSDtmIjqtIDrgrQg7J2R6rOgIChEaXNzZW1pbmF0ZWQgSW50cmF2YXNjdWxhciBDb2FndWxhdGlvbiwgRElDKS5tZA
question_type: management
difficulty: complex
answer: C
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
---

# MedQA US 임상문제

## 문제

55세 여성이 발열, 피로, 잇몸 출혈로 진료를 받으러 왔다. 구강 점상출혈, 잇몸 출혈, 림프절병증, 간비장비대가 있었고 PT와 aPTT 연장, D-이합체 증가, 피브리노겐 감소가 보였다. 골수 생검에서 Auer 막대를 가진 미엘로모세포가 34%였고 MPO 양성이었다. 가장 적절한 치료는?

## 선택지

A. 아스코르빈산
B. 신선동결혈장
C. 레티노산
D. 졸레드론산

## 해설


골수의 골수계 아세포와 DIC 양상은 APL을 긴급히 의심할 이유가 된다. APL이 의심되면 PML::RARA 확인을 기다리지 않고 ATRA(C)를 시작하고 출혈성 응고장애에 대한 혈액제제 보조치료도 병행한다. Auer 막대·MPO 양성은 골수계 계통을 지지하지만 그 자체로 APL이 확진되지는 않으며 ATRA는 모든 AML에 대한 보편 치료가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-001262 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Auer rod/MPO가 모든 APL을 확진하고 ATRA가 모든 AML 치료라는 해설 교정. DIC에서 APL 의심 시 C 즉시 및 PMLRARA 확인·혈액제제 병행.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6509567/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001262
