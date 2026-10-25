---
type: qbank
schema_version: 1
id: medqa-us-train-001702
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:70cc7831045c9ba4a3f46d2c2dcace4ff47ceba5efcfe17bd1d0e780fdc4b379
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "malignant pleural mesothelioma"
  - "hospice eligibility"
  - "life expectancy"
  - "mesothelioma"
related_disease_slugs: []
question_type: ethics
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

67세 남성이 4개월 동안의 체중 감소, 흉통, 마른기침 및 운동 시 호흡곤란으로 내원했다. 45년 동안 조선소에서 일하다 은퇴했고 배우자 사망 후 딸과 살고 있다. 흡연력은 없다. 체온은 38.1°C (100.6°F), 맥박은 85회/분, 혈압은 134/82 mm Hg이다. 왼쪽 폐기저부에서 미세 수포음이 들리고 오른쪽 폐기저부 호흡음은 없다. 흉부 CT에서 흉막 비후와 오른쪽 혈흉이 보이며 흉강천자에서 중피종을 확인했다. 예후가 나쁘고 평균 생존기간이 1년이라고 설명하자 방사선치료와 가정 호스피스를 원하지만 보험 적용 여부는 확실하지 않다. 의료 의사결정 대리인으로 지정된 아들은 반대한다. 생전 유언은 없으나 심장이 멈추면 심폐소생술을 원한다고 말한다. 다음 중 호스피스 이용을 제한하는 것은 무엇인가?

## 선택지

A. 심폐소생술 희망
B. 건강보험 적용 불확실
C. 아들의 반대
D. 기대 여명

## 해설

정답은 D이다. 미국 Medicare hospice 급여에서는 질환이 통상 경과를 따를 때 기대여명6개월 이하라는 의사의 인증이 필요하다. 문항의 개인 예후를1년으로 전제하면 D가 그 조건에 맞지 않는다. 다만 중피종 전체의 평균생존1년이 모든 환자의 개별 hospice 부적격을 자동 뜻하지는 않는다. 의사결정능력이 있는 환자의 치료 선택을 대리인 아들의 반대만으로 뒤집지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 기대여명1년이 제한요인이 아니라는 해설의 자기모순을 교정하고 개별 예후 인증 기준 명시.
- https://www.cms.gov/medicare/payment/fee-for-service-providers/hospice

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001702
