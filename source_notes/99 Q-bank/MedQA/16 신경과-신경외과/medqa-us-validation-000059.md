---
type: qbank
schema_version: 1
id: medqa-us-validation-000059
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:37e2abddc8ebc5959b789b0e064f05d0159d12cde27479c8fb6f681a18c00b43
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "다발성 경화증"
  - "글루코코르티코이드"
  - "호산구감소증"
question_type: mechanism
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_ri6TrsJzshLEg6rK97ZmU7KadIChNdWx0aXBsZSBzY2xlcm9zaXMpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

29세 여성이 하루 동안 진행된 오른팔과 다리의 감각저하 및 근력저하로 응급실에 왔다. 두 달 전 일주일간 흐린 시야와 두통이 있었고 뇌 MRI에서 좌측 중심고랑, 경수, 시신경에 조영증강 병변이 보였다. 정맥 메틸프레드니솔론 치료를 시작했다. 이 약물로 예상되는 검사실 변화는?

## 선택지

A. 단핵구증가증
B. 림프구증가증
C. 호산구감소증
D. 과립구감소증

## 해설

Glucocorticoid 투여 후 호산구 감소(C)가 예상된다. 함께 림프구와 단핵구 감소, 호중구의 혈관벽 이탈 등에 따른 호중구 증가가 나타날 수 있다. 따라서 다른 백혈구 종류는 크게 변하지 않는다고 일반화하는 것은 부정확하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 스테로이드 후 다른 백혈구가 변하지 않는다는 오류 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000059
