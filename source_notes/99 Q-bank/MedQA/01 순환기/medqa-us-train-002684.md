---
type: qbank
schema_version: 1
id: medqa-us-train-002684
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f1c75c6ab9c019db67432be1af6da19c5a00fc722c80ac16d650b1ddb661f378
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "lateral wall myocardial infarction"
  - "left circumflex coronary artery"
  - "ST-segment elevation"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
question_type: diagnosis
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

70세 남성이 지속적인 흉통으로 응급실에 왔다. 심전도에서 II, III, aVF에 ST분절 상승이 있고 V5–V6에도 새로운 ST분절 상승이 보인다. 하벽 외에 추가로 침범한 부위는?

## 선택지

A. 좌심실 중격
B. 좌심실 측벽
C. 좌심실 전벽
D. 좌심실 후벽

## 해설


II, III, aVF는 하벽, V5–V6는 좌심실 측벽을 반영한다. 유도 분포로 침범 부위를 판단할 수 있지만 V5–V6의 변화만으로 책임 혈관을 좌회선동맥으로 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: V5/V6는 좌심실 측벽이며 선택지상 LCx B. 실제 관상동맥 공급 변이는 위치 판정과 구분.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002684
- https://professional.heart.org/en/science-news/2025-guideline-for-the-management-of-patients-with-acute-coronary-syndromes
