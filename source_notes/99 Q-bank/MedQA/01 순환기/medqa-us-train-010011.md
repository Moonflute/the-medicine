---
type: qbank
schema_version: 1
id: medqa-us-train-010011
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:634b836505c2b0cf9592c1c4b07f25bfa7933101693614cc04cec976c4dc37fe
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "고혈압성 응급"
  - "급성 신손상"
  - "표적장기 손상"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVleyEsSDsnITquLAgKEh5cGVydGVuc2l2ZSBDcmlzaXMpLm1k
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

57세 남성이 고혈압으로 일차진료의의 지시에 따라 응급실에 내원했다. 일반 건강검진에서 혈압이 180/115 mmHg로 측정되어 의사가 보냈다. 현재 무증상이고 건강하다고 느낀다. 고혈압 외 다른 질환은 없으며 지난주 검사도 정상이었다. 체온 98.3°F(36.8°C), 혈압 197/105 mmHg, 맥박 분당 88회, 호흡수 분당 14회, 실내 공기 산소포화도 99%이다. 신체검사는 정상이다. 재검한 검사에서 혈색소 15 g/dL, 헤마토크릿 46%, 백혈구 3,400/mm³(감별 정상), 혈소판 177,000/mm³, Na⁺ 139, Cl⁻ 102, K⁺ 4.0, HCO₃⁻ 24 mEq/L, BUN 29 mg/dL, 포도당 139 mg/dL, 크레아티닌 2.3 mg/dL, Ca²⁺ 10.2 mg/dL이다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 쿠싱증후군
B. 고혈압
C. 고혈압성 응급
D. 고혈압성 긴급

## 해설

지난주 검사 결과가 정상이었는데 현재 Cr 2.3 mg/dL로 상승한 것은 새로운 신기능 악화를 시사한다. 심한 고혈압에 급성 신장 손상이 동반되면 무증상이어도 C의 고혈압성 응급에 해당할 수 있다. 단일 크레아티닌 값만이 아니라 이전 수치와 다른 AKI 원인도 함께 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 정상 검사였던 지난주와 현재 Cr 상승을 연결하고 잘못된 체온 화씨 표기를 복원.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010011
