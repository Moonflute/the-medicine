---
type: qbank
schema_version: 1
id: medqa-us-train-004049
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2ab950a8de3e6619498f61c5266b68ff717423b483cfab7a52d5085a55d3300b
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "산후 우울감"
  - "산후 기분 변화"
  - "산후정신병 감별"
question_type: 임상증례 객관식
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yCsO2bhCDsoJXsi6Drs5EgKFBvc3RwYXJ0dW0gcHN5Y2hvc2lzKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9CdXByb3Bpb24ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

건강한 여아를 질식 분만한 지 10일 후, 27세 여자가 잦은 기분 변화를 보여 남편과 함께 내원했다. 분만 2일 후 퇴원한 뒤부터 눈물이 많고 불안했다. 새로운 책임에 압도된 느낌이며 계속 피곤해 신생아를 돌보기 어렵다고 한다. 아기가 잠을 깨워 밤에 2~3시간밖에 자지 못한다. 때때로 아기가 우는 소리를 들었다고 생각해 확인하지만 아기는 조용히 자고 있다. 남편은 환자가 아기에게 무슨 일이 생길까 두려워한다고 한다. 손 소독제를 사용하지 않고 아기를 안으면 남편에게 화를 내며 소리치기도 한다. 모유 수유는 문제없이 하고 있다. 환자의 어머니는 정신병적 특징이 있는 양극성장애를 앓고 있다. 활력징후는 정상이고 자궁은 산후 시기에 맞게 퇴축 중이다. 정신상태검사에서 정동이 불안정하지만 타해 또는 자살사고는 없다. 혈색소 13 g/dL, TSH 3.1 μU/mL이다. 가장 적절한 다음 관리는 무엇인가?

## 선택지

A. 설트랄린 치료
B. 리스페리돈 치료
C. 안심시키기
D. 부프로피온 치료

## 해설

출산 직후 시작된 눈물·불안·감정 변화가 산후 10일째이고 명백한 망상·조증이나 자타해 사고가 제시되지 않아 원문은 산후우울감에 대한 안심과 지지를 선택한다. 수면·돌봄 지원과 가까운 추적을 함께 제공한다. 다만 2주 이내라는 이유만으로 심한 기능저하나 정신병을 배제하지 않는다. 실제로 아기 울음소리 경험이 확실한 환청인지 확인해야 하고, 양극성 장애 가족력도 있어 망상·환각·조증·혼돈·안전 우려가 드러나면 즉시 응급 평가해야 한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004049

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 산후우울감 원정답 유지. 2주 이내면 무조건 안심만 한다는 인상 대신 기능·안전·정신병 경고소견 재평가 명시.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.acog.org/programs/perinatal-mental-health/summary-of-perinatal-mental-health-conditions
