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
explanation_status: machine-generated
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

46세 남성이 4주 동안 점점 악화되는 피로와 두통으로 응급실에 왔다. 태국에서 9년 전 미국으로 이주했고 남성 파트너가 6명이며 콘돔 사용이 일관되지 않았다. 구강 점막에 쉽게 긁어낼 수 있는 흰색 판이 있었고 기면과 단기기억 저하가 있었다. CD4 세포 80/mm³, HIV 양성이었다. 뇌척수액에서 림프구 증가, 단백질 52 mg/dL, 포도당 37 mg/dL, India ink에서 뚜렷한 피막의 균이 보였다. 신경학적 증상에 대한 가장 적절한 약물치료는?

## 선택지

A. 피리메타민, 설파디아진, 폴린산
B. 암포테리신 B와 플루시토신
C. 플루코나졸
D. 반코마이신과 메로페넴

## 해설


HIV 감염자 CD4 80/mm³에서 India ink 양성은 크립토코쿠스 수막염을 의미한다. 치료 1차 선택은 암포테리신 B와 플루시토신 조합이다. 따라서 가장 적절한 약물은 암포테리신 B와 플루시토신이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-001110 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 진행 HIV·India ink 피막 진균의 크립토코쿠스 수막염에서 유도요법 amphotericin+flucytosine B가 현행 초기 치료와 부합.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/cryptococcosis/treatment/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001110
