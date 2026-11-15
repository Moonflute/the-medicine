---
type: qbank
schema_version: 1
id: medqa-us-train-000407
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d6fce2b8b353c50c07339ebbbdfe7af3e1da42f70f555f40b7b6c8d2f4d4f9c2
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "pulmonary hypertension"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOqzoO2YiOyVlSAoUHVsbW9uYXJ5IEh5cGVydGVuc2lvbikubWQ
question_type: diagnosis
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 여성이 수개월간 심해진 운동 시 호흡곤란으로 왔다. 큰 폐동맥판 제2심음과 경정맥 팽창이 있고, 심초음파에서 우심실이 확장됐으며 폐고혈압 가능성이 높다. 폐고혈압을 확진하고 전모세혈관성과 후모세혈관성을 구분할 검사는?

## 선택지

A. 폐혈관 CT 혈관조영술
B. 추적 도플러 심초음파
C. 폐기능검사
D. 우심도자술

## 해설

폐고혈압의 가능성은 심초음파로 평가하지만, 확진과 혈역학적 분류에는 우심도자가 필요하다. 평균 폐동맥압, 폐동맥 쐐기압, 심박출량을 측정해 폐혈관저항을 계산한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: RHC의 역할을 혈역학적 확진으로 명료화; RV비대를 직접 확인하는 검사라는 설명 교정.
- https://academic.oup.com/eurheartj/article/43/38/3618/6673929

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000407
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8743640/
