---
type: qbank
schema_version: 1
id: medqa-us-train-009315
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3521de01d1d8672e434e8b28ee640c4d11686273ad24f3f5f1aef0e1114835a4
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "fluoroquinolone-associated tendinopathy"
  - "플루오로퀴놀론 관련 건병증"
  - "Achilles tendinitis"
question_type: mechanism
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-yVhO2CrOugiOyKpCDqsbTrs5Hspp0gKEFjaGlsbGVzIFRlbmRpbm9wYXRoeSkubWQ
difficulty: complex
answer: A
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
  - ZHJ1ZzowMyDshoztmZTquLAvTWVzYWxhemluZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 여성이 2일 동안 지속된 왼쪽 발목 통증으로 내원했다. 통증은 밤과 운동 시 악화된다. 5일 전 살모넬라 위장염을 진단받고 시프로플록사신을 시작했다. 궤양성 대장염, 고혈압, 고콜레스테롤혈증이 있으며 25년간 하루 담배 두 갑을 피우고 매일 맥주 2~3잔을 마신다. 메살라진, 히드로클로로티아지드, 심바스타틴을 복용한다. 키 158 cm, 체중 74 kg, BMI 30 kg/m²이다. 체온 36.7°C, 맥박 75회/분, 혈압 138/85 mmHg이다. 왼쪽 종골 후방 상부에 압통과 경미한 부종이 있다. 왼쪽 발목의 능동 및 수동 운동 범위는 정상이고 종아리를 압박해도 발바닥굽힘이 유발되지 않는다. 증상의 가장 가능성 높은 기전은 무엇인가?

## 선택지

A. 약물 이상반응
B. 최근 세균성 위장염
C. 관절 내 결정 형성
D. 세균의 관절 파종

## 해설

시프로플록사신 시작 후 후방 발목 통증과 아킬레스건 부위 압통·부종은 플루오로퀴놀론 관련 힘줄 손상을 시사한다(A). 종아리를 쥐어도 족저굴곡이 일어나지 않는 양성 Thompson 검사는 단순 건염을 넘어 아킬레스건 파열을 의심하게 한다. 일부 발목 능동운동이 가능해도 다른 근육에 의해 움직일 수 있어 파열이 배제되지는 않는다. 의심되면 약물을 중단하고 체중부하·운동을 제한하여 신속히 힘줄 평가를 받아야 한다. 실제 약제 대체는 원래 감염과 감수성을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 양성 Thompson 검사(종아리 압박 시 족저굴곡 없음)를 단순 건염으로 놓친 해설을 아킬레스건 파열 의심으로 교정했다. fluoroquinolone 이상반응 A는 유지한다.
- 공식/학회 근거: https://www.fda.gov/media/119537/download

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009315
