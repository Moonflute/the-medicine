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

수개월간 명치 통증이 있던 남성이 갑자기 심한 복통을 호소한다. 복부 경직과 반발통이 있다. 초기 수액 후 혈압은 118/72 mmHg로 안정되어 외과 평가를 진행 중이다. 천공 위치와 원인을 가장 잘 확인할 영상검사는?

## 선택지

A. 복부 초음파
B. 기립 흉부 X선
C. 복부 CT
D. 위 배출 검사

## 해설

촬영 가능한 환자에서 CT는 복강 내 자유공기, 천공 위치와 다른 급성복증 원인을 평가한다. CT를 즉시 할 수 없으면 단순 X선이 대안이다. 소생과 외과 평가를 영상 때문에 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 천공 의심 급성복증에서 즉시 가능한 CT 우선 권고에 따라 B→C. X선은 신속 CT가 불가능할 때 대안.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6947898/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005048
- https://pubmed.ncbi.nlm.nih.gov/31921329/
