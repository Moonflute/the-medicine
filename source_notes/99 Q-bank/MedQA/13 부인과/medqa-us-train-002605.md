---
type: qbank
schema_version: 1
id: medqa-us-train-002605
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1d962e10695bd4ad5da13f7b032830d5f9eef3cf83fb6be9067d62f1bf064fe4
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "postpartum hemorrhage"
  - "uterine atony"
  - "bimanual uterine massage"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2geydtOyZhOymnSAoVXRlcmluZSBBdG9ueSkubWQ
  - MTIg7IKw6rO8L-yCsO2bhOy2nO2YiC5tZA
difficulty: complex
answer: A
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

근종 병력이 있는 31세 G6P6 여성이 쌍둥이를 질식분만했다. 두 태반은 즉시 분만되었지만 이후 20분 동안 출혈이 계속 많다. 활력징후는 안정적이고 질출혈이 지속된다. 다음 중 가장 적절한 초기 치료는?

## 선택지

A. 양손 자궁 마사지
B. 혈액제제 수혈
C. 자궁적출술
D. 자궁동맥 색전술

## 해설

쌍태·다산·근종은 자궁이완 위험인자이며 지속 출혈에서 즉시 양손 자궁마사지(A)를 시행할 수 있다. 출혈량 평가, oxytocin·TXA·수액 등 초기 처치와 열상·잔류조직 평가를 동시에 진행한다. 정상 활력징후만으로 경미한 출혈이라고 판단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 자궁마사지외다른초기출혈처치를지연하지않도록보강.
- https://www.who.int/news/item/05-10-2025-global-health-agencies-issue-new-recommendations-to-help-end-deaths-from-postpartum-haemorrhage

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002605
