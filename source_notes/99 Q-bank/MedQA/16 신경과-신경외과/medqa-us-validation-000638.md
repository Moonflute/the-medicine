---
type: qbank
schema_version: 1
id: medqa-us-validation-000638
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:7287711ce8bc97a53b595539546603d6ef808eb3e3b232a17f51b9471781af1d
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "긴장형 두통"
  - "일차성 두통"
  - "이부프로펜"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_quLTsnqXtmJXrkZDthrUgKFRlbnNpb24tdHlwZSBoZWFkYWNoZSkubWQ
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
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbWl0cmlwdHlsaW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

26세 남성이 6개월간 이틀에 한 번 1~2시간 지속되는 양측성 조이는 두통으로 진료를 받으러 왔다. 광공포, 소리공포, 메스꺼움, 구토, 시야 소실은 없다. 가장 적절한 다음 처치는?

## 선택지

A. 아미트립틸린
B. 두부 MRI
C. 안과 평가
D. 이부프로펜

## 해설

양측 조이는 양상, 중등 이하 강도와 편두통 동반증상 부재는 긴장형 두통에 맞는다. 급성 통증에는 ibuprofen(D) 같은 NSAID를 고려한다. 다만 격일로 수개월 지속되는 빈도이므로 두통일지와 약물과용 위험, 예방 치료 필요성도 평가해야 하며 무제한 반복 진통제 사용을 권하는 것은 아니다. 위험징후 없이 안정적인 긴장형 두통에서 영상검사를 일률적으로 시행하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 긴장형 두통 급성 진통 D 유지. 빈번한 두통의 예방/약물과용 평가 필요성을 보완.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg150/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000638
