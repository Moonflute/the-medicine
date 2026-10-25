---
type: qbank
schema_version: 1
id: medqa-us-train-003512
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7bf17bc89c91bed6b70aba048a0321b14b634d3efb2ed7d4e9d1e184a30c6f5f
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "pheochromocytoma"
  - "adrenal medullary tumor"
  - "paroxysmal hypertension"
  - "catecholamine excess"
related_disease_slugs:
  - MDQg64K067aE67mEL-2BrOuhrOy5nO2ZlOyEuO2PrOyihSAoUGhlb2Nocm9tb2N5dG9tYSkubWQ
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: diagnosis
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

33세 남성이 3시간간 지속된 심한 두통, 어지럼증, 시야흐림, 심계항진으로 내원했다. 혈압은 220/130 mmHg, 맥박은 112회/분이었고 땀을 많이 흘렸다. 최근 6개월간 비슷한 에피소드가 반복되었으며 아버지는 신장암으로 사망했다. 다음 중 영상검사에서 증상을 가장 잘 설명할 소견은?

## 선택지

A. 척추주위 종괴
B. 수막 종괴
C. 부신수질 종괴
D. 두개내 출혈

## 해설

반복 두통·발한·심계항진과 발작성 중증 고혈압은 pheochromocytoma를 시사하여 선택지 중 부신수질 종괴 C가 가장 부합한다. 실제 진단에는 혈장 유리 또는 소변 분획 metanephrine 등 생화학검사와 영상의 통합이 필요하다. 부신 종괴만 보였다고 기능성 pheochromocytoma가 확진되는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Pheo의 부신수질 종괴 C는 유지하되 영상만으로 기능성종양을 확진한다는 해설 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003512
