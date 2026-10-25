---
type: qbank
schema_version: 1
id: medqa-us-validation-000204
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:6ab749abdb788d441913e332bbdb46ed4ef6e0e6d69c14ff16b521d541c1e47a
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "폐렴"
  - "복잡성 흉수"
  - "흉강천자"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
question_type: management
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 노숙인 남성이 일주일간 호흡곤란, 왼쪽 흉통, 오한, 노란 가래와 소량의 객혈로 응급실에 왔다. 왼쪽 폐 하부에 타진 둔탁음과 촉각진동 증가, 흉부 X선에서 큰 좌측 엽성 음영과 광범위 흉수가 보였다. 가장 적절한 초기 처치는?

## 선택지

A. 산소 투여
B. 정맥 항생제와 흉강천자
C. 흡입 기관지확장제
D. 상부위장관 내시경

## 해설

폐렴과 큰 흉수가 있어 B의 정맥 항생제와 흉강천자가 적합하다. 천자로 pH, 배양과 육안 소견 등을 확인하여 단순 흉수, 복합성 흉수와 농흉을 구별한다. 흉수가 모두 고름인 것은 아니며 복합 감염성 흉수나 농흉이면 흉관 배액 등 추가 처치가 필요할 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 폐렴동반 흉수를 모두 농흉으로 단정하고 천자=완전 배액으로 설명한 오류를 교정.
- https://www.brit-thoracic.org.uk/clinical-resources/guidelines/pleural-disease-full-guideline/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000204
