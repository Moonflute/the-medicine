---
type: qbank
schema_version: 1
id: medqa-us-train-001483
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:25e7a78f49b8b830d044cda8f4deba802b2a0f332b9888a0b6e239be974b5ea7
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "pemphigus vulgaris"
  - "Nikolsky sign"
  - "mucosal blistering"
  - "Pemphigus vulgaris"
question_type: diagnosis
related_disease_slugs: []
difficulty: complex
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

50세 여성이 3일 전 발생한 팔뚝 물집으로 내원했다. 지난 1주일 동안 왼쪽 뺨을 씹을 때와 성교 중 통증도 있었다. 지난 6개월 동안 아픈 적은 없다. 몇 달 전부터 주말마다 아들과 숲에서 하이킹을 시작했지만 독성 덩굴은 피했다고 한다. 고혈압과 골관절염 병력이 있다. 최근 캅토프릴을 시작했고 2주 전 멜록시캄을 중단했다. 가족력에 악성빈혈과 그레이브스병이 있다. 활력징후는 정상이다. 팔뚝 손바닥쪽에 여러 개의 이완성 물집과 협측·치은·외음부 점막 궤양이 보인다. 가볍게 문지르면 팔뚝 표피가 분리된다. 물집의 체표면적 침범은 10%로 추정된다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 편평태선
B. 포진상 피부염
C. 수포성 유사천포창
D. 심상성 천포창

## 해설

구강·외음부 점막 미란에 이완성 수포와 양성 Nikolsky 징후가 동반되어 심상성 천포창(D)을 지지한다. 수포성 유사천포창은 보통 팽팽한 수포와 상대적 점막 보존을 보인다. 본문은 침범 면적을 10%로 제시하며, 이 면적 자체는 심상성 천포창을 정의하는 기준이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 점막 침범·이완성 수포의 PV D는 맞지만 본문 10%를 10% 미만으로 바꾸고 면적을 PV 진단 기준으로 사용한 오류를 수정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001483
