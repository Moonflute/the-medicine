---
type: qbank
schema_version: 1
id: medqa-us-train-001669
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:370b47ea9a550aa480fc92035594a1a3770d1feba57dab4e544570009c19d976
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "breech presentation"
  - "preterm pregnancy"
  - "expectant management"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-uRlOychCAoQnJlZWNoIFByZXNlbnRhdGlvbikubWQ
difficulty: standard
answer: C
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

임신 34주인 35세 여성(G4P3)이 산전진료에 내원했다. 건강하고 자궁수축이나 질액 누출은 없다. 셋째 아이는 임신 35주에 자연분만했고 다른 두 임신·분만은 합병증이 없었다. 활력징후는 정상이고 복부는 압통이 없으며 수축도 없다. 자궁은 임신 34주 크기이고 초음파에서 태아는 둔위이며 심박수는 148회/분이다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 제왕절개
B. 외부 두부회전
C. 관찰
D. 페니실린 정맥주사

## 해설

34주에는 태아가 자발적으로 두위로 바뀔 여지가 있어 증상 없는 둔위만으로 즉시 제왕절개나 외회전을 시행하지 않고 관찰(C)한다. 36~37주 무렵에도 둔위가 지속되면 외회전과 분만 방법을 논의한다. 본문에 양수량은 제시되지 않았고 35주 자연조산 병력이 있어 ‘조산 위험이 없다’고 단정해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 과거조산에도 조산위험없다/양수정상창작 삭제. 34주둔위 C관찰,36~37주재평가.
- https://www.rcog.org.uk/for-the-public/browse-our-patient-information/breech-baby-at-the-end-of-pregnancy

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001669
