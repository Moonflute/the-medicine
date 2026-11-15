---
type: qbank
schema_version: 1
id: medqa-us-validation-000808
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:4e47e7d510f9f7e91bec55470b44ec14b027678c1dadc833e996441f3af94557
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "태반조기박리"
  - "태아곤란"
  - "응급 제왕절개"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-2DnOuwmOyhsOq4sOuwleumrCAoUGxhY2VudGFsIEFicnVwdGlvbikubWQ
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
related_drug_slugs:
  - ZHJ1ZzoxMSDsgrDrtoDsnbjqs7zCt-yGjOyVhC9PeHl0b2Npbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 34주 산모에게 갑작스러운 많은 질출혈과 단단하고 아픈 자궁이 나타났다. 소생 중에도 혈압은 88/56 mmHg이고 태아 심박은 분당 80회로 회복되지 않는다. 경부는 2 cm 열려 있다. 가장 적절한 처치는?

## 선택지

A. 태아 폐성숙 스테로이드를 완료한 뒤 분만
B. 소생과 수혈을 계속하면서 응급 제왕절개
C. 자궁수축억제제를 주고 출혈이 멈출 때까지 관찰
D. 경부가 2 cm이므로 태아 상태와 관계없이 유도분만부터 시작

## 해설

중증 태반조기박리가 의심되고 산모가 불안정하며 살아 있는 태아에게 지속 서맥이 있다. 질식분만이 임박하지 않았으므로 소생과 동시에 응급 제왕절개를 준비한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 태아는 빈맥170이며 감속 동반; 모든 박리에 제왕절개라고 일반화하지 않음.
- https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/antepartum-haemorrhage-green-top-guideline-no-63/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000808
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10176440/
