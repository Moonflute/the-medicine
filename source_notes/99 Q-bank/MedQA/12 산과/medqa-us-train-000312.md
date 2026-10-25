---
type: qbank
schema_version: 1
id: medqa-us-train-000312
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4fdbf07bb55967036555ae3ea763b7d72b0122e497b804bc47e6de6e06cbfc84
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "retained placenta"
  - "postpartum hemorrhage"
question_type: prognosis
related_disease_slugs:
  - MTIg7IKw6rO8L-yelOulmO2DnOuwmCAoUmV0YWluZWQgUGxhY2VudGEpLm1k
  - MTIg7IKw6rO8L-yekOq2geydtOyZhOymnSAoVXRlcmluZSBBdG9ueSkubWQ
  - MTIg7IKw6rO8L-yCsO2bhOy2nO2YiC5tZA
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
  - ZHJ1ZzoxMSDsgrDrtoDsnbjqs7zCt-yGjOyVhC9PeHl0b2Npbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 35주인 22세 여성(G4P2)이 "양수가 터졌다"고 느껴 병원에 내원하였다. 산전 경과는 특이사항이 없으나, 산과적 과거력으로 세 번째 임신 후 태반 잔류로 인한 산후 출혈이 있었다. 환자는 옥시토신(oxytocin)을 이용한 분만 촉진을 시행받았고, 4시간 이내에 1분 및 5분 아프가 점수(Apgar score)가 각각 8점과 9점인 남아를 출산하였다. 3분 후 태반이 질을 통해 배출되었으나, 태반에 부착된 매끄러운 덩어리가 계속해서 뒤따라 나왔다. 환자의 체온은 98.6°F(37°C), 혈압은 110/70 mmHg, 맥박은 90회/분, 호흡수는 20회/분이다. 적절한 처치가 없을 경우 가장 가능성이 높은 합병증은 무엇인가?

## 선택지

A. 심부전
B. 출혈성 쇼크
C. 고혈압
D. 고체온

## 해설

태반에 붙은 매끄러운 종괴가 질 밖으로 나오는 소견은 자궁내번을 시사한다. 치료하지 않으면 심한 출혈과 쇼크(B)가 발생할 수 있다. 응급 소생과 신속한 수동 복원이 필요하며 자궁수축제는 복원 후 사용한다. 단순 잔류태반으로 보고 먼저 수축제를 주는 설명은 적절하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 잔류태반과 혼동한 해설 및 복원 전 자궁수축제 권고 삭제.
- https://www.mkuh.nhs.uk/wp-content/uploads/2022/10/Uterine-Inversion-Guideline.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000312
