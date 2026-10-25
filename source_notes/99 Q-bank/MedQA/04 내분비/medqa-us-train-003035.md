---
type: qbank
schema_version: 1
id: medqa-us-train-003035
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:879c588f1d16405de2b16cde64a0af774098371f05bf16af7171b1737daee31e
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hypothyroidism"
  - "carpal tunnel syndrome"
  - "median neuropathy"
  - "thyroxine replacement"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
  - MjIg7KCV7ZiV7Jm46rO8L-yImOq3vOq0gCDspp3tm4TqtbAgKENhcnBhbCBUdW5uZWwgU3luZHJvbWUpLm1k
question_type: management
difficulty: standard
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

50세 여성이 6주 동안 간헐적인 오른손 통증과 저림으로 내원했다. 밤에 악화되고 손을 흔들면 완화되는 핀으로 찌르는 듯한 감각이 있다. 하루 종일 간헐적인 왼쪽 무릎 통증도 있다. 리시노프릴로 조절되는 고혈압이 있고 변비약을 일반의약품으로 복용한다. BMI는 35 kg/m²이다. 어머니는 류마티스관절염 병력이 있다. 피곤해 보이며 맥박 57회/분, 혈압 120/75 mmHg이다. 손목과 손가락의 운동 범위는 정상이고 엄지와 검지의 가벼운 촉각이 감소되어 있다. 무지구 근육 위축은 없고 심부건반사는 1+이며 다리에 경미한 부종이 있다. 다음 중 가장 도움이 될 치료는?

## 선택지

A. L-티록신
B. 메토트렉세이트
C. 수술적 감압
D. 경구 프레드니손

## 해설

야간 정중신경 영역 저림은 손목터널증후군에 맞고, 피로·변비·서맥·반사 감소·부종은 갑상샘기능저하증 가능성을 시사한다. 선택지 중 A의 levothyroxine은 기저 갑상샘저하가 확인될 경우 도움이 된다. BMI35 환자는 저체중이 아니며 증상만으로 확진하여 무조건 호르몬을 시작하지 않고 TSH/유리T4를 확인해야 한다. 무지구 위축이 없는 경한 손목터널증후군을 즉시 수술로만 치료하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: BMI35 환자를 저체중으로 설명한 오류. 증상상 갑상샘저하 의심과 확인 후 levothyroxine A의 취지를 구분.
- https://www.niddk.nih.gov/health-information/endocrine-diseases/hypothyroidism

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003035
