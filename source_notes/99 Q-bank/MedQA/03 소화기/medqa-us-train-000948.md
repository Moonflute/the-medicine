---
type: qbank
schema_version: 1
id: medqa-us-train-000948
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ce6e97945f5b342acbec72196ef70da1b051c2e2a51ba2bf02aa564f6cda8f82
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "chronic alcoholism"
  - "hepatitis B"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: prevention
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

림프종 환자가 리툭시맙 치료를 앞두고 있다. HBsAg 음성, 총 anti-HBc 양성, anti-HBs 양성이며 HBV DNA는 검출되지 않는다. B형간염 재활성화를 예방하기 위해 무엇을 하는가?

## 선택지

A. anti-HBs가 양성이므로 추가 조치 없음
B. 엔테카비르 예방 투여 시작
C. HBV DNA가 검출되는 경우에만 약 시작
D. B형간염 백신만 접종

## 해설


표면항원이 음성이어도 핵항체 양성은 과거 감염을 뜻한다. 리툭시맙 같은 B세포 제거 치료는 재활성화 고위험이므로 anti-HBs 양성이나 검출되지 않는 HBV DNA만으로 안심하지 않고 예방적 항바이러스제를 사용한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 면역 표지자는 anti-HBs B로 예방접종/감염 후 회복과 연관. HBsAg/HBeAg의 활성감염 표지와 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000948
- https://doi.org/10.3350/cmh.2026.0579
