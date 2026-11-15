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

49세 남성이 오랜 과음력과 반복되는 상복부 통증, 최근 지방변으로 내원했다. 만성 췌장염이 의심되지만 아직 췌장 영상을 검사한 적은 없다. 석회화와 췌관 등 구조 변화를 확인할 첫 영상은?

## 선택지

A. 상부위장관 내시경
B. 췌장 평가에 적합한 복부 CT
C. 대장 CT 가상내시경
D. 소마토스타틴 수용체 스캔

## 해설

만성 췌장염의 구조 평가에는 CT나 MRI가 적절하다. CT는 췌장 석회화, 위축과 췌관 변화를 확인하는 데 도움이 된다. 영상만으로 외분비기능부전의 정도를 판단하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: CT B는 만성췌장염 구조평가로 유지하되 EPI확진/최고민감 검사로 과장한 해설 교정.
- https://doi.org/10.14309/ajg.0000000000000535

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006465
- https://pubmed.ncbi.nlm.nih.gov/32022720/
