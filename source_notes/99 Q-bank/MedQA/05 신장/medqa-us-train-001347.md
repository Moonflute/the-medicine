---
type: qbank
schema_version: 1
id: medqa-us-train-001347
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dfcadb779e92b352a557c68c94ab3ab89f9f0bacfa0ddd6f10ae9b2d39cf82a0
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "chronic kidney disease"
  - "renal osteodystrophy"
  - "secondary hyperparathyroidism"
related_disease_slugs:
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
  - MDQg64K067aE67mEL-u2gOqwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVycGFyYXRoeXJvaWRpc20pLm1k
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

4기 만성콩팥병, 고혈압 및 제2형 당뇨병 병력이 있는 72세 여성이 예정된 진료를 위해 내원했다. 지난 방문에서 의사는 만성콩팥병에 대해 투석을 시작할 가능성을 논의하기 시작했다. 환자는 건강에 대한 불편이 없고 가족과 시간을 보내는 것을 즐긴다. 내원 시 발열은 없고 혈압은 139/89 mm Hg, 심박수는 80회/분이다. 맥박은 강하게 뛰고 안색은 창백하며 1/6등급 범수축기 잡음과 무릎까지의 2+ 발등부종이 있다. 다음 중 신성 골이영양증 선별에 가장 적절한 검사실 검사는 무엇인가?

## 선택지

A. 적혈구 침강속도
B. 혈청 C-반응성 단백질
C. 혈청 온전한 부갑상샘호르몬
D. 혈청 비타민 B12

## 해설


만성 신부전에서 2차성 부갑상선 기능항진이 흔히 발생하며, 혈청 온전 부갑상선 호르몬(PTH) 검사가 이를 선별한다. 따라서 신성 골이영양증 검사는 혈청 온전 PTH 측정이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: CKD4에서 CKD-MBD/이차성 부갑상샘항진 평가에는 보기 중 intact PTH C가 적합. 염증표지자나 B12는 해당 골대사 평가를 대신하지 못함.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001347
