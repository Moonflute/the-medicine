---
type: qbank
schema_version: 1
id: medqa-us-train-009206
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4fe39fda19818d4348f7bdfc05a4b9aed182998be737f9d541389fa9201caa5a
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "greater trochanteric pain syndrome"
  - "대전자 통증 증후군"
  - "gluteus medius tendinopathy"
question_type: diagnosis
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-yKrOqwnOuMgO2HtCDthrXspp0g7Kad7ZuE6rWwIChQYXRlbGxvZmVtb3JhbCBQYWluIFN5bmRyb21lKS5tZA
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvQnVkZXNvbmlkZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 여성이 2개월 동안 점점 심해지는 오른쪽 고관절 통증으로 내원했다. 통증은 간헐적이며 고관절 외측에서 허벅지 쪽으로 방사된다. 계단을 오르거나 오른쪽으로 누우면 악화된다. 2주 전 천식 악화로 경구 프레드니손을 복용했다. 현재 포르모테롤-부데소니드와 알부테롤 흡입기를 사용한다. 활력징후는 정상이다. 오른쪽 허벅지 상외측을 누르면 압통이 있고 부종은 없다. 왼쪽 측와위에서 오른쪽 다리를 편 채 외전시키며 의사의 저항에 맞서면 통증이 재현된다. 나머지 진찰은 정상이고 골반 X선도 이상이 없다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 대전자 통증 증후군
B. 장경인대 증후군
C. 요천추 신경근병증
D. 대퇴골두 골괴사

## 해설

고관절 외측 통증, 해당 쪽으로 눕기·계단에서 악화, 대전자 주변 압통과 저항성 외전 통증은 대전자 통증 증후군(GTPS, A)을 시사한다. 둔근 힘줄병증과 주변 윤활낭 등 여러 구조가 관련될 수 있어 단순히 대전자 건염 하나와 동의어는 아니다. 통증은 2개월 전 시작되어 2주 전 프레드니손보다 먼저였으므로 복용 후 생겼다고 설명하지 않는다. 골괴사는 보통 깊은 서혜부 통증·관절 회전 통증이 단서이며 정상 X선만으로 완전히 배제되지는 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 통증이 2개월 전 시작되어 프레드니손보다 앞선다는 시간관계를 복원하고 GTPS를 반드시 건염 하나로만 설명하지 않도록 교정했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009206
