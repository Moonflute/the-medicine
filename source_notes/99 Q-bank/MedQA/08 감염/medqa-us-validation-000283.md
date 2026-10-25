---
type: qbank
schema_version: 1
id: medqa-us-validation-000283
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:2a06246a55fa1ee0f44632af614fd0a926f0242a11ac487386fe9d3b8a16cd86
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "HIV 직업적 노출"
  - "노출 후 예방요법"
  - "혈액 매개 감염"
related_disease_slugs:
  - MDgg6rCQ7Je8L-q4ieyEsSBISVYg6rCQ7Je8IChBY3V0ZSBISVYgSW5mZWN0aW9uKS5tZA
question_type: prevention
difficulty: standard
answer: A
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

35세 여성이 직장에서 사고가 난 지 30분 후 산업보건 서비스에 왔다. 채혈사로 일하며 30세 남성 환자에게서 채혈하던 중 피가 오른쪽 눈에 튀었다고 한다. 즉시 몇 분 동안 물로 눈을 씻었다. 해당 환자는 객혈, 체중감소, 야간 발한으로 입원했으며 정맥주사 약물을 사용하고 여러 남녀 파트너와 성관계를 한다. 채혈사의 과거력과 복용약은 없고 예방접종은 최신이다. 바이러스 혈청검사를 위해 혈액을 채취하는 것 외에 가장 적절한 다음 단계는?

## 선택지

A. 랄테그라비르, 테노포비르, 엠트리시타빈을 시작한다
B. 지도부딘을 시작한다
C. 테노포비르와 엠트리시타빈을 시작한다
D. B형간염 면역글로불린과 백신을 투여한다

## 해설


혈액이 눈 점막에 튄 직업 노출은 즉시 평가하여 필요 시 PEP를 가능한 한 빨리 시작하며, 원칙적으로 72시간 이내 시작해 28일 투여한다. 선택지 중 raltegravir+tenofovir+emtricitabine(A)은 유효한 3제 조합이다. 2025 지침은 bictegravir 또는 dolutegravir 기반 조합을 선호하지만, raltegravir 조합은 이들 권고 조합을 처방할 수 없을 때 여전히 효과적인 선택이다. 노출원 신속 검사와 본인 baseline 검사·HBV 접종반응 확인을 병행하며 불필요하게 첫 투여를 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000283 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 점막 혈액 노출의 3제 PEP A 유지. Raltegravir 조합은 효능 부정이 아니라 pill burden 때문에 현재 우선 권고에서 빠진 대체 가능 옵션임을 2025 직업노출 지침으로 한정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://stacks.cdc.gov/view/cdc/258795/cdc_258795_DS1.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000283
