---
type: qbank
schema_version: 1
id: medqa-us-train-005485
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d9b4abc17d2ed63b1ca74b923963393549ac43e34c3764a8ba1bdb84bf3d9820
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신오조"
  - "포상기태 배제"
  - "임신 중 지속 구토"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-2PrOyDgeq4sO2DnCAoTW9sYXIgUHJlZ25hbmN5KS5tZA
difficulty: complex
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

임신 22주인 25세 초임부가 8주 동안 지속되는 구토와 5.5 kg 체중감소로 응급실에 왔다. 산전 진찰을 받지 않았고 식이조절과 일반의약품이 효과가 없었다. 다음 중 가장 중요하고 우선적인 처치는?

## 선택지

A. 기본 전해질 패널 검사
B. β-hCG 측정과 골반 초음파
C. 비타민 B6 치료 시작
D. 입원 후 정맥 수액 재수화

## 해설

이미 임신으로 알려져 있으나 산전 평가를 받지 않았고 지속 구토·체중감소가 있어 초음파로 주수·태아 수·포상기태 등 원인을 확인하는 B가 출제 의도이다. β-hCG와 영상은 감별 평가의 일부이지 탈수·영양 상태 평가를 대체하지 않는다. 동시에 전해질·수분 상태를 평가하고 필요시 수액·항구토제·티아민을 투여하며 임신오조를 배제한다고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 22주 임신 확인만을 목적으로 한 해설을 다태·포상기태 등 원인 평가와 연결.
- https://www.rcog.org.uk/for-the-public/browse-our-patient-information/pregnancy-sickness-nausea-and-vomiting-of-pregnancy-and-hyperemesis-gravidarum

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005485
