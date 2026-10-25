---
type: qbank
schema_version: 1
id: medqa-us-train-007703
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c5ed6fa214be932daf73aa2614835e51a573d7102bcdf76857651019f4d31edb
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "cavernous sinus thrombosis"
  - "orbital cellulitis"
  - "ophthalmoplegia"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yXsOyhsOyngeyXvCAoQ2VsbHVsaXRpcykubWQ
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
---

# MedQA US 임상문제

## 문제

47세 여성이 발열과 두통으로 응급실에 왔다. 어제 증상이 시작된 후 빠르게 진행되었다. 처음에는 발열과 두통만 있어 아세트아미노펜으로 치료했지만, 곧 시야 흐림, 오한, 오심, 구토가 발생했다. 당뇨병과 고혈압 병력이 있으며 인슐린, 메트포르민, 리시노프릴, 경구피임약을 복용한다. 체온 104°F(40.0°C), 혈압 157/93 mmHg, 맥박 120회/분, 호흡수 15회/분, 실내 공기 산소포화도 98%이다. 추가 진찰에서 증상이 있는 눈의 안구돌출이 보인다. 해당 눈의 외안근 운동이 현저히 감소하여 수직 및 수평 주시가 제한된다. 또한 눈 주변의 V1 및 V2 분포에서 감각이 감소한다. CT를 기다리던 중 기면 상태와 급성 의식변화가 발생했다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 급성 폐쇄각 녹내장
B. 해면정맥동 혈전증
C. 안와주위 봉와직염
D. 두개강내 출혈

## 해설


발열, 안구돌출, 외안근 마비, V1·V2 감각 저하가 동반된 급성 증상은 감염성 정맥동 혈전증(해면정맥동 혈전증)과 일치한다. 이는 안와·두개내 감염이 정맥동으로 퍼져 발생한다. 따라서 가장 가능성 높은 진단은 해면정맥동 혈전증이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007703 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고열·안구돌출·안근마비·V1/V2 저하로 해면정맥동을 국소화하는 B와 해설을 원문 대조 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007703
