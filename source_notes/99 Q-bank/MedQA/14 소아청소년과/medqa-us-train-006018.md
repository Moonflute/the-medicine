---
type: qbank
schema_version: 1
id: medqa-us-train-006018
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:08f9319214687013304df6a4e9d171f1a1664e0e89e398e440cd3caeda415d6b
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "낭성섬유증"
  - "재발성 폐렴"
  - "췌장 외분비 기능부전"
question_type: investigation
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-uCreyEseyErOycoOymnSAoQ3lzdGljIEZpYnJvc2lzKS5tZA
  - MDIg7Zi47Z2h6riwL-uwmOuzteyEsSDtj5DroLQgKFJlY3VycmVudCBQbmV1bW9uaWEpLm1k
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

2세 남아가 일주일 동안 중등도의 흰 가래를 동반한 생산성 기침이 점점 심해져 내원했다. 지난 1년 동안 폐렴으로 항생제 치료를 네 차례 받았다. 3개월 전 흉부 X선은 해부학적 이상이 없었다. 잘 씻겨 내려가지 않는 양 많고 기름진 변을 여러 번 보았다. 키는 3백분위수, 체중은 5백분위수이다. 체온은 38°C(100.4°F), 맥박은 분당 132회, 호흡수는 분당 44회이며 흉부에서 흡기성 수포음이 몇 개 들린다. 복부는 부드럽고 압통이 없다. 다음 중 기저 원인을 확인하기 위한 가장 적절한 초기 검사는 무엇인가?

## 선택지

A. 흉부 X선
B. 혈청 면역글로불린 수치
C. 땀 염소 검사
D. DNA 표현형검사

## 해설

반복 폐렴과 만성 호흡기 증상에 지방변 및 성장 저하가 동반된 2세 소아에서는 낭성섬유증을 의심한다. 제시된 선택지 중 땀 염소 검사(C)가 CFTR 기능 이상을 평가하는 표준적인 초기 진단검사이다. 결과는 임상 소견과 함께 해석하며 중간 범위 또는 임상적으로 의심이 지속되는 경우 반복 검사나 CFTR 유전자 평가가 필요할 수 있다. 흉부 X선만으로 원인을 확정할 수 없고 혈청 면역글로불린은 지방변을 포함한 이 조합을 가장 직접적으로 평가하지 못한다. 가족력은 본문에 제시되지 않았다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 2세를 영아라고 부르고 원문에 없는 가족력 부재를 추가한 해설 수정. 땀염소 C를 CFTR 기능 평가로 설명하고 절대 민감도/특이도 표현 제거.
- https://www.cff.org/medical-professionals/cf-diagnosis-clinical-care-guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006018
