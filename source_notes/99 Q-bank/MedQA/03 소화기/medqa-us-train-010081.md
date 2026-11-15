---
type: qbank
schema_version: 1
id: medqa-us-train-010081
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:44a853b71e24305fe26d959a7317d7c40a2d35b735b305fbbe4b3082be0505a9
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "게실 출혈"
  - "하부 위장관 출혈"
  - "섬유질 섭취"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsozsi6Qg7Lac7ZiIIChEaXZlcnRpY3VsYXIgQmxlZWRpbmcpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tlZjrtoAg7JyE7J6l6rSAIOy2nO2YiCAoTG93ZXIgR2FzdHJvaW50ZXN0aW5hbCBUcmFjdCkubWQ
question_type: prevention
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

62세 남성이 대장내시경에서 확인된 게실 출혈로 지혈 치료를 받은 뒤 외래에 왔다. 출혈은 멎었고, 무릎 통증 때문에 나프록센을 거의 매일 복용한다. 심혈관질환 이차예방을 위한 약은 복용하지 않는다. 재출혈 위험을 줄이기 위해 우선 권할 조치는?

## 선택지

A. 나프록센을 중단하고 다른 진통 방법을 상의한다
B. 나프록센을 유지하면서 변비약만 추가한다
C. 재출혈이 없더라도 즉시 대장을 절제한다
D. 예방 목적으로 매일 항생제를 복용한다

## 해설


대장 게실 출혈 뒤에는 나프록센 같은 비아스피린 NSAID를 피하면 재출혈 위험을 줄이는 데 도움이 된다. 식이 조절을 재출혈 예방의 대체 처치로 보지 않는다. 심혈관 이차예방용 아스피린은 이와 별도로 이득과 위험을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010081 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 통증 없는 일시적 대량 혈변은 게실출혈 가능성. 섬유·수분 A의 일반 관리 취지 유지하되 재출혈 감소의 가장 효과적인 확립 치료라는 과장 교정, 체온 오역 정정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.niddk.nih.gov/health-information/digestive-diseases/gastrointestinal-bleeding/eating-diet-nutrition

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010081
- https://pubmed.ncbi.nlm.nih.gov/36735555/
