---
type: qbank
schema_version: 1
id: medqa-us-test-001110
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:95190b8005d34d4f9b8e8d8138bfc8a6eb81c869c5b718892e6a52c5625ddb68
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "크립토코쿠스 수막염"
  - "HIV/AIDS"
  - "암포테리신 B 플루시토신"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1waG90ZXJpY2luQi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTWVyb3BlbmVtLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

치료받지 않은 HIV 환자가 3주 동안 악화되는 두통으로 왔다. CD4는 65/μL이고 뇌척수액 크립토코쿠스 항원이 양성이다. 정맥 치료와 약제 모니터링이 가능한 병원에서 적합한 초기 유도요법은?

## 선택지

A. 고용량 플루코나졸 단독
B. 리포좀 암포테리신 B와 플루시토신
C. 미카펀긴과 플루코나졸
D. 트리메토프림/설파메톡사졸

## 해설


검사와 모니터링이 가능한 곳에서는 리포좀 암포테리신 B와 플루시토신 병용이 표준 유도요법이다. 이후 플루코나졸 기반 공고·유지요법으로 이어가며, 두개내압 관리도 병행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-001110 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 진행 HIV·India ink 피막 진균의 크립토코쿠스 수막염에서 유도요법 amphotericin+flucytosine B가 현행 초기 치료와 부합.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/cryptococcosis/treatment/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001110
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11526416/
