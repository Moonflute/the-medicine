---
type: qbank
schema_version: 1
id: medqa-us-train-006261
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ef82418951c0eab19e15b90f6dafe86adbf6fdb5e020426bb0941cd230fea99b
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "굿파스처 증후군"
  - "항사구체기저막 질환"
  - "폐-신장 증후군"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyGjSDsp4Ttlokg7Yag66as7L2p7Yyl7Je8IChSYXBpZGx5IFByb2dyZXNzaXZlIEdsb21lcnVsb25lcGhyaXRpcykubWQ
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
  - MDUg7Iug7J6lL-2PkOyLoOyepSDspp3tm4TqtbAgKFB1bG1vbmFyeS1SZW5hbCBTeW5kcm9tZSkubWQ
question_type: diagnosis
difficulty: complex
answer: "A"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "혈흰 가래 오타와 maternal aunt를 외할머니로 옮긴 번역 수정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

24세 남성이 10일 전부터 진행하는 호흡곤란과 간헐적인 피가 섞인 가래로 응급실에 내원했다. 이 기간 동안 혈뇨가 세 차례 있었다. 6년 전 정기 투베르쿨린 피부검사 양성으로 잠복결핵을 진단받고 치료받았다. 이모는 전신홍반루푸스가 있다. 복용 중인 약물은 없다. 체온은 37°C(98.6°F), 맥박은 분당 92회, 호흡수는 분당 28회, 혈압은 152/90 mm Hg이다. 양쪽 폐기저부에서 미만성 수포음이 들린다. 검사 결과는 다음과 같다.
혈청: 혈액요소질소 32 mg/dL, 크레아티닌 3.5 mg/dL
소변: 단백 2+, 혈액 3+, 적혈구 원주 다수, 백혈구 원주 음성
흉부 X선에서 양측에 반점상 폐침윤이 보인다. 신장 생검에서 사구체 기저막을 따라 IgG가 선상으로 침착되어 있다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 굿파스처 증후군
B. 육아종증 다발혈관염
C. 재활성화 결핵
D. 현미경적 다발혈관염

## 해설

폐출혈을 시사하는 객혈·폐침윤과 혈뇨·적혈구 원주·신기능 저하는 폐-신장 증후군이다. GBM을 따라 선상으로 침착한 IgG가 anti-GBM 질환을 지지하므로 Goodpasture 증후군이 가장 적합하다. GPA·MPA는 보통 pauci-immune 양상으로 구별한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006261

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 혈흰 가래 오타와 maternal aunt를 외할머니로 옮긴 번역 수정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
