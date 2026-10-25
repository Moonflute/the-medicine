---
type: qbank
schema_version: 1
id: medqa-us-validation-000931
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:84d3d802a5ffac1ad2e811d91377f255396423fa6f6355b9dda751dc489a6d96
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "출혈성 쇼크"
  - "노르에피네프린"
  - "말초 허혈"
question_type: mechanism
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTm9yZXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmFzb3ByZXNzaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

54세 남성이 고속 자동차 충돌 사고 후 응급실로 이송되었다. 복부가 단단하고 팽창했으며 반발통이 있고, FAST 검사에서 간신오목에 큰 저에코 띠가 보였다. 생리식염수 1 L를 투여했지만 의식이 급격히 악화되어 무반응이 되었고 맥박 149회/분, 혈압 70/40 mm Hg였다. 추가 수액과 함께 약물을 투여한 뒤 맥박 80회/분, 혈압 120/80 mm Hg로 회복되었다. 수술실로 이동하던 중 네 사지 말단에 통증이 생기고 손발가락이 파랗고 차가워졌다. 이 합병증을 일으킨 약물은?

## 선택지

A. 에피네프린
B. 노르에피네프린
C. 바소프레신
D. 에페드린

## 해설

노르에피네프린(B)은 강한 알파아드레날린성 혈관수축으로 혈압을 올리고 압수용체 반사에 의해 심박수를 낮출 수 있다. 이 환자의 혈압 상승·빈맥 감소와 말초 청색증은 그 작용에 부합한다. 다만 말단 허혈은 저관류와 다른 승압제에서도 생길 수 있어 약제에 특이적인 소견은 아니다. 출혈성 쇼크의 기본 치료는 신속한 출혈 통제와 적절한 혈액제제 소생이며, 승압제만으로 이를 대체해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 노르에피네프린 B의 강한 혈관수축과 반사성 심박수 감소라는 단서를 유지하되 출혈성 쇼크의 기본 치료를 승압제로 오인하지 않게 한다.
- 공식/학회 근거: https://doi.org/10.1186/s13054-023-04327-7

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000931
