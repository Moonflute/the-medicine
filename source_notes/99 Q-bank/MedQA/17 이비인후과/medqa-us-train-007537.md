---
type: qbank
schema_version: 1
id: medqa-us-train-007537
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c4a96f8d3d6aa8cd41d4120ae2c12792fd42281a3c2c142859a5cac0a9ab3ff4
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "알레르기 비염"
  - "비강 내 코르티코스테로이드"
  - "만성 콧물"
  - "재채기"
question_type: management
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVjOugiOultOq4sCDruYTsl7wgKEFsbGVyZ2ljIFJoaW5pdGlzKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0xvcmF0YWRpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 남자가 수개월 동안 지속된 콧물, 재채기, 기침으로 일차진료의를 찾아왔다. 기운이 없거나 피곤하지는 않지만 증상이 일상생활을 방해한다. 특별한 병력은 없고 주말에 술을 가끔 마신다. 체온은 98.6°F(37.0°C), 혈압 124/88 mmHg, 맥박 80회/분, 호흡수 13회/분, 산소포화도 98%이다. 건강해 보이는 젊은 남자로 코를 반복해서 푼다. 부비동 타진에서 증상은 유발되지 않고 구강인두 검사도 정상이다. 다음 중 가장 적절한 치료 단계는 무엇인가?

## 선택지

A. 아목시실린
B. 비강 내 생리식염수
C. 비강 내 스테로이드
D. 로라타딘

## 해설

정답은 C, 비강 내 스테로이드이다. 수개월 지속되는 콧물·재채기와 일상생활 장애는 알레르기비염을 시사하며, 발열·화농성 분비물·안면 통증 등 세균성 부비동염을 지지하는 소견은 없다. 삶의 질에 영향을 주는 지속 비염에서는 비강 내 스테로이드가 효과적인 초기 치료이다. 생리식염수는 보조적으로 쓸 수 있고 로라타딘 같은 2세대 항히스타민제도 선택지이지만, 제시된 지속적 생활장애를 고려하면 비강 스테로이드가 가장 적절하다. 아목시실린을 경험적으로 투여할 근거는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 건선관절염 해설은 완전히 다른 증례. 삶의 질을 저해하는 지속 알레르기비염의 비강 스테로이드 치료로 교체. C 유지.
- 공식/학회 근거: https://www.entnet.org/quality-practice/quality-products/clinical-practice-guidelines/allergic-rhinitis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007537
