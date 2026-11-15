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
question_type: investigation
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

32세 남성이 폐렴으로 입원했다. 발열과 왼쪽 흉통이 있고 초음파에서 안전하게 접근할 수 있는 중등도 이상의 새 흉수가 보인다. 항생제를 시작했으며, 흉수가 감염돼 배액이 필요한지 판단하려 한다. 다음 검사는?

## 선택지

A. 폐활량검사
B. 초음파 유도 진단적 흉강천자
C. 기관지유발검사
D. 흉부 X선으로 흉수 감염 여부를 확정한다

## 해설

폐렴에 의미 있는 크기의 흉수가 동반되면 진단적 흉강천자로 pH, 포도당, 세균 배양과 육안 소견 등을 확인한다. 고름이 있거나 흉수 pH가 낮으면 흉관을 통한 배액이 필요할 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 폐렴동반 흉수를 모두 농흉으로 단정하고 천자=완전 배액으로 설명한 오류를 교정.
- https://www.brit-thoracic.org.uk/clinical-resources/guidelines/pleural-disease-full-guideline/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000204
- https://thorax.bmj.com/content/78/Suppl_3/s1
