---
type: qbank
schema_version: 1
id: medqa-us-train-000431
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a6dcd3882c356172e508186d973330fe0811622866b12157476166a051cdaa89
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "Chondrosarcoma"
  - "Aneurysmal bone cyst"
  - "Osteoclastoma"
  - "Ewing sarcoma"
question_type: diagnosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

24세 남성이 2개월간 지속된 왼쪽 무릎의 통증과 부종 악화로 내원하였다. 통증 때문에 여러 번 잠에서 깼다. 이부프로펜(ibuprofen)을 복용해 보았으나 증상 완화는 없었다. 심각한 질환에 대한 개인력이나 가족력은 없다. 활력 징후는 정상 범위 내에 있다. 진찰 결과, 왼쪽 무릎은 경미하게 부어 있고 압통이 있으며, 통증으로 인해 관절 가동 범위가 제한된다. 왼쪽 무릎의 X-선 사진이 제시되었다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 연골육종(Chondrosarcoma)
B. 동맥류성 골낭종(Aneurysmal bone cyst)
C. 파골세포종(Osteoclastoma)
D. 유잉 육종(Ewing sarcoma)

## 해설


X‑ray에서 ‘뼈가 구멍 뚫린 듯한’ 병변과 주변 뼈의 얇아짐은 골소골증(osteoclastoma, 골다공성 종양)과 일치한다. 따라서 가장 가능성 높은 진단은 파골세포종이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000431
