---
type: qbank
schema_version: 1
id: medqa-us-train-003576
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e164fa4f8b38031290b51d28242f4fad5c1dfa7816aac5abacf4fadc978e06cd
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "pernicious anemia"
  - "vitamin B12 deficiency"
  - "subacute combined degeneration"
  - "anti-intrinsic factor antibody"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yVheyEsSDruYjtmIggKFBlcm5pY2lvdXMgQW5lbWlhKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE7YOA66-8IEIg6rKw7ZWN7KadIChWaXRhbWluIEIgRGVmaWNpZW5jeSkubWQ
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

25세 여성이 6개월간 지속된 피로로 내원했다. 검사에서 혈색소 8 g/dL, 헤마토크릿 24%, 혈소판 14만7천/mm3였고, 하지의 고유수용감각 저하와 사지 근력저하가 있었다. 다음 중 진단을 확인하기 위한 가장 적절한 다음 검사는?

## 선택지

A. 항내인성인자 항체
B. 골수 생검
C. 철분 수치
D. 트랜스페린 수치

## 해설


빈혈에 고유감각 저하·근력 약화가 있어 B12 결핍을 의심하고 자가면역 위염에 의한 흡수장애를 평가하는 선택지 A의 항내인성인자 항체가 적절하다. 원문에는 B12·엽산·철분 등 다종 보충제를 복용한다는 정보가 있어 단순 섭취 부족을 가정하지 않는다. B12 또는 활성 B12와 필요시 MMA 등으로 결핍을 평가하며 anti-IF 양성은 자가면역 원인을 지지하나 음성만으로 배제하지 않는다. 항체 검사 하나가 모든 빈혈이나 B12 결핍을 확진하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003576 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문 다종 보충제 복용을 해설에 복원. 자가면역 위염 확인 anti-IF A와 B12 결핍 진단을 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nice.org.uk/guidance/ng239/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003576
