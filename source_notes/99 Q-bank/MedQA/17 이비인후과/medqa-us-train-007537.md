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
answer: A
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

23세 환자가 집먼지진드기 알레르기 비염으로 매일 코가 막혀 잠을 설친다. 2세대 경구 항히스타민으로 재채기는 줄었지만 코막힘이 지속된다. 다음에 사용할 국소 항염증 치료는?

## 선택지

A. 비강 코르티코스테로이드
B. 비강 혈관수축제의 장기 연속 사용
C. 항생제 점비제
D. 국소 항진균제

## 해설

지속성 알레르기 비염의 코막힘에는 비강 스테로이드가 효과적이다. 꾸준히 사용할 수 있도록 비중격을 피해 분무하는 방법도 안내한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 건선관절염 해설은 완전히 다른 증례. 삶의 질을 저해하는 지속 알레르기비염의 비강 스테로이드 치료로 교체. C 유지.
- 공식/학회 근거: https://www.entnet.org/quality-practice/quality-products/clinical-practice-guidelines/allergic-rhinitis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007537
- https://pubmed.ncbi.nlm.nih.gov/36693355/
