---
type: qbank
schema_version: 1
id: medqa-us-train-009707
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:835b1c58b3d0728cbe7dd7f6a9e3437bb8aa8c3cf01b0c5a4d063219aa7baa7f
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "decreased fetal movement"
  - "태동 감소"
  - "biophysical profile"
  - "Fetal distress"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoOyEsSDri7nrh6jrs5EgKEdlc3RhdGlvbmFsIERpYWJldGVzIE1lbGxpdHVzKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzoxMSDsgrDrtoDsnbjqs7zCt-yGjOyVhC9PeHl0b2Npbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 33주 산모가 평소보다 태동이 줄었다고 한다. 태아 기저 심박은 유지되지만 40분 비수축검사에서도 적절한 가속이 나타나지 않았다. 즉시 분만이 필요한 지속 감속은 없다. 양수량과 태아 상태를 추가로 평가할 검사는?

## 선택지

A. 태동 횟수에 관계없이 바로 유도분만
B. 임신성 당뇨 선별검사
C. 검사 없이 다음 주까지 기다림
D. 초음파를 포함한 태아 생물리학적 계수 평가

## 해설

태동 감소에서 비수축검사가 충분히 안심되지 않으면 초음파로 양수와 태아 호흡운동·움직임·근긴장 등을 추가 평가한다. 태동 횟수 하나로 분만 여부를 정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: ‘비생물학적 프로파일’ 등 잘못된 검사명·구성 수정.
- https://www.acog.org/womens-health/faqs/special-tests-for-monitoring-fetal-well-being

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009707
- https://obgyn.onlinelibrary.wiley.com/doi/10.1111/1471-0528.70198
