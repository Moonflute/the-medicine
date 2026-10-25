---
type: qbank
schema_version: 1
id: medqa-us-train-003918
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4f5bef01b3ef79d23ca149d189858d7e60972aae594fbc9f8c321150995375a0
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "perforated viscus"
  - "peritonitis"
  - "acute abdomen"
  - "exploratory laparotomy"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_snpDrsJzshLEg7IS46regIOuzteunieyXvCAoU3BvbnRhbmVvdXMgQmFjdGVyaWFsIFBlcml0b25pdGlzKS5tZA
  - MTEg7Jm46rO8L-q4ieyEsSDrs7Xspp0gKEFjdXRlIEFiZG9tZW4pLm1k
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
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

43세 여성이 갑자기 시작된 심한 복통, 오심, 구토로 내원했다. 복부는 경직되고 반발통이 있으며 장음은 감소했다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 복막 세척
B. 상부위장관 내시경
C. 내시경적 역행성 담췌관조영술
D. 탐색적 개복술

## 해설


복부 강직·반발통·장음 감소는 천공성 복막염을 의미하며, 가장 확실한 진단 및 치료는 탐색적 개복술이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 급성 복부강직·반발통의 복막염에서 외과적 탐색 D; 누락 X선 내용을 지어내지 않고 임상적 수술응급으로 판단.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003918
