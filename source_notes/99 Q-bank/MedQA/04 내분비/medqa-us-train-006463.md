---
type: qbank
schema_version: 1
id: medqa-us-train-006463
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5efe4166879c94c48d5c65a63c465831635c00f8d5c18f3ade63a2dabef912f1
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "당뇨병성 케톤산증"
  - "전신 칼륨 고갈"
  - "고칼륨혈증"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
  - MDUg7Iug7J6lL-qzoOy5vOulqO2YiOymnSAoSHlwZXJrYWxlbWlhKS5tZA
question_type: mechanism
difficulty: complex
answer: C
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

23세 여성이 오심, 구토 및 복통으로 응급실에 내원했다. 리스프로와 글라진으로 치료 중인 제1형 당뇨병을 10년째 앓고 있다. 최근 권태감과 식욕저하로 3일 전부터 인슐린을 중단했다고 한다. 최근 체중 변화, 불법 약물 사용 또는 성관계는 부인한다. 다른 약물은 복용하지 않으며 담배와 술도 사용하지 않는다. 열은 없고 혈압은 105/70 mm Hg, 맥박은 분당 108회, 호흡수는 분당 25회이다. 기면 상태이며 양쪽 폐 청진은 깨끗하고 복부는 부드럽고 압통이나 팽만이 없다. 검사 결과 나트륨 130 mEq/L, 칼륨 5.6 mEq/L, 염소 91 mEq/L, 중탄산염 12 mEq/L, 포도당 450 mg/dL이다. 다음 중 이 환자에서 가장 가능성 높은 소견은?

## 선택지

A. 저칼슘혈증 징후
B. 정상~높은 인산염 농도
C. 전신 칼륨 고갈
D. 소변 나트륨 소실이 자유수 소실보다 많음

## 해설

인슐린결핍/고삼투 상태에서는 K가 세포밖으로 이동해 혈청K가 높아도 삼투성 이뇨·구토로 전신 K저장량은 고갈되어 C가 맞다. 치료 중 insulin과 수액으로 혈청K가 떨어질 수 있어 반복측정과 적절한 보충이 필요하다. 혈청K상승이 전신K과잉을 뜻하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: DKA의 전신K고갈 C를 부정하고 혈청고K와 혼동한 정답불일치 해설 교정.
- https://diabetesjournals.org/care/article/47/8/1257/156811/Hyperglycemic-Crises-in-Adults-With-Diabetes-A

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006463
