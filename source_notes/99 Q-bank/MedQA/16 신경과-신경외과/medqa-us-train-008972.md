---
type: qbank
schema_version: 1
id: medqa-us-train-008972
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:849a85dba19bd51bdd0ec1d0716f5833a50c986037ce6aa3a281d88807980a17
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "amyotrophic lateral sclerosis"
  - "upper and lower motor neuron signs"
  - "riluzole"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qt7zsnITstpXshLEg7Lih7IKtIOqyve2ZlOymnSAoQW15b3Ryb3BoaWMgbGF0ZXJhbCBzY2xlcm9zaXMpLm1k
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

49세 남성이 여러 증상으로 내원했다. 8개월 동안 목소리 변화와 삼킴 곤란이 있었고 처음에는 크래커 같은 마른 음식만 어려웠으나 이제 스무디와 아이스크림도 삼키기 어렵다. 신문 편집자로 일하며 주로 쓰는 손으로 글씨 쓰기도 어려워졌다. 아내는 잠잘 때 코를 골고 침을 흘린다고 한다. 고혈압과 이첨대동맥판막 병력이 있고 히드로클로로티아지드를 복용한다. 신체검사에서 오른손 위축, 느린 말, 오른쪽 상흉골연의 수축기 심잡음이 있고 왼쪽 슬개건을 두드리면 왼쪽 하지가 강하게 차며 왼쪽 발바닥을 자극하면 발가락이 위로 펴진다. 다음 중 증상 진행을 늦출 가능성이 가장 높은 치료는 무엇인가?

## 선택지

A. 아만타딘
B. 베타 인터페론
C. 레세르핀
D. 릴루졸

## 해설

진행성 구근 증상과 손 근위축은 하위운동신경원 손상을, 건반사 항진과 Babinski 징후는 상위운동신경원 손상을 시사하여 ALS에 합당하다. 보기 중 riluzole(D)은 ALS의 질병 경과에 이익이 있는 약물이다. 코골이와 침흘림만으로 호흡근 약화가 객관적으로 입증된 것은 아니므로 호흡기능은 별도로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. ALS 치료 D 유지. 코골이·침흘림만으로 호흡근 약화를 확인했다고 한 해설 교정.
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=dd432c13-389e-46b3-8891-0cf1a58800ff

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008972
