---
type: qbank
schema_version: 1
id: medqa-us-train-008147
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3ffa789e7775a19aa3c0446bd48f8710397b1a80d261a8ed473d447da27753c6
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "hyperprolactinemia"
  - "antipsychotic adverse effect"
  - "tuberoinfundibular pathway"
question_type: mechanism
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoO2UhOuhnOudve2LtO2YiOymnSAoSHlwZXJwcm9sYWN0aW5lbWlhKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 여성이 양측 유두 분비물로 내원했다. 최근 시작되어 점점 심해지고 있으며 다른 증상은 없다. 현재 성생활은 하지 않고 마지막 월경은 한 달 이상 전이다. 아토피피부염과 최근 정신병 에피소드로 입원한 병력이 있다. 체온 99.5°F(37.5°C), 혈압 110/65 mmHg, 맥박 70회/분, 호흡수 15회/분, 산소포화도 98%이다. 심폐 및 복부검사는 정상이다. 증상의 가장 가능성 높은 원인은?

## 선택지

A. 결절깔때기 경로 변화
B. 흑질선조체 경로 변화
C. 중뇌변연계 경로 변화
D. 정상 임신

## 해설

시상하부의 결절깔때기 도파민 경로는 뇌하수체 유즙분비세포의 프로락틴 분비를 지속적으로 억제한다. 항정신병약의 D2 수용체 차단으로 이 억제가 감소하면 고프로락틴혈증과 유즙 분비가 생길 수 있어 A가 가장 적절하다. 이는 '유두로 이어지는 신경 경로'가 아니다. 실제 양측 분비물 평가에서 임신·내분비질환 등을 배제하지 않아도 된다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 존재하지 않는 시상하부-뇌하수체-유두 경로라는 명칭을 결절깔때기 도파민 경로로 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008147
