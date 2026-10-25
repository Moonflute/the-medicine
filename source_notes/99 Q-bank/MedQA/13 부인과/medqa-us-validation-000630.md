---
type: qbank
schema_version: 1
id: medqa-us-validation-000630
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:2706f260f1b284db3ef11623cbd5929f32c4ea5193d20ae5e4fc348609246932
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "폐경이행기"
  - "월경 변화"
  - "갑상선기능검사"
  - "Hypothyroidism"
question_type: investigation
related_disease_slugs:
  - MDQg64K067aE67mEL-ustOymneyDgSDqsJHsg4Hsg5gg6riw64ql7KCA7ZWY7KadIChTdWJjbGluaWNhbCBIeXBvdGh5cm9pZGlzbSkubWQ
difficulty: complex
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

49세 여성(임신 1회, 출산 1회)이 지난 1년간 월경량과 빈도가 줄고 기분 변화, 체중감소, 야간 발한과 열감이 반복되어 진료를 받으러 왔다. 남편은 10년 전 정관절제술을 받았고 맥박은 103회/분이다. 복부 및 비뇨생식기 진찰은 정상이다. 가장 적절한 다음 단계는?

## 선택지

A. 질식 초음파
B. 혈청 β-hCG 측정
C. 자궁내막 생검
D. 혈청 TSH 측정

## 해설

폐경이행기에 혈관운동 증상이 가능하지만 체중감소·열불내성과 빈맥이 있어 갑상선기능항진증 등 다른 원인을 확인한다. 보기 중 TSH(D)가 적절하다. 이를 갑상선기능저하증의 전형으로 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 빈맥·체중감소·열불내성으로 갑상선기능항진 감별 TSH D 유지. 기능저하증 오연결과 원문 누락된 빈맥 보완.
- https://www.asrm.org/practice-guidance/practice-committee-documents/current-evaluation-of-amenorrhea/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000630
