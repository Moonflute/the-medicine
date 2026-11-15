---
type: qbank
schema_version: 1
id: medqa-us-train-004751
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:33f59e2b565d1cb50492e2087b42e699c3dd7a2142fee193abb0725649ac52f9
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "폐색전증"
  - "급성 신손상"
  - "환기-관류 스캔"
question_type: investigation
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

71세 남성이 장거리 이동 뒤 갑자기 숨이 차다. 폐색전증의 임상확률이 높고 흉부 X선은 정상이다. 심한 즉시형 조영제 과민반응 병력으로 CT 폐혈관조영술을 시행할 수 없다. 대체 영상검사는?

## 선택지

A. 심장 비조영 CT
B. D-이합체
C. 환기-관류 폐스캔
D. 흉부 단순촬영 반복

## 해설

CT 폐혈관조영술이 불가능하면 핵의학 환기-관류 폐스캔을 고려한다. 정상 흉부 X선이라 판독에 방해되는 폐 병변이 적다. 결과가 비진단적이면 추가 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 신장기능 악화에서 V/Q D 선택 근거를 보완하고 항상 가장 민감/신속하다는 과장 제거.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng158/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004751
- https://professional.heart.org/en/guidelines-statements/2026-ahaaccaccpchestscaishmsirsvmsvn-guideline-for-the-evaluation-andcir0000000000001415
