---
type: qbank
schema_version: 1
id: medqa-us-validation-000919
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:3afbaad786aadfe7a7b0997ed84c1caea7fa06e25098599abb92d9a3835247d6
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "AIDS"
  - "식도 칸디다증"
  - "플루코나졸"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
  - MDgg6rCQ7Je8L-y5uOuUlOuLpOymnSAoQ2FuZGlkaWFzaXMpLm1k
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
  - ZHJ1ZzowOCDqsJDsl7wvQW1waG90ZXJpY2luQi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
---

# MedQA US 임상문제

## 문제

43세 남성이 한 달간 삼킬 때 통증이 있어 진료를 받으러 왔으며 최근 몇 주 동안 악화되었다. 과거력에 AIDS가 있다. 고활성 항레트로바이러스 치료제를 살 여유가 없어 현재 복용하는 약은 없다. 체온은 37°C이고, 혈액검사에서 백혈구 2,400/mm³, CD4+ 세포 수 51/mm³이다. 점막 병변은 보이지 않는다. 현재 증상에 가장 적절한 약물치료는?

## 선택지

A. 경구 플루코나졸
B. 경구 니스타틴 현탁액
C. 정맥 암포테리신 B
D. 경구 아시클로버

## 해설


낮은 CD4와 진행성 연하통은 식도 칸디다증을 의심하게 하며 구강 병변이 없어도 가능하다. 선택지 중 경구 fluconazole(A)의 전신 치료가 적절하다. 국소 nystatin만으로 식도 감염을 치료하지 않는다. 적절한 치료에 호전하지 않으면 CMV·HSV 등 다른 원인을 위한 내시경·생검을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000919 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: AIDS 연하통·구강 병변 부재에서도 식도 칸디다증 경험적 fluconazole A 유지, 치료 무반응이면 추가 내시경 감별 필요.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/candidiasis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000919
