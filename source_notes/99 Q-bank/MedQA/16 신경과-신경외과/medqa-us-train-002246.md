---
type: qbank
schema_version: 1
id: medqa-us-train-002246
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b5ec69d71a263143e5158513a98940199b281937fb39880707eba8585c882273
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "spinal epidural abscess"
  - "vertebral osteomyelitis"
  - "breast cancer metastasis"
  - "spinal MRI"
question_type: investigation
related_disease_slugs:
  - MDgg6rCQ7Je8L-qzqOyImOyXvCAoT3N0ZW9teWVsaXRpcykubWQ
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
difficulty: complex
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9TaXRhZ2xpcHRpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTmFmY2lsbGluLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

47세 여성이 2주간 악화된 허리 통증으로 응급실에 왔다. 일상적인 집안일을 할 수 없다. 한 달 전 정원에서 일하다 넘어져 등을 다쳤고 일반의약품 아세트아미노펜으로 통증이 가라앉았다. 1년 전 유방암으로 왼쪽 유방절제술을 받았다. 제2형 당뇨병이 있으며 메트포르민, 시타글립틴, 종합비타민을 복용한다. 불편해 보인다. 체온 38.9°C, 맥박 101회/분, 혈압 110/80 mmHg이다. 등 검사에서 흉추 압통이 있고 목을 굽힐 때 경직이 약간 있다. 하지 근력이 감소되어 있으나 양측 심부건반사는 2+이고 통증·미세촉각·온도·고유감각은 정상이다. 혈색소 13.1 g/dL, 백혈구 19,300/mm³이다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 혈청 단백 전기영동
B. 척추 X선
C. 반코마이신과 나프실린 치료
D. 척추 MRI

## 해설

발열·백혈구증가·국소척추압통과 하지약화는 척추경막외농양 등 감염성 신경구조압박을 우려하게 한다. 신속한 척추MRI(D)와 척추전문의/감염평가가 필요하다. 신경결손진행/패혈증이 있으면 가능한배양채취 후 적절한경험적항균치료를 병행하고 MRI예약 때문에 치료를 지연하지 않는다. 유방암전이도감별하되 현재감염단서를 무시하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 척수농양 용어를 척추경막외농양/감염성압박으로 정교화. 긴급MRI D 유지하되 감염치료지연금지 보완.
- 공식/학회 근거: https://www.idsociety.org/practice-guideline/vertebral-osteomyelitis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002246
