---
type: qbank
schema_version: 1
id: medqa-us-validation-000928
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:42cac8d9551ff323a6aee2242a528692f51efa50463d54302b449a9a6504f232
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "항문암"
  - "HIV 감염"
  - "방사선화학요법"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tla3rrLjslZQgKEFuYWwgQ2FuY2VyKS5tZA
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
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
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
---

# MedQA US 임상문제

## 문제

42세 남성이 2주 동안 여러 차례 직장 출혈이 있어 진료를 받으러 왔다. 한 달 전부터 항문 주위 통증이 있었다. 6개월 전 식도 칸디다증으로 진단받고 경구 플루코나졸로 치료받았으며 HIV 양성이다. 평생 9명의 남성 성 파트너가 있었고 콘돔은 일관되게 사용하지 않았다. 항문경과 직장수지검사에서 항문연 위 0.5 cm에 접촉 시 출혈하는 단단한 2 cm 종괴가 만져지고, 생검으로 진단이 확인되었다. 이 환자에게 가장 도움이 될 처치는?

## 선택지

A. 방사선화학요법
B. 국소 5-플루오로우라실 치료
C. 경화제 주사요법
D. 점막하 치핵절제술

## 해설


항문연에서 0.5 cm 위의 항문관 종괴가 편평상피암으로 진단된 상황에서 선택지 A의 항암방사선치료는 표준적인 근치 접근이다. 원문의 CD4는 95/µL이고 dolutegravir·tenofovir·emtricitabine을 복용 중이다. HIV 감염만으로 곧바로 광범위 절제나 다른 암 치료를 선택하지 않으며 항레트로바이러스 치료·감염 예방과 혈액학적/피부 독성 감시를 병행한다. 면역저하 정도는 내약성에 영향을 주므로 개별화가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000928 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 항문관 SCC의 항암방사선 A 유지. HIV 자체가 무조건 치료를 바꾼다는 일반화 교정; 원문 CD4·ART는 해설에 복원.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/anal/hp/anal-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000928
