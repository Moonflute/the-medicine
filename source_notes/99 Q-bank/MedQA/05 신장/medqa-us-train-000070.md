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
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-2.5-flash
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

51세 여성이 1일 전부터 시작된 우측 옆구리 통증과 혈뇨로 병원에 내원했습니다. 지난 2주 동안 점진적인 하지 부종과 3kg(7lb)의 체중 증가도 있었습니다. 환자는 10년 전 진단받은 만성 B형 간염 감염력이 있습니다. 그녀는 사업상 캘리포니아에서 뉴욕으로 자주 비행합니다. 피로해 보입니다. 맥박은 98회/분, 호흡은 18회/분, 혈압은 135/75mmHg입니다. 진찰상 눈 주위 부종, 복부 팽만, 하지 2+ 부종이 관찰됩니다. 폐 청진은 깨끗합니다. 복부 CT 스캔에서 복수를 동반한 결절성 간, 풍부한 측부 혈관을 가진 큰 우측 신장, 그리고 우측 신장 정맥 내 충만 결손(filling defect)이 나타납니다. 소변 검사에서는 단백 4+, 포도당 양성, 지방 원주(fatty casts)가 보입니다. 이 환자의 신장 정맥 소견의 가장 가능성 높은 기저 원인은 무엇입니까?

## 선택지

A. 후천성 제VIII인자 결핍
B. 안티트롬빈 III 소실
C. 에스트로겐 분해 장애
D. 항인지질 항체

## 해설


우측 신장 정맥에 혈전이 존재하는데, 이는 항트롬빈 III 결핍으로 인한 고전증을 가장 흔히 일으킨다. 항트롬빈 III는 자연 항응고 인자로, 결핍 시 정맥 혈전 위험이 증가한다. 따라서 가장 가능성 높은 원인은 항트롬빈 III 소실이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000070
