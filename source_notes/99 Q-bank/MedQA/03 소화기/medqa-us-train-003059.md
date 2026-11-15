---
type: qbank
schema_version: 1
id: medqa-us-train-003059
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9c81f15c66c568efee9de8ef254fcaff296cdbdf1a02af774bde5db796ffb084
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "decompensated cirrhosis"
  - "recurrent esophageal variceal hemorrhage"
  - "TIPS"
  - "portal hypertension"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
question_type: prevention
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
  - ZHJ1ZzowMyDshoztmZTquLAvTGFjdHVsb3NlLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

간경변 환자의 첫 식도정맥류 출혈이 내시경 결찰로 멎었다. 선제 TIPS 적응증은 없었고 혈압과 신장기능이 안정적이다. 출혈의 재발을 줄일 표준적인 첫 예방 전략은?

## 선택지

A. PPI 단독 장기 투여
B. 비선택적 베타차단제와 반복 내시경 정맥류 결찰 병행
C. 옥트레오타이드 영구 정맥 투여
D. 예방치료 없이 출혈할 때만 내시경

## 해설

선제 TIPS를 시행하지 않은 식도정맥류 출혈 환자에서는 비선택적 베타차단제와 결찰술을 병행하는 것이 표준 이차예방이다. 적절히 병행했는데도 재출혈하면 TIPS를 검토한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 재발성 정맥류 출혈을 PHG 합병증으로 혼동한 해설 교정; TIPS 후보선별·뇌증 위험을 명시.
- https://www.esge.com/assets/downloads/pdfs/guidelines/2022_a-1939-4887.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003059
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7160350/
