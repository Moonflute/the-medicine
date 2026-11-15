---
type: qbank
schema_version: 1
id: medqa-us-train-006025
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d384a4ab39b7ebc183e0311978f08afbf6727a5b79c1fe864ab516aafc7652b3
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "간세포암"
  - "만성 B형간염 간경변"
  - "소라페닙"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITshLjtj6zslZQgKEhlcGF0b2NlbGx1bGFyIENhcmNpbm9tYSkubWQ
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rp4zshLEgQu2YlSDqsITsl7wgKENocm9uaWMgSGVwYXRpdGlzIEIgKEhCVikpLm1k
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

간경변이 있는 간세포암 환자에게 혈관 침범이 확인돼 전신치료를 계획한다. 간기능은 보존돼 아테졸리주맙·베바시주맙을 검토 중이다. 문맥고혈압이 있고 최근 위내시경을 받은 적은 없다. 투여 전 우선 할 일은?

## 선택지

A. AFP가 더 오를 때까지 내시경을 미룬다
B. 위내시경으로 출혈 위험이 큰 정맥류를 확인하고 필요하면 치료한다
C. 증상 없는 환자는 정맥류를 확인하지 않고 바로 투여한다
D. 복부 초음파로 식도 정맥류 출혈 위험을 모두 배제한다

## 해설


베바시주맙은 출혈 위험을 높일 수 있다. 문맥고혈압 환자는 병용 치료 전 상부위장관 정맥류와 출혈 위험을 확인해 관리하고, 위험이 조절되지 않으면 다른 전신치료를 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006025 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: sorafenib 승인 사실 D 유지; 다른 선지를 다른 항암제라고 잘못 설명한 오류 제거 및3cm=진행암 확정 아님을 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/about-cancer/treatment/drugs/sorafenibtosylate

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006025
- https://kci.go.kr/kciportal/landing/article.kci?arti_id=ART003395799
- https://doi.org/10.3348/kjr.2022.0822
