---
type: qbank
schema_version: 1
id: medqa-us-train-009259
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4b00f83ccae3052d04ea4a8538c53c35ce30baa41950b96c8b1c9df9920a280f
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "tumor lysis syndrome"
  - "종양용해증후군"
  - "urate crystals"
related_disease_slugs:
  - MTAg7KKF7JaRL-yiheyWkSDsmqntlbQg7Kad7ZuE6rWwIChUdW1vciBMeXNpcyBTeW5kcm9tZSkubWQ
question_type: investigation
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

8세 남아가 오심, 구토, 소변량 감소로 소아과에 내원했다. 5일 전 급성 림프모구성 백혈병으로 첫 항암화학요법을 받았다. 항암치료 전 백혈구 수는 60,000/mm³였다. 맥박 110회/분, 체온 37.0°C, 혈압 100/70 mmHg이고 양쪽 발에 부종이 있다. 이 상태의 진단을 확인하는 데 도움이 되는 혈청검사와 소변검사 소견은 무엇인가?

## 선택지

A. 고칼륨혈증, 고인산혈증, 저칼슘혈증, 크레아틴키나아제(MM)의 극심한 상승
B. 고요산혈증, 고칼륨혈증, 고인산혈증, 젖산산증, 소변 내 요산 결정
C. 고요산혈증, 고칼륨혈증, 고인산혈증, 소변 단클론성 스파이크
D. 고요산혈증, 고칼륨혈증, 고인산혈증, 젖산산증, 수산염 결정

## 해설


높은 종양부하를 가진 ALL에서 항암 후 5일 내 핍뇨·부종이 생겨 종양용해증후군을 의심한다. 세포 파괴로 요산·칼륨·인산이 증가하고 이차적 저칼슘혈증과 급성 신손상이 발생할 수 있다. B의 요산 결정과 핵심 전해질 조합이 가장 부합한다. 산증은 신손상 등과 동반될 수 있으나 젖산산증 자체가 모든 TLS의 필수 검사 소견은 아니다. 극심한 CK 상승은 횡문근융해, 요중 단클론단백은 형질세포 질환 쪽 단서이며 옥살산 결정은 전형적인 TLS 요산 결정과 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009259 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: TLS의 고요산·고칼륨·고인산혈증과 요산 결정으로 B 유지하되 젖산산증을 필수 진단 소견처럼 설명한 오류 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://onlinelibrary.wiley.com/doi/10.1111/bjh.70092

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009259
