---
type: qbank
schema_version: 1
id: medqa-us-test-000657
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:bb850d104b4538ab7ff15a646f84f52afbcd4995f8010a0bddc0da34ffad570b
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "천공성 위궤양"
  - "복막염"
  - "급성 복증"
related_disease_slugs:
  - MTEg7Jm46rO8L-q4ieyEsSDrs7Xspp0gKEFjdXRlIEFiZG9tZW4pLm1k
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_snpDrsJzshLEg7IS46regIOuzteunieyXvCAoU3BvbnRhbmVvdXMgQmFjdGVyaWFsIFBlcml0b25pdGlzKS5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

소화성 궤양 병력이 있는 환자가 갑작스러운 복통으로 왔다. 배 전체에 경직과 반발통이 있고 CT에서 복강 내 자유공기와 위 주변 조영제 유출이 보인다. 정맥 수액과 광범위 항생제를 시작했다. 추가로 필요한 처치는?

## 선택지

A. 상부위장관 내시경 지혈술
B. 정맥 PPI만 투여하며 경과 관찰
C. 국소 혈관 색전술
D. 응급 수술을 통한 천공 조절

## 해설


조영제 유출과 범복막염이 동반된 궤양 천공은 외과적 원인 조절이 필요하다. 제한적인 비수술 치료는 천공이 막혔고 복막염이나 패혈증이 없는 선별 환자에서만 고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 소화성 궤양 병력과 갑작스러운 심한 통증·판자 같은 복부/반발통은 천공에 의한 복막염. 제시된 진단 중 D가 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000657
- https://pubmed.ncbi.nlm.nih.gov/31921329/
