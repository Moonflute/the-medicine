---
type: qbank
schema_version: 1
id: medqa-us-train-002359
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7f2d24e15d4af8da669c877b56e7e66715d7937d104307ff26bb283616dfd17f
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "severe hypothermia"
  - "rewarming"
  - "hypothermia-induced atrial fibrillation"
  - "warmed intravenous fluids"
question_type: management
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-2VnOuereyGkOyDgSAoQ29sZCBJbmp1cnkpLm1k
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlsdGlhemVtLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

북극권 헬리콥터 추락사고에서 구조된 35세 군인이 인근 군기지 치료시설로 이송되었다. 젖은 옷을 벗겼을 때 창백하고 떨지 않으며 언어와 통증 자극에 반응하지 않는다. 체온 27.4°C, 맥박 30회/분으로 불규칙하고 호흡 7회/분, 혈압 83/52 mmHg이다. 동공은 고정되어 확장되어 있고 전신 경직이 있다. 손가락과 발가락은 하얗고 만지면 단단하다. 심전도에서 심방세동이 보인다. 응급 삽관과 함께 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 정맥 딜티아젬
B. 사지에 가열 패드 적용
C. 정맥으로 데운 생리식염수 투여
D. 응급 전기 심율동전환

## 해설

27.4°C의 중증 저체온과 서맥·저혈압에서는 조심스럽게 취급하고 기도·순환 지지, 중심부 재가열과 전문 이송을 진행한다. 주어진 선지에서는 차가운 수액으로 열손실을 더하지 않도록 가온한 생리식염수를 투여하는 C가 적절하다. 하지만 가온 수액만으로 가장 효과적으로 재가열된다는 뜻은 아니다. 심한 저혈압·체온30°C 미만 등 불안정 환자는 ECMO/ECLS 가능 센터와 신속한 협의·이송을 고려한다. 저체온성 심방세동은 재가열로 호전될 수 있어 일률적 딜티아젬·즉시 전기율동전환을 우선하지 않으며 사지 직접 가열도 피한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 27.4도·저혈압의 중증 저체온에서 가온 수액이 가장 효과적인 단독 재가열이라는 오류를 수정했다. C는 주어진 선지의 적절한 즉시 보조 조치이며 전문 재가열 체계가 필요하다.
- 공식/학회 근거: https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/special-circumstances-guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002359
