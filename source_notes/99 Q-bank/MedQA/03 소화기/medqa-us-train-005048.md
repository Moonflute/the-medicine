---
type: qbank
schema_version: 1
id: medqa-us-train-005048
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:229628750d232dcfec557efd945f51ad0dda643290323ad92bb354a1f2491201
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "천공성 소화성 궤양"
  - "복막염"
  - "복강 내 유리 공기"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_snpDrsJzshLEg7IS46regIOuzteunieyXvCAoU3BvbnRhbmVvdXMgQmFjdGVyaWFsIFBlcml0b25pdGlzKS5tZA
question_type: investigation
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: B
answer_change_reason: "WSES2020은 천공 의심 급성복증에서 CT를 권고하고 X선은 CT가 신속히 불가능할 때 권고. CT불가 조건 없어 B→C."
---

# MedQA US 임상문제

## 문제

50세 남자가 수개월 동안 식사와 관련된 복통이 있었고 1시간 전 심한 상복부 통증으로 악화되어 응급실에 왔다. 통증은 어깨로 방사되고 체온 38°C, 맥박 120회/분, 혈압 100/60 mmHg이다. 복부 전반에 경직과 반발통, 감소된 장음이 있다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 복부 초음파
B. 흉부 방사선촬영
C. 복부 CT
D. 12유도 심전도

## 해설

천공 의심 급성복증에서 즉시 이용 가능하고 촬영 가능한 환자라면 CT C로 자유공기·천공 위치·다른 원인을 평가한다. 흉부/복부 X선은 CT가 신속히 불가능할 때의 대안이다. 소생과 응급 외과평가를 병행하며 불안정 환자의 수술을 검사 때문에 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 천공 의심 급성복증에서 즉시 가능한 CT 우선 권고에 따라 B→C. X선은 신속 CT가 불가능할 때 대안.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6947898/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005048
