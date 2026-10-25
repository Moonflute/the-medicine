---
type: qbank
schema_version: 1
id: medqa-us-train-004151
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:291fe2739a9fc07170c896b1b78687c28a09df4de887575b3e39395383abaed7
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "반응성 관절염"
  - "요도염"
  - "결막염"
  - "HLA-B27"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-uwmOydkeyEsSDqtIDsoIjsl7wgKFJlYWN0aXZlIEFydGhyaXRpcykubWQ
  - MjAg67mE64eo6riw6rO8L-yalOuPhOyXvCAoVXJldGhyaXRpcykubWQ
  - MTgg7JWI6rO8L-qysOyEseyXvCAoQ29uanVuY3Rpdml0aXMpLm1k
question_type: 임상증례 객관식
difficulty: complex
answer: B
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

32세 남자가 8일간 지속된 배뇨통으로 내원했다. 오늘 아침에는 요도에서 맑은 분비물이 나왔다. 그 외에는 건강하다. 가축을 다루는 농장에서 일하며 지난 일주일 동안 왼쪽 무릎과 발목 통증이 있었고 계절성 알레르기가 악화되어 눈이 붉고 가렵다. 체온 36.5°C, 혈압 122/83 mmHg, 맥박 89회/분, 호흡수 14회/분, 산소포화도 98%이다. 다음 중 양성일 가능성이 높은 검사는 무엇인가?

## 선택지

A. 항-dsDNA
B. HLA-B27
C. HLA-DR4
D. p-ANCA

## 해설


요도염·맑은 분비물 뒤 하지 비대칭 관절통과 결막 증상은 반응성 관절염을 시사한다. 선택지 중 HLA-B27(B)이 관련된다. HLA-B27은 필수 진단 조건도 감염 검사도 아니며 양성만으로 확진하지 않는다. 샤게스 증후군이라는 명칭은 이 임상상에 맞지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004151 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 반응성 관절염을 샤게스 증후군·성관절염으로 잘못 명명한 부분을 교정했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004151
