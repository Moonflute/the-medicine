---
type: qbank
schema_version: 1
id: medqa-us-train-001318
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ac8a84b2545aa9b1a86abb91652c01393e15606a61984270235a4ddcd982043d
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "ovarian embryonal carcinoma"
  - "germ cell tumor"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-yDneyLnSDshLjtj6wg7KKF7JaRIChHZXJtIENlbGwgVHVtb3IpLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

15세 여아가 2개월 동안의 비정상 질 출혈로 내원했다. 그 전까지는 월경 주기가 규칙적이었다. 13세에 초경을 했다. 중증 질환의 개인력이나 가족력은 없고 약도 복용하지 않는다. 활력징후와 신체검사는 정상이다. 검사에서 혈청 베타-hCG와 AFP 수치가 상승했다. 복부 초음파에서 왼쪽 난소에 고형 성분이 우세한 종괴가 보인다. 오른쪽 난소와 자궁에는 이상이 없다. 다음 중 이 소견을 가장 잘 설명하는 난소 종양은 무엇인가?

## 선택지

A. 황체 낭종
B. 배아암종
C. Krukenberg 종양
D. 장액성 낭선종

## 해설

청소년의 고형 난소 종괴에 AFP와 β-hCG가 함께 상승한 소견은 악성 생식세포종양을 지지하며, 제시된 선택지에서는 배아암종(B)이 가장 적합하다. 난소 생식세포종양에서는 이 표지자들을 평가한다. 황체 낭종이나 장액성 낭선종은 이러한 두 표지자의 종양성 동시 상승을 설명하지 못하고, Krukenberg 종양은 보통 위장관 원발암의 난소 전이이다. 두부 외상이나 폐색전증에 관한 기존 해설은 이 사례와 무관하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- https://www.cancer.gov/types/ovarian/hp/ovarian-germ-cell-treatment-pdq
- https://www.cancer.gov/types/ovarian/patient/ovarian-germ-cell-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001318
