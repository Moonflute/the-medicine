---
type: qbank
schema_version: 1
id: medqa-us-train-001399
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5042c23127a77bde98be9329024dd6f9a49b33e06a546ef9025dd8affa890870
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "congenital diaphragmatic hernia"
  - "neonatal respiratory distress"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ISg7LKc7ISxIO2aoeqyqeuniSDtg4jsnqUgKENvbmdlbml0YWwgRGlhcGhyYWdtYXRpYyBIZXJuaWEpLm1k
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

만삭 신생아가 출생 직후부터 청색증과 심한 호흡곤란을 보인다. 왼쪽 호흡음이 들리지 않고 심음은 오른쪽에서 가장 잘 들리며 복부는 오목하다. 선천성 횡격막탈장이 의심될 때 우선할 호흡 처치는?

## 선택지

A. 마스크 양압환기 지속
B. 폐 계면활성제부터 투여
C. 응급 탈장 수술부터 시행
D. 기관삽관 후 기계환기

## 해설

선천성 횡격막탈장이 의심되는 신생아의 호흡 안정화는 기관삽관과 조심스러운 기계환기로 시작한다. 마스크 양압환기는 장을 팽창시킬 수 있으므로 피하고 위장관을 감압한다. 수술은 호흡·순환이 안정된 뒤 계획한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 선천성 횡격막탈장 의심의 기도 확보 D 유지. 보지 못한 영상 소견 창작 제거와 마스크환기 위험 명시.
- https://cahs.health.wa.gov.au/~/media/HSPs/CAHS/Documents/Health-Professionals/Neonatology-guidelines/Congenital-Diaphragmatic-Hernia-CDH.pdf?thn=0

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001399
