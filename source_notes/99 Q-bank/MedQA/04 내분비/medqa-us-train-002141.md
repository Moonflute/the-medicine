---
type: qbank
schema_version: 1
id: medqa-us-train-002141
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e428f187c18b3f3f2e23dc69d3e5a00ba93f552347178cdc53a806247a6aba2f
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "diabetic ketoacidosis"
  - "hypokalemia risk"
  - "potassium replacement"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
  - MDUg7Iug7J6lL-yggOy5vOulqO2YiOymnSAoSHlwb2thbGVtaWEpLm1k
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvUG90YXNzaXVtQ2hsb3JpZGUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

병력을 알 수 없는 19세 남성이 지하철 승강장에서 쓰러진 채 발견되어 구급차로 병원에 이송되었다. 이송 중 두 차례 구토했다. 응급실에서 혼란스러워하며 복통을 호소한다. 체온 37.0°C, 맥박 94회/분, 혈압 110/80 mmHg, 호흡 24회/분, 실온 공기에서 산소포화도 99%이다. 점막이 건조하고 빠르고 깊은 호흡을 한다. 검사에서 나트륨 130 mEq/L, 칼륨 4.3 mEq/L, 염소 102 mEq/L, 중탄산염 12 mEq/L, BUN 15 mg/dL, 포도당 362 mg/dL, 크레아티닌 1.2 mg/dL, 소변 케톤 양성이다. 등장성 생리식염수 일시주입과 정맥 인슐린 지속주입을 시작했다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 피하 인슐린 글라르진
B. 정맥 중탄산나트륨
C. 정맥 염화칼륨
D. 정맥 5% 포도당과 1/2 등장성 생리식염수

## 해설


DKA 치료 시 인슐린 투여로 혈청 K⁺가 세포내로 이동해 저칼륨혈증이 발생할 위험이 있다. 현재 혈청 K⁺가 정상 범위이므로, 저칼륨 예방 차원에서 정맥 KCl 보충이 필요하다. 따라서 정맥 염화칼륨이 정답이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: DKA에서 수액·인슐린 시작 후 K 4.3이면 KCl 보충 C; 정상 혈중 K도 총체내 결핍을 배제하지 않음.
- https://diabetesjournals.org/care/article/47/8/1257/156811/Hyperglycemic-Crises-in-Adults-With-Diabetes-A

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002141
