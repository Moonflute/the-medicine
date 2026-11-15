---
type: qbank
schema_version: 1
id: medqa-us-train-008977
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:aa7c6b89096e5703f5d5e765a2c06308993a5eb8cb36011549a4c19c4db9a31d
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "postrenal acute kidney injury"
  - "urinary retention"
  - "oliguria"
related_disease_slugs:
  - MDUg7Iug7J6lL-y9qe2Mpe2bhCDquInshLEg7L2p7YylIOyGkOyDgSAoUG9zdHJlbmFsIEFjdXRlIEtpZG5leSBJbmp1cnkpLm1k
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "정답 C와 반대로 eGFR을 정답이라 한 해설 및 체중 누락 교정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

58세 남성의 방광 출구 폐색을 도뇨로 해소했다. 이후 3시간 연속 시간당 250~350mL의 소변이 나오고 갈증과 기립성 어지럼이 생겼다. 다음 처치는?

## 선택지

A. 폐색이 해결됐으므로 소변량 측정을 중단한다
B. 퓨로세미드를 추가해 이뇨 속도를 높인다
C. 소변량·체액·전해질을 가깝게 추적하며 필요량을 보충한다
D. 소변량만으로 즉시 혈액투석을 시작한다

## 해설

폐색을 해소한 뒤 지속되는 다뇨는 탈수와 전해질 손실을 일으킬 수 있다. 소변량, 혈압, 신기능과 전해질을 확인하면서 과하지 않게 손실을 보충한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008977
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9846865/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 정답 C와 반대로 eGFR을 정답이라 한 해설 및 체중 누락 교정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
