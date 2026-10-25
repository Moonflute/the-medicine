---
type: qbank
schema_version: 1
id: medqa-us-train-007935
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:442e20d58b0f52bf84a9a4970cd8fb6109c9de5650a436cd8dbad4bd9399dd6a
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "cirrhosis"
  - "hepatocellular carcinoma surveillance"
  - "abdominal ultrasound"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITshLjtj6zslZQgKEhlcGF0b2NlbGx1bGFyIENhcmNpbm9tYSkubWQ
question_type: prevention
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUmFtaXByaWwubWQ
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
---

# MedQA US 임상문제

## 문제

55세 남자가 한 달 동안 지속된 가벼운 가려움으로 추적 진료를 받으러 왔다. 알코올성 간경변, 고혈압, 위식도역류질환이 있다. 매일 보드카 한 파인트와 맥주 여러 병을 마셨지만 4개월 전 금주했다. 라미프릴, 에스오메프라졸, 비타민 B 보충제를 복용한다. 마른 체형이며 체온 36.8°C(98.2°F), 맥박 68회/분, 혈압 115/72 mm Hg이다. 양측 손바닥 홍반, 흉부·복부·등의 모세혈관확장증, 양측 대칭성 유방 조직 확대가 있고 고환은 작고 단단하다. 헤모글로빈 10.1 g/dL, 백혈구 4,300/mm³, 혈소판 89,000/mm³, INR 1, 알부민 3 g/dL, 총 빌리루빈 2.0 mg/dL, 직접 빌리루빈 0.2 mg/dL, AST 55 U/L, ALT 40 U/L이다. AFP 8 ng/mL(정상 <10), A형간염 IgG 양성, B형간염 표면항체 음성이다. 복부 초음파에서 간 표면 결절과 우엽 위축이 보이고 상부 내시경은 정상이다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 3개월 후 혈청 AFP 측정
B. 지금 복부 CT
C. 6개월 후 복부 초음파 반복
D. 지금 간 생검

## 해설


간경변은 HCC 감시 대상이며 국소 병변이 없고 AFP가 정상이면 약6개월 간격의 초음파 감시(C)를 지속한다. AASLD는 초음파와 AFP 병행을 권고한다. 정상 AFP만으로 암을 완전히 배제하거나 일률 CT·생검을 시행하지 않으며, 초음파 관찰이 불충분하면 다른 영상 전략을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007935 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 간경변 HCC 감시6개월 초음파 C 유지, AASLD AFP 병행 보완. 원문 vodka1pint를 한잔으로 축소한 오역 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10663390/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007935
