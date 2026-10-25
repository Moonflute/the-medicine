---
type: qbank
schema_version: 1
id: medqa-us-train-010071
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:462c98899ce2534c6666bed4ae8659efa871893881fd014240f5b8a6c8779ebe
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "아스피린 과민성 호흡기질환"
  - "천식"
  - "비용종"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: prevention
difficulty: standard
answer: D
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
---

# MedQA US 임상문제

## 문제

건강한 48세 남성이 건강검진을 위해 내원했다. 증상은 없고 잘 지낸다. 과거력으로 천식, 만성 부비동염, 비용종이 있으며 알레르기 때문에 가끔 디펜히드라민을 복용한다. 부모와 형은 모두 건강하다. 혈압 119/81 mmHg, 심박수 분당 101회, 호흡수 분당 21회, 체온 37°C이다. 정기 혈액검사에서 총콜레스테롤 상승이 발견되었다. 뇌졸중과 심근경색 위험을 줄이기 위해 저용량 아스피린을 복용해야 하는지 묻는다. 다음 중 가장 적절한 답변은?

## 선택지

A. 그렇다. 아스피린 치료가 권장된다.
B. 그렇지만 이틀에 한 번만 복용한다.
C. 아니다. 모든 만성 부비동염은 아스피린 합병증을 일으키기 때문이다.
D. 과거 아스피린에 반응한 적이 있는가?

## 해설


천식·만성 부비동염·비용종은 아스피린 악화 호흡기질환의 단서이므로 과거 아스피린/NSAID 반응을 묻는 D가 가장 적절하다. 이는 반응 병력이 없으면 바로 처방하라는 뜻이 아니다. 일차예방 아스피린은 심혈관 위험과 출혈 위험을 따져 개별 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-010071`와 직접 대조했다.
- 판정: 천식·비용종에서 과거 아스피린 반응을 묻는 D 유지. 반응 병력 부재가 일차예방 아스피린의 자동 적응증이라는 오해를 차단.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/Drug-Allergy-PP-9-2022.pdf
- https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/aspirin-to-prevent-cardiovascular-disease-preventive-medication

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010071
