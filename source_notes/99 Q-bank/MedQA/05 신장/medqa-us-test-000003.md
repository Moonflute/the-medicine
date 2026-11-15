---
type: qbank
schema_version: 1
id: medqa-us-test-000003
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:096376a44703c5fcd329122135ca34a2641ee338230bde66368dba9ce55068ec
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "콜레스테롤 색전증"
  - "그물울혈반"
  - "심장도관술 합병증"
related_disease_slugs:
  - MDUg7Iug7J6lL-yLoOuPmeunpSDtmIjsoITsg4nsoITspp0gKFJlbmFsIEFydGVyeSBUaHJvbWJvZW1ib2xpc20pLm1k
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2xvcGlkb2dyZWwubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

불안정 협심증으로 관상동맥 중재술을 받은 61세 남성이 2주 뒤 소변량 감소와 권태감으로 내원했다. 발에 자주색 그물 모양 변색이 보인다. 백혈구 16,400/µL(호산구 11%), 혈청 크레아티닌 4.2 mg/dL이다. 신장 생검에서 작은 동맥 내에 바늘 모양으로 빈 틈이 보인다. 신손상의 원인은?

## 선택지

A. 신유두 괴사
B. 콜레스테롤 색전증
C. 호산구성 육아종증 다발혈관염
D. 결절성 다발동맥염

## 해설


혈관 시술 뒤 급성 신손상, 그물 모양의 피부 변색, 호산구증가가 함께 나타나면 콜레스테롤 색전증을 의심한다. 죽상판에서 떨어진 콜레스테롤 결정이 작은 동맥을 막는다. 조직 표본에서는 결정이 녹아 빠져나간 자리에 바늘 모양의 틈이 남는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 도관술 2주 뒤 AKI·그물울혈반·호산구증가와 혈관 내 콜레스테롤 틈은 B 콜레스테롤 색전증에 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000003
