---
type: qbank
schema_version: 1
id: medqa-us-train-005318
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0458feca065ddf43ea0d82c13c3fa3d15afc32c964e49986e28a7cf7d06992df
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "고립성 폐결절"
  - "7 mm 폐결절"
  - "얇은 절편 CT"
  - "pulmonary nodule"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-uLqOydvCDtj5DqsrDsoIggKFNQTikgKFNvbGl0YXJ5IFB1bG1vbmFyeSBOb2R1bGUpLm1k
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

40세 남성이 건강검진 흉부 X선에서 우상엽의 약 7 mm 결절을 처음 발견했다. 증상은 없고 이전 영상에서는 보이지 않았다. 결절의 크기와 모양, 고형 여부를 확인할 검사는?

## 선택지

A. 얇은 절편의 비조영 흉부 CT
B. 전신 FDG PET/CT
C. CT 유도 경피적 조직검사
D. 기관지경 생검

## 해설


흉부 X선에서 불확실한 폐결절을 발견하면 얇은 절편 CT로 실제 크기와 밀도, 모양을 먼저 확인한다. CT 결과와 악성 위험에 따라 추적 또는 추가 검사를 결정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: CXR의 불확정 새 결절은 먼저 thin-section CT A로 특성화하는 순서에 부합.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC3749714/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005318
- https://acsearch.acr.org/docs/69455/Narrative/
