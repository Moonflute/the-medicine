---
type: qbank
schema_version: 1
id: medqa-us-train-003823
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:496b97b948aa9fca22c490a867f6fa5ccbd3d8cf1b4151193d29202432d44caa
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "esophageal variceal hemorrhage"
  - "cirrhosis"
  - "spontaneous bacterial peritonitis prophylaxis"
  - "intravenous ceftriaxone"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_snpDrsJzshLEg7IS46regIOuzteunieyXvCAoU3BvbnRhbmVvdXMgQmFjdGVyaWFsIFBlcml0b25pdGlzKS5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 간경변 환자가 급성 토혈로 내원했다. 수액과 옥트레오타이드를 투여하고 내시경을 준비 중이다. 현재 발열은 없고 최근 다제내성균 감염이나 약물 알레르기 병력이 없다. 감염 합병증을 줄이기 위해 함께 시작할 약은?

## 선택지

A. 경구 리팍시민
B. 경구 프로프라놀롤
C. 정맥 세프트리악손
D. 정맥 푸로세미드

## 해설

간경변 환자의 급성 상부위장관 출혈에서는 감염이 확인되기 전부터 단기간 항생제 예방을 시작한다. 정맥 세프트리악손은 사용 가능한 선택지이며, 지역 내성과 최근 항생제 사용을 고려해 고른다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 정맥류 출혈의 항생제 C 유지. 원문 Hb10.3 복원으로 수혈 A와 비교 가능하게 하고 신속내시경도 병행.
- https://www.esge.com/assets/downloads/pdfs/guidelines/2022_a-1939-4887.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003823
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7160350/
