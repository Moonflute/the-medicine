---
type: qbank
schema_version: 1
id: medqa-us-train-006327
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:065922c205a53224f5c7ad586efe14e90bcdb7abee2470753fb0284a69f78f13
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "페넬진 상호작용"
  - "티라민 유발 고혈압 위기"
  - "모노아민산화효소 억제제"
question_type: investigation
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVleyEsSDsnITquLAgKEh5cGVydGVuc2l2ZSBDcmlzaXMpLm1k
difficulty: simple
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
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

페넬진을 복용 중인 환자가 숙성 치즈를 먹은 뒤 갑자기 심한 후두부 두통과 식은땀, 가슴 압박감을 호소한다. 가장 먼저 확인해야 할 활력징후는?

## 선택지

A. 호흡수
B. 산소포화도
C. 혈압
D. 체온

## 해설


페넬진은 모노아민산화효소를 억제한다. 티라민이 많은 음식과 함께하면 급격한 혈압 상승이 생길 수 있다. 심한 두통이나 흉통이 있으면 혈압과 장기 손상을 신속히 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006327
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=513a41d0-37d4-4355-8a6d-a2c643bce6fa

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 페넬진·숙성 치즈 노출 후 혈압 감시의 원문 질문·선지·정답·해설 일치.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
