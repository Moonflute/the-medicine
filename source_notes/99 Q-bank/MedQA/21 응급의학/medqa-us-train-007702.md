---
type: qbank
schema_version: 1
id: medqa-us-train-007702
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3c98786f90d4c478ffc6b79934744c53c70a460fedb6dbadd8e57a64a224f4a8
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "Jehovah's Witness"
  - "emergency consent"
  - "blood transfusion in minors"
question_type: ethics
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 남자와 9세 아들이 고속 교통사고 후 응급실에 왔다. 아버지는 안전벨트를 착용한 운전자였고 의식은 있다. 맥박 135회/분, 혈압 76/55 mm Hg, 헤모글로빈 5.9 g/dL이다. 아들은 몸 여러 부위에 타박상과 의식소실이 있으며 응급실에서도 반응이 없다. 초음파를 이용한 집중평가에서 여러 장기 열상과 내부 출혈이 의심되어 의사는 아들을 응급 수술을 위해 수술실로 옮기기로 했다. 아버지는 자신과 아들이 여호와의 증인이므로 수혈을 원하지 않는다고 말한다. 의사가 아이의 친어머니에게 전화하자 어머니도 같은 종교적 신념을 확인하며 다른 의료 결정을 내리기 전에 자신이 도착할 때까지 기다려 달라고 한다. 의사가 취해야 할 가장 적절한 다음 조치는?

## 선택지

A. 아들의 치료를 위해 병원 윤리위원회에 자문
B. 수혈 없이 아들 수술 진행
C. 아들 치료를 위한 법원 명령 신청
D. 아들에게 농축적혈구를 수혈하되 아버지에게는 수혈하지 않음

## 해설

아이에게 생명을 위협하는 출혈이 있고 기다릴 수 없다면 부모의 종교적 거부나 어머니의 도착 대기 때문에 필요한 응급 수혈을 지연해서는 안 된다. 반면 의사결정능력이 있는 성인인 아버지의 충분한 설명에 근거한 수혈 거부는 존중한다. 따라서 출제 조건에서는 D가 적절하다. 아버지는 의식이 있다는 사실만으로 끝내지 않고 판단 능력을 평가해야 하며, 소아의 치료에 관한 법률 자문과 법원 절차는 가능한 범위에서 병행하되 긴급한 생명 구호를 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 응급 미성년자의 생명 유지 치료와 의사결정능력 있는 성인의 수혈 거부를 구별하는 D를 유지하고 법적 절차를 과도하게 일반화하지 않는다.
- 공식/학회 근거: https://www.facs.org/about-acs/statements/recommendations-for-surgeons-caring-for-patients-who-are-jehovah-s-witnesses/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007702
