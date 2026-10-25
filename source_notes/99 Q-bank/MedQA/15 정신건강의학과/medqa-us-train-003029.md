---
type: qbank
schema_version: 1
id: medqa-us-train-003029
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7a4c9eecf96eed66814cc5503f5c4939d87312301ec4855399975db0bb32c6d9
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "neuroleptic malignant syndrome"
  - "chlorpromazine adverse effect"
  - "hyperthermia"
  - "dantrolene"
question_type: adverse_effect
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveydtOyZhOygnCDslYXshLEg7Kad7ZuE6rWwIChOZXVyb2xlcHRpYyBNYWxpZ25hbnQgU3luZHJvbWUpLm1k
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG96YXBpbmUubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

60세 남성이 2일 동안 발열과 점점 심해지는 혼란으로 응급실에 왔다. 편집성 조현병과 고혈압이 있으며 클로르프로마진과 암로디핀을 복용한다. 시간, 장소, 사람에 대한 지남력이 없고 체온 40°C, 맥박 130회/분, 호흡수 29회/분, 혈압 155/100 mmHg이다. 발한이 심하고 양측 근긴장도가 증가했으며 심부건반사는 양측 1+이다. 정신운동성 초조와 이해할 수 없는 말이 있고 목은 유연하며 복부는 부드럽고 압통이 없다. 백혈구 11,300/mm³, 혈청 크레아틴키나아제 833 U/L이다. 다음 중 가장 적절한 초기 약물치료는?

## 선택지

A. 단트롤렌
B. 클로자핀
C. 시프로헵타딘
D. 피소스티그민

## 해설

항정신병약 노출 후 고열·강직·의식 변화·자율신경 불안정과 CK 상승은 신경이완제 악성증후군을 시사한다. 우선 원인 약물을 중단하고 체온·수액·전해질·장기 기능에 대한 응급 지지치료가 필요하다. 제시된 약물 중 단트롤렌은 골격근의 칼슘 방출을 줄여 강직·고체온 조절에 고려하는 선택이다. 도파민 길항제를 추가하는 치료가 아니며 모든 사례의 단독 1차라는 뜻도 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003029

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. NMS와 단트롤렌 원정답 유지. 가장 먼저 필요한 원인약 중단·지지치료를 생략한 채 단트롤렌이 보편적 1차라고 설명하지 않도록 보완.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f7b3ac0-604d-4c78-b545-5e0f8ea3d698
