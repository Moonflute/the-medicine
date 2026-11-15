---
type: qbank
schema_version: 1
id: medqa-us-test-000111
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:9711d6e1133451975fa308487c4ae5203bc7f71502d35f0e59d7a9880e1b1744
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "자발성 세균성 복막염"
  - "간경변"
  - "세균 전이"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_snpDrsJzshLEg7IS46regIOuzteunieyXvCAoU3BvbnRhbmVvdXMgQmFjdGVyaWFsIFBlcml0b25pdGlzKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
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

간경변과 복수가 있는 환자가 발열과 복통으로 왔다. 항생제를 시작했지만 좌하복부의 국소 압통이 심해진다. 복수 호중구는 6,200/mm³, 복수 포도당은 35 mg/dL이고 복수 배양에서 서로 다른 두 균이 자랐다. 활력은 안정적이다. 다음 검사는?

## 선택지

A. 복수 알부민 재측정
B. 위내시경
C. 복부·골반 조영 CT
D. 간 탄성도 검사

## 해설

국소 복막 자극, 높은 복수 호중구, 낮은 복수 포도당, 여러 균의 배양은 자발성보다 이차성 복막염을 의심하게 한다. 영상으로 천공이나 농양 등 교정할 원인을 신속히 찾는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. PMN 1140을 핵심으로 SBP/세균전이 설명; 실제 복수 포도당 62를 저포도당이라고 단정한 오류 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000111
- https://doi.org/10.3350/cmh.2026.0281
