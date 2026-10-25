---
type: qbank
schema_version: 1
id: medqa-us-validation-000194
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:70e31acbe321781283fc2414c5e59cf73a53986ee2ce85c32273b0c417154776
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "조현병"
  - "망상"
  - "비정형 항정신병약"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
difficulty: standard
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

응급실에서 케네디 대통령의 사생아이며 FBI가 자신을 쫓고 외계인이 아버지를 죽이고 머리에 칩을 심었다고 주장하는 남성을 만났다. 8개월 전에도 비슷한 에피소드가 있었고 소변 독성검사는 음성이었다. 장기적으로 가장 적절한 약물은?

## 선택지

A. 쿠에티아핀
B. 리튬
C. 플루옥세틴
D. 클로르프로마진

## 해설

장기간 반복되는 망상·환각 및 와해된 언어의 정신병 양상에 제시된 선택지 중 쿠에티아핀이 항정신병 치료 선택이다. 리튬은 기분조절제, 플루옥세틴은 항우울제이다. 클로르프로마진도 항정신병 효과가 있으므로 효능이 없는 약으로 설명하지 않으며 개별 부작용·대사 위험·순응도에 따라 약물을 선택한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000194

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 쿠에티아핀 장기 선택 답 유지. 클로르프로마진은 효능이 없어 배제하는 듯한 단정과 선지 문자 제거.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
