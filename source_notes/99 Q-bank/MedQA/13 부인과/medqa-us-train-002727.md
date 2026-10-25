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

임신 22주인 27세 여성(임신 3회, 출산 1회)이 산전 진료를 받으러 왔다. 현재 임신은 합병증 없이 진행 중이며, 산전 방문에 성실히 참석하고 질병 선별검사, 혈액검사, 식이와 운동에 대한 의사의 조언을 따랐다. 이전 임신 중 한 번은 임신 24주에 조기진통이 있었고, 다른 한 번은 임신 22주에 자연유산을 했다. 매일 엽산이 포함된 종합비타민을 복용한다. 체온은 37.2°C, 혈압은 109/61 mmHg이다. 골반검사에서 자궁 크기는 임신 20주에 해당했다. 태아 심음은 정상이다. 초음파에서 자궁경부 길이가 20 mm로 짧게 측정되었다. 다음 중 가장 적절한 관리 단계는?

## 선택지

A. 자궁경부봉합술
B. 자궁경부 페사리
C. 정맥 베타메타손
D. 질 프로게스테론

## 해설

22주의 경부 20 mm와 중기 임신 소실·조기진통력은 고위험으로 봉축술(A)을 고려한다. 감염·파수·수축 및 과거 분만 양상을 평가한다. NICE는 이 범주에서 질 프로게스테론 또는 봉축 선택을 권고하므로 D가 모든 상황에서 무효하거나 봉축이 유일한 대안이라고 일반화하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 이전중기손실+짧은경부에서봉축유효하나모든지침에서유일대안이라고하지않음.
- https://www.nice.org.uk/guidance/ng25/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002727
