---
type: qbank
schema_version: 1
id: medqa-us-test-001159
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:b4cab554f549359186d221964e42f6a51a64ee7e7b5131aca25eb077f90b3c0d
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "전신홍반루푸스"
  - "루푸스 정신병"
  - "항dsDNA 항체"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yghOyLoCDtmY3rsJgg66Oo7ZG47IqkIChTTEUpIChTeXN0ZW1pYyBMdXB1cyBFcnl0aGVtYXRvc3VzIChTTEUpKS5tZA
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDtmY3rsJgg66Oo7ZG47IqkIChTeXN0ZW1pYyBMdXB1cyBFcnl0aGVtYXRvc3VzKS5tZA
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG96YXBpbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
---

# MedQA US 임상문제

## 문제

27세 여성이 처음 발생한 환청과 혼란으로 입원했다. 활동성 전신홍반루푸스 환자로 면역억제 치료 중이고, 발열과 심한 두통도 새로 발생했다. 신경정신 루푸스 악화로 단정하기 전에 우선 해야 할 일은?

## 선택지

A. 보체 수치만으로 신경정신 루푸스를 확진한다
B. 감염 평가 없이 면역억제제를 바로 증량한다
C. 진정제만 투여하고 경과 관찰한다
D. 신경학적 평가와 함께 중추신경계 감염·약물·대사성 원인을 신속히 확인한다

## 해설


루푸스 환자의 새 정신·신경 증상은 다른 환자처럼 감염과 대사 이상 등 치료 가능한 원인을 먼저 평가한다. 특히 발열과 면역억제 상태에서는 중추신경계 감염을 놓치지 않아야 한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-test-001159`와 직접 대조했다.
- 판정: 정신증뿐 아니라 구강궤양·심낭마찰음·신기능 저하·빈혈이 있어 SLE 평가 D의 논리가 연결됨. 오연결 플래그는 실제 오연결로 판단하지 않음.
- 검수 범위: 내용·번역·해설 연결 검토(content-reviewed). 최신 치료·용량의 전면 근거 검증을 뜻하지 않는다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001159
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13711245/
