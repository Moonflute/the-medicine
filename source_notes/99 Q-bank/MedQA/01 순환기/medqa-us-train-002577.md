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

59세 남성이 30분 전 술집에서 시작된 점점 악화되는 흉통과 오심으로 응급실에 왔다. 통증은 심와부로 방사되고 고혈압을 치료하지 않은 병력과 35갑년 흡연력이 있다. 식은땀을 흘리며 심한 고통을 호소한다. 혈압 161/92 mmHg이고 심전도에서 I, aVL, V5~6 유도 T파 역전이 보이며 소변 독성검사에서 코카인이 양성이다. 다음 중 이 환자 상태 치료에 금기인 약물은?

## 선택지

A. 프로프라놀롤
B. 디아제팜
C. 프라수그렐
D. 딜티아젬

## 해설

이 사례는 급성 cocaine 관련 관상동맥 허혈을 의심한다. 급성 교감신경 항진·혈관수축 상황에서 순수 비선택적 β차단제 propranolol A는 α매개 혈관수축을 악화시킬 우려가 있어 피한다. 이는 소변 양성이나 과거 cocaine 사용력만으로 모든 β차단제를 평생 금기시한다는 뜻이 아니며, 중독 징후·심혈관 상태 및 혈관확장제 투여 등을 함께 판단한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 급성 cocaine 관련 허혈에서 순수 비선택 β차단제 propranolol A를 피하는 취지로 한정; 과거사용만으로 모든 β차단제 영구금기 아님.
- https://doi.org/10.1097/adm.0000000000001299

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002577
