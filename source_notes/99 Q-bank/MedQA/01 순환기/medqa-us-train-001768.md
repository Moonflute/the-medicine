---
type: qbank
schema_version: 1
id: medqa-us-train-001768
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c442d50499c934eab9438c0a37280f6300ca52fb6024e4a0246c14c3ba3712c9
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "acute aortic dissection"
  - "cardiac tamponade"
  - "aortic regurgitation"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpSDrsJXrpqwgKEFvcnRpYyBEaXNzZWN0aW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-yLrOyepSDriIzrprzspp0gKENhcmRpYWMgVGFtcG9uYWRlKS5tZA
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpe2MkOuniSDsl63rpZggKEFvcnRpYyBSZWd1cmdpdGF0aW9uKS5tZA
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
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

고혈압 병력이 있는 59세 남성이 흉통과 쉰 목소리로 내원했다. 쉰 목소리는 약 2주 전 서서히 시작되어 계속 악화되었다. 2시간 전 갑자기 시작되어 호전되지 않는 흉통이 생겼다. 통증은 심하고 날카로우며 흉부 중앙에 국한되고 등으로 방사된다. 10년 전 고혈압 진단을 받았지만 약 복용을 중단했고 최근 몇 년간 진료를 받지 않았다. 현재 복용약은 없으며 20갑년 흡연력도 있다. 체온 37°C (98.6°F), 혈압 169/100 mm Hg, 맥박 85/min, 호흡 19/min, 실내 공기 산소포화도 98%이다. 발한하며 고통스러워하고 초기 이완기 잡음이 들리지만 폐 청진은 정상이다. 진찰 중 갑자기 가슴을 움켜쥐며 실신했고 깨울 수 없었다. 반복 활력징후는 혈압 85/50 mm Hg, 맥박 145/min, 호흡 25/min, 산소포화도 92%이며 사지는 창백하고 차갑다. 삽관하고 고유량 산소와 적극적 수액을 시작했으며 혈액형 검사와 교차시험을 의뢰했다. 다음 중 다음으로 가장 적절한 처치는 무엇인가?

## 선택지

A. 흉부 X선
B. 심전도
C. 경흉부 심초음파
D. 심장 트로포닌

## 해설


불안정한 대동맥 박리와 심낭압전증이 의심되는 상황에서 급성 심낭압을 확인하기 위해 가장 빠른 진단은 경흉부 심초음파이다. 따라서 다음 적절한 조치는 경흉부 심초음파이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 박리 의심 후 쇼크/실신은 hemopericardium/tamponade 우려. 침상 TTE C가 제시 검사 중 즉시 혈역학적 합병증 평가에 적합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001768
