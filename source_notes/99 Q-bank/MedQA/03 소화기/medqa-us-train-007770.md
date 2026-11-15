---
type: qbank
schema_version: 1
id: medqa-us-train-007770
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:79e998d0cbb1015c37c9fa00cc03c9728d20a83a99a2290dbe76bc1d76d0e616
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acute pancreatitis"
  - "Ranson criteria"
  - "mortality risk"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7LeM7J6l7Je8IChBY3V0ZSBQYW5jcmVhdGl0aXMpLm1k
question_type: complication
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

급성 췌장염으로 입원한 환자들에게 다음 경과가 관찰됐다. 개정 애틀랜타 분류에서 중증 급성 췌장염에 해당하는 것은?

## 선택지

A. 저산소성 호흡부전이 72시간 지속됨
B. 저혈압이 수액으로 회복되어 24시간 내 장기부전이 사라짐
C. 장기부전 없이 췌장 주변 액체 저류가 생김
D. 장기부전 없이 리파아제가 정상 상한의 20배로 상승함

## 해설


중증은 호흡·순환·신장 중 한 가지 이상의 장기부전이 48시간을 넘어 지속될 때다. 48시간 이내 회복되는 장기부전이나 장기부전 없는 국소 합병증은 중등증에 해당할 수 있다. 효소 상승폭만으로 중증도를 정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007770 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문은 다른 위험인자 모두 음성인데 없는 48시간 항목을 더한 계산 오류 교정. Ranson3–4점의 역사적 약15% A 유지; 원문 WBC/mL·AST 단위 불명확성 명시.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007770
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9840919/
