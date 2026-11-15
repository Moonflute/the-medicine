---
type: qbank
schema_version: 1
id: medqa-us-train-006694
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4338641a4961726c99df6a519786b16781f885e00bb779d251121d5a8ccf683b
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "바이러스성 기관지염"
  - "상기도 감염"
  - "지지요법"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4ieyEsSDquLDsuagubWQ
question_type: management
difficulty: complex
answer: A
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

40세 여성이 콧물과 근육통이 시작된 뒤 5일째 기침한다. 가래는 소량이며 객혈은 없다. 체온 37.1°C, 맥박 84회/분, 호흡수 17회/분, 산소포화도는 정상이다. 폐 청진에서 국소 수포음은 없고 면역저하나 만성 폐질환 병력도 없다. 적절한 초기 관리는?

## 선택지

A. 항생제 없이 증상을 조절하고, 악화하면 다시 평가한다
B. 폐렴으로 보고 즉시 항생제를 시작한다
C. 백일해가 확실하므로 검사 없이 마크롤라이드를 투여한다
D. 모든 환자에게 고해상도 흉부 CT를 시행한다

## 해설

상기도 감염 후 기침이 짧게 지속되면서 활력징후가 안정적이고 폐렴을 시사하는 국소 소견이 없으면 대개 급성 기관지염이다. 항생제는 일상적으로 필요하지 않으며 발열, 호흡곤란이나 객혈이 생기면 다시 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 증상5일을2주로 늘린 해설을 교정하고 가벼운 바이러스성 기도질환의 지지요법 A로 정리.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006694
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8497763/
- https://www.cdc.gov/antibiotic-use/hcp/clinical-care/adult-outpatient.html
