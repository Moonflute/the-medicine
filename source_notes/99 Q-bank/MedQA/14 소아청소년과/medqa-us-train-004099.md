---
type: qbank
schema_version: 1
id: medqa-us-train-004099
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d02918859171dc2bdea9f2f0c0c3c0bace3c88cf3d4a6f52251fe9828bf2cd7b
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "크리글러-나자르 증후군 1형"
  - "중증 비포합 고빌리루빈혈증"
  - "핵황달"
question_type: 임상증례 객관식
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_tgazrpqzquIDrn6wt64KY7J6Q66W0IOymne2bhOq1sCAoQ3JpZ2xlci1OYWpqYXIgU3luZHJvbWUpLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIO2ZqeuLrCAoTmVvbmF0YWwgSmF1bmRpY2UpLm1k
difficulty: complex
answer: "B"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
original_answer: C
answer_change_reason: "36주 생후 5일 TSB 33.9 mg/dL(비포합 33+포합 0.9)와 기면·근긴장저하로 교환수혈 역치를 넘는 응급 상황이나 해당 선택지가 누락됨. 원정답 간이식 C는 우선 처치 오류이고 B 광선치료는 즉시 병행하지만 완전한 확정 단일정답이 아니므로 보류. 현재 교정 해설·원정답 기록 보존."
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 중증 신생아 고빌리루빈혈증에 누락된 교환수혈 처치를 추가."
curation_status: "revised"
curation_reason: "중증 신생아 고빌리루빈혈증에 누락된 교환수혈 처치를 추가."
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

생후 5일 된 신생아가 며칠간 지속된 피부 황달로 부모와 함께 소아과에 왔다. 부모는 아기가 하루 종일 조용하고 소리에도 반응하지 않는다고 한다. 주산기 병력에서 임신 36주 제왕절개로 태어났고 출생 체중은 2.8kg이었다. 가까운 친척 관계인 부부의 둘째 아이이며, 첫째 아이는 어린 나이에 감염으로 사망했다. 체온 37.0°C, 맥박 116회/분, 호흡수 29회/분이고 근긴장저하가 있다. 헤모글로빈 12.9 g/dL, 백혈구 9,300/mm³, 혈소판 170,000/mm³, 비포합 빌리루빈 33 mg/dL, 포합 빌리루빈 0.9 mg/dL, 쿰스검사 음성이다. 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 페노바르비탈
B. 즉시 집중 광선치료를 시작하고 응급 교환수혈을 준비·시행한다
C. 간이식
D. 모유 수유 중단

## 해설

36주 출생·생후 5일, 총빌리루빈 33.9 mg/dL와 기면·근긴장저하는 빌리루빈 신경독성이 우려되는 응급상황이다. 즉시 집중 광선치료와 지지치료를 시작하면서 교환수혈 가능한 NICU에서 응급 교환수혈을 준비·시행한다. 원인 질환 평가가 중요하지만 간이식·phenobarbital 또는 수유 중단만으로 이 즉각적 위험을 해결하려 하면 안 된다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 중증 신생아 고빌리루빈혈증에 누락된 교환수혈 처치를 추가.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://cps.ca/en/documents/position/hyperbilirubinemia-newborns
- https://doi.org/10.1542/peds.2022-058859

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004099

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
