---
type: qbank
schema_version: 1
id: medqa-us-train-010142
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:42c0424c321d31629b24f7c523d484be684aae9feb97fdf25db9e8ed93e9783b
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "치료 거부"
  - "환자 자율성"
  - "장 천공"
  - "Peptic ulcer perforation"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC9QVUQg7LKc6rO1IChQZXJmb3JhdGlvbikubWQ
question_type: ethics
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

장 천공으로 응급 수술을 앞둔 63세 환자가 서면 동의 뒤 마음을 바꿨다. 현재 수술 여부와 사망 위험을 직접 설명할 수 있고, 다른 치료 선택지도 이해한 뒤 일관되게 수술을 거부한다. 어떻게 대응할까?

## 선택지

A. 수술 동의 철회를 확인하고 기록하며 가능한 대체 치료와 지지를 계속한다
B. 서명한 동의서가 있으므로 수술을 진행한다
C. 환자의 결정을 보류하고 가족이 동의하면 수술한다
D. 진정제를 투여한 뒤 수술 동의를 다시 받는다

## 해설


충분히 설명을 듣고 의사결정능력이 확인된 환자의 유효한 동의 철회를 존중한다. 거부 이유와 대안을 논의하고 설명 및 의사 확인을 기록하며 가능한 의료는 계속 제공한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010142 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 결정능력이 있는 성인은 위험을 이해한 뒤 기존 동의를 철회할 수 있어 수술 취소 A가 맞다. 의식 상실을 기다려 유효한 거부를 우회해서는 안 된다는 원문·해설을 AMA 윤리기준과 대조했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://code-medical-ethics.ama-assn.org/ethics-opinions/withholding-or-withdrawing-life-sustaining-treatment

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010142
- https://www.law.go.kr/LSW/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1028255763
- https://www.scourt.go.kr/supreme/news/NewsViewAction2.work?gubun=4&searchOption=&searchWord=&seqnum=4557
