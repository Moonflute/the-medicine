---
type: qbank
schema_version: 1
id: medqa-us-train-005226
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7b78734a3cc3313d540548e91b829d6aae7c4f5ff6b0f38b602bb34e8e6402cf
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "말초성 성조숙증"
  - "성조숙증"
  - "난소 에스트로겐 분비"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7ISx7KGw7IiZ7KadIChTZXh1YWwgUHJlY29jaW91c25lc3MpLm1k
difficulty: complex
answer: C
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

3세 여아가 6개월 동안 유방 발달과 음모가 자라 내원했다. 유방은 태너 3단계, 음모는 2단계이며 GnRH 자극검사에서 LH 반응이 5 IU/L 미만이다. 진단을 위한 다음 단계는?

## 선택지

A. LH 반응을 보기 위해 GnRH 자극검사 반복
B. LH:FSH 비율을 보기 위해 GnRH 검사
C. 에스트라디올 수치를 보기 위해 류프로라이드 검사
D. FSH 수치를 보기 위해 GnRH 검사

## 해설

진행한 유방 발달이 있지만 GnRH 자극 LH가 낮은 여아에서도 중추성 성조숙증을 완전히 배제할 수 없다. Leuprolide 자극 후 지연 estradiol 반응(C)은 전체 시상하부–뇌하수체–성선 축 활성의 보조 평가에 쓰일 수 있다. 단일 LH 경계값은 검사법·채혈 시점의 영향을 받는다. Estradiol 상승만으로 말초성, 정상만으로 중추성이라고 분류하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Leuprolide 후 estradiol 측정은 중추성 축 활성의 보조 확인이지 상승=말초성이라는 기존 설명이 아님을 교정.
- https://pubmed.ncbi.nlm.nih.gov/26094907/
- https://www.endocrine.org/clinical-practice-guidelines/central-precocious-puberty

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005226
