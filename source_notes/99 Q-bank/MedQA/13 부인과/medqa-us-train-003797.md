---
type: qbank
schema_version: 1
id: medqa-us-train-003797
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6d28c6e37ad9287231e9640d19ff14fd3fc69833575fc482c320a051eca91435
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "placenta previa"
  - "painless third-trimester bleeding"
  - "prior cesarean"
  - "elective cesarean delivery"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yghOy5mO2DnOuwmCAoUGxhY2VudGEgUHJldmlhKS5tZA
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

임신 35주인 38세 G2P1 여성이 통증 없이 발생했다가 멎은 질 출혈로 내원했다. 이전에 둔위로 제왕절개를 받았고, 질식 초음파에서 태반이 내경을 덮고 있었다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 응급 제왕절개
B. 옥시토신으로 분만 유도
C. 양손 골반검사
D. 계획된 제왕절개 예약

## 해설

태반이 자궁경부 내경을 덮는 전치태반이므로 질식분만을 계획하지 않는다. 현재 출혈이 멎고 산모·태아가 안정되어 계획 제왕절개 D가 적절하다. 재출혈과 태아 상태에 따라 앞당길 수 있고, 이전 제왕절개 병력이 있어 유착태반 평가도 필요하다. 손가락 내진은 피한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 안정된 35주 전치태반의 계획 제왕절개 D 유지. 적응증은 태반의 내경 피복이며 이전 제왕절개 자체가 아니다.
- https://www.acog.org/clinical/clinical-guidance/obstetric-care-consensus/articles/2018/12/placenta-accreta-spectrum
- https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/antepartum-haemorrhage-green-top-guideline-no-63/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003797
