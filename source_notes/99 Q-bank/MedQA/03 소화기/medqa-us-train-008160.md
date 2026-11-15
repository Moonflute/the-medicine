---
type: qbank
schema_version: 1
id: medqa-us-train-008160
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f94292d1e7b9e94b14bb1c4418d09f255048ecb81ced39ea8d90bca67aa70fcd
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "pancreatic duct injury"
  - "delayed pancreatic trauma"
  - "post-traumatic pancreatitis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7LeM7J6l7Je8IChBY3V0ZSBQYW5jcmVhdGl0aXMpLm1k
question_type: investigation
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

27세 남성이 오토바이 핸들에 명치를 강하게 부딪혔다. 사고 직후 조영 CT에서는 손상이 보이지 않았지만 18시간 뒤에도 명치 통증이 심하고 리파아제가 상승했다. 혈압은 안정적이고 복막 자극 소견은 없다. 다음 처치는?

## 선택지

A. 복부 조영 CT를 다시 찍어 췌장과 주변 손상을 평가한다.
B. 첫 CT가 정상이므로 추가 검사 없이 귀가시킨다.
C. 복부 단순 X선만 시행한다.
D. 상부 내시경으로 췌관 손상 여부를 확인한다.

## 해설


둔상 직후 CT가 정상이라도 췌장과 췌관 손상을 놓칠 수 있다. 통증과 효소 상승이 지속되면 조영 CT로 재평가한다. 췌관 손상 여부가 여전히 불명확하면 MRCP 등으로 추가 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008160 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 핸들바 둔상 후 초기 정상 CT에도 수일 후 상복부통·발열·구토는 지연 인지 췌관손상 A를 지지. 다른 외상 합병증과 시간경과 대조.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008160
- https://doi.org/10.1186/s13017-019-0278-6
- https://doi.org/10.1016/j.pan.2025.04.020
