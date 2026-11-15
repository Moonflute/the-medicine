---
type: qbank
schema_version: 1
id: medqa-us-train-000225
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d8d85d298c39ce3eb6d0df96688e03337308f9bdebd99841e5623ab350ae4760
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "developmental delay"
question_type: investigation
related_disease_slugs: []
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

12개월 아이가 잘 먹고 말과 운동 발달은 또래 수준이다. 같은 방법으로 길이를 다시 쟀는데도 출생 때 45백분위수였던 길이가 6개월에 10백분위수, 현재 3백분위수 아래로 떨어졌다. 적절한 해석은?

## 선택지

A. 발달이 정상이므로 키 성장도 정상이다
B. 첫돌 체중만 정상이면 키 성장 평가가 필요 없다
C. 한 번의 키가 작은 것이므로 두 돌까지 성장곡선을 보지 않는다
D. 선형 성장 둔화가 있어 성장곡선과 부모 키, 영양·전신질환 단서를 함께 평가한다

## 해설

키가 한 번 작게 측정된 것보다 같은 성장곡선에서 지속해서 내려가는 것이 더 중요한 단서다. 측정 정확도를 확인한 뒤 성장속도와 유전적 목표 키, 동반 증상을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 12개월에대소변가리기가정상발달이라는오류삭제. 특히키60cm의심한선형성장저하로B.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000225
- https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=5415
