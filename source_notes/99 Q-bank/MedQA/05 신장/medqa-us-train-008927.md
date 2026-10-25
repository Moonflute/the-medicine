---
type: qbank
schema_version: 1
id: medqa-us-train-008927
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:10311e679c8e864b21066ddcdbbd5179ed7be648a67bdc2327bee4d774b1bf5f
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "minimal change disease"
  - "nephrotic syndrome"
  - "prednisone"
related_disease_slugs:
  - MDUg7Iug7J6lL-uvuOyEuOuzgO2ZlOuzkSAoTWluaW1hbCBDaGFuZ2UgRGlzZWFzZSkubWQ
  - MDUg7Iug7J6lL-yLoOymne2bhOq1sCAoTmVwaHJvdGljIFN5bmRyb21lKS5tZA
question_type: management
difficulty: standard
answer: "A"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "Prednisone을 면역억제 효과가 가장 큰 약물이라고 한 오류를 표준 초기 치료 근거로 교정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

5세 아동이 4일 동안 지속된 하지 부종으로 내원했다. 3주 전 며칠 동안 기침과 발열이 있어 아세트아미노펜으로 치료했다. 과거력은 특이사항이 없고 만삭으로 합병증 없이 태어났으며 예방접종은 최신이다. 혈압 81/42mmHg, 심박수 111회/분이다. 아이는 활발하고 급성 고통은 없다. 눈 주위가 부어 있고 하지 부종이 있는 것 외 신체검사는 정상이다. 흉부 청진과 복부검사는 정상이다. 소변검사에서 혈뇨 없이 단백뇨가 보인다. 다음 중 가장 적절한 치료는 무엇인가?

## 선택지

A. 경구 프레드니손
B. 경구 아자티오프린
C. 정맥 시클로포스파미드
D. 치료가 필요하지 않다

## 해설

소아의 부종과 혈뇨 없는 단백뇨는 특발성 신증후군, 흔히 미세변화병을 시사한다. 진단과 체액 상태를 확인한 뒤 선택지 중 경구 prednisone이 표준 초기 치료에 해당한다. 미측정 albumin 수치를 확인된 것처럼 쓰지 않으며 저혈압·빈맥에서는 혈관 내 용적 감소를 먼저 평가한다. 더 강한 면역억제가 필요해서 고르는 약이라는 뜻은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008927

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: Prednisone을 면역억제 효과가 가장 큰 약물이라고 한 오류를 표준 초기 치료 근거로 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://kdigo.org/wp-content/uploads/2025/04/KDIGO-2025-Guideline-for-Nephrotic-Syndrome-in-Children.pdf
