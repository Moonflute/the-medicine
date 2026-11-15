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
question_type: monitoring
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

안정된 4기 만성콩팥병 환자가 정기 진료를 받는다. 만성콩팥병 관련 미네랄·뼈 이상을 파악하기 위해 함께 추적할 혈액검사는?

## 선택지

A. ESR과 CRP
B. 혈청 나트륨과 염소만
C. 혈청 칼슘·인·알칼리인산분해효소·온전한 PTH
D. 비타민 B12와 엽산만

## 해설


4기 만성콩팥병에서 칼슘, 인, PTH와 알칼리인산분해효소를 함께 평가한다. 치료 판단은 PTH 한 번의 수치가 아니라 반복 측정의 경향과 다른 수치를 종합한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: CKD4에서 CKD-MBD/이차성 부갑상샘항진 평가에는 보기 중 intact PTH C가 적합. 염증표지자나 B12는 해당 골대사 평가를 대신하지 못함.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001347
- https://kdigo.org/guidelines/ckd-mbd/
