---
type: qbank
schema_version: 1
id: medqa-us-validation-000311
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:fd3f01f2c1fee8cf5c1eab96f377447db85373ba40428d832142a71d03cc012d
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "울혈성 심부전 악화"
  - "신기능 저하"
  - "메트포르민 관련 젖산산증"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

77세 남성이 2일간 악화된 호흡곤란과 발목 부종으로 내원했다. 제2형 당뇨병, 고혈압, 관상동맥질환, 울혈성 심부전이 있으며 리시노프릴, 메트포르민, 아스피린을 복용한다. 체온 37.2°C, 맥박 100회/분, 호흡수 20회/분, 혈압 100/65 mmHg, 실내 공기 산소포화도 91%이다. 흉골각보다 5 cm 높은 경정맥 맥박, 양쪽 폐기저부 수포음, S3가 들리고 양측 중간 경골부터 발목까지 부종이 있다. 검사에서 나트륨 129, 칼륨 4.8 mEq/L, BUN 48 mg/dL, 혈당 196 mg/dL, 크레아티닌 2.1 mg/dL이다. 가장 적절한 처치는?

## 선택지

A. 메트포르민 치료 중단
B. 반코마이신 치료 시작
C. 니트로프루시드 치료 시작
D. 히드로클로로티아지드 치료 시작

## 해설

급성 심부전 악화와 저산소혈증, 신기능 저하는 메트포르민 축적과 젖산산증 위험을 높여 A의 일시 중단을 검토할 근거가 된다. 울혈 치료와 신기능·관류 평가도 병행한다. 안정적인 모든 만성 심부전이 영구 금기라는 뜻은 아니며, eGFR와 회복 상태를 확인해 재개 여부를 정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 영어 원문의 메트포르민 복용을 복원하고 급성 심부전·신기능 저하에서 일시 중단하는 안전 맥락을 명시.
- https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=583dac53-65e7-4710-912a-ecd89d07ad03

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000311
