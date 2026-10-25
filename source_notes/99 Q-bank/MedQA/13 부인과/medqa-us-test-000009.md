---
type: qbank
schema_version: 1
id: medqa-us-test-000009
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:31a3af94e4f83d6c8759993b60fe9e1a1d5a68fa89c21f718e499002d22782bb
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "구리 자궁내장치"
  - "골반염증성 질환"
  - "피임 금기"
question_type: prevention
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geuCtOyepey5mCAoSW50cmF1dGVyaW5lIERldmljZSkubWQ
  - MTMg67aA7J246rO8L-qzqOuwmOuCtCDqsJDsl7wgKFBlbHZpYyBJbmZsYW1tYXRvcnkgRGlzZWFzZSkubWQ
difficulty: standard
answer: B
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

37세 여성이 새로운 피임법을 원해 일차진료의에게 내원했다. 8년 동안 경구피임약을 사용했지만 자궁내장치로 바꾸고 싶어 한다. 혈압 118/78 mmHg, 맥박 분당 73회, 호흡수 분당 16회, 발열은 없다. 다음 중 어떤 과거력이 구리 자궁내장치 삽입의 금기인가?

## 선택지

A. 뇌졸중 또는 정맥혈전색전증 병력
B. 활동성 또는 재발성 골반염증성 질환
C. 유방암 병력
D. 간 종양 진단

## 해설

현재 활동성 골반염증성 질환이 있다면 구리 IUD 삽입 시작은 U.S. MEC 범주 4에 해당하여 B가 가장 적합하다. 다만 과거 PID 또는 재발 병력만 있고 현재 감염이 없는 경우까지 모두 절대금기로 보는 것은 옳지 않다. 과거 감염과 현재 감염을 구별하고 STI 평가를 시행한다. 뇌졸중·정맥혈전색전증, 유방암 또는 간 종양 병력은 호르몬 피임법의 고려사항과 달리 구리 IUD의 동일한 감염성 삽입 금기가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 미표시 실제 검수. 현재PID와 과거/재발병력만의 IUD 적격성 구별. B는 현재활동성에 해당할때 정답임 명시, 나머지원문유지.
- https://www.cdc.gov/mmwr/volumes/73/rr/rr7304a1_appendix.htm
- https://www.cdc.gov/contraception/hcp/usspr/intrauterine-contraception.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000009
