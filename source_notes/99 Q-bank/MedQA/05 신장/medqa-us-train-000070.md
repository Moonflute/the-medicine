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

51세 여성이 1일 전부터 시작된 우측 옆구리 통증과 혈뇨로 병원에 내원했습니다. 지난 2주 동안 점진적인 하지 부종과 3kg(7lb)의 체중 증가도 있었습니다. 환자는 10년 전 진단받은 만성 B형 간염 감염력이 있습니다. 그녀는 사업상 캘리포니아에서 뉴욕으로 자주 비행합니다. 피로해 보입니다. 맥박은 98회/분, 호흡은 18회/분, 혈압은 135/75mmHg입니다. 진찰상 눈 주위 부종, 복부 팽만, 하지 2+ 부종이 관찰됩니다. 폐 청진은 깨끗합니다. 복부 CT 스캔에서 복수를 동반한 결절성 간, 풍부한 측부 혈관을 가진 큰 우측 신장, 그리고 우측 신장 정맥 내 충만 결손(filling defect)이 나타납니다. 소변 검사에서는 단백 4+, 포도당 양성, 지방 원주(fatty casts)가 보입니다. 이 환자의 신장 정맥 소견의 가장 가능성 높은 기저 원인은 무엇입니까?

## 선택지

A. 후천성 제VIII인자 결핍
B. 안티트롬빈 III 소실
C. 에스트로겐 분해 장애
D. 항인지질 항체

## 해설

정답은 B이다. 심한 단백뇨·지방원주·부종은 신증후군을 시사하며 소변으로 antithrombin 등 항응고 단백이 소실되어 과응고 상태가 될 수 있다. 신정맥 충만 결손과 옆구리 통증·혈뇨는 신정맥 혈전증에 합당하다. 간질환도 응고 균형에 영향을 주지만 이 문항은 신증후군의 항응고 단백 소실을 묻는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 신증후군에서 antithrombin의 요중 소실을 명확히 연결하고 고전증 오기를 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000070
