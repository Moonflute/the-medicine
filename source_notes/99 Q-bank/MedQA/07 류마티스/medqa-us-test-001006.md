---
type: qbank
schema_version: 1
id: medqa-us-test-001006
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:374aa0c8bb078444a63c9020d2f6357945837ebdb9174a4eb878bc13aa329501
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "육아종성 다발혈관염"
  - "ANCA 혈관염"
  - "폐신장 증후군"
related_disease_slugs:
  - MDUg7Iug7J6lL-2PkOyLoOyepSDspp3tm4TqtbAgKFB1bG1vbmFyeS1SZW5hbCBTeW5kcm9tZSkubWQ
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

55세 남성이 피가 섞인 코 분비물과 호흡곤란으로 진료를 받으러 왔다. 두 달 동안 식이 변화 없이 4 kg(8.8 lb)이 감소했고 1년간 왼쪽 무릎의 경도에서 중등도 관절통이 있었다. 코궤양과 양쪽 폐 전반의 수포음이 있었으며 혈색소 12.9 g/dL, ESR 35 mm/h, CRP 14 mg/dL, 크레아티닌 3.09 mg/dL였다. 코르티코스테로이드 비강분무제와 경구 항생제를 처방했지만 2주 후 호전되지 않았다. 진단을 확인하는 데 가장 유용한 검사는?

## 선택지

A. 항시트룰린화 단백 항체
B. 적혈구침강속도
C. 항히스톤 항체
D. 항호중구 세포질 항체

## 해설


코궤양·비출혈성 분비물과 폐 증상, 신기능 저하는 GPA 등 ANCA 관련 혈관염을 의심하게 한다. 선지 중 ANCA(D)가 가장 유용한 혈청검사이다. PR3/MPO 항원특이 검사와 임상·조직 평가를 함께 해석하며 ANCA 하나가 확진을 대신하지 않는다. 본문만으로 폐출혈이 확정된 것도 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-test-001006` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: ENT·폐·신장 침범에서 GPA 관련 ANCA D 유지. 미제시 폐출혈을 단정하고 항체만으로 확진한다는 해설을 교정.
- 범위: content-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001006
