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
question_type: management
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

58세 남성이 12년간 반복된 속쓰림으로 내원했다. 최근 1년간 밤에 악화되는 기침도 있었다. 상부 내시경에서 위식도접합부에서 2 cm 떨어진 원주상 상피가 보였고, 생검에서 저등급 이형성과 장상피화생이 확인되었다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 18개월 후 내시경을 반복한다
B. 내시경적 치료
C. 오메프라졸, 클라리스로마이신, 메트로니다졸 치료
D. 외부 방사선 치료

## 해설

Barrett 식도에서 저등급 이형성이 있으면 전문가 병리 재검토로 확진하고 내시경적 제균치료 B와 적절한 감시의 위험·편익을 논의한다. 치료를 택할 경우 보이는 병변은 먼저 내시경 절제하고 남은 평탄 Barrett 점막은 ablation을 적용할 수 있다. 모든 Barrett 구간을 EMR/ESD로 절제한다는 기존 설명은 잘못이다. 18개월 뒤 단순 재검은 확인된 LGD의 적절한 초기 감시계획이 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Barrett LGD의 내시경치료 B를 모든 평탄병변 EMR/ESD로 오설명. 전문가병리확인 후 visible lesion 절제/나머지 ablation 구분.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11345740/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003454
