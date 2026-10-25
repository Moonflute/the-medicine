---
type: qbank
schema_version: 1
id: medqa-us-train-000968
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6b03db49abb4c2207cb1b8b2ab821931961d9442b34c236745d3297bbb1088ac
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "major depressive disorder"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbWl0cmlwdHlsaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EaWF6ZXBhbS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Fc2NpdGFsb3ByYW0ubWQ
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 남성이 지난 3개월간 지속된 전신 피로감으로 내원하였다. 이 기간 동안 과제에 집중하기 어렵고 수업 시간에 졸기도 하여 대학 성적이 떨어졌다. 그는 더 이상 밴드에서 드럼을 연주하지 않으며 가족 행사에도 참석하지 않고 있다. 체온은 37°C, 맥박은 60회/분, 혈압은 130/80 mmHg이다. 신체 검진상 이상 소견은 없다. 정신 상태 검사에서 그는 자신의 기분을 '괜찮다'고 표현한다. 그는 무표정한 정동(flat affect)을 보인다. 자살 사고의 증거는 없다. 말하기 속도는 느리고 리듬은 단조로우며 사고 과정은 체계적이다. 망상이나 환각은 없다. 다음 중 가장 적절한 다음 치료 단계는 무엇인가?

## 선택지

A. 에스시탈로프람(Escitalopram) 치료
B. 안심시키기(Reassurance)
C. 디아제팜(Diazepam) 치료
D. 아미트립틸린(Amitriptyline) 치료

## 해설

흥미·활동 감소, 피로, 집중력 저하와 느린 말은 우울 삽화를 시사한다. 제시된 치료 중 SSRI인 에스시탈로프람이 적절하다. 다만 현재 자살사고가 관찰되지 않는다고 위험이 없다는 뜻은 아니고, 정상 신체진찰만으로 의학적 원인이나 물질 요인이 모두 배제되지도 않는다. 실제 진료에서는 진단 기준과 감별, 자살위험을 추가로 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000968

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 신체진찰 정상/자살사고 부인만으로 신체 원인 및 자살 위험이 배제됐다고 한 설명을 교정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
