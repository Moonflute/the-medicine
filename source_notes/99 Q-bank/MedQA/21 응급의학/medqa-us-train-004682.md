---
type: qbank
schema_version: 1
id: medqa-us-train-004682
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f1572705148e88ea885de9fa34f21e5e6aa52618fcbf94ce4a82047a751dbff6
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "경동맥동 과민성"
  - "반사성 실신"
  - "자세 유발 실신"
  - "carotid sinus hypersensitivity"
question_type: diagnosis
related_disease_slugs: []
difficulty: complex
answer: C
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

33세 남성이 실신 후 응급실에 왔다. 한 달 전 새 직장을 시작한 뒤 매일 아침 옷을 입을 때 실신하거나 거의 실신하는 일이 반복되었다고 한다. 넘어질까 봐 앉아서 옷을 입고 면도하고 넥타이를 맨다. 이전에는 이런 일이 없었고 5년 동안 실직 상태였다가 새 직장 때문에 받은 스트레스라고 걱정한다. 오늘은 이 증상 때문에 출근하지 못해 직장에 제출할 진단서를 받을 수 있는지 묻는다. 특별한 과거력 없이 건강하다. 체온은 99.2°F (37.3°C), 혈압은 122/83 mmHg, 맥박은 분당 92회, 호흡수는 분당 16회, 실내 공기 산소포화도는 100%이다. 심폐 및 신경학적 검사는 정상이고 초기 심전도와 검사실 결과도 정상이다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 불안
B. 대동맥판막 협착
C. 경동맥 과민성 증후군
D. 비후성 폐쇄성 심근병증

## 해설

면도·넥타이 등 목 자극과 관련된 실신은 보기 중 경동맥동 과민성(C)을 시사한다. 과도한 압력수용체 반사로 부교감 심장 억제와 교감신경 감소에 따른 혈관확장이 생길 수 있다. 단순 기립성 저혈압이나 교감신경 과다반응과 같은 뜻은 아니다. 40세 미만에서는 드물므로 실제로는 병력과 다른 실신 원인 평가가 필요하고 임의 경동맥 마사지를 권하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 경동맥동 반사를 교감신경 과다·자세성 실신으로 설명한 오류 교정.
- 공식/학회 근거: https://academic.oup.com/eurheartj/article/39/21/1883/4939241

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004682
