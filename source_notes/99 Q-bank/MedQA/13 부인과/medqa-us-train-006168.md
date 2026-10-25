---
type: qbank
schema_version: 1
id: medqa-us-train-006168
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:649332d404491cf3425060251b423dc9c507eaf3900f6b6b581cfee2ced8be91
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "여성 불임"
  - "난관 개통성 평가"
  - "자궁난관조영술"
  - "Infertility"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-u2iOyehCAoSW5mZXJ0aWxpdHkpLm1k
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

38세 여성이 1년 동안 임신이 되지 않아 일차진료를 받으러 왔다. 월경은 규칙적이고 남편과 매일 피임 없이 성관계를 한다. 호주에서 이민 왔고 과거력은 알려져 있지 않다. 엽산과 종합비타민을 복용하며 남편의 정자 수는 두 차례 정상으로 확인되었다. 임신이 되지 않아 자신이 너무 늙은 것 같아 매우 걱정한다. 다음 중 가장 적절한 관리의 다음 단계는 무엇인가?

## 선택지

A. 나이 때문에 임신을 포기하도록 권고
B. 배란 달력으로 배란 평가
C. 1년 동안 규칙적인 성관계를 계속
D. 자궁난관조영술 시행

## 해설

규칙적 월경과 정상 정액검사 후 여성 불임 평가에는 자궁 구조와 난관 개통성 확인이 필요하므로 자궁난관조영술(D)이 적절하다. 이는 배란을 직접 측정하는 검사가 아니다. 35세 이상은 6개월 이상 임신이 되지 않으면 평가하며 1년 더 기다리지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: HSG D 유지. 난관 개통성 검사를 배란 검사로 설명한 오류를 교정.
- https://www.asrm.org/practice-guidance/practice-committee-documents/fertility-evaluation-of-infertile-women-a-committee-opinion-2021/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006168
