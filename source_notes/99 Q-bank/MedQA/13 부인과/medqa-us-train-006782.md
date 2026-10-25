---
type: qbank
schema_version: 1
id: medqa-us-train-006782
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9d8958728d319e30bf350616c32e6bd2cc7e374766d263c9a9ffe709d48872ed
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "응급피임"
  - "복합 호르몬 피임"
  - "배란 억제"
question_type: mechanism
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geuCtOyepey5mCAoSW50cmF1dGVyaW5lIERldmljZSkubWQ
difficulty: standard
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
  - ZHJ1ZzoxMSDsgrDrtoDsnbjqs7zCt-yGjOyVhC9FdGhpbnlsZXN0cmFkaW9sLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 여성이 2일 전 남자친구와 보호되지 않은 성관계를 한 후 주치의를 방문했다. 남자친구와 일부일처제지만 임신을 매우 걱정하며 응급피임을 요청한다. 혈액 hCG는 음성이다. 주치의는 에티닐에스트라디올 100μg과 레보노르게스트렐 0.5mg을 12시간 간격으로 복용하도록 처방했다. 이 복합 처방의 가장 가능성 높은 작용기전은?

## 선택지

A. 배란 억제 또는 지연
B. 자궁경부 점액을 끈끈하게 하여 정자 포획
C. 난관 수축으로 정자 이동 억제
D. 황체 기능 방해

## 해설

에티닐에스트라디올 100 μg과 레보노르게스트렐 0.50 mg을 복용하고 12시간 뒤 같은 용량을 반복하는 Yuzpe 복합 응급피임법의 주된 작용은 배란 억제 또는 지연(A)이다. 황체 기능 방해를 주된 기전으로 설명하지 않는다. WHO와 CDC에 이 처방이 제시되지만 LNG 단독 또는 UPA는 복합제보다 오심·구토가 적다는 점과 구분한다. 성관계 2일 뒤 음성 hCG만으로 그 성관계에 따른 임신 가능성을 배제할 수는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Yuzpe 용량과 주된 배란 억제/지연 기전을 WHO·CDC로 확인하고 황체 억제라는 부정확한 설명을 제거했다.
- https://www.who.int/news-room/fact-sheets/detail/emergency-contraception
- https://www.cdc.gov/contraception/hcp/usspr/emergency-contraception.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006782
