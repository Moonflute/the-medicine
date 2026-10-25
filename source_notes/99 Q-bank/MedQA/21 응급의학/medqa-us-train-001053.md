---
type: qbank
schema_version: 1
id: medqa-us-train-001053
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e0b0d95d640f972817aaaee2095e437274dcb9eda9766c02539f7b03bd133f44
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "bipolar disorder"
  - "schizophrenia"
  - "pulmonary embolism"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSDsiqTtjpntirjrn7wg7J6l7JWgIChTY2hpem9waHJlbmlhIFNwZWN0cnVtIGFuZCBPdGhlciBQc3ljaG90aWMgRGlzb3JkZXJzKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

양극성 장애와 조현병을 앓고 있는 25세 여성이 임신 중이라며 응급실에 내원했다. 환자는 20세 때부터 임신 중이었으며, 현재 숨쉬기가 훨씬 힘들고 심호흡 시 흉통과 함께 어지러움을 느껴 곧 출산할 예정이라고 말한다. 병원 의무기록상 지난 5년간 여러 차례 시행한 임신 검사 결과는 모두 음성이었다. 환자의 흡연력은 20갑년(pack-year)이다. 체온은 98°F(37°C), 혈압은 100/60 mmHg, 맥박은 110회/분, 호흡수는 28회/분, 실내 공기에서의 산소 포화도는 90%이다. 손가락 끝 혈당은 100 mg/dL이다. 복부에는 크고 부드러우며 압통이 없는 복부 지방층(abdominal pannus)이 있다. 다리는 대칭적이며 압통이 없다. 비강 캐뉼라를 통해 산소가 공급된다. 소변 임신 검사 결과는 양성으로 나왔고, 초기 흉부 X선 검사 결과는 정상이다. 다음으로 가장 적절한 진단 단계는 무엇인가?

## 선택지

A. CT 혈관조영술(CT angiogram)
B. D-이량체(D-dimer)
C. 초음파(Ultrasound)
D. 환기-관류 스캔(Ventilation-perfusion scan)

## 해설

빈맥, 흉막성 통증, 저산소포화도 및 임신은 폐색전증을 의심하게 한다. 정신과적 과거력으로 이를 설명해서는 안 된다. 본문에는 정상 흉부 X선이 제시되어 있어 D, 환기-관류 스캔이 적절한 후속 영상 선택이다. V/Q에도 방사선 노출이 있으며, 검사 가용성이나 결과에 따라 CTPA가 필요할 수 있다. 정상 흉부 X선과 이 임상상만으로 ARDS라고 진단하는 것은 맞지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 임신·저산소포화도·흉막성 통증의 PE 평가를 ARDS로 잘못 연결한 해설과 V/Q 무방사선 주장을 교정.
- 공식/학회 근거: https://member.thoracic.org/statements/resources/pvd/evaluation-of-suspected-pulmonary-embolism-in-pregnancy.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001053
