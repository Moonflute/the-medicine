---
type: qbank
schema_version: 1
id: medqa-us-train-005013
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a3a24405906b4c2d8f765f0984f5fb790676d33b923e3bb46c618d1e6bb374ff
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "급성 전골수구성 백혈병"
  - "t(15;17) 전좌"
  - "좋은 예후 인자"
related_disease_slugs:
  - MDkg7ZiI7JWhL-q4ieyEsSDsoITqs6jsiJjshLEg67Cx7ZiI67ORIChBUEwgTTMpIChBY3V0ZSBQcm9teWVsb2N5dGljIExldWtlbWlhKS5tZA
question_type: adverse_effect
difficulty: standard
answer: D
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

급성 전골수구성 백혈병으로 전트랜스 레티노산과 삼산화비소를 시작한 환자에게 1주 뒤 원인 불명의 발열, 급격한 체중 증가와 호흡곤란이 생겼다. 새 양측 폐침윤이 보인다. 감염 등 다른 원인을 평가하면서 분화증후군이 의심되면 바로 투여할 약은?

## 선택지

A. 필그라스팀
B. 아세트아미노펜 단독
C. 추가 삼산화비소
D. 정맥 덱사메타손

## 해설


분화치료 중 급격한 체중 증가와 폐침윤, 호흡곤란은 분화증후군을 시사한다. 의심 즉시 덱사메타손을 투여하고, 중증이면 분화약 일시 중단을 전문팀과 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005013 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: PML::RARA t(15;17) D의 표적치료 반응 및 상대적 양호 예후 유지; 초기 치명적 응고병증 위험과 구분.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005013
- https://doi.org/10.1182/blood-2019-01-894980
