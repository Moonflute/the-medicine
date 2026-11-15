---
type: qbank
schema_version: 1
id: medqa-us-train-005387
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:36ba69555df674f23bbaed71918a679f7f68134a643cecca27858a1a747579db
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "중증 대동맥판막 협착"
  - "대장 혈관이형성증"
  - "Heyde 증후군"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpe2MkOuniSDtmJHssKkgKEFvcnRpYyBTdGVub3NpcykubWQ
question_type: mechanism
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 남성에게 중증 대동맥판 협착이 있다. 수개월 동안 소화관 출혈이 반복되고 대장내시경에서 혈관이형성 병변을 확인했다. 이 두 소견의 연관성을 설명하는 기전은?

## 선택지

A. 항혈소판제와 무관한 혈소판 수의 지속적 증가
B. 심실 수축력 증가에 의한 문맥 고혈압
C. 높은 전단력에 의한 고분자 폰빌레브란트인자 감소
D. 폐동맥압 상승에 의한 대장정맥 폐쇄

## 해설

협착판을 지나는 높은 전단력으로 고분자 폰빌레브란트인자가 감소하면 혈소판의 부착 기능이 떨어지고 소화관 혈관이형성에서 출혈하기 쉬워진다. 이 연관을 헤이드 증후군이라고 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: AS-혈관이형성 C를 단순 장 저혈류 대신 후천성 vWF 기전으로 명료화.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005387
