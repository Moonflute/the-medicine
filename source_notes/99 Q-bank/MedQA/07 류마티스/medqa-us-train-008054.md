---
type: qbank
schema_version: 1
id: medqa-us-train-008054
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:59dc0d3c6fdc6a3dd95d21474ce5de49090763b0e74fc1837b10f242463ae2a4
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "sarcoidosis"
  - "erythema nodosum"
  - "bilateral hilar lymphadenopathy"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-ycoOycoeyiheymnSAoU2FyY29pZG9zaXMpLm1k
  - MTkg7ZS867aA6rO8L-qysOygiCDtmY3rsJggKEVyeXRoZW1hIE5vZG9zdW0pLm1k
question_type: diagnosis
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

41세 여성이 새로 발생한 발진으로 응급진료를 받으러 왔다. 양쪽 발목 통증 외에는 다른 국소 증상이 없다. 신체검사에서 양쪽 정강이 위에 수많은 붉은 피하 결절이 보인다. 전혈구검사에서 백혈구7,300/µL, Hct46.2%, Hb18.1 g/dL, MCV88 fL, 혈소판209(원문 단위 미표기)이며 흉부 방사선에서 폐는 깨끗하지만 양측 폐문 림프절병증이 있다. 가장 가능성 높은 진단은?

## 선택지

A. 콕시디오이데스진균증
B. 사르코이드증
C. Chlamydophila pneumoniae 감염
D. 히스토플라스마증

## 해설


양측 발목관절통, 결절홍반(erythema nodosum)과 양측 폐문림프절병증의 조합은 sarcoidosis의 급성 표현인 Löfgren syndrome을 지지하여 B이다. 결절홍반은 압통성 피하 결절을 보이는 panniculitis이며 여러 질환에서 생길 수 있다. 이 조합이 다른 감염을 절대 배제한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008054 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: erythema nodosum을결절성피부염이라 부른 용어 교정; 원문CBC값을 일괄 정상이라고 바꾼 부분 복구.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008054
