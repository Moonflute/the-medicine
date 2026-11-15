---
type: qbank
schema_version: 1
id: medqa-us-train-004439
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e1e6cd73e081d13673a04b5f80393cf2c3a21d1a69c5ec37261c0ce0cf01aa9d
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "구강 칸디다증"
  - "식도 칸디다증"
  - "HIV 감염"
related_disease_slugs:
  - MDgg6rCQ7Je8L-y5uOuUlOuLpOymnSAoQ2FuZGlkaWFzaXMpLm1k
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
question_type: management
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

치료받지 않은 HIV 환자가 입안에 닦이는 흰 반점과 심한 삼킴통증을 호소한다. 경구약은 삼킬 수 있다. 칸디다 식도염이 의심될 때 우선 사용할 치료는?

## 선택지

A. 니스타틴 가글만 시행한다
B. 전신 플루코나졸을 투여한다
C. 경구 아시클로버를 투여한다
D. 국소 클로트리마졸만 사용한다

## 해설


식도 칸디다증에는 전신 항진균제가 필요하고 플루코나졸이 1차 치료다. 국소 제제만으로는 부족하다. 경험적 치료에 반응하지 않으면 내시경으로 다른 원인도 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004439 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 면역결핍 평가 CD4 C 유지하되 구강 백색병변만으로 HIV 확진 및 CD4 검사를 HIV 진단검사로 혼동한 설명 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004439
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/candidiasis
