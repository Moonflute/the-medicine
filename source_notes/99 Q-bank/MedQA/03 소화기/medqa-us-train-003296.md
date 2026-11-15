---
type: qbank
schema_version: 1
id: medqa-us-train-003296
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:61ea9df403f82f93027de83c067dc27cb5c47739918a5b90dd40371980e6f143
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Mallory-Weiss tear"
  - "forceful vomiting"
  - "upper gastrointestinal bleeding"
  - "alcohol binge"
related_disease_slugs:
  - MTEg7Jm46rO8L-ychOyepeq0gCDstpztmIggKEdhc3Ryb2ludGVzdGluYWwgQmxlZWRpbmcpLm1k
question_type: management
difficulty: standard
answer: B
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

19세 남성이 수차례 힘주어 구토한 뒤 토혈했다. 소생 후 상부 내시경에서 위식도 접합부의 세로 점막 열상에서 출혈이 계속 보인다. 지금 적절한 처치는?

## 선택지

A. 열상을 관찰만 하고 내시경을 종료
B. 내시경 클립 지혈
C. 출혈 예방 목적의 식도 전체 점막 절제
D. 식도 정맥류 결찰 계획만 세우고 퇴원

## 해설

말로리–바이스 열상은 저절로 멎는 경우가 많지만 내시경에서 출혈이 계속 보이면 클립 등으로 지혈한다. 출혈이 멎은 얕은 열상을 보존적으로 관리하는 경우와 다르다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원문 longitudinal tear를 해설이 가로 방향이라고 반대로 표현. Mallory-Weiss B 유지.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003296
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12285778/
