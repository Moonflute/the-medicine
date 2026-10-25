---
type: qbank
schema_version: 1
id: medqa-us-train-007947
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6567251748654fbbc90833a5508693ab7f5d5d7e8ccf15d53d7559a6611c54a2
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "complete abortion"
  - "spontaneous abortion"
  - "empty uterus after bleeding"
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L-u2iOyZhOyghCDsnKDsgrAgKEluY29tcGxldGUgQWJvcnRpb24pLm1k
  - MTIg7IKw6rO8L-yekOyXsCDsnKDsgrAgKFNwb250YW5lb3VzIEFib3J0aW9uKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 8주인 34세 초임부가 질 출혈과 경련성 하복부 통증이 시작된 지 4시간 후 응급실에 왔다. 크고 작은 혈전이 여러 개 나왔고 출혈과 통증은 시작 당시보다 줄었다. 체온 37°C(98.6°F), 맥박 98회/분, 혈압 112/76 mm Hg이다. 골반검사에서 경미한 질 출혈과 닫힌 자궁경부가 보인다. 골반 초음파에서 자궁내막강에 소량의 액체만 있고 임신낭은 없다. 가장 가능성 높은 진단은?

## 선택지

A. 계류유산
B. 완전유산
C. 절박유산
D. 불완전유산

## 해설

혈전 배출 후 통증·출혈이 감소하고 자궁경부가 닫히며 임신낭이 보이지 않아 선택지 중 완전유산(B)이 가장 적합하다. 본문에는 소량 출혈이 남아 있으므로 출혈이 완전히 멈췄다고 설명하면 안 된다. 이전 자궁내 임신이 확인되지 않았다면 빈 자궁만으로 완전유산을 확정하지 말고 자궁외임신 등 임신 위치를 추가 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 출혈멈춤창작삭제. 감소하는통증/출혈과닫힌경부/빈자궁의완전유산B지지하되단독확진한계.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007947
