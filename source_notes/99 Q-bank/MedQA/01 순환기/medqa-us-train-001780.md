---
type: qbank
schema_version: 1
id: medqa-us-train-001780
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:993eabc2040954c0efe36a177aefa8dff1e13390212f253ce60fb0d065b88c35
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "fibrate"
  - "statin-associated myopathy"
  - "dyslipidemia"
related_disease_slugs:
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
question_type: diagnosis
difficulty: standard
answer: A
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

63세 남성이 심바스타틴을 복용 중이다. 최근 다른 병원에서 중성지방 때문에 젬피브로질을 추가한 뒤 양쪽 허벅지에 통증과 힘 빠짐이 생겼다. 크레아틴키나아제(CK)는 정상 상한의 8배다. 증상의 가장 가능성 높은 원인은?

## 선택지

A. 스타틴–피브레이트 병용으로 인한 근병증
B. 당뇨병성 원위부 대칭 다발신경병증
C. 하지동맥질환에 의한 간헐적 파행
D. 무릎 골관절염에 의한 연관통

## 해설

스타틴과 젬피브로질 병용은 근병증 위험을 높인다. 약 추가 후 발생한 대칭성 근위부 근육통·근력저하와 CK 상승이 단서다. 의심되는 약제를 중단하고 신기능과 근육 손상 정도를 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 횡격근염 오기를 횡문근융해로 교정하고 fibrate의 목표를 LDL치료와 구별.
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c810b16b-32e2-4d0c-aa28-bf1f62110757&version=7

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001780
- https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=6715
