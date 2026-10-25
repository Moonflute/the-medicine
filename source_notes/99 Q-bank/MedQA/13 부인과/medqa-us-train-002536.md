---
type: qbank
schema_version: 1
id: medqa-us-train-002536
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ec5712f07f20eecd83c476460a92762ee55b5b81f8f1a3f8e08648934a27aa34
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "Sjögren syndrome"
  - "anti-Ro/SSA antibodies"
  - "congenital heart block"
question_type: risk_factor
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yHvOq3uOugjCDspp3tm4TqtbAgKFNqw7ZncmVuJ3MgU3luZHJvbWUpLm1k
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

29세 G2P1001 여성이 성교통으로 산부인과에 내원했다. 지난 한 달간 질 건조로 성관계가 불편했고 눈에 모래가 낀 느낌, 음식 맛을 느끼기 어렵고 구취가 있다. 활력징후는 정상이며 양쪽 뺨이 불룩하고 침 분비가 감소되어 있다. 다음 중 태아가 위험이 증가하는 것은?

## 선택지

A. 거대아
B. 심장차단
C. 폐고혈압
D. 태변흡인

## 해설

눈·입·질 건조와 침샘 비대는 쇼그렌병을 시사한다. 모체 항Ro/SSA 및 항La/SSB 항체가 태반을 통과하면 신생아 루푸스와 선천성 방실차단 위험이 증가할 수 있어 B가 적절하다. 임상적으로 중대한 완전(3도) 차단도 가능하며 1도 차단만의 문제로 한정할 수 없다. 본문만으로 모체 항체 양성이 실제 확인됐다고 단정한 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 항Ro/SSA 관련 태아 심장차단 위험을 1도로 한정한 잘못된 해설을 선천성 방실차단, 특히 완전 차단 위험으로 교정했다.
- https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.24130

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002536
