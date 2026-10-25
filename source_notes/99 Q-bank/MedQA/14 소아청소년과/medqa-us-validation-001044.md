---
type: qbank
schema_version: 1
id: medqa-us-validation-001044
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:6d07f28e6c2d8d91a63082662cc5346dcad2e714823bb3900770572bc672ac14
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "세균성 수막염"
  - "케르니히 징후"
  - "요추천자"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IS46reg7ISxIOuHjOyImOunieyXvCAoQmFjdGVyaWFsIE1lbmluZ2l0aXMpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: B
answer_change_reason: "혈압57/38의 쇼크 상태에서 요추천자 B를 우선 시행하는 원정답 오류를 즉각적 경험적 항생제 C로 변경."
---

# MedQA US 임상문제

## 문제

1세 남아가 며칠간 보채고 수유를 잘하지 못해 응급실에 왔다. 체온 38.9°C, 혈압 57/38 mm Hg, 맥박 170회/분이다. 검사 중 계속 보채며, 고관절을 굽힌 상태에서 무릎을 펴려고 하면 심하게 자극받아 운다. 안저검사는 정상이다. 가장 적절한 다음 처치는?

## 선택지

A. 혈액 및 소변 배양
B. 요추천자
C. 반코마이신과 세프트리악손
D. 반코마이신, 세프트리악손과 프레드니손

## 해설

1세의 심한 저혈압·빈맥과 수막자극 소견은 수막염 동반 패혈성 쇼크를 의심한다. 호흡·순환을 즉시 안정화하고 가능하면 신속히 혈액배양을 얻되 항생제를 지연하지 않는다. 보기 중 vancomycin·ceftriaxone(C)이 적절한 경험적 요법이며 지역 내성에 맞춰 조정한다. 쇼크는 LP의 상대적 금기이므로 안정화 전 요추천자를 우선하지 않는다. 정상 안저검사도 쇼크 상태의 LP 안전성을 보장하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 혈압57/38의 쇼크 상태에서 요추천자 B를 우선 시행하는 원정답 오류를 즉각적 경험적 항생제 C로 변경.
- https://www.rch.org.au/clinicalguide/guideline_index/Lumbar_puncture/
- https://www.rch.org.au/clinicalguide/guideline_index/Meningitis_encephalitis/
- https://www.nice.org.uk/guidance/ng240/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001044
