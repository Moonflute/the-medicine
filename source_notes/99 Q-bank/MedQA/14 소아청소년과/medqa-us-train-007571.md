---
type: qbank
schema_version: 1
id: medqa-us-train-007571
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f187db8c3f29babb485118d2e4feccd5fd46f43829d04f408aef07fe830cde8a
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "상염색체 열성 다낭성 신장병"
  - "폐 저형성"
  - "포터 연속체"
  - "신장 집합관 낭성 확장"
  - "Autosomal recessive polycystic kidney disease"
question_type: mechanism
related_disease_slugs:
  - MDUg7Iug7J6lL-uLpOuCreyEsSDsvantjKUg7KeI7ZmYIChQb2x5Y3lzdGljIEtpZG5leSBEaXNlYXNlKS5tZA
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0JldGFtZXRoYXNvbmUubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

신생아가 소생술 후 신생아 중환자실로 이송되었다. 사지 변형, 낮은 귀, 납작한 코가 있고 임신 34주에 정기적인 산전 관리를 받은 건강한 산모에게서 태어났다. 소생술 중 산소화 유지가 어려웠고 적절한 처치에도 산소포화도를 유지하기 어렵다. 다음 중 이 환자의 증상을 일으킨 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 염색체 이상
B. 신장 집합관의 낭성 확장
C. 베타메타손 투여 실패
D. PKD1 유전자 돌연변이

## 해설

저위 귀·납작한 코·사지 변형과 교정하기 어려운 신생아 호흡부전은 양수과소에 따른 포터 연쇄의 폐저형성을 시사한다. 선택지 B의 집합관 낭성 확장은 상염색체 열성 다낭신 등 태아 신장 질환과 연결되며, 신기능 저하·태아 소변 감소로 양수가 줄어 폐 발달이 영향을 받을 수 있다. 신장 낭종이 단순히 폐를 직접 막는다는 뜻이 아니며 PKD1 관련 상염색체 우성 다낭신과 구분한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 집합관 확장이 직접 폐 발달을 막는다고 단순화한 설명에 태아 신기능·양수과소·폐저형성의 연결을 복원했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007571
