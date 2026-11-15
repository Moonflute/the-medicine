---
type: qbank
schema_version: 1
id: medqa-us-validation-001143
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:99396d34543dd1ffa52dddf9e59b1e2d2e734c60bb5caca215a1268da8049bec
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "혼합결합조직병"
  - "폐동맥고혈압"
  - "레이노 현상"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOqzoO2YiOyVlSAoUHVsbW9uYXJ5IEh5cGVydGVuc2lvbikubWQ
question_type: investigation
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
---

# MedQA US 임상문제

## 문제

경피증 양상을 동반한 혼합결합조직병 환자에게 새 운동 시 호흡곤란이 있다. 심초음파에서 폐고혈압 가능성이 높고 우심실이 커졌다. 폐동맥고혈압 치료를 시작하기 전에 혈역학적으로 확진할 검사는?

## 선택지

A. 우심도자검사
B. 24시간 홀터
C. 심장 단순촬영
D. 6분 걷기 검사만 시행

## 해설


심초음파는 폐고혈압의 가능성을 평가한다. 우심도자로 폐동맥압·쐐기압·폐혈관저항을 측정해 진단과 병형을 정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001143 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: MCTD=SSc 동일시와 echo가확진·항상최민감이라는 오류 교정. scleroderma spectrum PAH 평가 A 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pubmed.ncbi.nlm.nih.gov/24022584/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001143
- https://academic.oup.com/eurheartj/article/43/38/3618/6673929
