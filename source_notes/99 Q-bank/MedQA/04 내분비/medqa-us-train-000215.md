---
type: qbank
schema_version: 1
id: medqa-us-train-000215
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b8389636c0d6c7b669cadc4a97d8024d33e4d16a7a6863cef4d276ecd0bdb605
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "anorexia nervosa"
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveyEseyLneyaleu2gOynhOymnSAoQW5vcmV4aWEgTmVydm9zYSkubWQ
question_type: diagnosis
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-2.5-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

BMI 14.5 kg/m2인 17세 여학생이 신경성 거식증(anorexia nervosa) 치료를 위해 입원했습니다. 환자에게 정맥 수액을 투여하고 매일 200칼로리씩 증량하여 하루 1,600칼로리를 공급합니다. 치료 5일째 되는 날, 환자는 허약감, 혼란, 그리고 짙은 갈색 소변 증상을 보입니다. 환자 증상의 가장 가능성 있는 원인은 다음 중 어떤 임상 상태입니까?

## 선택지

A. 고칼슘혈증(Hypercalcemia)
B. 고마그네슘혈증(Hypermagnesemia)
C. 저인산혈증(Hypophosphatemia)
D. 티아민 결핍(Thiamine deficiency)

## 해설

정답은 C이다. 심한 영양결핍 후 재영양하면 인슐린 분비와 동화작용이 증가하여 phosphate·K·Mg가 세포 안으로 이동한다. 저인산혈증에 따른 ATP 고갈은 근쇠약·혼돈·횡문근융해와 갈색 소변을 유발할 수 있다. 인산염을 급격히 투여해서 혈중 phosphate가 감소하는 것이 아니다. thiamine 결핍 등도 함께 평가해야 하지만 제시된 소견 조합은 C가 가장 합당하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 재영양 때 인산염 투여 때문에 감소한다는 역기전을 인슐린 유발 세포내 이동으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000215
