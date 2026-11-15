---
type: qbank
schema_version: 1
id: medqa-us-train-003015
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8b3878d54fefe7a4dccf20918dd1ab73b51afc46941cdd0434099e0fcc8056b4
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "poststreptococcal glomerulonephritis"
  - "nephritic syndrome"
  - "RBC casts"
  - "latent period after pharyngitis"
related_disease_slugs:
  - MDUg7Iug7J6lL-yXsOyHhOyDgeq1rOq3oCDqsJDsl7wg7ZuEIOyCrOq1rOyytOyLoOyXvCAoUFNHTikgKFBvc3QtU3RyZXB0b2NvY2NhbCBHbG9tZXJ1bG9uZXBocml0aXMpLm1k
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

11세 여아가 인두염 2주 뒤 갈색 소변과 부종으로 내원했다. C3가 낮고 항스트렙톨리신 O가 상승했다. 소변량은 줄고 혈압이 높지만 고칼륨혈증이나 응급 투석 적응증은 없고 폐부종도 없다. 부종과 혈압에 대한 초기 치료는?

## 선택지

A. 고용량 정맥 메틸프레드니솔론부터 시작한다
B. 수액을 다량 공급하고 혈압을 관찰한다
C. 나트륨·수분을 제한하고 체액 과다에 루프 이뇨제를 사용한다
D. 예방 목적으로 혈장교환을 시행한다

## 해설


전형적인 연쇄상구균 감염 후 사구체신염은 체액 과다와 혈압을 조절하는 지지치료가 중심이다. 잔존 연쇄상구균 감염 치료와 신기능·전해질 추적도 함께한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 인두염 약2주 뒤 고혈압·RBC원주·Cr상승은 PSGN C; IgA 등과 잠복기로 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003015
- https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/post-streptococcal-glomerulonephritis.html
