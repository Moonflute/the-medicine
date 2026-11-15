---
type: qbank
schema_version: 1
id: medqa-us-train-002727
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:43db726efcd9be7f1c7ac589d14c784c59e4c0af2d92f1ebe73c22f6b2546ff7
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "cervical insufficiency"
  - "short cervix"
  - "recurrent second-trimester pregnancy loss"
  - "cerclage"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2gSDqsr3rtoAg7JuQ7ZiVIOqysOywsOyIoCAoQ2VydmljYWwgQ2VyY2xhZ2UpLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0JldGFtZXRoYXNvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

자연 조산으로 임신 30주에 분만한 병력이 있는 산모가 임신 21주 단태임신으로 왔다. 질식 초음파에서 경부 길이 19 mm, 경부는 닫혀 있고 수축·파수·감염은 없다. 조산 예방을 위해 고려할 수술은?

## 선택지

A. 초음파 소견에 따른 자궁경부봉축술
B. 경부 타진 후 반복 소파술
C. 당일 제왕절개
D. 자궁근종절제술

## 해설

이전 자발 조산이 있고 임신 중기에 질식 초음파 경부 길이가 25 mm 미만이면 봉축술을 고려할 수 있다. 과거력과 현재 검사 결과를 종합하고 비수술적 선택도 상담한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 이전중기손실+짧은경부에서봉축유효하나모든지침에서유일대안이라고하지않음.
- https://www.nice.org.uk/guidance/ng25/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002727
- https://doi.org/10.1002/ijgo.13835
