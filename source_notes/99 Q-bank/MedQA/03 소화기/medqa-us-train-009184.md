---
type: qbank
schema_version: 1
id: medqa-us-train-009184
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9862474735b888874c21364362116be8e0a872fd61e0767bcd288c2f6db13729
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "pancreatic disease"
  - "췌장 질환"
  - "chronic pancreatitis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_st4zsnqUg7KeI7ZmYLm1k
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rp4zshLEg7LeM7J6l7Je8IChDaHJvbmljIFBhbmNyZWF0aXRpcykubWQ
question_type: investigation
difficulty: complex
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

72세 남자가 한 달 동안 지속된 전신 권태감으로 일차의료기관에 내원했다. 이부프로펜으로 호전되지 않는 지속적인 복통도 있다. 최근 의도하지 않게 22파운드가 감소했다. 이 기간 동안 많은 양의 식사를 하면 간헐적으로 설사를 했다. 알코올 사용, 비만, 당뇨병, 고혈압, 정맥주사 약물 사용, 천식 병력이 있다. 디설피람, 메트포르민, 인슐린, 아토르바스타틴, 리시노프릴, 알부테롤, 흡입 코르티코스테로이드를 복용한다. 매주 금주 모임에 참석하며 최근 2주 금주 기념 칩을 받았다. 체온 99.5°F(37.5°C), 혈압 100/57 mmHg, 맥박 88회/분, 호흡수 11회/분, 실내 공기 산소포화도 98%이다. 복부 압통이 있고 간 가장자리가 늑골연 아래 2 cm에서 만져진다. 신경학적 검사에서 보행이 불안정하다. 다음 중 가장 적절한 초기 진단검사는 무엇인가?

## 선택지

A. 복부 CT
B. 빌리루빈을 포함한 간기능검사
C. 대변 잠혈검사와 배양
D. 대변 수단 흑색 염색

## 해설


정답 A. 고령, 심한 체중감소, 식후 복통과 설사는 만성 췌장염의 외분비부전뿐 아니라 췌장 종양 등 기질적 질환을 평가해야 하는 소견이다. 선택지 중 복부 CT는 췌장의 석회화·구조 변화·종괴를 살피는 적절한 초기 단면영상이다. 음주력이나 신경학적 이상만으로 췌장암을 확진하지 않으며 CT가 모든 췌장 질환에서 가장 정확한 검사라는 뜻도 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009184 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 체중감소·식후 통증·설사에서 CT로 만성 췌장염과 악성종양을 평가하는 취지 유지; 보행 이상만으로 암 확진하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://doi.org/10.14309/AJG.0000000000000535

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009184
