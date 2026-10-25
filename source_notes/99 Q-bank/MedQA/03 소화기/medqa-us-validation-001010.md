---
type: qbank
schema_version: 1
id: medqa-us-validation-001010
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:f9671bcd9ddd9faf4ce21439ca8edf88900d1d44dc21a226a774b9e2b6fc7d74
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "대량 하부위장관 출혈"
  - "혈관조영술"
  - "혈역학적 불안정"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tlZjrtoAg7JyE7J6l6rSAIOy2nO2YiCAoTG93ZXIgR2FzdHJvaW50ZXN0aW5hbCBUcmFjdCkubWQ
question_type: management
difficulty: complex
answer: A
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

63세 남성이 복통이나 발열 없이 8~9차례의 선홍색 물설사를 하여 응급실에 왔다. 창백한 결막과 저혈압, 빈맥이 있고 직장검사에서 선명한 혈액이 나온다. 위관 흡인에서는 담즙이 섞인 맑은 위 내용물만 확인되었다. 가장 적절한 다음 처치는?

## 선택지

A. 혈관조영술
B. 개복술
C. 식도위십이지장내시경
D. 소장내시경

## 해설


정답 A. 수액 후에도 악화되는 저혈압·빈맥과 지속성 대량 혈변은 신속한 출혈원 국소화와 지혈이 필요하다. 선택지 중 혈관조영 및 가능한 색전술이 적절하다. 현재는 가능하면 CTA로 먼저 출혈 위치를 찾는 경로도 중요하며 소생과 혈액제제 준비를 병행한다. 담즙 섞인 맑은 위관 흡인만으로 상부 출혈을 절대적으로 배제할 수는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001010 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 소생에도 지속되는 대량 출혈의 혈관조영/색전 A 유지; 현행 CTA 역할과 위관 음성의 한계 보완.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.radiologyinfo.org/en/info/acs-rm-lower-gastro-tract-bleeding

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001010
