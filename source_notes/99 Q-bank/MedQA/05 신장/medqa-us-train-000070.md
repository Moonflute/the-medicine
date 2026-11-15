---
type: qbank
schema_version: 1
id: medqa-us-train-000070
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:575872cdf04552efe4b595a4fbb7625b38a0b22b8d39a23cea0a1ce5d9c0eee8
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "만성 B형 간염"
  - "신장 정맥 혈전증"
  - "신증후군"
  - "복수"
  - "하지 부종"
  - "단백뇨"
  - "지방 원주"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rp4zshLEgQu2YlSDqsITsl7wgKENocm9uaWMgSGVwYXRpdGlzIEIgKEhCVikpLm1k
  - MDUg7Iug7J6lL-yLoOymne2bhOq1sCAoTmVwaHJvdGljIFN5bmRyb21lKS5tZA
  - MDUg7Iug7J6lL-uLqOuwseuHqC5tZA
  - MDUg7Iug7J6lL-yLoOygleunpSDtmIjsoITspp0gKFJlbmFsIFZlaW4gVGhyb21ib3NpcykubWQ
question_type: mechanism
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-2.5-flash
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

51세 여성이 신증후군으로 치료 중인데 갑작스러운 오른쪽 옆구리 통증과 육안적 혈뇨가 생겼다. 발열과 배뇨통은 없고 조영 CT에서 오른쪽 신정맥 내 충만결손이 확인됐다. 단백뇨와 관련하여 이런 혈전 위험을 높이는 변화는?

## 선택지

A. 응고인자 VIII 결핍
B. 소변으로 항트롬빈 등 항응고 단백이 소실됨
C. 혈청 알부민이 증가함
D. 사구체를 통한 응고인자 소실만 증가함

## 해설

신증후군에서는 항트롬빈 등 항응고 단백이 소변으로 빠져나가고 응고 균형이 변해 정맥혈전 위험이 높아진다. 갑작스러운 옆구리 통증과 혈뇨가 있으면 신정맥 혈전도 고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 신증후군에서 antithrombin의 요중 소실을 명확히 연결하고 고전증 오기를 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000070
- https://kdigo.org/guidelines/gd/
