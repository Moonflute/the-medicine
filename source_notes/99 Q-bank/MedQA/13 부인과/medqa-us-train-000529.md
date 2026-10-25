---
type: qbank
schema_version: 1
id: medqa-us-train-000529
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1656cda780809058b6f7093fe0c0a9240f7af4ccced461e71bbb139a6071958f
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "menorrhagia"
  - "abnormal uterine bleeding"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-u5hOygleyDgSDsnpDqtoEg7Lac7ZiIIChBYm5vcm1hbCBVdGVyaW5lIEJsZWVkaW5nKS5tZA
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

14세 소녀가 월경 과다 및 월경 기간 연장으로 내원하였다. 1년 전 초경 이후 월경은 불규칙한 주기로 발생하였으며 8~9일간 지속되었다. 마지막 월경은 5주 전이었으며 혈전(clot)이 배출되었다. 심각한 질환에 대한 가족력이나 개인 병력은 없으며 복용 중인 약물도 없다. 키는 50백분위수, 체중은 20백분위수이다. 신체 검진상 이상 소견은 없다. 소변 임신 검사는 음성이다. 이 환자 증상의 가장 가능성 있는 원인은 무엇인가?

## 선택지

A. 자궁내막 용종(Endometrial polyp)
B. 부적절한 성선자극호르몬(gonadotropin) 생성
C. 폰 빌레브란트 인자(von Willebrand factor) 결함
D. 과도한 안드로겐 생성

## 해설

초경 후 초기에는 시상하부-뇌하수체-난소 축의 성숙과 성선자극호르몬 분비 조절이 완전하지 않아 무배란 주기가 흔하다. 황체기 프로게스테론의 규칙적 작용이 없어 불규칙하고 오래 지속되는 출혈이 생길 수 있으므로 B가 가장 적합하다. 이는 성선자극호르몬 과다분비에 의한 ‘기능성 난소 과다증’이라는 뜻이 아니다. 과다·장기 출혈에서는 빈혈과 출혈질환 등 다른 원인도 고려해야 하며 20백분위수 체중만으로 저체중을 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 부적절한성선자극호르몬생성을과다분비/난소과다증으로뒤집은해설오류교체. B유지.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000529
