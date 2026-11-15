---
type: qbank
schema_version: 1
id: medqa-us-test-001215
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:d91a3a940002b2d27d06900b77b670e789763679aeb3bfe7dd973660a4ec02c2
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "급성 세포성 거부반응"
  - "신장이식"
  - "T세포 매개 거부반응"
  - "Acute cellular rejection"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2PkO2PrOyekOy2qSDtj5DroLQgKFBuZXVtb2N5c3RpcyBQbmV1bW9uaWEpLm1k
question_type: investigation
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

신장이식 3주 뒤 혈청 크레아티닌이 며칠째 상승한다. 도플러 초음파에서 혈류와 소변 배액은 정상이고 타크로리무스 최저농도는 목표 범위다. 전신 감염 소견은 없다. 이식신 기능 저하의 원인을 확인해 치료를 결정할 다음 검사는?

## 선택지

A. 이식신 생검
B. 소변 나트륨 분획배설률만 측정
C. 신동맥 조영술을 먼저 시행
D. 혈청 프로락틴

## 해설

뻔한 혈관·폐색·약물 원인 없이 이식신 기능이 악화되면 생검으로 거부반응의 유형과 다른 신실질 손상을 구분해야 치료를 정할 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. 약물 신독성이 C4d 양성이라는 오류 제거, C4d 음성만으로 항체매개 거부를 배제할 수 없음을 명시.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001215
- https://uroweb.org/guidelines/renal-transplantation/chapter/the-guideline
