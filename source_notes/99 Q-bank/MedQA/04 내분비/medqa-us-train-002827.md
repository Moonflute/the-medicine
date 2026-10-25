---
type: qbank
schema_version: 1
id: medqa-us-train-002827
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:22994f3fe74d8e09422bb7c0cc05200cf9be79342c67186e7e8672beaf9af46e
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hereditary hemochromatosis"
  - "iron overload"
  - "MCP arthropathy"
  - "hypogonadism"
related_disease_slugs:
  - MDkg7ZiI7JWhL-ycoOyghOyEsSDtmIjsg4nshozsuajssKnspp0gKEhlcmVkaXRhcnkgSGVtb2Nocm9tYXRvc2lzKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7ZSE6528642ULeycjOumrCDspp3tm4TqtbAgKFByYWRlci1XaWxsaSBTeW5kcm9tZSkubWQ
question_type: risk_factor
difficulty: simple
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
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세 남성이 진행하는 관절통으로 평가를 받았다. 양손의 첫째, 둘째, 셋째 중수지관절에 부종과 압통이 있다. 손 방사선에서 둘째와 셋째 중수지관절의 부리 모양 골극, 연골하 낭종, 골감소증이 보인다. 2년 전 당뇨병을 진단받았으나 약물로 잘 조절되지 않는다. 트랜스페린 포화도는 88%, 혈청 페리틴은 1,200 ng/mL이다. 이 환자는 다음 중 어떤 합병증의 위험이 있는가?

## 선택지

A. 성선기능저하증
B. 간선종
C. 비후성 심근병증
D. 간 지방증

## 해설

MCP 관절병증·갈고리 모양 골극, 당뇨와 높은 transferrin saturation/ferritin은 혈색소증을 시사한다. 뇌하수체·성선의 철 축적으로 성선기능저하증 A가 생길 수 있다. 간경변·간세포암 및 확장성/제한성 심근병증도 알려져 있으나 선택지의 간선종이나 비후성 심근병증과 동일시해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 혈색소증의 hypogonadism A는 유지. 오답 병변들을 실제 합병증이라고 나열한 해설 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002827
