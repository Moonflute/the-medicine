---
type: qbank
schema_version: 1
id: medqa-us-train-008331
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f27b8ae4b417db98c0ef2795ecac99f7592c01896fff4636ecc150df48adcef1
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Crohn disease"
  - "ileocolitis"
  - "budesonide"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tgazroaDrs5EgKENEKSAoQ3JvaG4ncyBEaXNlYXNlIChDRCkpLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvQnVkZXNvbmlkZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
---

# MedQA US 임상문제

## 문제

22세 여성이 2개월 동안 지속된 복통과 설사로 내원했다. 간헐적이고 산통성인 우하복부 통증으로 식사를 두려워하며 체중이 4 kg 감소했다. 체온 37.8°C(100.0°F), 혈압 125/65 mm Hg, 맥박 75회/분, 호흡수 14회/분이다. 깊은 촉진에서 방어 없이 우하복부 경미한 압통이 있고 대장내시경에서 우측 대장과 말단 회장에 작은 아프타성 궤양, 생검에서 전층 비건락성 육아종이 보인다. 현재 가장 적절한 약물치료는?

## 선택지

A. 부데소니드
B. 시프로플록사신
C. 메트로니다졸
D. 직장 메살라민

## 해설


경증 회장·우측대장 Crohn병에서는 경구 회장방출 budesonide(A)로 단기 관해 유도를 할 수 있다. 이를 장기 유지 스테로이드로 계속하는 것은 권고되지 않는다. 항균제나 직장 mesalamine은 이 사례의 표준 관해유도 대안이 아니다. 원문은 내시경생검에 전층 육아종을 기술하지만 통상 점막생검은 장벽 전층을 평가할 수 없다는 점을 유의한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008331 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 경증 회맹부/우측대장 Crohn의 관해 유도 budesonide A 유지, 유지요법이 아님을 명시. 점막 내시경생검으로 전층을 볼 수 있다는 원문 한계도 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://gut.bmj.com/content/74/Suppl_2/s1

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008331
