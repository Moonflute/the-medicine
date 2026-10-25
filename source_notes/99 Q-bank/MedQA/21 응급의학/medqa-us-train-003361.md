---
type: qbank
schema_version: 1
id: medqa-us-train-003361
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a9052c1cd406655fc8dec849fb18dccc35ae4f96d58bdd97be430e1d59517ffd
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "severe hypothermia"
  - "rewarming"
  - "warmed intravenous fluids"
  - "frostbite"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-2VnOuereyGkOyDgSAoQ29sZCBJbmp1cnkpLm1k
difficulty: standard
answer: D
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

35세 군인이 체온 27.4°C의 저체온증으로 이송되었다. 혈압 83/52 mmHg, 서맥과 불규칙한 맥박, 심방세동이 있었고 동상도 관찰되었다. 기관삽관 후 다음 중 가장 적절한 처치는?

## 선택지

A. 사지에 가열 패드 적용
B. 응급 심율동전환
C. 정맥 tPA 투여
D. 가온한 생리식염수 정맥주입

## 해설

27.4°C의 심한 저체온과 저혈압에서는 중심부 재가온·지속 감시·주의 깊은 취급이 필요하다. 보기 중 가온한 등장성 정맥수액(D)은 저체온 악화를 막고 순환량을 보충하는 적절한 보조 조치다. 수액만으로 충분하거나 가장 효과적인 재가온법이라는 뜻은 아니다. 심혈관 불안정이 지속되면 ECLS 가능한 센터에서 적극 재가온을 평가한다. 저체온 관련 심방세동은 재가온으로 호전할 수 있어 우선 심율동전환을 고집하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 중증 저체온의 가온 수액 D는 보조 소생수단이지 가장 효과적인 단독 재가온법이라는 오류 교정. 원문 저혈압 복원.
- 공식/학회 근거: https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/special-circumstances-guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003361
