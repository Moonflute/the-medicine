---
type: qbank
schema_version: 1
id: medqa-us-train-002577
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:68adbbd3df2e078a6bc8e6c58af624a7f0231f2f83edb96caaa1d76d689bba38
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "cocaine-associated acute coronary syndrome"
  - "beta-blocker contraindication"
  - "coronary vasospasm"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDqtIDsg4Hrj5nrp6Ug7Kad7ZuE6rWwIChBQ1MpLm1k
question_type: adverse_effect
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlsdGlhemVtLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJhc3VncmVsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EaWF6ZXBhbS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세 남성이 코카인을 사용한 직후 심한 흉통으로 내원했다. 불안하고 식은땀을 흘리며 혈압 174/104 mmHg, 맥박 126회/분이다. 심전도에서 새 ST분절 하강이 보인다. 급성 중독 상태에서 관상동맥 연축을 악화시킬 우려로 피해야 할 약물은?

## 선택지

A. 정맥 프로프라놀롤
B. 정맥 로라제팜
C. 설하 니트로글리세린
D. 경구 아스피린

## 해설

급성 코카인 중독으로 교감신경 항진과 관상동맥 허혈이 동반됐을 때는 혈관 연축을 악화시킬 우려가 있는 순수 베타차단제(예: 프로프라놀롤 정맥 투여)를 피한다. 과거 사용력이나 소변검사 양성만으로 모든 베타차단제를 일률적으로 금기시하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 급성 cocaine 관련 허혈에서 순수 비선택 β차단제 propranolol A를 피하는 취지로 한정; 과거사용만으로 모든 β차단제 영구금기 아님.
- https://doi.org/10.1097/adm.0000000000001299

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002577
- https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-and-pediatric-special-circumstances-of-resuscitation/
