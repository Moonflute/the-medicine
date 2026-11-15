---
type: qbank
schema_version: 1
id: medqa-us-train-000165
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a42f38453ebc55f5dd742ad2b5be683ef38dcc68dbb7be96cb1b2cdc9df3c835
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "hot flashes"
  - "insomnia"
  - "dyspareunia"
  - "vaginal dryness"
  - "hyperlipidemia"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-u2iOuptCDsnqXslaAgKEluc29tbmlhIERpc29yZGVyKS5tZA
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9HYWJhcGVudGluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

54세 여성이 안면홍조와 야간 발한 때문에 잠을 못 잔다. 과거 산후출혈로 전자궁절제술을 받았다. 전신 호르몬 치료 금기가 없고 이를 원한다. 적절한 호르몬 치료는?

## 선택지

A. 프로게스테론 단독 요법
B. 전신 에스트로겐 단독 요법
C. 자궁내막 보호를 위한 에스트로겐·프로게스토겐 필수 병용
D. 질 에스트로겐 단독으로 심한 안면홍조 치료

## 해설

자궁이 없는 환자는 자궁내막 보호를 위한 프로게스토겐이 일반적으로 필요 없다. 전신 에스트로겐이 혈관운동 증상에 효과적이고, 국소 질 에스트로겐은 주로 비뇨생식기 증상에 사용한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 자궁절제 후 프로게스틴 불필요라는 선택 근거와 위험 개별화 보강.
- https://www.acog.org/womens-health/faqs/hormone-therapy-for-menopause

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000165
- https://www.e-jmm.org/DOIx.php?id=10.6118%2Fjmm.25103
