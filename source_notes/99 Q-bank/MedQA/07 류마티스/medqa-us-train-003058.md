---
type: qbank
schema_version: 1
id: medqa-us-train-003058
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ce2c2110bcfbe91eea36dfd84c2a8de26cdd61a5b0bb348a3b18fd68141c6dd7
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "eosinophilic granulomatosis with polyangiitis"
  - "Churg-Strauss syndrome"
  - "p-ANCA"
  - "mononeuritis multiplex"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yymOq3uC3siqTtirjrnbzsmrDsiqQg7Kad7ZuE6rWwIChDaHVyZy1TdHJhdXNzIFN5bmRyb21lKS5tZA
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
question_type: investigation
difficulty: simple
answer: B
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

45세 여성이 성인 발병 천식, 절대호산구 수 3,400/μL와 새로 발생한 양쪽 발처짐 때문에 평가받고 있다. 폐침윤과 촉지자색반이 있어 호산구성 육아종증 다발혈관염을 의심한다. MPO-ANCA 음성을 어떻게 해석할까?

## 선택지

A. 음성이면 이 질환을 배제할 수 있다
B. 음성인 환자도 많으므로 장기 침범과 필요한 조직검사를 계속 평가한다
C. 음성이면 무조건 항사구체기저막 질환이다
D. 항체가 양성으로 바뀔 때까지 장기 평가는 미룬다

## 해설


호산구성 육아종증 다발혈관염에서 ANCA는 일부 환자에게만 검출된다. 음성이어도 임상 양상이 맞으면 신경·폐·심장·신장 침범 등을 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003058 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: p-ANCA를 EGPA 모든 환자에서 양성인 설명 원인으로 취급한 부분을 교정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.vasculitisfoundation.org/wp-content/uploads/2024/01/2021-ACR-VF-Guideline-for-Management-of-ANCA-Associated-Vasculitis.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003058
- https://doi.org/10.1136/ard-2022-223764
