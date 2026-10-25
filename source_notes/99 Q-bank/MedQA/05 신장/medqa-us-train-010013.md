---
type: qbank
schema_version: 1
id: medqa-us-train-010013
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b8c9192be008d92c6ca9e778bd9ea4c05905f0c11e8190d0aa72c38f8c674e08
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "급성 간질성 신염"
  - "약물 유발 신염"
  - "호산구뇨"
related_disease_slugs:
  - MDUg7Iug7J6lL-yEuOq0gOyCrOydtOyniCDsvantjKXsl7wgKFR1YnVsb2ludGVyc3RpdGlhbCBOZXBocml0aXMpLm1k
question_type: management
difficulty: complex
answer: "B"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
curation_status: "revised"
curation_reason: "미제시 단백뇨를 추가하지 않고 원인 약물 중단과 AIN 진단의 확률을 구별."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

57세 여성이 발열, 피부 발진, 옆구리 통증으로 일차진료의에게 다시 내원했다. 2주 전 인후통으로 방문해 인두염을 진단받고 페녹시메틸페니실린 10일 처방을 받았으며 현재 6일째 복용 중이다. 증상은 어제 시작되었다. 과거력으로 제2형 당뇨병, 본태성 고혈압, 위식도 역류병이 있고 메트포르민, 캅토프릴, 히드로클로로티아지드, 판토프라졸, 종합비타민을 복용한다. 체온 38.0°C, 혈압 147/95 mmHg, 맥박 분당 82회이다. 상체에 성긴 반구진 발진이 있다. 백혈구 9,500/mm³(호중구 54%, 띠호중구 4%, 호산구 8%, 호염기구 0.5%, 림프구 30%, 단핵구 4%), BUN 25 mg/dL, 크레아티닌 2 mg/dL이다. 요검사에서 고배율 시야당 백혈구 27개, 적혈구 5개가 보이고 72시간 후 소변배양은 자라지 않았다. Wright 염색 요침사에서 호산구가 4.5%이다. 다음 중 이 상태의 가장 적절한 초기 처치는?

## 선택지

A. 단기간 프레드니솔론
B. 유발 약물 중단
C. 신장 생검
D. 보존적 투석

## 해설

새 항생제 노출 뒤 발열·발진·AKI와 무균 농뇨는 약물 유발 AIN을 지지한다. 초기 조치는 유발 의심 약물을 중단하고 신기능과 전해질을 추적하는 것이다. PPI 등 다른 원인 약물도 검토한다. 호산구뇨가 단독 확진은 아니며 회복하지 않거나 진단이 불명확하면 생검·추가 치료를 검토한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010013

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 미제시 단백뇨를 추가하지 않고 원인 약물 중단과 AIN 진단의 확률을 구별.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
