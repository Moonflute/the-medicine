---
type: qbank
schema_version: 1
id: medqa-us-train-006713
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:121d790a133306a9a31a1954e477b39837367919975e502cf3a1395be71abddd
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "고립성 폐결절"
  - "폐결절 평가"
  - "PET 검사"
  - "pulmonary nodule"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-uLqOydvCDtj5DqsrDsoIggKFNQTikgKFNvbGl0YXJ5IFB1bG1vbmFyeSBOb2R1bGUpLm1k
question_type: investigation
difficulty: complex
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

50세 남성이 폐결절 관리를 위해 주치의를 방문했다. 폐렴을 배제하기 위해 시행한 흉부 방사선에서 우연히 발견되었고 CT에서 8.5mm 크기로 확인되었다. 건강하며 흡연한 적이 없고 규칙적으로 운동한다. 낙농공장에서 일하며 그동안 증상은 없었다. 체온은 97.6°F(36.4°C), 혈압은 122/81 mmHg, 맥박은 분당 83회, 호흡수는 분당 12회, 실내 공기 산소포화도는 98%이다. 폐 청진을 포함한 신체진찰은 정상이다. 다음 중 처치로 가장 적절한 다음 단계는?

## 선택지

A. 생검 및 림프절 절제
B. 추가 평가 불필요
C. 양전자방출단층촬영(PET)
D. 외과적 절제

## 해설

8mm를 넘는 불확정 결절에서는 악성사전확률·CT형태·과거영상에 따라 PET C가 선택 가능한 평가다. 저위험에서는 단기CT추적도 가능하며 제시 선택지에는 없다. PET은 작은병변에서 민감도가 제한되고 염증도 양성일 수 있어 암의 확진/완전배제 검사는 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 8.5mm 결절의 PET C를 위험기반 선택으로 한정하며 모든 작은결절에 의무검사라는 설명 교정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC3749714/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006713
