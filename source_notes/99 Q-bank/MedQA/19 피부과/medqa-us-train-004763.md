---
type: qbank
schema_version: 1
id: medqa-us-train-004763
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fae9b4354fa016692390531704ad616344cc63fc08473687a9763aa9872c936a
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "봉와직염"
  - "족부백선"
  - "피부 세균감염"
question_type: prevention
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-uwseyEoCAoVGluZWEpLm1k
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

72세 환자의 한쪽 하퇴 봉와직염이 여러 차례 재발했다. 급성 감염은 호전됐지만 발가락 사이가 하얗게 짓무르고 갈라져 있다. 재발 예방을 위해 함께 할 조치는?

## 선택지

A. 족부백선을 치료하고 발가락 사이 피부를 건조하게 관리한다
B. 재발 예방을 위해 발가락 사이를 밀폐 드레싱한다
C. 발 피부는 그대로 두고 남은 항생제만 반복 복용한다
D. 양쪽 발에 강한 국소 스테로이드를 단독 사용한다

## 해설

발가락 사이 짓무름과 균열은 피부 장벽을 손상시켜 봉와직염의 침입구가 된다. 백선·균열 및 부종 등 수정 가능한 위험을 함께 관리한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 봉와직염의 위험인자 tinea pedis D를 유지하고 이를 발톱무좀과 동일시한 해설을 교정한다.
- 공식/학회 근거: https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004763
- https://pmc.ncbi.nlm.nih.gov/articles/PMC5754343/
