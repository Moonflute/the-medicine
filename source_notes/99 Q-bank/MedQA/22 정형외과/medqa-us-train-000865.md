---
type: qbank
schema_version: 1
id: medqa-us-train-000865
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5930c741b75ace0006e32c125f88235427cc187c6fa0970dd8cf62a3907a40be
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "compartment syndrome"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-uzteqwlSDqtaztmo0g7Kad7ZuE6rWwIChBYmRvbWluYWwgQ29tcGFydG1lbnQgU3luZHJvbWUpLm1k
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0xvcmF0YWRpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

환자가 팔 통증을 주소로 응급실에 내원하였다. 환자는 최근 집 청소를 하던 중 사다리에서 떨어져 요골(radius)의 개방성 골절을 겪었다. 수술적 정복술을 시행하였고 환자의 전완부는 석고 붕대(cast)로 고정되었다. 그 이후로 환자는 팔의 통증이 악화되었다. 환자의 과거력상 고혈압과 천식이 있다. 현재 복용 중인 약물은 알부테롤(albuterol), 플루티카손(fluticasone), 로라타딘(loratadine), 리시노프릴(lisinopril)이다. 체온은 99.5°F(37.5°C), 혈압은 150/95 mmHg, 맥박은 90회/분, 호흡수는 19회/분, 실내 공기에서의 산소 포화도는 99%이다. 환자의 석고 붕대를 제거하였다. 신체 검진상 환자의 왼쪽 팔은 촉진 시 압통이 있다. 손목과 손가락의 수동적 움직임 시 심한 통증이 유발된다. 환자의 왼쪽 요골 동맥과 척골 동맥 맥박은 모두 촉지 가능하며 규칙적이다. 전완부는 부드럽고 멍은 보이지 않으나 촉진 시 압통이 있다. 다음 중 가장 적절한 다음 조치는 무엇인가?

## 선택지

A. 이부프로펜(Ibuprofen) 투여 및 안심시키기
B. 방사선 촬영
C. 구획 압력 측정
D. 응급 근막절개술(fasciotomy)

## 해설

골절과 석고 고정 뒤 악화되는 통증, 수동 손목·손가락 운동 시 심한 통증은 급성 구획증후군을 우려하게 한다. 맥박이 촉지되어도 배제되지 않고 초기에는 전형적 모든 소견이 나타나지 않을 수 있다. 임상적으로 ACS가 명백하면 응급 근막절개(D)를 지연하지 않는다. 다만 압박물 제거 후 재평가에도 진단이 불확실하면 신속한 구획압 측정·반복 진찰로 판단하며, 혈압상승 자체는 진단 근거가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 수동신장 심한 통증과 골절·석고 후 악화의 ACS D를 유지하되 정상 맥박·혈압상승·부종부재를 진단요건으로 나열한 오류를 교정한다.
- 공식/학회 근거: https://www.boa.ac.uk/resource/boast-10-pdf.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000865
