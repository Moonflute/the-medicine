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
question_type: management
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_tgazrpqzquIDrn6wt64KY7J6Q66W0IOymne2bhOq1sCAoQ3JpZ2xlci1OYWpqYXIgU3luZHJvbWUpLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIO2ZqeuLrCAoTmVvbmF0YWwgSmF1bmRpY2UpLm1k
difficulty: complex
answer: B
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

재태 36주로 태어난 생후 5일 신생아가 심하게 노랗고, 젖을 잘 빨지 못한다. 진찰 중 목과 등이 활처럼 젖혀지고 고음으로 운다. 총 빌리루빈은 33.9mg/dL다. 다음 처치는?

## 선택지

A. 수유량만 늘리고 몇 시간 뒤 재검한다
B. 집중 광선치료를 즉시 시작하면서 응급 교환수혈을 진행한다
C. 직접 항글로불린검사 결과가 나올 때까지 경과를 본다
D. 페노바르비탈을 먼저 시작하고 반응을 기다린다

## 해설

심한 황달에 뒤로 젖혀지는 자세와 고음의 울음은 급성 빌리루빈 뇌병증을 시사한다. 집중 광선치료를 지체하지 않고, 교환수혈이 가능한 신생아팀과 응급 교환수혈을 진행한다.

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
