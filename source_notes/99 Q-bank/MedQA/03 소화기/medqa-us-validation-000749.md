---
type: qbank
schema_version: 1
id: medqa-us-validation-000749
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:d42460221d756dcefe773f9117b0d6f9f3dac9875ff8c5f7f1cbaba3c6d2816f
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "급성 췌장염"
  - "HIV 치료 관련 췌장염"
  - "후천성면역결핍증"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7LeM7J6l7Je8IChBY3V0ZSBQYW5jcmVhdGl0aXMpLm1k
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
question_type: etiology
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

50세 여성이 갑자기 시작된 심한 복통, 메스꺼움, 구토로 응급실에 왔다. HIV, 당뇨병, 천식, 우울증, 급성 폐쇄각 녹내장이 있고 아밀라아제 456 U/L, 리파아제 562 U/L이다. 현재 상태를 유발했을 가능성이 가장 높은 기저 질환의 치료는?

## 선택지

A. 천식
B. 후천성면역결핍증
C. 우울증
D. 당뇨병

## 해설


정답 B. 급성 복통과 췌장효소 상승은 췌장염을 시사하며 선택지 중 HIV/AIDS 치료에 사용되던 didanosine 등은 췌장염과 잘 알려진 연관성이 있다. 일부 약물은 고중성지방혈증을 통해 위험을 높일 수 있으나 protease inhibitor 전체를 가장 직접적인 원인으로 단정하면 안 된다. 본문에는 실제 약제명이 없으므로 약물성 인과관계를 확진하지 않으며 이는 현재 권장 HIV 요법의 일반적 부작용을 뜻하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000749 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 항레트로바이러스 관련 췌장염은 특히 역사적 didanosine 연관성을 구분; 모든 protease inhibitor/현대 HIV 치료에 일괄 귀속하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=829e744d-7bd4-43dc-9b58-ffb016cb8e67&type=pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000749
