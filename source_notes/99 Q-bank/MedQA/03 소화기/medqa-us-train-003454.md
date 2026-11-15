---
type: qbank
schema_version: 1
id: medqa-us-train-003454
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:867351152b25280c78a8b36abc2b618d046438218a023e277d6c7e4b8cac7f4b
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Barrett esophagus"
  - "intestinal metaplasia"
  - "low-grade dysplasia"
  - "endoscopic therapy"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkCDshKDslZQgKEFkZW5vY2FyY2lub21hKS5tZA
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

오래된 역류 증상이 있는 58세 남성의 내시경에서 위식도 접합부 위로 2 cm 길이의 바렛 식도가 보인다. 눈에 띄는 결절은 없고 첫 생검에서 저도 이형성이 보고됐다. 내시경 치료 여부를 정하기 전에 할 일은?

## 선택지

A. 18개월 뒤 내시경만 반복
B. 소화기 전문 병리의에게 조직 판독 재검토 의뢰
C. 재검토 없이 바렛 식도 전 구간 절제
D. 헬리코박터 제균요법 시행

## 해설

바렛 식도의 저도 이형성은 염증성 변화와 혼동되기 쉬워 전문 병리의 검토로 확인한다. 확인되면 내시경 제거 치료와 면밀한 추적의 장단점을 논의한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Barrett LGD의 내시경치료 B를 모든 평탄병변 EMR/ESD로 오설명. 전문가병리확인 후 visible lesion 절제/나머지 ablation 구분.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11345740/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003454
- https://pubmed.ncbi.nlm.nih.gov/41125322/
