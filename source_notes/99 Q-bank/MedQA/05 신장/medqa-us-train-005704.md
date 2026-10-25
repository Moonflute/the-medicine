---
type: qbank
schema_version: 1
id: medqa-us-train-005704
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:947e197292f0fe79bb97a861dd4d0cf3e6a052ab9cbeda0501f0f99ee601b9ba
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "상염색체 열성 다낭성 신장질환"
  - "양수과소증"
  - "문맥 고혈압"
related_disease_slugs:
  - MTIg7IKw6rO8L-yWkeyImCDqs7zshozspp0gKE9saWdvaHlkcmFtbmlvcykubWQ
  - MDUg7Iug7J6lL-uLpOuCreyEsSDsvantjKUg7KeI7ZmYIChQb2x5Y3lzdGljIEtpZG5leSBEaXNlYXNlKS5tZA
question_type: prognosis
difficulty: complex
answer: "B"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "문맥고혈압을 신정맥 압박으로 설명한 오류를 선천 간섬유화로 교정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

신생아 여아가 응급 제왕절개 후 분만 뒤 불안정한 활력징후로 신생아 중환자실에 이송되었다. 임신 중 양수과소증과 폐저형성이 있었다. 임신 38주였다. 아프가 점수는 1분 6점, 5분 8점이다. 체온은 37.0°C(98.6°F), 혈압은 60/40 mmHg, 호흡수는 분당 45회, 맥박은 분당 140회이다. 신체검사에서 양측 복부에 윤곽이 불규칙한 종괴가 만져진다. 복부초음파에서 세로 길이 5cm로 크게 커지고 에코가 증가한 신장이 보이며 피질과 수질에 여러 낭종이 있다. 다음 중 이 환자가 가장 위험이 높은 합병증은 무엇인가?

## 선택지

A. 지주막하 출혈
B. 문맥 고혈압
C. 재발성 요로감염
D. 자해

## 해설

출생 전 양수과소증·폐저형성과 크게 커진 고에코 다낭성 신장은 ARPKD를 시사한다. ARPKD에는 담관판 발달 이상·선천 간섬유화가 동반될 수 있어 문맥고혈압이 중요한 합병증이다. 신장 낭종이 신정맥을 눌러 문맥고혈압이 생긴다는 기전은 잘못이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005704

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 문맥고혈압을 신정맥 압박으로 설명한 오류를 선천 간섬유화로 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.ncbi.nlm.nih.gov/books/NBK1326/
