---
type: qbank
schema_version: 1
id: medqa-us-train-002127
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0823f8678ae7eb37dffe67ff220137f4292683dea86aac01b1f123e0c0c82da1
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "ocular chemical burn"
  - "acid injury"
  - "corneal injury"
  - "irrigation"
question_type: management
related_disease_slugs:
  - MTgg7JWI6rO8L-2ZlO2Vme2ZlOyDgSAoY2hlbWljYWwgYnVybikubWQ
  - MTgg7JWI6rO8L-yViOq1rCDsmbjsg4EubWQ
difficulty: standard
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

32세 의사가 수영장을 청소하던 중 염산이 왼쪽 눈에 튀었다. 즉시 통증과 작열감을 느꼈고 눈물이 많이 나며 눈을 거의 뜰 수 없다. 건선 병력이 있다. 원시가 있어 독서와 컴퓨터 작업을 할 때 안경을 쓴다. 필요할 때 국소 칼시포트리엔과 국소 트리암시놀론을 사용한다. 소아기에 편도절제술을 받은 것 외에 수술력은 없다. 결혼했으며 건강한 아들이 한 명 있다. 어머니는 그레이브스병을 앓고 있다. 저녁 식사 때 와인 한 잔을 마시지만 담배나 기분전환용 약물은 사용하지 않는다. 다음 중 가장 적절한 초기 처치는?

## 선택지

A. 환자의 안과의사에게 연락한다
B. 즉시 응급실로 간다
C. 알칼리 용액으로 세척한다
D. 수돗물로 세척한다

## 해설

화학물질이 눈에 튀면 즉시 풍부한 깨끗한 물로 세척하여 노출 시간을 줄이는 것이 우선이며 D가 적절하다. 생리식염수 등 적절한 관류액이 바로 없더라도 수돗물을 이용하고 진료 연락 때문에 관류를 늦추지 않는다. 산성 노출에 알칼리 용액을, 알칼리 노출에 산성 용액을 넣어 중화하려 하면 추가 손상을 일으킬 수 있으므로 피한다. 세척 후 안과 평가와 안정된 안구표면 pH 확인이 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 알칼리 화상에는 알칼리 용액을 쓴다는 잘못된 설명을 교정. 산·알칼리를 서로 반응시켜 중화하지 않고 즉각 관류한다.
- 공식/학회 근거: https://eyewiki.aao.org/Chemical_%28Alkali_and_Acid%29_Injury_of_the_Conjunctiva_and_Cornea

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002127
