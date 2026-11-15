---
type: qbank
schema_version: 1
id: medqa-us-train-009301
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bdfc8ecadd747407a40ffbdf036929ace5aee829e24be4245791f5bfb0e2409b
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "cervicitis"
  - "자궁경부염"
  - "Chlamydia trachomatis"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geqyveu2gOyXvCAoQ2VydmljaXRpcykubWQ
difficulty: standard
answer: A
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

임신 14주 산모에게 점액고름성 자궁경부염이 있다. 질 검체 핵산증폭검사에서 클라미디아 양성, 임균 음성이다. 약물 알레르기는 없다. 우선 치료는?

## 선택지

A. 아지스로마이신 경구 1회
B. 독시사이클린 경구 7일
C. 세프트리악손 근육주사 1회
D. 메트로니다졸 경구 7일

## 해설

임신 중 단순 클라미디아 감염에는 아지스로마이신 1 g을 한 번 복용하는 것이 우선이다. 파트너도 평가·치료하며, 임신 중에는 치료 약 4주 뒤 검사로 완치를 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 점액농성 자궁경부염의 GC/CT NAAT D 유지. 클라미디아 확정으로 단정한 해설 수정.
- https://www.cdc.gov/std/treatment-guidelines/urethritis-and-cervicitis.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009301
- https://www.icurology.org/DOIx.php?id=10.4111%2Ficu.20230322
