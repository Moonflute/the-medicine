---
type: qbank
schema_version: 1
id: medqa-us-validation-001027
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:0cbfff8d250d2aa34dae7152f92c7a6c6654456c2ab193ea3cc103eeb90bf2db
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "외측측부인대 손상"
  - "반월상연골 손상"
  - "내반 스트레스 검사"
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-yZuOy4oSDsuKHrtoAg7J2464yAIOyGkOyDgSAoTGF0ZXJhbCBDb2xsYXRlcmFsIExpZ2FtZW50IEluanVyeSkubWQ
question_type: diagnosis
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

45세 남성이 운동 중 무릎 안쪽을 부딪혔다. 무릎을 30도 굽혀 내반 힘을 주면 바깥쪽 관절 간격이 벌어진다. 무릎을 편 상태의 내반 검사, 외반 검사와 십자인대 검사는 정상이다. 손상된 인대는?

## 선택지

A. 전방십자인대
B. 후방십자인대
C. 내측측부인대
D. 외측측부인대

## 해설


무릎을 30도 굽힌 내반 검사에서 바깥쪽이 벌어지면 외측측부인대 손상을 시사한다. 편 상태에서도 벌어지면 다른 구조 손상도 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001027 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: LCL과 McMurray/반월상연골 평가를 분리하고 원문 음성 인대검사를 복원했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001027
- https://orthoinfo.aaos.org/en/diseases--conditions/collateral-ligament-injuries/
