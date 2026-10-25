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

45세 남성이 미식축구 중 다른 선수의 무릎과 자신의 무릎 안쪽이 부딪힌 지 일주일 후 진료를 받으러 왔다. 오른쪽 무릎에 소량의 삼출액과 종창이 있고 내반 스트레스 검사에서 매우 느슨하다. 외반 스트레스에서는 이완이 없고 Lachman과 후방서랍검사는 단단한 끝점으로 이완이 없다. 양하지 감각과 근력은 정상이다. 맥머레이 검사가 양성이고 검사 중 걸림과 잠김을 느낀다. 반월상연골 외에 손상된 구조는?

## 선택지

A. 전방십자인대
B. 후방십자인대
C. 내측측부인대
D. 외측측부인대

## 해설


무릎 안쪽 충격은 내반력을 만들어 외측측부인대(LCL)를 손상할 수 있다. 내반 스트레스의 뚜렷한 이완은 LCL 손상(D)을 지지한다. McMurray의 걸림/잠김은 동반 반월상연골 문제를 시사하지 LCL 자체의 검사는 아니다. Lachman·후방서랍과 외반검사가 안정적인 점은 각각 ACL·PCL·MCL 손상을 덜 지지한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001027 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: LCL과 McMurray/반월상연골 평가를 분리하고 원문 음성 인대검사를 복원했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001027
