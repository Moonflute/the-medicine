---
type: qbank
schema_version: 1
id: medqa-us-test-000019
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:f46319cde95340d6bf9ceae0cfd0999e0aedfb269cd91cca346a282b4a11b0de
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "급성 심낭염"
  - "심낭 마찰음"
  - "콜히친"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDsi6zrp4nsl7wgKEFjdXRlIFBlcmljYXJkaXRpcykubWQ
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0NvbGNoaWNpbmUubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

29세 남성이 누우면 심해지고 앞으로 숙이면 줄어드는 날카로운 흉통으로 내원했다. 흉골 왼쪽에서 긁는 듯한 심낭 마찰음이 들린다. 고위험 소견이 없는 첫 급성 심낭염으로 판단했다. 약물 금기가 없다면 초기 치료는?

## 선택지

A. 인도메타신 단독
B. 이부프로펜과 콜히친
C. 고용량 프레드니솔론 단독
D. 아세트아미노펜 단독

## 해설


급성 심낭염의 전형적인 체위성 흉통과 심낭 마찰음이다. 금기가 없으면 아스피린 또는 비스테로이드성 항염증제에 콜히친을 더한다. 위장관 보호도 고려한다. 콜히친은 재발 위험을 줄이는 데 도움이 된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 흉통의 자세·호흡 연관성과 심낭 마찰음이 심낭염을 지지하며 B NSAID+colchicine이 적합. 누락 ECG에 없는 소견을 추가하지 않음.
- https://academic.oup.com/eurheartj/article/46/40/3952/8234483

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000019
- 유럽심장학회 2025 심근염·심낭염 진료지침: https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/myocarditis-and-pericarditis
