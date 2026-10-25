---
type: qbank
schema_version: 1
id: medqa-us-validation-000338
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:fb697491c7b8f528410844620d3c5b8795e5262af9482a61fd573815ec79a57b
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "뇌사"
  - "장기기증"
  - "법적 사망"
  - "Brain death"
question_type: ethics
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsgqwgKEJyYWluIGRlYXRoKS5tZA
difficulty: standard
answer: B
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

19세 여성이 교통사고 1시간 후 구급차로 응급실에 왔다. 진정제 없이 인공호흡 중이며 활력징후는 정상 범위다. 글래스고 혼수척도는 3점이고 외상외과 의사와 신경과 의사가 뇌사로 판단했다. 검사실 이상은 없으며 주 장기기증 등록부에서 장기기증자로 등록된 사실이 확인되었다. 아버지는 몸이 따뜻하고 심장이 정상적으로 뛰므로 아직 생명이 순환하고 있다며 장기기증 제안에 충격을 받았다. 가족에게 공감하면서 의사가 할 가장 적절한 대답은?

## 선택지

A. “아버님이 동의하신 후에만 장기를 적출할 수 있습니다.”
B. “뇌사는 심장이 뛰지 않는 경우와 마찬가지로 법적 사망으로 간주됩니다.”
C. “회복할 가능성은 매우 낮습니다.”
D. “생명유지장치를 끊어야 사망하게 됩니다.”

## 해설

뇌사는 뇌간을 포함한 뇌 전체 기능의 영구적 소실을 정해진 절차로 확인한 상태이며, 유효하게 판정되면 미국 출제 맥락에서 법적 사망에 해당하므로 B가 적절하다. 인공호흡과 순환이 유지되어 몸이 따뜻하고 심장이 뛸 수 있어도 이 판정과 모순되지 않는다. 다만 GCS 3만으로 뇌사를 판정할 수 없으며 원인·회복 불가능성, 교란 요인 배제, 뇌간반사와 무호흡 검사 등 정식 요건을 충족해야 한다. 문항은 전문의의 적절한 판정이 완료되었다는 전제의 가족 설명을 묻는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 법적으로 유효한 정식 뇌사 판정을 전제로 한 설명 B를 유지한다. GCS 3이나 따뜻한 몸·심박만으로 사망 여부를 정하지 않는다는 점을 명확히 한다.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC10791061/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000338
