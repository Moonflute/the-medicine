---
type: qbank
schema_version: 1
id: medqa-us-train-007599
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7888dc7a6a1b200ebed860dbd05e7fec0c2638ec45117e7436fdcb731121f37e
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Pneumocystis jirovecii 폐렴"
  - "HIV 감염"
  - "메테나민 은염색"
  - "트리메토프림-설파메톡사졸"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
  - MDgg6rCQ7Je8L-2PkO2PrOyekOy2qSDtj5DroLQgKFBuZXVtb2N5c3RpcyBQbmV1bW9uaWEpLm1k
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1waG90ZXJpY2luQi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvRXRoYW1idXRvbC5tZA
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
---

# MedQA US 임상문제

## 문제

HIV 환자가 3주째 마른기침과 운동할 때 숨참을 호소한다. 기관지폐포세척액에서 폐포자충이 확인됐다. 실내 공기에서 PaO₂는 78mmHg이고 A–a 산소분압차는 22mmHg다. 금기가 없다면 1차 치료는?

## 선택지

A. 암포테리신 B와 플루시토신
B. 트리메토프림/설파메톡사졸
C. 아지트로마이신과 에탐부톨
D. 플루코나졸

## 해설


HIV 관련 폐포자충 폐렴의 1차 치료는 트리메토프림/설파메톡사졸이다. 이 사례의 산소화 수치는 보조 전신 스테로이드를 시작하는 중등도 이상 기준에 해당하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007599 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 은염색 양성5µm 낭종의 PCP와 TMP-SMX D를 NIH 권고 및 원문 대조 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/pneumocystis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007599
