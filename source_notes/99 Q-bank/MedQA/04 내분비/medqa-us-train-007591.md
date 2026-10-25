---
type: qbank
schema_version: 1
id: medqa-us-train-007591
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f8037574361a2415b5c11f00df943d0a4d9e79c5ed57f529b21c99d883cf8d72
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "갑상선기능저하증"
  - "가성치매"
  - "인지저하"
  - "TSH 증가"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rCR7IOB7ISgIOq4sOuKpSDsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

69세 여자가 지난 4개월 동안 심해진 건망증과 전신 피로로 딸과 함께 내원했다. 최근 사건을 기억하지 못하고 익숙한 사람을 알아보지 못한다. 혼자 살지만 쇼핑과 운전이 어려워 지난 한 달 동안 도우미를 고용했다. 가족 모임에 참석하지 않고 주민회관 방문도 거부한다. 이 기간 동안 체중이 7kg(15lb) 증가했다. 의식은 명료하고 사람·장소·시간에 대한 지남력은 정상이다. 체온은 36°C(97.6°F), 맥박 54회/분, 혈압 122/80 mmHg이다. 정신상태검사에서 주의력과 집중력이 저하되어 7자리 숫자를 순서대로, 5자리를 역순으로 반복하기 어렵고 10분 후 보여준 물체 3개를 하나도 기억하지 못한다. 망상과 환각은 없다. 추가 검사에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 뇌 MRI에서 미만성 피질 위축
B. 머리 CT에서 뇌실 확장
C. 혈청 백혈구 수 증가
D. 혈청 TSH 증가

## 해설


정답 D. 체중증가·피로·서맥과 아급성 인지/집중력 저하는 갑상선기능저하증을 고려하게 한다. 원발성 갑상선기능저하증이면 TSH 상승이 예상되며 free T4 등으로 평가한다. 맥박 54회/분은 서맥이지 저혈압이 아니고 혈압 122/80은 정상이다. 다른 인지장애 원인도 감별해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007591 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 혈압 122/80은 저혈압이 아니고 맥박 54는 서맥. 인지저하·피로·체중증가와 TSH D 연결 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007591
