---
type: qbank
schema_version: 1
id: medqa-us-train-006172
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:84e4dd2231baa07569580a9fb2427b337aa126c273182c1d75a63bb66ccafa6d
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Pneumocystis jirovecii 폐렴"
  - "AIDS"
  - "설파제 알레르기"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
  - MDgg6rCQ7Je8L-2PkO2PrOyekOy2qSDtj5DroLQgKFBuZXVtb2N5c3RpcyBQbmV1bW9uaWEpLm1k
question_type: management
difficulty: complex
answer: A
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
---

# MedQA US 임상문제

## 문제

HIV 환자가 중등도 이상 폐포자충 폐렴으로 입원했다. 설폰아미드에 중증 지연성 피부 이상반응을 겪어 트리메토프림/설파메톡사졸을 쓸 수 없고, G6PD는 정상이다. 사용할 치료 조합은?

## 선택지

A. 클린다마이신과 프리마퀸
B. 플루코나졸과 플루시토신
C. 아토바쿠온 단독
D. 흡입 펜타미딘

## 해설


중등도 이상 폐포자충 폐렴에서 1차 약을 쓸 수 없으면 클린다마이신과 프리마퀸이 대안이다. 프리마퀸의 용혈 위험 때문에 투여 전에 G6PD를 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006172 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 설파 중증 알레르기의 PCP 대안 clinda/primaquine B 유지; G6PD 검사·중증도 보조 steroid 판단 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/pneumocystis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006172
