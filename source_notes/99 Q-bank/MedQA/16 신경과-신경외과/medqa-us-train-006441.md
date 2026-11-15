---
type: qbank
schema_version: 1
id: medqa-us-train-006441
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bdcd5bc902a539a0f74a8c67384a6c2a8a466f96c2a49b9430206b6e51b82221
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "고혈압성 뇌내출혈"
  - "관통동맥 파열"
  - "기저핵 출혈"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_stpztmIjshLEg64eM7KG47KSRIChIZW1vcnJoYWdpYyBTdHJva2UpLm1k
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

고혈압이 있는 58세 환자가 갑자기 오른쪽에 힘이 빠졌다. 비조영 CT에서 왼쪽 조가비핵의 작은 자발성 뇌내출혈이 보인다. 의식은 명료하고 혈압은 184/104 mmHg다. 초기 혈압 관리로 적절한 것은?

## 선택지

A. 첫날 수축기혈압 180–200 mmHg를 그대로 유지한다
B. 수축기혈압을 가능한 한 빨리 120 mmHg 미만으로 내린다
C. 경구 혈압약만 투여하고 다음 날까지 재측정하지 않는다
D. 적정 가능한 정맥 약으로 수축기혈압 목표 약 140 mmHg에 부드럽게 접근한다

## 해설

경도–중등도 자발성 뇌내출혈에서 처음 수축기혈압이 150–220 mmHg라면 약 140을 목표로 하고 130–150 범위에서 유지하는 전략을 고려한다. 130 미만으로 급히 낮추는 것은 피한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 고혈압성 뇌실질출혈 A 유지. 본문에 없는 고혈당 및 비의학적 '리틀 브레인' 표현 제거.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006441
- https://www.ahajournals.org/doi/10.1161/STR.0000000000000407
