---
type: qbank
schema_version: 1
id: medqa-us-train-000406
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:92bde7c971b07a3b6c7b9d5e607154c5001795574c621adcd6faced48aa6c5d8
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "glomerulonephritis"
related_disease_slugs:
  - MDUg7Iug7J6lL-yCrOq1rOyytOyniO2ZmC5tZA
question_type: management
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 여성이 추적 관찰을 위해 내원하였다. 2개월 전 재발성 사구체신염으로 좌측 신장 이식 수술을 받았다. 퇴원 당시 크레아티닌 수치는 0.9 mg/dL였다. 환자는 건강하다고 느낀다. 현재 복용 중인 약물은 타크로리무스(tacrolimus)와 아자티오프린(azathioprine)이다. 맥박은 분당 85회, 혈압은 135/75 mmHg이다. 신체 검진상 좌측 하복부에 잘 치유된 수술 흉터가 관찰된다. 그 외 신체 검진상 이상 소견은 없다. 이 환자에게서 약물 부작용으로 인해 모니터링해야 할 것은 무엇인가?

## 선택지

A. 잇몸 비대(Gingival hyperplasia)
B. 간 괴사
C. 신장 손상
D. 적혈구 증가증(Polycythemia)

## 해설

정답은 C이다. calcineurin 억제제 tacrolimus는 신혈관 수축에 의한 신기능 저하와 만성 구조적 신손상을 유발할 수 있어 creatinine, 전해질 및 약물 노출을 추적한다. 직접 세뇨관 독성 하나로만 설명하지 않는다. 잇몸비대는 cyclosporine에서 더 특징적이며 약제별 부작용을 구별한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: tacrolimus 신독성을 세뇨관 직접 독성 하나로 한정한 설명 보완.
- https://dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=10ceb3bc-11cc-13e4-e063-6394a90acce4

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000406
