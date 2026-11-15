---
type: qbank
schema_version: 1
id: medqa-us-train-004097
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d33655972dd78e740c3c70d30ac9edcd6c6fbac3bb88c9170ba4218e8ac08b40
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "양극성 II형 장애"
  - "경조증"
  - "주요우울 삽화"
  - "Bipolar II disorder"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
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
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 환자가 과거에 주요우울 삽화를 겪었다. 최근 5일 동안 평소보다 들뜨고 잠을 적게 자도 활력이 넘쳤으며 말과 활동이 늘었다. 주변 사람들도 변화를 알아챘지만 심한 기능 손상, 입원이나 정신병 증상은 없었다. 조증과 물질 유발 병력도 없다. 진단은?

## 선택지

A. 양극성 II형 장애
B. 양극성 I형 장애
C. 순환성장애
D. 주요우울장애

## 해설


양극성 II형은 주요우울 삽화와 경조증 삽화가 있고 조증 병력이 없어야 한다. 경조증은 최소 4일간의 뚜렷한 변화가 있지만 심한 기능 손상이나 입원 필요, 정신병 증상은 없다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004097
- https://www.nice.org.uk/guidance/cg185/chapter/recommendations
- https://pubmed.ncbi.nlm.nih.gov/42947601/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영한 본문·선지·답·해설 대조. 5일 수면욕 감소·활력·과소비·과민에 심각한 기능붕괴/정신병 정보가 없는 경조증과 이전 주요우울 양상으로 II형 정답 일치.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
