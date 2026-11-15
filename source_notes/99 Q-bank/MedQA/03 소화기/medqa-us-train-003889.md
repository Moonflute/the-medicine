---
type: qbank
schema_version: 1
id: medqa-us-train-003889
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6287a44e027ba22d5afec9ff633d61639519e8d9487521a206f42a615c3bbe3c
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "hepatorenal syndrome"
  - "end-stage liver disease"
  - "oliguria"
  - "liver transplantation"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsi6Ag7Kad7ZuE6rWwIChIZXBhdG9yZW5hbCBTeW5kcm9tZSkubWQ
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
question_type: diagnosis
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

간경변과 복수가 있는 54세 남성이 감염성 쇼크 후 급성 신손상을 보인다. 쇼크는 교정됐지만 크레아티닌이 오르고 요침사에 진흙색 과립원주가 다수 보인다. 신장 초음파에서 폐쇄는 없다. 가장 가능성 높은 주된 원인은?

## 선택지

A. 간신증후군–급성 신손상
B. 요로폐쇄
C. 허혈성 급성 세뇨관 손상
D. 막성 신병증

## 해설

지속적인 저관류 뒤 진흙색 과립원주는 급성 세뇨관 손상을 지지한다. 간경변만 보고 모든 급성 신손상을 간신증후군으로 분류하지 않는다. 쇼크, 신독성 약물, 폐쇄와 소변 소견을 함께 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: HRS를 신증후군으로 잘못 명명. 간이식 C는 근본치료이며 이식평가까지 AKI 원인·가교치료 별도.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11193657/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003889
- https://doi.org/10.3350/cmh.2026.0281
