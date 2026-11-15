---
type: qbank
schema_version: 1
id: medqa-us-validation-000989
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:315ed703926b71f3921a7cfa371a334cf73684814f9c7c2deebd5c1baca42528
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "급성호흡곤란증후군"
  - "패혈증"
  - "저일회호흡량 환기"
question_type: management
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4ieyEsSDtmLjtnaHqs6TrnoAg7Kad7ZuE6rWwIChBUkRTKSAoQWN1dGUgUmVzcGlyYXRvcnkgRGlzdHJlc3MgU3luZHJvbWUpLm1k
  - MDgg6rCQ7Je8L-2MqO2YiOymnSAoU2Vwc2lzKS5tZA
difficulty: complex
answer: D
publication_status: "withheld"
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

신우신염에 의한 패혈증으로 입원한 48세 여성이 급성 저산소성 호흡부전으로 삽관됐다. 흉부 X선에서 양쪽 폐에 새 음영이 보이고 심초음파나 임상평가에서 심부전으로 설명되지 않는다. PEEP 8 cmH₂O에서 PaO₂/FiO₂는 110이다. 초기 인공호흡기 전략으로 적절한 것은?

## 선택지

A. 실제 체중 기준으로 큰 일회호흡량을 적용한다
B. 고원압이 높아도 일회호흡량을 유지한다
C. PEEP 없이 큰 일회호흡량을 적용한다
D. 예측체중 기준 낮은 일회호흡량을 적용하고 고원압을 제한한다

## 해설

패혈증 이후 양측 폐음영과 중증 저산소혈증이 급성으로 생겨 ARDS에 해당한다. 폐보호 환기를 위해 예측체중 기준으로 낮은 일회호흡량을 적용하고 고원압을 제한한다. PEEP과 흡입산소 농도는 산소화와 혈역학에 맞춰 조절한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 중증 급성 호흡부전의 폐보호 환기 D는 유지한다. 영상이 없어 ARDS를 확진했다고 주장하지 않으며 항생제·스테로이드가 전혀 효과 없다는 단정을 제거한다.
- 공식/학회 근거: https://doi.org/10.1164/rccm.202311-2011ST

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000989
- 미국흉부학회 성인 ARDS 진료지침: https://pmc.ncbi.nlm.nih.gov/articles/PMC10870893/
