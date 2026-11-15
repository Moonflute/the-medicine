---
type: qbank
schema_version: 1
id: medqa-us-train-006460
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4de7a61905bd2a312f2508dc45c960a30e6473fba3c7d8033bc5c4bedba58014
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "복잡성 부 parapneumonic effusion"
  - "농흉"
  - "흉관 배액"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-u2gO2PkOugtOyEsSDtnYnsiJggKFBhcmFwbmV1bW9uaWMgRWZmdXNpb24pLm1k
question_type: management
difficulty: complex
answer: C
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

61세 남성이 폐렴 치료 중 오른쪽 흉통과 발열이 지속된다. 초음파로 안전하게 접근 가능한 흉수가 있어 천자했다. 눈에 보이는 고름은 없지만 흉수 pH는 7.10이다. 항생제와 함께 시행할 다음 처치는?

## 선택지

A. DNase를 흉강에 단독 투여한다
B. 흉수가 없어질 때까지 항생제만 유지한다
C. 영상 유도하에 흉관을 삽입해 배액한다
D. 모든 경우에 흉관보다 수술을 먼저 시행한다

## 해설

폐렴연관 흉수의 pH가 7.20 이하이면 고름이 보이지 않아도 흉막 감염 위험이 높다. 안전하게 접근할 수 있으면 항생제와 함께 흉관으로 배액한다. 배액이 충분하지 않을 때 추가 치료를 검토한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: pH7.1의 복잡성 폐렴연관삼출 C 배액을 명확히 하고 비농성도 농흉이라고 동일시하지 않음.
- https://www.brit-thoracic.org.uk/clinical-resources/guidelines/pleural-disease-full-guideline/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006460
- https://thorax.bmj.com/content/78/Suppl_3/s1
