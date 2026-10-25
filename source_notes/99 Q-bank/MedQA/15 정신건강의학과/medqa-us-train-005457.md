---
type: qbank
schema_version: 1
id: medqa-us-train-005457
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a4a6d5177c10b08852465fd25b5963fd9fae8a92609c147d3e51dbdb3de067f9
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "알코올사용장애"
  - "알코올성 소뇌변성"
  - "빠른 교대운동 불능"
question_type: association
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVjOy9lOyYrCDsgqzsmqkg7J6l7JWgIChBbGNvaG9sIFVzZSBEaXNvcmRlcikubWQ
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

55세 남자가 매일 독주 1 L를 마시는 알코올사용장애로 건강검진을 받으러 왔다. 다음 중 이 환자에서 가장 흔히 함께 나타날 소견은?

## 선택지

A. 변비
B. 중추신경계 NMDA 활성 감소
C. 빠른 교대운동 불능
D. 소구성 빈혈

## 해설

만성 과음은 소뇌 기능장애와 관련될 수 있어 빠른 교대운동을 원활히 수행하지 못하는 dysdiadochokinesia(C)가 보기 중 적절하다. 이는 손의 회내·회외 등 교대운동 검사로 평가하며 발뒤꿈치-정강이 협응검사와 같은 검사가 아니다. 만성 음주의 NMDA 적응과 급성 약리 효과도 구분해야 한다. C가 모든 만성 음주자에서 가장 흔하거나 특정 진단에만 나타난다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 빠른 교대운동장애를 발목-무릎-발목 검사로 설명한 오류와 나머지 소견의 빈도 단정을 제거했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005457
