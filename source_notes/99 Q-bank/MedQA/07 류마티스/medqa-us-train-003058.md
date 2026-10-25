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
question_type: diagnosis
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

45세 여성이 새로 발생한 천식 증상으로 응급실에 내원했다. 일주일 전 천식 발작이 시작되었고 과거력으로 위식도역류질환과 B형간염이 있다. 진찰에서 양측 발처짐과 사지의 저림·무감각이 있으며 전혈구검사에서 호산구 수치가 9.1 × 10⁸/L로 높다. 다음 중 환자의 모든 증상을 설명할 수 있는 표지자는?

## 선택지

A. 적혈구침강속도
B. p-ANCA
C. HLA-B27
D. 항히스톤 항체

## 해설


새 천식, 호산구증가와 양측 발처짐·감각증상은 EGPA를 의심하게 한다. 선택지 중 p-ANCA(B), 특히 MPO-ANCA가 관련될 수 있다. 그러나 EGPA에서 ANCA가 검출되는 환자는 약40%에 불과하므로 음성이라고 배제하지 않으며 항체 자체가 모든 증상을 설명하거나 확진하는 것도 아니다. 신경병증·호산구증가의 다른 원인을 배제하고 장기 침범을 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003058 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: p-ANCA를 EGPA 모든 환자에서 양성인 설명 원인으로 취급한 부분을 교정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.vasculitisfoundation.org/wp-content/uploads/2024/01/2021-ACR-VF-Guideline-for-Management-of-ANCA-Associated-Vasculitis.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003058
