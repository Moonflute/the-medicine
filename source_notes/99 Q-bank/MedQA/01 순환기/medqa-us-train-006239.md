---
type: qbank
schema_version: 1
id: medqa-us-train-006239
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8dab0eadd56d94498349c286c1f604f4aa91f4c5e4d6ebb2f6f141c09431b70d
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "우심부전"
  - "간정맥 울혈"
  - "헤모크로마토시스"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: mechanism
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
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

41세 남성이 3개월 동안 지속된 피로, 악화되는 복부 불편감 및 점점 심해지는 다리 부종으로 내원했다. 부종은 저녁에 심하다. 간헐적 관절통으로 이부프로펜만 복용하며 흡연은 하지 않고 주말에 맥주 2~3잔을 마신다. 체온은 36°C(96.8°F), 맥박은 분당 88회, 호흡수는 분당 18회, 혈압은 130/80 mmHg이다. 복부는 약간 팽창하고 이동성 탁음이 있으며 간이 우측 늑골연 아래 2~3cm에서 만져진다. 우상복부를 누르면 경정맥이 15초 동안 뚜렷하게 팽창한다. 양손 제2·3 중수지절관절에 압통이 있고 하지에 2+ 부종이 있다. 다음 중 부종의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 우심실 이완 장애
B. 사구체 여과율 감소
C. 진피의 글리코사미노글리칸 침착
D. 간의 대공포성 지방증

## 해설


우심실 이완 장애(우심부전) 시 정맥압 상승으로 간정맥 울혈, 복수, 말초 부종이 발생한다. 환자의 복부 팽창, 간 비대, 경정맥 팽창, 말초 부종이 모두 우심실 이완 장애에 일치한다. 따라서 원인은 우심실 이완 장애이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 양성 간경정맥반사·복수·말초부종은 우심 충만장애 A의 정맥울혈에 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006239
