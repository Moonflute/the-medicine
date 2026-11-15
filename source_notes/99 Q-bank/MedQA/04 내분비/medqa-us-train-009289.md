---
type: qbank
schema_version: 1
id: medqa-us-train-009289
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6ff34d5c42067615e68ea4c2f81af02a7d552abb5c19caba4cdeeaa67d0bf9a9
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Turner syndrome"
  - "터너증후군"
  - "benign nevi"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7YSw64SIIOymne2bhOq1sCAoVHVybmVyIFN5bmRyb21lKS5tZA
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

14세 여아가 키 성장 부진과 사춘기 지연으로 내원했다. 유방 발달이 없고 유두 사이가 넓으며 반복 중이염 병력이 있다. 에스트라디올은 낮고 FSH는 높다. 터너 증후군을 확인할 검사는?

## 선택지

A. 뇌하수체 MRI
B. 골연령 촬영
C. 말초혈액 핵형검사
D. 프로락틴 재검

## 해설


원발성 난소기능저하 소견에 저신장과 특징적 신체 소견이 동반돼 터너 증후군이 의심된다. 말초혈액 핵형검사로 X염색체 이상을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009289 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Turner–다수 양성모반 C 연관성 유지, 피부색소 정상이라는 무의미 일반화 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009289
- https://doi.org/10.1093/ejendo/lvae050
