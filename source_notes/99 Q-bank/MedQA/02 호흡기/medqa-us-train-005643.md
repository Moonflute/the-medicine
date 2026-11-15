---
type: qbank
schema_version: 1
id: medqa-us-train-005643
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0ac790ef7d313786e96f64f09e594ab405dccf534770f9da78d0cc50b5796ca3
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "급성 호흡곤란 증후군"
  - "급성 췌장염"
  - "비심인성 폐부종"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4ieyEsSDtmLjtnaHqs6TrnoAg7Kad7ZuE6rWwIChBUkRTKSAoQWN1dGUgUmVzcGlyYXRvcnkgRGlzdHJlc3MgU3luZHJvbWUpLm1k
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7LeM7J6l7Je8IChBY3V0ZSBQYW5jcmVhdGl0aXMpLm1k
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

58세 남성이 중증 급성 췌장염으로 입원한 다음 날 급격히 저산소증이 생겼다. 양쪽 폐에 새로운 침윤이 있고 심초음파에서 좌심실 기능은 정상이며 체액 과다 소견은 없다. 삽관 후 FiO₂ 0.40, PEEP 8 cmH₂O에서 PaO₂는 60 mmHg이다. 가장 가능성 높은 진단은?

## 선택지

A. 심인성 폐부종
B. 급성 호흡곤란증후군(ARDS)
C. 간성 흉수
D. 단순 수술 후 무기폐

## 해설


급성 췌장염 직후 발생한 양측 폐침윤과 산소화 장애가 심부전이나 체액 과다로 설명되지 않아 ARDS에 부합한다. PaO₂/FiO₂는 150이고 PEEP 8 cmH₂O에서 측정됐으므로 삽관 환자의 중등도 범위다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 췌장염 전신염증·양측음영·P/F150·심인성 근거부족은 ARDS B에 부합. PEEP정보 없는 중증도 세부분류는 하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005643
- https://academic.oup.com/ajrccm/article/209/1/37/8427597
