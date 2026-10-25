---
type: qbank
schema_version: 1
id: medqa-us-train-001811
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d9280959e6fa414457f9d3089f4e480a88361c09c18d222dca69f6136ecf77f4
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "inflammatory bowel disease"
  - "ulcerative colitis"
  - "colorectal cancer evaluation"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_sl7zspp3shLEg7J6l7KeI7ZmYIChJQkQpIChJbmZsYW1tYXRvcnkgQm93ZWwgRGlzZWFzZSkubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qtqTslpHshLEg64yA7J6l7Je8IChVQykgKFVsY2VyYXRpdmUgQ29saXRpcykubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsrDsnqXsp4HsnqXslZQgKENvbG9yZWN0YWwgQ2FuY2VyKS5tZA
question_type: investigation
difficulty: complex
answer: A
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

26세 백인 남성이 6개월간 점점 심해지는 전신 피로로 내원했다. 그동안 헬스장에서 운동할 수 없었다. 5주 전부터 간헐적으로 혈변을 동반하는 하복부 경련성 통증과 설사도 있다. 아버지는 65세에 대장암 진단을 받았다. 10년 동안 하루 반 갑의 담배를 피웠고 가끔 맥주 1–2잔을 마신다. 체온 37.3°C (99.1°F), 맥박 88/min, 혈압 116/74 mm Hg이다. 점막이 건조하고 복부는 부드럽고 팽창하지 않았으며 양측 하복부에 약한 압통이 있다. 직장검사에서 혈액이 섞인 변이 보인다. 혈색소 13.5 g/dL, 백혈구 7,500/mm3, 혈소판 480,000/mm3이고 요검사는 정상이다. 다음 중 가장 적절한 관리 단계는 무엇인가?

## 선택지

A. 대장내시경
B. 굴곡성 구불결장경검사
C. D-xylose 흡수검사
D. 조영증강 복부·골반 CT

## 해설

정답은 A이다. 수주간 혈성설사·복통과 혈소판증가/지속피로는 IBD 등 기질적 대장질환을 평가할 필요가 있다. 대장내시경과 조직검사로 병변 범위·염증 양상을 확인한다. 본문에 체중감소가 제시된 것은 아니며 26세라는 이유로 혈변을 단순 기능성 증상으로 보지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 없는 체중감소를 검사 근거로 만든 해설 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001811
