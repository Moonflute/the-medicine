---
type: qbank
schema_version: 1
id: medqa-us-train-008106
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ca6b263adab09290a7601b7136f4f61f97bdc0a3c278280f44c6cf2af1db5f99
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "abnormal uterine bleeding"
  - "endometrial hyperplasia"
  - "endometrial biopsy"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-u5hOygleyDgSDsnpDqtoEg7Lac7ZiIIChBYm5vcm1hbCBVdGVyaW5lIEJsZWVkaW5nKS5tZA
  - MTMg67aA7J246rO8L-yekOq2gSDrgrTrp4kg7Kad7Iud7KadIChFbmRvbWV0cmlhbCBIeXBlcnBsYXNpYSkubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

39세 여성이 6개월째 불규칙하고 많은 자궁출혈이 있다. BMI 34 kg/m²이며 수년간 월경 간격이 2–3개월이었고, 프로게스틴 치료 후에도 출혈이 반복된다. 임신검사는 음성이고 초음파에서 뚜렷한 근종은 없다. 다음 평가는?

## 선택지

A. 자궁내막 조직검사
B. 복부 CT로 난소 크기 측정
C. 국가 자궁경부암 검진으로 평가 종료
D. 조직검사 없이 자궁내막 소작

## 해설

45세 미만이라도 장기간 무배란·비만 등 내막 증식 위험이 있고 비정상 출혈이 지속되면 내막 조직을 평가한다. 자궁근종이 안 보이거나 자궁경부 검사가 정상이어도 내막 질환을 배제할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 39세의 내막생검 B 유지. 40세 이상이라는 틀린 연령 기준 대신 비만·지속 AUB의 적응증 제시.
- https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2013/04/management-of-acute-abnormal-uterine-bleeding-in-nonpregnant-reproductive-aged-women

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008106
- https://www.nice.org.uk/guidance/ng88/chapter/Recommendations
- https://www.ejgo.org/DOIx.php?id=10.3802%2Fjgo.2024.35.e45
