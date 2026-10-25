---
type: qbank
schema_version: 1
id: medqa-us-train-006625
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:56a7be48e9c4161a2d4f95bcb51cbd6f95d1d82c5dab7535c41fcf013887f868
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "블라스토미코시스"
  - "피부 블라스토미세스증"
  - "광범위 출아 효모"
  - "Blastomycosis"
related_disease_slugs:
  - MDgg6rCQ7Je8L-ynhOq3oC5tZA
question_type: diagnosis
difficulty: standard
answer: A
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

58세 여성이 발열, 오한, 마른기침과 함께 뺨과 목에 점점 커지는 종괴 몇 개가 생겨 내원했다. 사진처럼 코에 사마귀 모양 병변이 있다. 몇 달 전 출장으로 미시시피 지역을 방문했다. 체온은 38.1°C(100.6°F), 맥박은 분당 80회, 혈압은 121/78 mm Hg이다. 림프절 세침흡인물을 병리검사에 보냈고 배양에서 사부로 포도당 한천에 흰색 집락이 자랐다. 다음 중 원인균으로 가장 가능성 높은 것은?

## 선택지

A. 블라스토미세스 더마티티디스
B. 말라세지아 푸르푸르
C. 히스토플라스마 캡슐라툼
D. 콕시디오이데스 이미티스

## 해설


미시시피 유역 노출과 폐 증상·사마귀 모양 피부 병변은 blastomycosis A에 가장 부합한다. 하지만 Sabouraud 배지의 흰 집락 자체는 다른 진균도 보일 수 있어 종 특이 확진 소견이 아니다. 실제 조직/배양 형태·분자검사로 확인하며 누락된 사진에서 broad-based budding 등을 직접 보았다고 하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006625 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Verrucous 피부+폐 병변의 blastomycosis A 유지; Sabouraud 흰 균락을 종 특이적이라고 한 오류 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006625
