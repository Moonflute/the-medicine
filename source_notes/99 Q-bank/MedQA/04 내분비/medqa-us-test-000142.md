---
type: qbank
schema_version: 1
id: medqa-us-test-000142
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:068e720e88fd6745d2a7ad358125dc9bf9235b1fa18b840893d89f2ae282a67a
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "ACTH 비의존성 쿠싱증후군"
  - "부신 종양"
  - "코르티솔 과다"
related_disease_slugs:
  - MDQg64K067aE67mEL-u2gOyLoCDsooXslpEgKEFkcmVuYWwgVHVtb3IpLm1k
  - MDQg64K067aE67mEL-qzoOyCvO2IrOyVleyEsSDqs6DtmIjri7kg7IOB7YOcIChISFMpIChIeXBlcm9zbW9sYXIgSHlwZXJnbHljZW1pYyBTdGF0ZSkubWQ
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 여성이 4개월 동안 피로와 근력 약화가 점점 심해져 내원했다. 계단을 오르거나 앉았다 일어나기 어려울 정도이며 지난 4개월 동안 월경은 한 번뿐이었다. 매일 담배 한 갑을 피우고 약물은 복용하지 않는다. 혈압 160/100 mmHg, 맥박 분당 70회, 호흡수 분당 15회이고 비만하며 복부 선조가 있다. 혈청 포도당 314 mg/dL, 24시간 요중 코르티솔 470µg, 혈청 코르티솔 30µg/dL, ACTH 2pg/mL이다. 고용량 덱사메타손 억제검사에서 코르티솔이 감소하지 않는다. 다음 중 가장 적절한 처치는?

## 선택지

A. 부신 MRI
B. 흉부 MRI
C. 저용량 덱사메타손 억제검사
D. 하추체정맥동 채혈

## 해설

정답은 A이다. 고코르티솔혈증과 억제된 ACTH는 ACTH 비의존성, 즉 부신 원인을 시사하므로 제시된 선택지에서는 부신 MRI가 적합하다. 실제 임상에서 부신 국소화 영상은 CT 또는 MRI를 상황에 맞추어 선택하며 MRI만이 필수인 것은 아니다. 고용량 dexamethasone 비억제만으로 부신 원인을 단정하는 것이 아니라 낮은 ACTH를 함께 해석한다. 하추체정맥동 채혈은 ACTH 의존성 원인의 감별에 사용한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 낮은 ACTH가 부신성 고코르티솔혈증의 국소화 방향을 결정함을 설명; MRI만 필수라는 표현 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000142
