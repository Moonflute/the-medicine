---
type: qbank
schema_version: 1
id: medqa-us-train-006465
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:14ca5d9b13039cce3f3e9dd472b2bb819a45fd87ac561ee11aea6edd6451c877
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "만성 췌장염"
  - "췌장 외분비 기능부전"
  - "지방변"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rp4zshLEg7LeM7J6l7Je8IChDaHJvbmljIFBhbmNyZWF0aXRpcykubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_sp4DrsKnrs4AgKFN0ZWF0b3JyaGVhKS5tZA
question_type: investigation
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

49세 남성이 12년 만에 처음으로 주치의를 방문했다. 한 달 전부터 아무것도 호전시키지 못하는 새로운 설사가 생겼다. 변이 기름지고 변기에 잔여물이 남는다고 한다. 지난 20년 동안 하루 맥주 12~16캔을 마셨으며, 최근 한 달 동안 의도하지 않게 12파운드 체중이 감소했다. 활력징후는 안정적이고 정상이다. 실제 나이보다 들어 보이며 복부 진찰에서 심와부 압통이 있다. 진단을 위한 다음 단계는?

## 선택지

A. D-자일로스 흡수검사
B. 정맥 조영제를 사용한 복부 CT
C. 위 점막 생검을 포함한 상부위장관 내시경
D. 소마토스타틴 수용체 신티그래피

## 해설

장기과음·지방변·체중감소는 만성췌장염과 외분비부전을 의심하게 하며 B의 CT는 구조적 췌장질환 평가의 적절한 초기검사다. CT 또는 MRI를 이용하며 CT가 언제나 가장 민감하다는 뜻은 아니다. EPI의 기능평가는 대변elastase 등 별도로 필요할 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: CT B는 만성췌장염 구조평가로 유지하되 EPI확진/최고민감 검사로 과장한 해설 교정.
- https://doi.org/10.14309/ajg.0000000000000535

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006465
