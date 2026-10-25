---
type: qbank
schema_version: 1
id: medqa-us-train-003148
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a8b2b57b72e4a55557525edf84e9f9b5334279d5d876b6b76c1a21aaec60872f
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "blunt abdominal trauma"
  - "hemorrhagic shock"
  - "inconclusive FAST"
  - "diagnostic peritoneal lavage"
question_type: investigation
related_disease_slugs:
  - MTEg7Jm46rO8L-uRlOyDgSDrs7XrtoDsmbjsg4EgKEJsdW50IEFiZG9taW5hbCBUcmF1bWEpLm1k
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 남성이 교통사고 30분 후 응급실에 왔다. 차가 나무와 충돌했고 환자는 쇠약하고 기면 상태이며 복통이 있다. 체온 37°C, 맥박 121회/분, 호흡수 22회/분, 혈압 85/60 mmHg이고 사람에 대해서만 지남력이 있다. 복부에 배꼽 위 멍과 전반적 압통이 있으며 외상 초음파는 결론이 나지 않았다. 정맥 수액 소생 외에 다음 중 가장 적절한 관리 단계는?

## 선택지

A. 복부 CT
B. 탐색적 개복술
C. 복부 X선
D. 진단적 복강세척

## 해설

저혈압, 빈맥, 의식 변화로 복부 진찰의 신뢰도가 낮고 FAST도 결론이 나지 않았다. 제시된 선택지에서 D, 진단적 복강세척은 복강 내 출혈을 신속히 확인할 수 있는 선택적 방법이다. 다만 현행 외상 진료에서 DPL의 역할은 제한적이며, 반복 FAST와 출혈원 평가 및 즉각적 수술 필요성을 함께 판단한다. 지속되는 불안정이나 명확한 복막자극징후가 있으면 추가 검사 때문에 필요한 수술을 지연해서는 안 된다. 안정화되지 않은 상태에서 CT실로 보내는 것을 우선하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 불안정 둔상·판독 불확실 FAST에서 DPL이 가능한 선택적 보조임은 유지하되 현행 제한된 역할과 수술 지연 금지를 명시.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC8896237/
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng39/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003148
