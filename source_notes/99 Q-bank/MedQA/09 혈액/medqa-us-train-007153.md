---
type: qbank
schema_version: 1
id: medqa-us-train-007153
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:54e838322e19bf7f68ca68aa3a3f289db5cf587ebad3b07e2740eb993452944b
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "유전구형적혈구증"
  - "구형적혈구"
  - "용혈성 빈혈"
  - "담석"
related_disease_slugs:
  - MDkg7ZiI7JWhL-ycoOyghCDqtaztmIjsoIHtmIjqtazspp0gKEhlcmVkaXRhcnkgU3BoZXJvY3l0b3NpcykubWQ
  - MDkg7ZiI7JWhL-yaqe2YiOyEsSDruYjtmIggKEhlbW9seXRpYyBBbmVtaWEpLm1k
question_type: prognosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

특이한 과거 병력이 없는 25세 여자가 몇 주 동안 지속된 피로 증가와 운동능력 저하로 일차진료의를 찾아왔다. 신체검사에서 피부와 결막이 창백하다. 의사는 빈혈을 의심하여 전혈구검사를 시행했으며, 헤모글로빈 11.7 g/dL, MCV 79 fL, MCHC 38%(정상 31.1~34%), 망상적혈구 지수 3.6%였다. 말초혈액도말에서 중앙 창백이 없는 적혈구가 보인다. 이 환자에게 가장 흔히 발생할 합병증은 무엇인가?

## 선택지

A. 망막병증
B. 파보바이러스 B19 감염에 의한 재생불량성 빈혈
C. 담석
D. 대퇴골두 무혈성 괴사

## 해설


높은 MCHC·중앙창백 소실과 망상적혈구 증가는 HS를 시사한다. 만성 용혈의 bilirubin 부하로 색소담석 C가 흔히 생긴다. HS는 SCD와 다른 질환이며 B19에 의한 일시 aplastic crisis도 HS에서 발생할 수 있어 B가 전혀 무관하다는 설명은 틀리다. 망막병증/대퇴골두 무혈괴사는 SCD에서 특히 중요한 연관이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007153 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HS와 SCD를 동의어로 쓰고 B19 crisis가 HS와 무관하다고 한 오류 교정; 색소담석 C 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007153
