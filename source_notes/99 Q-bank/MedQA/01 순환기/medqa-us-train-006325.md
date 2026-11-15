---
type: qbank
schema_version: 1
id: medqa-us-train-006325
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4112ec10357333106003c03b91f8e76f283a07cf0aaa2b4036f1986ee7f5559b
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "인공 심장판막"
  - "감염성 심내막염 예방"
  - "치과 발치"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qwgOyEsSDrj5nrp6XrpZggKFBzZXVkb2FuZXVyeXNtKS5tZA
question_type: prevention
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9TaXRhZ2xpcHRpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 남성이 인공 대동맥판막 치환 후 어금니를 발치할 예정이다. 페니실린 알레르기는 없다. 이 환자에서 감염성 심내막염 예방을 위해 시행할 처치는?

## 선택지

A. 발치 30~60분 전에 아목시실린을 경구로 단회 투여한다
B. 발치 다음 날부터 예방 목적으로 일주일간 아목시실린을 투여한다
C. 발치 전 항생제 없이 혈액배양만 시행한다
D. 판막 종류와 무관하게 예방은 필요 없다

## 해설


인공판막은 감염성 심내막염 고위험군이며, 발치는 잇몸을 조작하는 시술이다. 금기가 없다면 시술 전 아목시실린을 단회 투여한다. 항응고제 관리는 이 예방요법과 별도로 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 인공판막 환자의 잇몸조작/발치 전 amoxicillin A 예방 적응증은 관상동맥스텐트 자체와 구별.
- https://www.heart.org/en/health-topics/infective-endocarditis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006325
- AHA 감염성 심내막염 예방 권고: https://www.heart.org/-/media/files/health-topics/infective-endocarditis/infective-endocarditis-wallet-card.pdf
