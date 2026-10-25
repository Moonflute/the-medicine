---
type: qbank
schema_version: 1
id: medqa-us-validation-001061
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:e1770b8aafc15e696d0d34a6808ac9c0eeab78f22b1d631cbc06b402de408f2b
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "심부정맥혈전증"
  - "수술 후 혈전"
  - "헤파린"
question_type: management
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIChEZWVwIFZlaW4gVGhyb21ib3NpcykubWQ
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

47세 여성이 24시간 동안 지속된 종아리 통증과 부종으로 응급실에 왔다. 3일 전 선택적 담낭절제술 중 출혈로 농축적혈구 1단위를 수혈받았다. 오른쪽 종아리가 커지고 압통이 있으며 도플러 초음파에서 해당 다리 정맥이 압박되지 않는다. 가장 적절한 초기 처치는?

## 선택지

A. 흉부 CT 혈관조영술
B. 헤파린
C. 하대정맥 필터
D. 와파린

## 해설

통증·부종이 있는 다리의 정맥이 초음파에서 압박되지 않아 DVT에 부합한다. 제시된 선택지 중 헤파린(B)으로 초기 항응고를 시작하는 것이 적절하다. 최근 수술 중 출혈이 있었다는 사실만으로 현재도 항응고가 절대 금기인 것은 아니지만, 지속 출혈·수술 지혈 상태와 신기능을 확인하여 약제·투여법을 정해야 한다. 와파린 단독 시작이나 일률적인 하대정맥 필터는 적절한 대체가 아니며, 호흡 증상 없이 흉부 CTA를 먼저 할 필요도 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 초음파상 비압박 정맥으로 확인된 수술 후 DVT에서 B를 유지하되 단순 의심 상태로 설명하거나 모든 경우 IV 헤파린만 쓰는 것으로 일반화하지 않는다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng158/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001061
