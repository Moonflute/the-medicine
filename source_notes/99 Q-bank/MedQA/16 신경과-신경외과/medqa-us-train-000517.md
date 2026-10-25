---
type: qbank
schema_version: 1
id: medqa-us-train-000517
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:62623f992dc921f1c082f83e51f31564e6456cac0c810eadba7b8e9d31d53d4a
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "type 2 diabetes mellitus"
  - "essential hypertension"
  - "ptosis"
  - "third nerve palsy"
question_type: diagnosis
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 남성이 복시와 두통을 주소로 일차 진료 의사를 방문하였다. 환자는 이 증상들이 어젯밤 갑자기 발생하였으며 호전되지 않았다고 말한다. 환자는 32년간 제2형 당뇨병을 앓아왔으며 19년간 본태성 고혈압으로 메트포르민(metformin)과 리시노프릴(lisinopril)을 복용 중이다. 마지막으로 기록된 당화혈색소(A1c)는 9.4%였다. 지난 35년간 하루 10~15개비의 담배를 피워왔다. 가족력상 어머니가 만성 신장 질환을 앓았다. 활력 징후는 체온 36.9°C, 혈압 137/82 mm Hg, 맥박 72회/분이다. 신체 검진상 우측 눈의 안검하수가 관찰되며 눈은 아래쪽과 바깥쪽으로 편위되어 있다. 양쪽 눈의 시력은 영향을 받지 않았다. 이 환자에서 가장 가능성이 높은 손상된 뇌신경은 무엇인가?

## 선택지

A. 활차신경(Trochlear nerve)
B. 동안신경(Oculomotor nerve)
C. 외전신경(Abducens nerve)
D. 안면신경(Facial nerve)

## 해설

안검하수와 안구의 아래·바깥 편위는 동안신경(제3뇌신경) 마비에 해당하므로 B이다. 당뇨·고혈압성 미세혈관허혈이 원인일 수 있지만 후교통동맥류 등 압박성 원인도 감별해야 한다. 이 문항은 동공 반응을 제시하지 않았고 갑작스러운 두통을 동반하므로 시력이 보존된다는 이유로 동맥류를 배제해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 동안신경 B는 맞지만 당뇨 미세혈관병 및 동맥류와 무관하다는 모순·위험한 배제 문구를 제거한다.
- 공식/학회 근거: https://www.aao.org/eyenet/article/acquired-isolated-third-nerve-palsy

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000517
