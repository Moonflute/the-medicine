---
type: qbank
schema_version: 1
id: medqa-us-train-007492
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:16660358ad21c77b1ecef9a6cbf49298e840c20bb28ddc8902403cf018b270e5
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "난소 예비력 감소"
  - "난임"
  - "고령 임신"
  - "클라미디아 병력"
  - "Diminished ovarian reserve"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0xvcmF0YWRpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 여자가 검진을 위해 일차진료의를 찾아왔다. 남편과 7개월 동안 임신을 시도했지만 성공하지 못했다. 이 기간 동안 매일 피임 없이 성관계를 했다. 월경은 28일마다 규칙적이다. 남편에게는 이전 결혼에서 낳은 자녀가 두 명 있다. 성관계 중 경미한 질 건조가 있는 것 외에는 특별한 증상이 없다. 계절성 알레르기로 로라타딘을 복용하고 대학 시절 치료받은 클라미디아 감염 병력이 있다. 신체검사에서 건강해 보이며 심폐, 복부, 골반검사는 정상이다. 이 환자의 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 난소 예비력 감소
B. 폐경
C. 정자생성 결함
D. 난관 반흔

## 해설

42세의 임신 시도 실패에서 연령 관련 난소 예비력 감소(A)가 보기 중 가장 적절하다. 규칙적 월경만으로 예비력이 충분하다고 할 수 없다. 다만 연령만으로 난소 예비력을 측정·확진한 것은 아니며, 남편의 과거 자녀가 현재 정액검사 정상을 보장하지 않고 정상 골반 진찰도 클라미디아 관련 난관 손상을 배제하지 못한다. 난임 평가는 양측 요인을 함께 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 이전 자녀가 있는 남편의 정자와 정상 골반 진찰로 보이지 않는 난관을 정상이라고 단정한 해설을 교정했다.
- https://www.asrm.org/practice-guidance/practice-committee-documents/fertility-evaluation-of-infertile-women-a-committee-opinion-2021/
- https://www.asrm.org/practice-guidance/practice-committee-documents/testing-and-interpreting-measures-of-ovarian-reserve-a-committee-opinion-2020/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007492
