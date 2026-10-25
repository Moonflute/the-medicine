---
type: qbank
schema_version: 1
id: medqa-us-train-003405
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:391d1321a2afe8604027d86528b2820d6777ea9a9d78aed8132d7c4e09ba73d8
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "diabetic nephropathy"
  - "Kimmelstiel-Wilson nodules"
  - "nodular glomerulosclerosis"
  - "proteinuria"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvantjKXrs5Hspp0gKERpYWJldGljIE5lcGhyb3BhdGh5KS5tZA
  - MDUg7Iug7J6lL-q4sOumveyEsSDri6jrsLHrh6ggKE9ydGhvc3RhdGljIFByb3RlaW51cmlhKS5tZA
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

61세 남성이 점점 심해지는 발목 부종과 피로감으로 내원했다. 3개월간 5 kg이 증가했고 양쪽 하지에 2+ 함요부종이 있었다. 손가락과 발가락의 2점 식별능은 감소했고 소변은 거품이 많았다. 당화혈색소는 7.9%, 크레아티닌은 1.9 mg/dL였다. 이 환자의 신장 생검에서 가장 가능성 높은 소견은?

## 선택지

A. 간질성 염증
B. 모세혈관의 철사고리 모양 변화
C. 결절성 사구체경화증
D. 사구체 기저막 분열

## 해설

고혈당·말초감각 저하와 거품뇨·부종·Cr 상승은 당뇨병성 신장병을 시사한다. 선택지 중 Kimmelstiel-Wilson 결절성 사구체경화 C가 특징적 병리이다. 발생 시점과 진행은 다양하고 T2D의 실제 유병기간이 알려지지 않을 수 있으므로 반드시 10–12년 후에 생긴다고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: DKD의 결절성경화 C를 반드시10–12년후 나타난다고 한 고정 시간표 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003405
