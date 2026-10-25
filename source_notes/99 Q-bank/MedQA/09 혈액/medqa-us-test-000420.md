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
question_type: management
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

78세 남성이 하루 동안 허벅지와 외부 생식기에 통증을 동반하며 커지는 멍과 피부 궤양이 생겨 응급실에 왔다. 제2형 당뇨병, 승모판 역류, 심방세동이 있다. 3일 전 와파린 치료를 시작했으며 다른 약물은 메트포르민과 리시노프릴뿐이다. 체온 37.8°C(100.0°F), 맥박 108회/분으로 불규칙하게 불규칙했고 혈압 155/89 mmHg였다. 피부에 앞쪽 다리, 둔부, 음경의 넓은 자반, 출혈성 수포, 피부괴사 부위가 보였다. 다음 중 어떤 치료가 가장 도움이 되는가?

## 선택지

A. 고압산소
B. 단백질 C 농축제
C. 아가트로반
D. 트라넥삼산

## 해설


와파린 시작 직후의 통증성 피부괴사는 protein C의 빠른 감소에 따른 일시적 과응고와 미세혈전을 의심하게 한다. 선지 중 protein C 보충(B)이 병태생리에 대응하지만 와파린 중단·역전, 대체 항응고와 상처 관리도 필요하다. Protein C 농축제의 공식 적응증은 중증 선천성 결핍을 중심으로 하므로 모든 환자에게 일률 적용되는 단독 치료는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000420 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 와파린 시작 직후 피부괴사의 PC 급감 기전과 B 유지. 농축제가 모든 환자에서 단독 완결치료·일반 허가라는 오해 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.ema.europa.eu/en/medicines/human/EPAR/ceprotin

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000420
