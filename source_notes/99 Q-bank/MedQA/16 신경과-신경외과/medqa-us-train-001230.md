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

30세 비만 여성 환자가 새로 발생한 두통, 이명, 시야 흐림을 주소로 내원하였다. 이부프로펜(ibuprofen) 복용과 빛 차단은 증상을 완화하지 못했다. 최근 외상, 발열, 오한, 피로의 병력은 없다. 과거력상 메트포르민(metformin)으로 조절 중인 제2형 당뇨병이 있다. 평생 시력은 20/20이었으며 안경이 필요한지 궁금해한다. 건강한 학령기 자녀 2명이 있다. 체온은 36.8°C, 심박수는 90회/분, 호흡수는 15회/분, 혈압은 135/80 mm Hg이다. 신체 검진상 외측 안구 운동 감소가 관찰되며, 안저 검사 소견은 사진과 같다. 검사실 검사 결과는 정상 범위 내에 있고 뇌 영상 검사도 정상이다. 요추 천자 결과 개방 압력(opening pressure) 상승과 정상적인 뇌척수액(CSF) 성분이 확인되었다. 이 질환을 치료하는 데 사용되는 약물의 부작용으로 옳은 것은?

## 선택지

A. 신장 결석
B. 횡문근융해증
C. 백혈구 수 감소
D. 췌장염

## 해설

비만·두통/이명·시각증상과 정상 뇌영상/CSF성분·개방압상승은 IIH를 지지한다. 아세타졸아미드는 탄산탈수효소를 억제해 근위세뇨관 중탄산 재흡수를 감소시키고 중탄산뇨·소변알칼리화를 일으켜 결석 위험(A)을 높일 수 있다. H+배설 증가가 핵심인 약물이 아니며 혈중 중탄산 감소/대사산증과도 연관된다. 사진이 없어도 제공된검사로 약물/부작용을 판단 가능하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. acetazolamide가 H+배설을 증가시켜 결석이라는 반대기전 정정. 신장결석 A 유지.
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=240ab24b-3124-4805-80c2-36dd1945e3b3

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001230
