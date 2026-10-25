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
explanation_status: machine-generated
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

40세 남자가 무증상으로 취업 전 검진을 받았다. 흉부 방사선에서 우상엽에 정상적으로 공기가 찬 폐로 둘러싸인 경계가 명확한 7 mm 단일 결절이 보이며 5년 전 영상에는 없었다. 다음 중 진단 평가의 다음 단계는?

## 선택지

A. 결절을 통과하는 얇은 절편 CT
B. 양전자방출단층촬영
C. CT 유도 경흉부 세침흡인
D. 기관지경하 세침흡인

## 해설


7 mm 이하의 새로운 고형 폐결절에 대해 먼저 얇은 절편(Thin-section) CT를 시행해 결절의 형태·밀도·경계 등을 평가한다. PET이나 조직검사는 결절이 8 mm 이상이거나 고위험 소견이 있을 때 고려한다. 따라서 다음 단계는 A, 얇은 절편 CT이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: CXR의 불확정 새 결절은 먼저 thin-section CT A로 특성화하는 순서에 부합.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC3749714/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005318
