---
type: qbank
schema_version: 1
id: medqa-us-test-000420
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:9881f0cff1494e4fbaf70674471a06c8fe67bc1c6bbe427c8cfecb3064693ca1
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "와파린 유발 피부괴사"
  - "단백질 C 결핍"
  - "자반"
  - "Warfarin-induced skin necrosis"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIChEZWVwIFZlaW4gVGhyb21ib3NpcykubWQ
question_type: adverse_effect
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9UcmFuZXhhbWljQWNpZC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
---

# MedQA US 임상문제

## 문제

와파린을 시작한 지 4일 된 환자에게 유방과 허벅지의 통증성 자반, 출혈성 물집과 괴사가 생겼다. 혈소판은 정상이고 헤파린을 사용한 적은 없다. 와파린 유발 피부괴사가 의심될 때 우선 조치는?

## 선택지

A. 와파린을 계속하며 상처만 처치한다
B. 와파린을 즉시 중단하고 역전과 대체 항응고 필요성을 평가한다
C. 혈소판 수치가 정상이라도 예방적으로 수혈한다
D. 와파린 용량을 줄인 뒤 진단이 확정될 때까지 기다린다

## 해설


와파린 초기의 피부괴사는 단백질 C가 다른 응고인자보다 빨리 감소하면서 생길 수 있다. 약을 중단하고 항응고 적응증 및 출혈 위험을 고려해 역전과 대체 치료를 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000420 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 와파린 시작 직후 피부괴사의 PC 급감 기전과 B 유지. 농축제가 모든 환자에서 단독 완결치료·일반 허가라는 오해 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.ema.europa.eu/en/medicines/human/EPAR/ceprotin

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000420
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72d3ea20-27e4-4368-a666-a9b76530dbb9
