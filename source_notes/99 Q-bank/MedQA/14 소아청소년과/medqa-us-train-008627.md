---
type: qbank
schema_version: 1
id: medqa-us-train-008627
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:148aae5ee8e519b700b658bf9d384703dd67126145d7cdaa4bb2b209735df129
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "trimethoprim-sulfamethoxazole adverse effect"
  - "drug-induced neutropenia"
  - "viral upper respiratory infection"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Zi47KSR6rWsIOqwkOyGjOymnSAoTmV1dHJvcGVuaWEpLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
---

# MedQA US 임상문제

## 문제

6세 남아가 그날 아침부터 시작된 두통, 기침, 콧물, 미열로 내원했다. 일주일 전 요로감염이 있었지만 트리메토프림-설파메톡사졸 치료로 호전되었다. 양쪽 부모 모두 알레르기 비염 병력이 있다. 체온은 37.8°C(100°F)이다. 신체검사에서 콧물과 전두동·상악동 압통이 있고 경부 림프절병증이 있다. 검사에서 혈색소 14.2g/dL, 백혈구 2,700/mm³, 분절 호중구 30%, 밴드 1%, 호산구 4%, 호염기구 0%, 림프구 56%, 단핵구 9%, 혈소판 155,000/mm³이다. 다음 중 이 환자 증상의 가장 가능성 높은 기저 원인은 무엇인가?

## 선택지

A. 약물 부작용
B. CMV 감염
C. EBV 감염
D. 급성 골수성 백혈병

## 해설


트리메토프림‑설파메톡사졸은 골수 억제성을 일으켜 호중구 감소증을 유발할 수 있다. 환자의 백혈구 감소와 호중구 비율 저하가 약물 부작용을 가장 잘 설명한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008627
