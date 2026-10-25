---
type: qbank
schema_version: 1
id: medqa-us-train-004922
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1b66adfaede243f230224ed1d82ddd68f76f62521a3df0b441933fe756fee5c2
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "알파 지중해빈혈"
  - "태아수종"
  - "제대천자"
question_type: management
related_disease_slugs:
  - MDkg7ZiI7JWhL-yngOykke2VtCDruYjtmIggKFRoYWxhc3NlbWlhKS5tZA
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

임신 25주인 26세 임신 2회·출산 1회의 여자가 무증상으로 내원했다. 이전 초음파와 삼중검사는 정상이었고 HIV, B형간염, C형간염은 음성이다. 산모와 배우자는 모두 사르데냐계이며, 가족 중 신생아 사망과 황달·피로·담낭 문제를 보인 사람이 있다. 혈색소 전기영동에서 산모 HbH가 2%이고 배우자는 정상이다. 태아 초음파에서 복수, 간비대, 흉수가 보이며 중뇌동맥 최고 수축기 속도가 상승했다. 다음 중 이 경우 진단과 치료 목적으로 모두 시행할 수 있는 시술은?

## 선택지

A. 태아경검사
B. 양수천자
C. 제대천자
D. 경피적 태아 흉강천자

## 해설

태아수종과 MCA 최고수축기속도 상승은 중증 태아빈혈을 의심하게 한다. 제대천자(C)로 태아 혈색소를 직접 평가하고 같은 경로로 자궁내 수혈을 시행할 수 있다. 부모 전기영동만으로 태아 알파지중해빈혈 유전형을 확정할 수 없으며 유전자검사는 별도로 고려한다. 침습 태아치료 전문센터에서 위험·이득을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 빈혈 위험에 따른 제대혈 채혈/수혈을 설명하고 유전형 확정 과장 삭제.
- https://publications.smfm.org/publications/586-society-for-maternal-fetal-medicine-clinical-guideline-8/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004922
