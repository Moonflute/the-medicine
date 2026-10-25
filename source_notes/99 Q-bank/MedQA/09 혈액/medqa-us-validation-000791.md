---
type: qbank
schema_version: 1
id: medqa-us-validation-000791
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:672b6956c8069c002d0048d020d1a0566bbf310b7dbe84048e9f30ff9d83f365
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "파종성 혈관내 응고"
  - "급성 전골수구성 백혈병"
  - "응고인자 소모"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2MjOyihSDtmIjqtIDrgrQg7J2R6rOgIChEaXNzZW1pbmF0ZWQgSW50cmF2YXNjdWxhciBDb2FndWxhdGlvbiwgRElDKS5tZA
  - MDkg7ZiI7JWhL-q4ieyEsSDsoITqs6jsiJjshLEg67Cx7ZiI67ORIChBUEwgTTMpIChBY3V0ZSBQcm9teWVsb2N5dGljIExldWtlbWlhKS5tZA
question_type: investigation
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

전골수구성 백혈병으로 전트랜스레티노산 치료를 받는 65세 여성이 심한 복통, 구토, 혈뇨로 왔다. 피부에 점상출혈이 있고 CT에서 급성 장간막 허혈이 보인다. 말초혈액도말을 포함한 검사에서 가장 가능성 높은 결과 조합은?

## 선택지

A. PT 증가, PTT 증가, 출혈시간 증가, 섬유소분해산물 증가, D-이합체 증가, 피브리노겐 증가, 혈소판 감소
B. PT 감소, PTT 감소, 출혈시간 증가, 섬유소분해산물 증가, D-이합체 증가, 피브리노겐 감소, 혈소판 감소
C. PT 증가, PTT 증가, 출혈시간 증가, 섬유소분해산물 증가, D-이합체 증가, 피브리노겐 감소, 혈소판 감소
D. PT 감소, PTT 감소, 출혈시간 감소, 섬유소분해산물 감소, D-이합체 감소, 피브리노겐 감소, 혈소판 감소

## 해설


APL 자체는 심한 소비성·과섬유소용해성 응고장애를 일으켜 출혈과 혈전을 함께 유발할 수 있다. 제시된 장간막 허혈·점상출혈에서 예상되는 DIC 패턴은 PT/aPTT 연장, D-dimer·FDP 증가, fibrinogen·혈소판 감소인 C이다. ATRA는 의심 APL에서 조기에 시작해 응고장애를 치료하는 핵심 약제이며 DIC의 일반 원인이라고 설명하지 않는다. 치료 중 혈전이나 다른 합병증은 별도 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000791 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: APL 관련 소비성 응고장애 패턴 C 유지. ATRA가 DIC를 유발한다는 역전 설명을 APL의 응고장애와 ATRA의 조기 치료 역할로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6509567/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000791
