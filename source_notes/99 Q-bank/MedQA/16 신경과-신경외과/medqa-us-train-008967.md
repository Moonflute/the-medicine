---
type: qbank
schema_version: 1
id: medqa-us-train-008967
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8f2f7d4674c25e84ff895f6e74d7f3183115f82374a2cd40d63f6aea392f575f
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "idiopathic intracranial hypertension"
  - "pseudotumor cerebri"
  - "lumbar puncture"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tirnrsJzshLEg65GQ6rCc64K0IOqzoO2YiOyVlSAoSWRpb3BhdGhpYyBJbnRyYWNyYW5pYWwgSHlwZXJ0ZW5zaW9uKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 여성이 3주 동안 지속된 전두부 박동성 두통으로 응급실에 내원했다. 어제 양쪽 눈이 흐려지고 잠깐 복시가 있었다. 이부프로펜으로 약간만 호전되었다. 다낭성 난소증후군, 제2형 당뇨병, 얼굴 여드름이 있으며 메트포르민과 비타민 A를 복용한다. 외상, 근력저하, 감각 변화는 없다. 키 158cm, 체중 89kg, BMI 36kg/m²이다. 활력징후는 정상이고 주변 시야가 감소되어 있다. 안저검사 사진이 제시되어 있으며 뇌 MRI에서 빈 안장 소견이 보인다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 응급 개두술
B. 아세타졸아미드 치료
C. 뇌척수액 단락술
D. 요추천자

## 해설

비만·두통·일시적 복시·주변 시야저하와 empty sella는 두개내고혈압을 의심하게 하지만 확진 소견은 아니다. 누락된 안저사진에서 유두부종을 실제로 확인했다고 할 수는 없다. 종괴·폐쇄성 수두증과 정맥동혈전증 등을 적절한 영상으로 배제한 뒤 요추천자(D)로 개방압과 CSF 성상을 평가한다. 안압이 높다는 뜻은 아니며, vitamin A 관련 이차 두개내고혈압 가능성도 검토해야 한다. 반복 LP를 장기 확정치료로 삼지는 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 안압과 두개내압 혼동 및 비타민 A 복용 중 특발성 확정 오류 교정. LP D는 영상 안전성 확인 후 진단적 개방압 측정 목적.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC6166610/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008967
