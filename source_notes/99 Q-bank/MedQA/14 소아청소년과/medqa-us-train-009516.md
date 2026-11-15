---
type: qbank
schema_version: 1
id: medqa-us-train-009516
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c991eba0029780b816355d358921a262bc5740174539624517625d53d7d85fd1
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "classic galactosemia"
  - "고전적 갈락토스혈증"
  - "galactose-1-phosphate uridyltransferase deficiency"
  - "galactosemia"
question_type: management
related_disease_slugs: []
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 6일 영아가 모유수유를 시작한 뒤 구토와 황달이 생겼다. 간비대, 양측 백내장과 저혈당이 있다. 저혈당과 감염을 응급 평가·치료하면서, 고전적 갈락토스혈증이 의심될 때 수유를 어떻게 바꿀까?

## 선택지

A. 유전검사가 나올 때까지 모유를 그대로 준다
B. 일반 분유를 물로 희석해 먹인다
C. 유당·갈락토스가 들어 있는 수유를 중단하고 대사 전문팀과 적합한 대체 분유를 시작한다
D. 수유량을 반으로 줄이고 같은 모유를 더 자주 먹인다

## 해설

고전적 갈락토스혈증이 의심되면 확진을 기다리지 않고 유당·갈락토스 공급을 줄인다. 황달과 저혈당, 간기능 이상이나 패혈증은 별도로 신속히 평가하고 치료한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 포도당 수유가 이미 시행됐다는 창작과 모든 갈락토스 완전 제거·장기합병증 완전 예방 단정을 교정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC5306419/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009516
- https://www.acmg.net/wp-content/uploads/2026/09/Classical-Galactosemia-ACT-Sheet-2026.pdf
