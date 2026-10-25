---
type: qbank
schema_version: 1
id: medqa-us-train-002626
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:96d5fc0ec4ad328664da63c8d4ad7c098141c104a4439b09cbfe41a26805a3da
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "flail chest"
  - "paradoxical chest wall movement"
  - "blunt chest trauma"
question_type: diagnosis
related_disease_slugs:
  - MTEg7Jm46rO8L-uPmeyalCDqsIDsirQgKEZsYWlsIENoZXN0KS5tZA
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

43세 남성이 고속 교통사고 25분 후 응급실에 왔다. 호흡곤란과 심한 통증이 있고 맥박 130회/분, 호흡 35회/분, 혈압 90/40 mmHg이다. 왼쪽 어깨 높이에 피하기종이 있으며 왼쪽 흉벽 상부가 흡기 시 안쪽으로 움직이고 왼쪽 호흡음이 들리지 않는다. 기관삽관과 기계환기를 시행하고 큰 정맥로를 확보해 생리식염수를 주입한다. 다음 중 증상의 가장 가능성 높은 원인은?

## 선택지

A. 횡격막신경 마비
B. 심장눌림증
C. 흉골 골절
D. 연가양흉

## 해설

흡기 때 손상된 흉벽 일부가 안쪽으로 들어가는 역설적 운동은 여러 늑골의 다발성 골절로 독립된 흉벽 분절이 생기는 동요흉(flail chest)의 특징이다. 따라서 제시된 진단 중 D가 가장 적절하다. 호흡음 감소와 쇼크는 동반 폐좌상·기흉·혈흉 등도 평가해야 하는 소견이지만, 본문에 없는 X선의 대량 혈흉 소견을 만들어 이 문항의 답으로 설명해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 진단 D 동요흉을 묻는데 흉부 X선의 대량 혈흉과 흉관 처치를 설명한 오연결 해설을 해당 증례의 역설호흡으로 교체.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002626
