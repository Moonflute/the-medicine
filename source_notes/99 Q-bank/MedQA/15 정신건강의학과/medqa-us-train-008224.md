---
type: qbank
schema_version: 1
id: medqa-us-train-008224
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f1f90dab437afa06c889517495e5f814aa060212c4951d9c908698b9e65d9758
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "conduct disorder"
  - "aggression"
  - "delinquent behavior"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-2SiO2WiSDsnqXslaAgKENvbmR1Y3QgRGlzb3JkZXIpLm1k
difficulty: standard
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
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

15세 남아가 “이상한” 행동을 평가받기 위해 부모와 함께 내원했다. 2주 전 고양이를 고문해 죽였고, 지난 1년 동안 자동차를 훔치고 학교에 불을 지른 혐의를 받았다. 특별한 질환은 없지만 학교 성적이 매우 나쁘고 교사와 자주 다투며 화를 낸다. 2년간 하루 담배 한 갑을 피웠다. 어머니는 약물로 조절되는 조현병을 10년째 앓고 있다. 정신상태검사에서 지남력, 말의 속도와 리듬, 사고과정, 단기·장기기억은 정상이나 주의력과 집중력이 저하되어 있다. 가장 가능성 높은 진단은?

## 선택지

A. 자폐스펙트럼장애
B. 적대적 반항장애
C. 품행장애
D. 반사회성 인격장애

## 해설

동물 학대·절도·방화 등 타인의 권리와 중대한 규범을 침해하는 행동은 품행장애에 부합한다. 진단은 지난 12개월 동안 적어도 세 기준, 그중 적어도 한 기준이 지난 6개월에 존재하는지 등을 확인하며, 모든 행동이 12개월 내내 지속돼야 한다는 뜻은 아니다. 15세이므로 성인 반사회성 인격장애로 진단하지 않고, 단순한 언쟁·반항보다 심각한 권리 침해 행동이 핵심이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008224

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 품행장애 증상이 반드시 12개월 이상 계속돼야 한다는 오류를 지난12개월의3기준·지난6개월1기준으로 교정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://publications.aap.org/pediatrics/article/155/6/e2024069880/201805/Reconsidering-the-Diagnosis-of-Conduct-Disorder-to
