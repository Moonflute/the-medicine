---
type: qbank
schema_version: 1
id: medqa-us-train-009348
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:55deffbef905f6594c2babab955508106fe5eeedfd7828f353be714e8c0b8940
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "acute respiratory distress syndrome"
  - "급성 호흡곤란증후군"
  - "PEEP"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4ieyEsSDtmLjtnaHqs6TrnoAg7Kad7ZuE6rWwIChBUkRTKSAoQWN1dGUgUmVzcGlyYXRvcnkgRGlzdHJlc3MgU3luZHJvbWUpLm1k
question_type: management
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

70세 남자가 습성 괴저에 합당한 발진과 악화되는 다리 통증으로 응급실에 왔다. 피부 감염 병력은 없지만 제2형 당뇨병이 있고 20년간 하루 담배 두 갑을 피웠다. 입원 3일 후 저산소혈증과 빈호흡이 심해져 응급 삽관하고 인공호흡을 시작했다. 키 180 cm, 체중 90 kg, BMI 27.8 kg/m², 맥박 112회/분, 혈압 95/60 mmHg이다. 인공호흡기 FIO₂ 100%, 일회호흡량 540 mL, 호흡수 20회/분, PEEP 5 cmH₂O이다. 폐에 전반적인 수포음이 있고 심장 진찰은 정상이다. 혈색소 11.5 g/dL, 혈청 젖산 4.0 mmol/L, 크레아티닌 2.5 mg/dL이다. 삽관 30분 후 ABG에서 PaCO₂ 50 mmHg, PaO₂ 55 mmHg이고 흉부 X선에서 새로운 양측 침윤이 보인다. 조직 산소 전달을 개선하기 위한 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 환자를 복와위로 배치
B. 일회호흡량 증가
C. 호기말 양압 증가
D. 적혈구 수혈

## 해설

FiO2 1.0에서도 PaO2 55 mmHg인 중증 저산소혈증에서 PEEP 5 cmH2O는 낮아, C처럼 감시하에 PEEP를 조정하면 폐포 허탈과 단락을 줄일 수 있다. 과팽창과 혈압 저하를 피하며 예측체중 기준 저일회호흡량 환기를 유지한다. 중증 ARDS의 복와위는 생존 이득이 있는 병행 전략이므로 효과가 제한적이라고 배제하지 않는다. Hb 11.5 g/dL만으로 수혈을 우선하거나 산소화를 위해 일회호흡량을 무조건 늘리지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: PEEP C를 지지하되 중증 ARDS의 복와위 효과를 부정한 설명과 무분별한 일회호흡량 증가를 교정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10870893/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009348
