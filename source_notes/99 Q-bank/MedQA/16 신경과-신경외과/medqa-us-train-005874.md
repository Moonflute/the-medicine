---
type: qbank
schema_version: 1
id: medqa-us-train-005874
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ed38f947840c14f99dbfdd27868496b70f42904e4238ac0b5d7a6498be7161a9
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "척추 경막외 농양"
  - "정맥주사 약물 사용"
  - "발열과 척추통"
  - "Spinal epidural abscess"
question_type: investigation
related_disease_slugs:
  - MDgg6rCQ7Je8L-qzqOyImOyXvCAoT3N0ZW9teWVsaXRpcykubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Mb3JhemVwYW0ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
---

# MedQA US 임상문제

## 문제

33세 환자가 발열과 점점 심해지는 등 중앙 통증으로 내원했다. 국소 척추 압통이 있고 최근 황색포도알균 균혈증을 치료받았다. 현재 하지 근력과 배뇨는 정상이다. 척추 경막외 농양을 확인할 우선 검사는?

## 선택지

A. 흉추 일반 X선
B. 요추천자
C. 근전도검사
D. 조영증강 척추 MRI

## 해설


발열과 국소 척추 통증에 균혈증 병력이 있으면 신경 결손이 없어도 척추 감염을 의심한다. 조영 MRI가 경막외 농양과 척추 침범을 평가하는 데 적합하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005874
- https://pubmed.ncbi.nlm.nih.gov/34794603/
