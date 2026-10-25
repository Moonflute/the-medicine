---
type: qbank
schema_version: 1
id: medqa-us-train-007157
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cb410af4264831f16d634bacff31f94935c7c4c0ea25a37ae49e19d43fc2ab45
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "알파 지중해빈혈"
  - "태아수종"
  - "알파 글로빈 유전자 결실"
  - "헤모글로빈 바트"
question_type: mechanism
related_disease_slugs:
  - MDkg7ZiI7JWhL-yngOykke2VtCDruYjtmIggKFRoYWxhc3NlbWlhKS5tZA
difficulty: standard
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

29세 G10 여성이 임신 24주에 추적 진료를 위해 내원했다. 6주 전 전혈구검사에서 소구성 저색소성 빈혈이 확인되어 황산철 정제를 처방받았다. 오늘 반복한 전혈구검사에서 헤모글로빈 수치가 호전되지 않았다. 과거력상 산모는 Rh 양성이고 배우자는 Rh 음성이다. 7년 전 남편과 함께 미국으로 이주했으며 본국에서는 정기적인 의료 관리를 받지 못했다. 복부 초음파에서 태아수종에 합당한 소견이 보인다. 이 태아 상태의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 알파 글로빈 유전자 4개의 결실
B. 베타 글로빈 사슬 합성 장애
C. 피루브산 키나아제 결핍
D. Rh 부적합

## 해설

알파글로빈 네 유전자가 모두 소실되면 알파 사슬을 만들지 못해 태아에서 γ4 사량체 Hb Bart가 형성된다. 산소 운반 장애와 심한 빈혈이 태아수종을 초래하므로 A가 적절하다. 철분에 반응하지 않는 모체 소구성 빈혈은 지중해빈혈 보인자 가능성을 뒷받침하지만 모체 소견만으로 태아 유전형을 확진하는 것은 아니다. 모체 Rh 양성·배우자 Rh 음성이라는 본문은 전형적인 항-D Rh 부적합의 조합이 아니며 D를 정답처럼 설명한 기존 해설은 잘못이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원정답 A와 반대로 Rh 부적합을 답으로 설명한 해설을 알파글로빈 네 유전자 결실·Hb Bart 태아수종의 기전으로 교체했다.
- https://medlineplus.gov/genetics/condition/alpha-thalassemia/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007157
