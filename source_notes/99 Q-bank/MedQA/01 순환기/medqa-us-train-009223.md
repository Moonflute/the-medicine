---
type: qbank
schema_version: 1
id: medqa-us-train-009223
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:41775cf107753ca95a452796e39d857abc56813f0ca72eb95acc5ad9a72d0551
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "hypertensive heart disease"
  - "고혈압성 심장질환"
  - "heart failure"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 남성이 안정된 만성 심부전으로 추적 중이다. 무릎 통증으로 새 약을 시작한 지 일주일 뒤 체중이 2.3 kg 늘었고, 기좌호흡과 양쪽 발목 부종이 생겼다. 심부전 약은 거르지 않았다. 다음 중 이 악화를 가장 잘 설명하는 새 약은?

## 선택지

A. 국소 캡사이신
B. 아세트아미노펜
C. 경구 이부프로펜
D. 국소 리도카인

## 해설


이부프로펜 같은 경구 NSAID는 콩팥에서 나트륨과 수분 저류를 늘리고 이뇨 효과를 약화시켜 심부전을 악화시킬 수 있다. 투약 직후 생긴 급격한 체중 증가와 울혈이 단서다. 기존 고혈압이 심장 구조의 변화를 설명해도 이번 급성 악화와 같은 원인이라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 동심성 좌심실 비대와 S4·울혈은 장기 고혈압 C의 압력부하를 지지하며 알코올성 확장형과 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009223
- https://doi.org/10.4070/kcj.2023.0047
