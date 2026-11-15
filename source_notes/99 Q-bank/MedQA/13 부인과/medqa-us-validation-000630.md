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

49세 여성이 월경 간격이 길어지며 땀이 난다고 한다. 최근 3개월 사이 체중이 5 kg 줄었고 안정 시 맥박 110회/분, 손떨림과 열불내성이 있다. 임신검사는 음성이다. 우선 추가할 혈액검사는?

## 선택지

A. 항뮐러관호르몬
B. 프로락틴
C. 황체형성호르몬
D. TSH와 유리 T4

## 해설

월경이 불규칙해져도 뚜렷한 체중 감소·빈맥·떨림이 있으면 폐경이행기로 단정하지 않는다. TSH와 유리 T4로 갑상샘기능항진증을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 빈맥·체중감소·열불내성으로 갑상선기능항진 감별 TSH D 유지. 기능저하증 오연결과 원문 누락된 빈맥 보완.
- https://www.asrm.org/practice-guidance/practice-committee-documents/current-evaluation-of-amenorrhea/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000630
- https://www.e-jmm.org/DOIx.php?id=10.6118%2Fjmm.25103
- https://www.nice.org.uk/guidance/ng145/chapter/Recommendations
