---
type: qbank
schema_version: 1
id: medqa-us-train-002485
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c6bd8c12d4d4609a1a687284ae7742efedbf63fa978ae31c63b743c6c7e3a788
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "poststreptococcal glomerulonephritis"
  - "immune complex deposition"
  - "nephritic syndrome"
related_disease_slugs:
  - MDUg7Iug7J6lL-yXsOyHhOyDgeq1rOq3oCDqsJDsl7wg7ZuEIOyCrOq1rOyytOyLoOyXvCAoUFNHTikgKFBvc3QtU3RyZXB0b2NvY2NhbCBHbG9tZXJ1bG9uZXBocml0aXMpLm1k
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
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

8세 남아가 2일간 차색 소변과 얼굴 부종으로 내원했다. 몇 주 전 발열과 인후통을 앓아 이부프로펜으로 치료받았다. 오늘 심박수 100회/분, 호흡 22회/분, 혈압 130/80 mmHg, 체온 36.8°C이며 경한 눈둘레 부종이 있다. 요검사에서 단백뇨 1+, 고배율당 적혈구 10~15개와 변형 적혈구가 보인다. 다음 중 이 환자 상태의 기전을 가장 잘 나타내는 것은?

## 선택지

A. 미만성 메산지움 IgA 침착
B. 면역복합체 침착
C. 보체 의존성 항체 반응
D. 보체 비의존성 반응

## 해설

인후감염 수주 후 나타난 부종·고혈압·차색뇨와 변형 적혈구는 감염 후 사구체신염을 시사한다. 연쇄상구균 감염 후 사구체신염은 면역복합체에 의한 염증과 보체 활성화가 기전이므로 B가 가장 적절하다. 감염과 거의 동시에 발생하는 IgA 신병증과 구분한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원문 수주 후 발병을 해설이 2주 이내라고 좁힌 오류 교정. PSGN 면역복합체 B 유지.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002485
