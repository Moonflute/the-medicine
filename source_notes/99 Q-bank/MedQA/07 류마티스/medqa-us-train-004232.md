---
type: qbank
schema_version: 1
id: medqa-us-train-004232
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bf5460ba3a60ede0d6d5f60629f9a77ccdfc5bfd250a741730b4e5e19f79b762
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "혼합 한랭글로불린혈증"
  - "C형간염"
  - "저보체혈증"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: 임상증례 객관식
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

45세 남자가 8개월간 지속된 피로와 관절통으로 내원했다. 양쪽 무릎과 팔꿈치 통증, 미만성 근육통이 있으며 호흡곤란은 없다. 하지에 가렵지 않은 발진이 여러 차례 발생했다. 8년 전 C형간염을 진단받았다. 체온 37.9°C, 맥박 90회/분, 혈압 140/90 mmHg이다. 하지에 압력을 가해도 창백해지지 않는 융기된 자주색 구진이 보인다. 헤모글로빈 13.9 g/dL, 백혈구 8,500/mm³, 혈소판 160,000/mm³, 크레아티닌 1.1 mg/dL, ALT 123 U/L, AST 113 U/L이다. 추가 평가에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 항호중구 세포질 주위 항체(p-ANCA) 증가
B. 혈청 IgA 증가
C. 패서지 검사 양성
D. 저보체혈증

## 해설


만성 HCV, 피로·관절통과 촉지성 자반은 혼합 한랭글로불린혈관염을 시사한다. 면역복합체에 의한 보체 활성화/소비로 저보체혈증(D), 특히 낮은 C4가 흔하다. 혈소판160,000/mm³를 감소라고 단정하지 않는다. 단순히 저보체혈증이 저보체혈증을 뜻한다는 순환 설명이나 C3만 감소한다고 한정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004232 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 혈소판감소를 만들어낸 설명을 제거하고 HCV 혼합 한랭글로불린혈관염과 주로 C4 소비를 설명했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004232
