---
type: qbank
schema_version: 1
id: medqa-us-train-001589
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:21db26276e04a2d97cb2a9b76c38c58067d7d032ee94f25b888b368e7528110c
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "analgesic nephropathy"
  - "papillary necrosis"
  - "NSAID toxicity"
related_disease_slugs:
  - MDUg7Iug7J6lL-yEuOq0gOyCrOydtOyniCDsvantjKXsl7wgKFR1YnVsb2ludGVyc3RpdGlhbCBOZXBocml0aXMpLm1k
question_type: mechanism
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 남성이 2개월 동안의 전신 피로와 권태감으로 내원했다. 일상생활을 하기 어렵다. 3개월 전 요로감염으로 트리메토프림-설파메톡사졸 치료를 받았다. 고혈압, 천식 및 만성 요통이 있다. 히드로클로로티아지드, 알부테롤 흡입제, 나프록센 및 아스피린-카페인 복합제를 복용한다. 결막이 창백하다. 헤모글로빈 9.1 g/dL, 백혈구 8,900/mm3, ESR 13 mm/h, Na+ 136 mEq/L, K+ 4.8 mEq/L, Cl− 102 mEq/L, 요소질소 41 mg/dL, 포도당 70 mg/dL, 크레아티닌 2.4 mg/dL, 칼슘 9.8 mg/dL이다. 소변 단백질 1+, 혈액 1+, 적혈구 없음, 백혈구 8–9/hpf, 세균 없음, 배양 음성이다. 초음파에서 불규칙한 윤곽의 위축된 신장과 유두 석회화가 보인다. 다음 중 신부전의 가장 가능성 높은 기전은 무엇인가?

## 선택지

A. 프로스타사이클린 생성 억제
B. 경쇄 생성 과다
C. 신세뇨관 내 약물 침전
D. MUC1 유전자 돌연변이

## 해설

나프록센·아스피린 등 진통제 사용에 불규칙하고 위축된 신장·유두 석회화·무균성 농뇨가 동반되어 진통제 신병증을 시사한다. COX 억제로 프로스타사이클린 등 혈관확장성 프로스타글란딘 생성이 감소하면 신혈관, 특히 수입세동맥의 확장성 보호가 줄고 허혈성 손상에 기여할 수 있다(A). 새로 형성된 신생혈관이 수축한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. 신생혈관 수축 오기를 수입세동맥/신혈관 수축으로 바로잡고 진통제 신병증 기전 설명.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001589
