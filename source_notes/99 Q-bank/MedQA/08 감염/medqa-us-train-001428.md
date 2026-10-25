---
type: qbank
schema_version: 1
id: medqa-us-train-001428
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:91febe0999f23055105b7cbf67cb38cb51139ef59393b3a7c3c1f8376db284b0
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "disseminated histoplasmosis"
  - "choroiditis"
  - "immunosuppression"
related_disease_slugs:
  - MDgg6rCQ7Je8L-ynhOq3oC5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

68세 남성이 6개월 동안 지속된 발열, 기침, 쇠약, 야간 발한 및 식욕부진으로 내원했다. 그동안 체중이 7.5 kg (16.5 lb) 감소했다. 호흡곤란, 콧물, 코막힘, 심계항진, 흉통 또는 소화기 증상은 없다. 9개월 전 2년 형기를 마치고 출소했다. 체온은 38.1°C (100.6°F), 맥박은 84회/분, 호흡수는 16회/분, 혈압은 122/80 mm Hg이다. 간비대와 전신 림프절병증이 있고 흉부 청진에서 양측 폐야 전체에 미만성 수포음이 들린다. 직접 검안경검사에서 뒤극에 경계가 불분명한 노란색 0.5–1.0 mm 병변 3개가 보인다. 흉부 X선이 제시되어 있고 정제 단백 유도체 투베르쿨린 피부검사는 음성이다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 만성 히스토플라스마증
B. 랑게르한스세포 조직구증
C. 결핵
D. 기관지폐포암

## 해설


교정시설 체류력, 장기 발열·야간발한·체중감소와 간비대·전신 림프절병증, 안저의 작은 황색 병변은 파종성 결핵과 맥락막 결핵결절을 시사하여 C가 가장 부합한다. 중증·파종 결핵에서는 TST가 음성일 수 있으므로 음성 결과가 배제 근거가 되지 않는다. 흉부영상은 실제 제공되지 않아 그 영상에 속립성 음영이 있다고 단정하지 않았으며, 진단은 미생물 검사를 포함해 확인해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001428 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 누락 흉부영상 소견은 꾸미지 않고 문장으로 제공된 맥락·맥락막 병변과 음성TST 한계를 설명.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/tb/hcp/testing-diagnosis/tuberculin-skin-test.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001428
