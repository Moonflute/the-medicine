---
type: qbank
schema_version: 1
id: medqa-us-train-006013
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:80ecf6cb1d97a7d90b2e7b0404ef88443346fad99e3a90232135b3d2bdc0fbd1
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "군발두통"
  - "자율신경 증상"
  - "호너 증후군"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qtbDrsJzrkZDthrUgKENsdXN0ZXIgaGVhZGFjaGUpLm1k
difficulty: complex
answer: A
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

33세 남성이 몇 주씩 하루 두세 번, 60분 정도 계속되는 극심한 오른쪽 눈 주위 통증을 겪는다. 발작 중 같은 쪽 눈물과 콧물이 나고 가만히 누워 있지 못한다. 발작이 없는 달에는 증상이 없다. 가장 가능성 높은 진단은?

## 선택지

A. 군발두통
B. 전조 없는 편두통
C. 삼차신경통
D. 발작성 편측두통

## 해설

극심한 편측 안와 통증이 15–180분 지속되고 같은 쪽 자율신경 증상과 초조가 동반되면 군발두통을 의심한다. 삼차신경통은 대개 수초, 발작성 편측두통은 보통 더 짧고 더 자주 온다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 군발두통 B 유지. 편두통은 양측성이고 구역이 없다는 감별 오류 및 GCA 필수증상 단정 제거.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006013
- https://www.e-hpr.org/journal/view.php?number=949
