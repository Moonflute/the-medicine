---
type: qbank
schema_version: 1
id: medqa-us-validation-000405
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:18f865c71e224dd5a492b6dc9fe36f463badcda90123b8f46a17adc8389444a8
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "일광화상"
  - "1도 화상"
  - "피부 홍반"
  - "Sunburn"
question_type: management
related_disease_slugs: []
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

13세 남아가 등에 2일간 지속된 통증과 발적을 보이며 진료를 받으러 왔다. 어제 동아프리카 여행에서 귀국했으며 여행 중 열기구를 여러 번 탔다. 양쪽 전완 신전면과 어깨, 등 위쪽에 압통이 있고 가렵지 않은 홍반성 발진과 부종, 작은 피부 벗겨짐이 보인다. 눌렀을 때 창백해졌다가 빠르게 색이 돌아온다. 가장 적절한 처치는?

## 선택지

A. 젖은 거즈로 상처를 덮는다
B. 정맥 수액 2 L를 투여한다
C. 국소 무피로신을 바른다
D. 알로에베라 보습제를 바른다

## 해설

노출 부위에 통증·압통을 동반한 홍반과 부종이 생겼으며 압박 시 창백해지는 소견은 표재성 일광화상에 합당하다. 표재성 화상도 아플 수 있다. 전신 이상이나 탈수·감염 증거가 없는 이 환자에서는 냉각, 수분 섭취 및 보습 등 증상 완화가 적절하며 선지 D를 선택한다. 알로에 성분의 특별한 치료 효과를 확정하는 뜻은 아니며, 2 L 정맥 수액이나 국소 항생제가 일률적으로 필요한 상황은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 원문의 tender를 압통 없음으로 뒤집은 번역과 귀국 시점을 바로잡았다. 일광화상은 통증이 없다는 오류를 수정하고 D를 지지하는 보존적 치료를 설명했다.
- 공식/학회 근거: https://www.aad.org/public/everyday-care/injured-skin/burns/treat-sunburn
- 공식/학회 근거: https://www.cdc.gov/yellow-book/hcp/environmental-hazards-risks/sun-exposure-in-travelers.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000405
