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
explanation_status: "manual-reviewed"
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

41세 남성이 복부가 불러오고 저녁이면 양쪽 다리가 붓는다고 한다. 간비대가 있으며 오른쪽 윗배를 눌렀을 때 경정맥 팽창이 15초 넘게 지속된다. 혈청 알부민과 신장기능은 정상이다. 부종이 생긴 주된 기전은?

## 선택지

A. 우심 충만압 상승에 따른 전신 정맥압 증가
B. 저알부민혈증에 따른 혈장 교질삼투압 감소
C. 갑상샘 기능 저하에 따른 피부 점액 침착
D. 콩팥 여과 감소에 의한 일차성 체액 저류

## 해설


복부 압박에 경정맥압이 오래 상승하는 소견과 간비대는 오른쪽 심장의 충만압이 높아 전신 정맥이 울혈되었음을 시사한다. 모세혈관 정수압이 올라 복수와 말초 부종이 생길 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 양성 간경정맥반사·복수·말초부종은 우심 충만장애 A의 정맥울혈에 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006239
