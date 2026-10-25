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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

사체 신장이식을 받은 지 10일 된 21세 남성이 오른쪽 하복부 통증과 전신 피로, 소변량 감소로 진료를 받으러 왔다. 이식 후 크레아티닌이 4.1 mg/dL로 상승했고 이식 신장 생검에서 세뇨관염이 보였으며 C4d 염색은 음성이었다. 이 소견의 가장 가능성 높은 원인은?

## 선택지

A. 이식편 내 수혜자 T세포
B. 약물 유발 신독성
C. 사구체 혈관 섬유화
D. 새로 형성된 항HLA 항체

## 해설

이식 10일 후 이식신 압통·크레아티닌 상승과 세뇨관염은 급성 T세포매개 거부반응을 지지하므로 A, 이식편 내 수혜자 T세포가 합당하다. C4d 음성도 이 해석과 양립하지만 C4d 하나만으로 모든 항체매개 거부를 배제하지는 않는다. 약물 신독성이 보통 C4d 양성이라는 설명은 잘못이며 임상적으로는 약물 농도와 전체 조직 소견 등을 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A 유지. 약물 신독성이 C4d 양성이라는 오류 제거, C4d 음성만으로 항체매개 거부를 배제할 수 없음을 명시.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001215
