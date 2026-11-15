---
type: qbank
schema_version: 1
id: medqa-us-validation-001247
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:998bc545c935d4e707a79382fee739844ef216c630731e22a0526116e1016a76
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "일차성 야간 유뇨"
  - "데스모프레신"
  - "소아 야뇨"
  - "Primary nocturnal enuresis"
question_type: management
related_disease_slugs: []
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9EZXNtb3ByZXNzaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

9세 아이가 수련회에서 야뇨증을 단기간 조절하려고 경구 데스모프레신을 처방받았다. 저나트륨혈증을 예방하기 위해 복용 전후 어떻게 안내할까?

## 선택지

A. 복용 직전에 물을 한 컵 마시고 이후에는 제한한다
B. 복용 1시간 전부터 복용 후 8시간까지 수분 섭취를 제한한다
C. 낮에만 수분을 제한하고 취침 전에는 자유롭게 마신다
D. 구토나 설사가 있는 날에도 물을 많이 마시면서 약을 복용한다

## 해설

데스모프레신은 수분 배설을 줄여 물을 많이 마시면 저나트륨혈증을 일으킬 수 있다. 복용 1시간 전부터 복용 후 8시간까지 수분을 제한한다. 구토·설사 등 수분 균형이 깨지는 때는 복용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 행동·경보기 후 desmopressin 선택은 유지하되 저나트륨혈증 예방 수분 제한과 사용 조건 추가.
- https://cps.ca/en/documents/position/evaluation-and-management-of-enuresis-in-the-general-paediatric-setting

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001247
- https://www.nice.org.uk/guidance/cg111/chapter/Recommendations
