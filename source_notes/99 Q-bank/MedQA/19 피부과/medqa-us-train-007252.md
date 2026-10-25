---
type: qbank
schema_version: 1
id: medqa-us-train-007252
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:41c2b84b14b8319a83f659dbc98c1cdd6268616c4eb2893157316f2af92f46be
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "지루피부염"
  - "HIV 감염"
  - "기름진 인설"
  - "말라세지아"
question_type: diagnosis
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-yngOujqCDtlLzrtoDsl7wgKFNlYm9ycmhlaWMgRGVybWF0aXRpcykubWQ
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
difficulty: standard
answer: D
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

28세 남자가 3개월 동안 얼굴과 두피에 반복되는 가려운 발진으로 내원했다. 5개월 동안 매주 한 번 새로운 면도크림을 사용해 왔다고 한다. 1년 전 HIV를 진단받아 현재 3제 항레트로바이러스 치료를 받고 있다. 매주 맥주를 여러 묶음씩 마신다. 활력징후는 정상이다. 발진 사진이 제시되어 있다. 두피 모발선 주변에도 비슷한 발진이 보이고 눈꺼풀 가장자리에 기름진 노란색 인설이 있다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 알레르기성 접촉피부염
B. 펠라그라
C. 어루러기
D. 지루피부염

## 해설

두피 모발선·얼굴·눈꺼풀의 기름진 노란 인설과 만성 재발성 소양성 발진은 지루피부염(D)에 합당하다. HIV 감염에서 더 심하게 나타날 수 있다. 본문만으로 진단을 지지하며 실제 사진 소견을 관찰했다고 가정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 지루피부염 D는 기름진 두피·눈꺼풀 인설로 판단 가능하며 제공되지 않은 사진을 확인했다는 표현을 제거한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007252
