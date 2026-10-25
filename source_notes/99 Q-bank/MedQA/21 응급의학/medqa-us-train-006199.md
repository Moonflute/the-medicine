---
type: qbank
schema_version: 1
id: medqa-us-train-006199
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3f2da48bf7dc2a6af647ed815d33d834041273514c7422cdcc432a298c853dda
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "욕창"
  - "압박 손상"
  - "체위 변경"
question_type: prevention
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-uLpOuwnOyZuOyDgSAoUG9seXRyYXVtYSkubWQ
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
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

39세 남성이 추적진료를 받으러 왔다. 2개월 전 트리메토프림-설파메톡사졸로 요로감염을 치료받았고 5년 전 요추 방출성 골절 후 하반신마비가 있다. 고혈압과 제2형 당뇨병이 있으며 매일 청결 간헐적 도뇨를 시행한다. 영양상태가 나쁘고 양측 하지에 여러 개의 확장되고 구불구불한 정맥이 있다. 우측 종골에 부분층 피부 결손과 분홍색 상처 바닥을 동반한 2cm 상처가 있다. HbA1c는 6.5%이다. 다음 중 상처를 가장 잘 예방했을 방법은 무엇인가?

## 선택지

A. 금연
B. 자주 체위 변경
C. 국소 항생제 치료
D. 헤파린 치료

## 해설

하반신 마비로 감각과 움직임이 제한된 환자의 발꿈치 부분층 피부 손상은 압박손상에 부합한다. 반복적인 체위 변경과 발꿈치 압박 해소(B)가 지속 압력을 줄이는 핵심 예방법이다. 피부 상태, 지지면과 영양 상태도 함께 평가해야 하며, 흡연을 비롯한 상처 회복 위험 요인이 중요하지 않다는 뜻은 아니다. 감염 근거가 없는 상처에 예방적 국소 항생제를 사용하는 것은 압박 해소를 대신하지 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 압박손상 예방의 체위 변경 B는 유지하되 흡연·영양 등의 위험 요인이 아무 영향이 없다는 해설의 단정을 제거한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/cg179/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006199
