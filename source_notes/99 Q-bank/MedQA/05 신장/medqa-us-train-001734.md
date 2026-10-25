---
type: qbank
schema_version: 1
id: medqa-us-train-001734
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3f7c254c16b24bd629f27bc97ecdb0ebcc45f0693daa9cf4a59cacd71e4a821b
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "hepatitis C-associated membranoproliferative glomerulonephritis"
  - "mixed cryoglobulinemia"
  - "subendothelial immune complexes"
related_disease_slugs:
  - MDUg7Iug7J6lL-unieymneyLnSDthqDrpqzsvantjKXsl7wgKE1lbWJyYW5vcHJvbGlmZXJhdGl2ZSBHbG9tZXJ1bG9uZXBocml0aXMpLm1k
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

52세 남성이 양쪽 다리 부종과 아침 눈 주위 부종으로 응급실에 내원했다. 2주 전 시작되었고 흡연·음주와 가족력은 없다. 체온은 36.8°C (98.2°F), 혈압은 162/87 mm Hg, 맥박은 85회/분이다. 황달과 간비장비대가 있고 양쪽 하지에 허벅지 중간까지 2+ 부종이 있다. HCV 항체는 양성, 혈청 알부민 3 g/dL, 소변 단백질 3+, 적혈구 10–15/hpf 및 적혈구 원주가 있다. 다음 중 이 상태의 소견은 무엇인가?

## 선택지

A. 내피하 면역복합체 침착
B. 포스포리파제 A2 수용체 항체
C. 정상 보체 수치
D. 면역복합체 침착이 거의 없음

## 해설


C형 간염과 연관된 막증식성 사구체신염은 면역복합체가 혈관 내피하에 침착되어 보이는 것이 특징이다. 따라서 이 질환에서 관찰되는 소견은 내피하 면역복합체 침착이다. 다른 선택지는 해당 병리와 맞지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 한·영 본문/선지/정답 A/해설 읽음. HCV 관련 면역복합체성 MPGN의 내피하 침착은 부종·단백뇨와 적혈구 원주의 혼합 신염/신증 양상에 일치. 병리 기전 검토이며 HCV 치료 검증 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001734
