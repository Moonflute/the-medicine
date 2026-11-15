---
type: qbank
schema_version: 1
id: medqa-us-train-010158
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e659bafbd070c5d43f4a1e52e3caf6eea81721b54f2aac1969aeb82a08f6e640
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "X연관 부신백질이영양증"
  - "ABCD1 수송체"
  - "탈수초성 질환"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_ri6TrsJzshLEg6rK97ZmU7KadIChNdWx0aXBsZSBzY2xlcm9zaXMpLm1k
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

8세 남아가 수개월 사이 성적과 보행이 모두 악화했다. 피부 과색소침착이 있고, 뇌 MRI에 대칭적인 뒤쪽 백질 병변이 보인다. 외가 남자 친척에게 비슷한 병력이 있다. 의심 질환을 평가할 혈액검사는?

## 선택지

A. 혈장 초장쇄지방산 또는 C26:0 리소인지질
B. 혈청 아세틸콜린수용체 항체
C. 혈청 구리와 세룰로플라스민
D. 혈중 항아쿠아포린-4 항체

## 해설

남아의 진행성 백질 증상과 부신기능저하 단서는 X연관 부신백질이영양증을 시사한다. 혈액의 표지자와 ABCD1 검사를 이용하며 부신 기능도 신속히 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. ABCD1 유전자/단백질의 주객 전도와 X연관 가족력 번역 오류 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010158
- https://pubmed.ncbi.nlm.nih.gov/36175155/
