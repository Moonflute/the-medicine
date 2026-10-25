---
type: qbank
schema_version: 1
id: medqa-us-train-002736
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4a17f50f012d91f2c8b63ebf59cf41a6da71ce2506315ce8c722bb2801764b5a
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "orthostatic hypotension"
  - "autonomic dysfunction"
  - "syncope"
  - "medication-induced hypotension"
question_type: diagnosis
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4sOumveyEsSDsoIDtmIjslZUgKE9ydGhvc3RhdGljIEh5cG90ZW5zaW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-2YiOq0gOuvuOyjvOyLoOqyveyEsSDsi6Tsi6AgKFZhc292YWdhbCBTeW5jb3BlKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmVyYXBhbWlsLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

67세 여성이 낮잠에서 일어난 직후 실신하는 것을 남편이 목격하여 1시간 후 응급실에 데려왔다. 30초 이내에 의식을 회복했고 완전히 깨어 지남력이 정상이었다. 지난 5년 동안 비슷한 일이 두 번 있었는데, 한 번은 식료품점에서 줄을 서 있던 중, 한 번은 아침에 침대에서 일어날 때 발생했다. 1년 전 입원 당시 24시간 홀터 모니터링과 심초음파는 정상이었다. 고혈압, 우울증, 천식이 있으며 현재 베라파밀, 노르트립틸린, 필요 시 알부테롤 흡입기를 사용한다. 누운 자세 혈압은 114/72 mmHg, 선 자세 혈압은 95/60 mmHg이다. 심폐 진찰과 신경학적 진찰에는 이상이 없다. 전혈구검사, 전해질, 혈액요소질소, 크레아티닌, 혈당 수치는 정상이다. 침상 심장 모니터링에서 드문 심실조기수축과 III유도 T파 역전이 보인다. 다음 중 이 환자 증상의 가장 가능성 높은 원인은?

## 선택지

A. 부신기능부전
B. 자율신경 기능장애
C. 구조적 심장 이상
D. 심장 부정맥

## 해설

일어서거나 오래 서 있을 때 발생하고 빠르게 회복하는 실신과 기립 혈압114/72→95/60 mmHg는 기립성 저혈압을 시사한다. 수축기 감소는19 mmHg지만 이완기는12 mmHg 감소하여 적절한 시간 내 측정이라면 이완기 기준을 충족한다. 노르트립틸린·베라파밀의 혈압/자율조절 영향으로 선지 B가 가장 합당하다. 과거 정상24시간 Holter만으로 간헐적 부정맥을 완전히 배제하지 않으며 약물 검토·기립 맥박·측정 시점과 다른 위험징후도 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 기립 혈압 하강 B의 근거를 수축기19가 아니라 이완기12mmHg 감소까지 정확히 읽고, 정상 과거 Holter로 모든 부정맥을 배제하는 오류를 제한했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002736
