---
type: qbank
schema_version: 1
id: medqa-us-train-001901
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a51da1db37249338f0fbe4b24c7b68d3f86b1f12a9d13d9125fcfe577d190c38
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "gastroesophageal reflux disease"
  - "lifestyle modification"
  - "extraesophageal reflux"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITsi53rj4Qg7Jet66WYIOyniO2ZmCAoR0VSRCkgKEdhc3Ryb2Vzb3BoYWdlYWwgUmVmbHV4IERpc2Vhc2UpLm1k
question_type: management
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

48세 남성이 수개월간 점점 잦아진 식후 명치 불편감과 아침에 심해지는 간헐적 마른기침으로 내원했다. 그 외에는 건강하며 추가 증상은 없다. 과거력에 주요우울장애, 불안 및 갑상선기능저하증이 있다. 다음 중 가장 적절한 초기 관리 단계는 무엇인가?

## 선택지

A. 심전도
B. 생활습관 교정
C. omeprazole 치료 시작
D. 투시 바륨 삼킴검사

## 해설

정답은 B이다. 경고증상 없는 식후 불편감/아침기침에서 식사·체위·체중 등 생활요인을 평가하고 조정할 수 있어 B가 적합하다. 기침은 역류의 특이 소견이 아니므로 지속되면 다른 원인도 평가한다. 전형적인 GERD증상이 지속될 때 PPI를 병행할 수 있고 생활교정이 반드시 실패한 뒤에만 약물을 시작해야 한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: PPI는 생활교정 실패 뒤에만 허용된다는 해설을 수정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8754510/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001901
