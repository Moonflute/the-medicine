---
type: qbank
schema_version: 1
id: medqa-us-train-001860
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c398b71e92909102aff11343f6c7c1875f65b640a7fc1321ed6218ec61a7ccff
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "eosinophilic granulomatosis with polyangiitis"
  - "Churg-Strauss syndrome"
  - "asthma eosinophilia"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yymOq3uC3siqTtirjrnbzsmrDsiqQg7Kad7ZuE6rWwIChDaHVyZy1TdHJhdXNzIFN5bmRyb21lKS5tZA
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

40세 여성이 성인기에 시작된 천식과 만성 부비동염으로 치료받고 있다. 최근 하지 촉지자색반, 한쪽 발처짐과 반대쪽 손의 감각저하가 생겼다. 말초 혈액 호산구는 29%다. 가장 가능성 높은 진단은?

## 선택지

A. 다발혈관염 동반 육아종증
B. 현미경적 다발혈관염
C. 항사구체기저막 질환
D. 호산구성 육아종증 다발혈관염

## 해설


성인 발병 천식과 뚜렷한 호산구증가에 피부 혈관염과 다발단일신경병증이 동반되면 호산구성 육아종증 다발혈관염을 의심한다. ANCA 음성만으로 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001860 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 성인발병 천식·부비동염·뚜렷한 호산구증가·다발단신경염·피부 및 신장 침범은 EGPA D를 지지한다. 영어 원문, 선지와 해설이 일치한다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001860
- https://doi.org/10.1136/ard-2022-223764
