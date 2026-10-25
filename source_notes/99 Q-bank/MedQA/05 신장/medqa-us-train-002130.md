---
type: qbank
schema_version: 1
id: medqa-us-train-002130
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2fddc7e715b7c75223f3c245735426b2c5c0305d2226ab847a10c817a8edfd1d
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "analgesic nephropathy"
  - "papillary necrosis"
  - "tubulointerstitial nephritis"
related_disease_slugs:
  - MDUg7Iug7J6lL-yEuOq0gOyCrOydtOyniCDsvantjKXsl7wgKFR1YnVsb2ludGVyc3RpdGlhbCBOZXBocml0aXMpLm1k
question_type: diagnosis
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
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

오랫동안 조절되지 않는 편두통을 앓아온 43세 백인 여성이 무통성 혈뇨로 내원했다. 이런 증상은 처음이라 매우 걱정하고 있다. 활력징후는 안정적이고 신체검사는 특별한 이상이 없다. 사타구니 통증, 옆구리 통증, 늑골척추각 압통은 없으며 최근 요로감염이나 배뇨통도 부인한다. 소변검사에서 혈뇨가 확인되었고 혈청 크레아티닌은 3.0 mg/dL이다. 신장 생검에서 유두 괴사와 세뇨관간질 침윤이 보인다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 진통제 신병증
B. 신장 결석
C. 방광암
D. 겸상적혈구병

## 해설

신유두괴사와 만성 세뇨관간질성 염증은 진통제 신병증 A의 전형적 병리 조합이다. 만성 두통은 반복 진통제 사용 가능성을 시사하지만, 실제 약물 종류·용량·누적 노출은 확인해야 한다. 이를 결절성 신염이라고 부르는 기존 해설은 부정확하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 유두괴사와 만성 간질성 손상을 결절성 신염으로 잘못 설명. 진통제 신병증 A의 병리로 연결.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002130
