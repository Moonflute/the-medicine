---
type: qbank
schema_version: 1
id: medqa-us-train-003486
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b333d147d5a6dc4985e667eccfa6e535547ba7e9d7ca059dc6d828bc61e59d1f
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "acute tubular necrosis"
  - "ischemic acute kidney injury"
  - "muddy brown casts"
  - "BUN creatinine ratio"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
question_type: diagnosis
difficulty: complex
answer: D
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

56세 남성이 왼팔과 턱으로 퍼지는 심한 흉통과 어지럼증으로 내원했다. 심전도에서 I, aVL, V5~6에 ST 분절 상승이 있었고 경피적 관상동맥 중재술로 성공적으로 재관류되었다. 중환자실 첫날 밤 소변량은 0.15 mL/kg/h였고 소변검사에서 진흙갈색 원주가 보였다. 이 환자의 상태에서 예상되는 소견은?

## 선택지

A. 소변 삼투질농도 900 mOsmol/kg
B. 소변 삼투질농도 550 mOsmol/kg
C. BUN:혈청 크레아티닌 비율 20:1 초과
D. BUN:혈청 크레아티닌 비율 15:1 미만

## 해설

심근경색/시술 후 핍뇨와 muddy brown granular cast는 급성 세뇨관손상(ATN)을 시사한다. 세뇨관의 농축·요소 재흡수 기능 저하로 선택지 중 비교적 낮은 BUN/Cr<15 D가 부합한다. 이는 신전성 저관류에서 요소 재흡수 증가로 비율이 높아지는 것과 대조된다. 비율은 여러 요인의 영향을 받아 단독 확진 지표는 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Muddy brown cast의 세뇨관손상을 급성 관상동맥 폐쇄성 신손상으로 잘못 명명. BUN/Cr 해석도 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003486
