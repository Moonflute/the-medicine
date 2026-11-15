---
type: qbank
schema_version: 1
id: medqa-us-validation-000297
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:8d0b94a648d45918bfd77d059cb4e4685c62ba951c7df84935172235deec47cd
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "기능성 신경학적 증상장애"
  - "전환장애"
  - "불일치성 근력저하"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yghO2ZmCDsnqXslaAgKENvbnZlcnNpb24gRGlzb3JkZXIpLm1k
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9BbHRlcGxhc2UubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

한쪽 다리 힘이 갑자기 빠진 환자를 신경과가 평가했다. 오른쪽 엉덩이를 스스로 펴라고 할 때는 힘이 약하지만, 반대쪽 다리를 저항에 맞서 들게 하면 오른쪽 엉덩이의 펴는 힘이 돌아온다. 급성 신경질환도 적절히 평가했다. 가장 적절한 설명은?

## 선택지

A. 진찰에서 힘이 돌아오는 양성 징후가 있다. 증상은 실제이며 회복을 돕는 치료를 계획할 수 있다
B. 뇌 CT가 정상일 수 있으므로 진찰 징후는 전혀 의미가 없다
C. 두 과제에서 근력이 다르므로 환자가 의도적으로 증상을 꾸몄다고 설명한다
D. 스트레스가 있으면 신경학적 원인과 관계없이 모두 기능성으로 진단한다

## 해설

후버 징후는 과제에 따라 약화가 달라지는 기능성 근력저하의 단서다. 이를 설명할 때 증상이 실제임을 인정한다. 정상 영상이나 스트레스만으로 진단하는 것은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000297
- https://pubmed.ncbi.nlm.nih.gov/40552010/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 정상 CT·스트레스만으로 전환장애를 정한 해설을 실제 진찰의 비일관성에 근거하도록 교정. 환자 교육 답 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.mayoclinic.org/diseases-conditions/conversion-disorder/diagnosis-treatment/drc-20355202
