---
type: qbank
schema_version: 1
id: medqa-us-train-003481
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e6a6983d37422106d48bdbdd3f61042d947e301d8e24758700e9686244308e31
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "acute hepatitis A"
  - "hepatitis A immunity"
  - "up-to-date vaccination"
  - "postexposure prophylaxis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEgQe2YlSDqsITsl7wgKEFjdXRlIEhlcGF0aXRpcyBBKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: prevention
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

28세 여성이 1주간 지속된 황달과 오심으로 응급실에 왔다. 지난 주말 야외 모임에서 해산물을 먹었고 집에서는 어린이집에 다니는 2세 아들과 함께 산다. 아이의 예방접종은 최신 상태다. 검사에서 A형 간염 IgM 항체가 양성이었고 B형 간염 표면항체는 양성, 표면항원은 음성이었다. 현재 아이에게 가장 적절한 건강관리 권고는?

## 선택지

A. B형 간염 면역글로불린과 B형 간염 백신을 투여한다
B. 추가 조치는 필요하지 않다
C. B형 간염 면역글로불린만 투여한다
D. A형 간염 백신과 A형 간염 면역글로불린을 투여한다

## 해설


어머니는 IgM anti-HAV 양성인 급성 A형간염이다. 본문의 anti-HBs 양성은 어머니의 검사이지 아이의 결과가 아니다. 2세 아이가 권고된 A형간염 백신 시리즈를 이미 완료했다면 추가 HAV 노출후 예방이 필요하지 않아 B가 해당한다. HepB 백신 면역이 HAV를 예방하는 것은 아니다. 실제 HAV 접종 완료 여부를 확인해야 하며 미접종/미완료인12개월 이상 접촉자는 노출2주 내 HAV 백신을, 면역저하·만성간질환 등은 면역글로불린 병용을 검토한다. 건강한 접종 완료 아동에게 D의 백신+IG를 일률 투여하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003481 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 어머니의 anti-HBs를 아이 검사로 오독하고 HepB 접종으로 HAV 예방을 설명한 오류 교정; 최신 소아 HAV 접종 완료 맥락의 B 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/yellow-book/hcp/travel-associated-infections-diseases/hepatitis-a.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003481
