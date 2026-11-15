---
type: qbank
schema_version: 1
id: medqa-us-train-004553
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:aa62de48c8109e4d0b7dec5a9a2a4785d4a20cbdf3c22588a93ebc8d761d4056
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "보어하브 증후군"
  - "식도 파열"
  - "종격동염"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rtYjrpbTtlZjruIwg7Kad7ZuE6rWwIChCb2VyaGFhdmUgU3luZHJvbWUpLm1k
question_type: management
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGFiZXRhbG9sLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 여성이 반복 구토 직후 흉통이 생겼다. CT 식도조영에서 하부 식도 밖으로 소량의 조영제가 새지만 누출은 국한돼 있고 광범위한 흉막 오염은 없다. 혈압은 안정적이다. 외과·내시경팀이 누출 치료 방침을 정하는 동안 우선할 조치는?

## 선택지

A. 정맥 옥트레오타이드만 투여한다
B. 위산 억제제만 처방한 뒤 귀가시킨다
C. 금식하고 정맥 광범위 항생제를 시작한다
D. 감염 위험이 낮으므로 바로 식사를 시작한다

## 해설

구토 뒤 식도 밖으로 조영제가 새는 것은 전층 천공을 뜻한다. 금식과 정맥 항생제를 시작하고 전문팀이 누출 범위에 따라 배액이나 봉합·내시경 치료를 결정한다. 누출이 작다고 항생제만 주고 퇴원시키지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 초기 contained식도천공의 antibiotics C 유지. 항생제단독이면충분하다는 오독 방지.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6544956/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004553
