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
question_type: diagnosis
difficulty: complex
answer: B
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

상염색체열성 다낭성 신장질환이 있는 8세 아이가 추적 진료 중이다. 이전보다 비장이 커졌고 혈소판 수가 줄었다. 간효소는 크게 오르지 않았다. 우선 의심할 간 관련 합병증은?

## 선택지

A. 급성 바이러스간염
B. 선천 간섬유화에 의한 문맥고혈압
C. 담석에 의한 급성 담낭염
D. 비알코올성 지방간의 급성 악화

## 해설

상염색체열성 다낭성 신장질환에 동반되는 선천 간섬유화는 간효소가 정상에 가깝더라도 문맥고혈압을 일으킬 수 있다. 비장 비대와 혈소판 감소가 단서다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005704
- https://www.erknet.org/guidelines-pathways/kidney-malformations-ciliopathies/arpkd

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 문맥고혈압을 신정맥 압박으로 설명한 오류를 선천 간섬유화로 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.ncbi.nlm.nih.gov/books/NBK1326/
