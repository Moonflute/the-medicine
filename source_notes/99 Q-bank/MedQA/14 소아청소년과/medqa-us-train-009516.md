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
question_type: prevention
related_disease_slugs: []
difficulty: standard
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 6일 된 여아가 3일간 황달, 구토, 수유곤란으로 내원했다. 지난 2일 동안 설사도 있었다. 임신 38주에 합병증 없이 태어났고 기면 상태이다. 피부와 결막에 황달, 양측 백내장, 간비대가 있으며 비장비대는 없다. 사지 근긴장도가 감소하고 혈당은 37 mg/dL이다. 이 질환의 장기 합병증을 예방하기 위한 가장 적절한 권고는 무엇인가?

## 선택지

A. 자주 포도당 수유
B. 우유 수유 중단
C. 티아민 치료
D. 레보티록신 치료

## 해설

황달·간비대·백내장·저혈당은 고전적 갈락토스혈증을 의심한다. 즉시 모유·일반 우유분유 등 lactose/galactose 공급을 중단하고 적절한 대체 영양으로 전환(B)하며 대사 전문팀과 저혈당·감염을 평가한다. 식이는 급성 독성을 줄이지만 모든 장기 합병증을 막지는 못한다. 미량 갈락토스가 든 모든 비유제품까지 무조건 배제하지 않으며, 원문에 포도당 수유가 이미 시작됐다는 정보도 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 포도당 수유가 이미 시행됐다는 창작과 모든 갈락토스 완전 제거·장기합병증 완전 예방 단정을 교정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC5306419/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009516
