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

62세 남성이 반복되는 토혈로 내원했다. 하루 반 리터의 보드카를 마시고 복수와 간비대, 혈소판 감소가 있었고 혈색소는 10.3 g/dL였다. 정맥 수액과 옥트레오타이드를 시작했다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 농축 적혈구 수혈
B. 내시경적 밴드 결찰
C. 정맥 세프트리악손
D. 경경정맥 간내 문맥전신 단락술

## 해설

간경변이 의심되는 상부위장관 출혈에서는 소생·혈관작용제와 함께 조기 항생제 예방 C를 시작한다. Hb10.3이고 제시된 상태에서 일률적 적혈구 수혈이 우선은 아니며, 안정화 후 신속한 내시경으로 출혈원을 확인하고 정맥류면 결찰한다. 항생제가 내시경 지혈을 대체하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 정맥류 출혈의 항생제 C 유지. 원문 Hb10.3 복원으로 수혈 A와 비교 가능하게 하고 신속내시경도 병행.
- https://www.esge.com/assets/downloads/pdfs/guidelines/2022_a-1939-4887.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003823
