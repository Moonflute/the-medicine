---
type: qbank
schema_version: 1
id: medqa-us-train-000465
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:23ca6671fba94be956eb5d6769383d3da2eec5396405d4ea7d86a9efaff6166a
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "lobular carcinoma in situ"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yGjOyXvSDsg4HtlLzrgrTslZQgKExvYnVsYXIgQ2FyY2lub21hIEluIFNpdHUpLm1k
difficulty: standard
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
  - ZHJ1ZzoxMCDsooXslpEvVGFtb3hpZmVuLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 여성의 유방 중심바늘생검에서 고전형 상피내 소엽암(LCIS)이 우연히 발견됐다. 영상과 병리 결과가 일치하고 절제가 필요한 다른 병변은 없다. 적절한 관리는?

## 선택지

A. 즉시 유방절제술과 액와림프절 곽청
B. 정기 영상 추적과 유방암 위험 감소 상담
C. 병변 부위 방사선치료만 시행
D. 침윤암과 같은 보조 항암요법

## 해설

영상·병리가 일치하는 고전형 LCIS는 자동으로 절제하지 않고 향후 양측 유방암 위험을 평가해 감시·예방을 상담한다. 다형성·광범위형이나 영상–병리 불일치는 절제를 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 고전형 LCIS의 영상병리 일치와 비고전형/불일치 예외 명시.
- https://jamanetwork.com/journals/jamasurgery/fullarticle/2853197?guestAccessKey=69c0eca9-a7dc-4719-a7db-9f5f9d121b63

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000465
- https://pubmed.ncbi.nlm.nih.gov/42616513/
