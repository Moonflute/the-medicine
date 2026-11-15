---
type: qbank
schema_version: 1
id: medqa-us-train-001230
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5b66609aab22f486e61d467d1d4680e737a0f72ebc1856cb8d30aa66cd55297c
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "idiopathic intracranial hypertension"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tirnrsJzshLEg65GQ6rCc64K0IOqzoO2YiOyVlSAoSWRpb3BhdGhpYyBJbnRyYWNyYW5pYWwgSHlwZXJ0ZW5zaW9uKS5tZA
difficulty: complex
answer: A
publication_status: "withheld"
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

비만한 30세 여성이 두통, 박동성 이명, 시야 흐림으로 내원했다. 뇌 영상과 정맥 평가에서 다른 원인이 배제됐고, 뇌척수액 성분은 정상이지만 개방압이 높아 특발성 두개내고혈압을 진단했다. 아세타졸아미드의 이상반응으로 환자에게 안내할 것은?

## 선택지

A. 신장 결석
B. 횡문근융해증
C. 백혈구 수 감소
D. 췌장염

## 해설

아세타졸아미드는 탄산탈수효소 억제로 중탄산 배설을 늘린다. 소변이 알칼리화되고 신장 결석이 생길 수 있다. 손발 저림이나 대사성 산증도 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. acetazolamide가 H+배설을 증가시켜 결석이라는 반대기전 정정. 신장결석 A 유지.
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=240ab24b-3124-4805-80c2-36dd1945e3b3

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001230
