---
type: qbank
schema_version: 1
id: medqa-us-train-008449
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:679e77d1aad6e456942aca8eec45372b6c7a5eba7f43ca76ff02cbbd30d9d8d0
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "community-acquired pneumonia"
  - "outpatient pneumonia treatment"
  - "doxycycline"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOugtC5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Y-Q66C0IChQbmV1bW9uaWEpLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmZXBpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 여성이 발열과 기침으로 내원했고 흉부 X선에 오른쪽 아래 폐의 새 침윤이 있다. 혈압, 의식과 산소포화도는 정상이며 호흡수는 분당 20회다. 임신 중이 아니고 기저질환이나 약물 알레르기가 없으며 경구 복용과 추적진료가 가능하다. 국내 지침에 맞는 초기 치료는?

## 선택지

A. 아목시실린 경구 투여 후 외래 추적
B. 아지트로마이신 단독으로 입원 치료
C. 세프트리악손과 반코마이신으로 중환자실 치료
D. 세페핌과 레보플록사신 정맥 병용

## 해설


중증 소견이나 기저질환이 없고 경구 복용과 추적이 가능하면 외래 치료가 적절하다. 질병관리청 2026 지침은 이 경우 경구 아목시실린 또는 독시사이클린을 일차 치료로 제시한다. 제시된 보기에서는 아목시실린이 맞다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 기저 중증질환·저산소증 없이 안정적인 외래 CAP에서 경구 독시사이클린 A가 적합하며 과거 4개월 전 항생제만으로 입원할 이유는 없음.
- https://www.idsociety.org/practice-guideline/community-acquired-pneumonia-cap-in-adults

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008449
- https://www.kdca.go.kr/bbs/kdca/263/307008/download.do
