---
type: qbank
schema_version: 1
id: medqa-us-train-003027
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2f0fc4cdf16e7b99f66d1ae23aa9113e0efe0fc327f7caf4812eb2247d27ecf2
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "cystic fibrosis"
  - "bronchiectasis"
  - "recurrent sinopulmonary infections"
  - "sweat chloride test"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4sOq0gOyngCDtmZXsnqXspp0gKEJyb25jaGllY3Rhc2lzKS5tZA
  - MDIg7Zi47Z2h6riwL-uCreyEseyErOycoOymnSAoQ3lzdGljIEZpYnJvc2lzKS5tZA
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 남성이 반복되는 부비동염과 폐렴으로 왔다. 뚜렷한 직업성 노출이나 흡연력은 없으며 비강용종과 상엽 우세 기관지확장증이 있다. 소아기부터 기름진 변과 성장부진도 있었다. 낭성섬유증을 확인하기 위한 초기 기능 검사는?

## 선택지

A. 객담 항산균 배양
B. 혈청 총 IgE
C. 정량적 땀 염소 검사
D. 메타콜린 기관지유발검사

## 해설

조기에 시작된 상·하기도 감염, 기관지확장증과 흡수장애의 조합은 낭성섬유증을 의심하게 한다. 정량적 땀 염소 검사로 CFTR 기능을 평가하고, 경계 결과 등에서는 반복 검사와 유전검사를 검토한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: CF 의심 시 sweat chloride C는 유지. 한 검사만으로 모든 환자 확진이라는 과도한 단정 보완.
- https://www.cff.org/medical-professionals/cf-diagnosis-clinical-care-guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003027
