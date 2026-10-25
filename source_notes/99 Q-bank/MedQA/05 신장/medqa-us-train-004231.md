---
type: qbank
schema_version: 1
id: medqa-us-train-004231
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:79e8b2327b206fcc7bafba57f8c732999a0cf2bea8c445dcfec29ab0e2b31c99
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "B형간염 관련 막성 신병증"
  - "신증후군"
  - "상피하 면역복합체 침착"
related_disease_slugs:
  - MDUg7Iug7J6lL-yLoOymne2bhOq1sCAoTmVwaHJvdGljIFN5bmRyb21lKS5tZA
  - MDUg7Iug7J6lL-unieyEsSDsgqzqtazssrTsi6Dsl7wgKE1lbWJyYW5vdXMgTmVwaHJvcGF0aHkpLm1k
question_type: 임상증례 객관식
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

17세 남자가 5일간 지속된 얼굴과 다리 부종으로 내원했다. 10년 전 가족과 함께 한국에서 미국으로 이민했다. 2주 전 인후통이 있었던 것 외에는 건강했다. 여동생은 제1형 당뇨병이 있다. 체온 37°C, 맥박 90회/분, 혈압 145/87 mmHg이다. 눈 주위 부종과 하지 3+ 함요부종이 있다. 헤모글로빈 13.9 g/dL, 백혈구 8,100/mm³, 포도당 78 mg/dL, 알부민 2.4 g/dL, B형간염 표면항원 양성, 표면항체 음성, C4 감소, 소변 혈액 음성, 단백질 4+, 포도당 음성, 단백질/크레아티닌 비 8.1이다. 추가 평가에서 예상되는 소견은 무엇인가?

## 선택지

A. 신장 생검에서 상피하 침착
B. 신장 생검에서 호산구성 결절
C. 신장 생검에서 정상으로 보이는 사구체
D. 혈청 IgA 증가

## 해설


신증후군에서 저알부민혈증, 고단백뇨, 혈청 C4 감소가 나타나며, 막성 신병증은 상피하 면역복합체 침착이 특징이다. 따라서 신장 생검에서 상피하 침착이 예상된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: HBsAg+의 신증후군에서 HBV연관 membranous의 상피하침착 A가 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004231
