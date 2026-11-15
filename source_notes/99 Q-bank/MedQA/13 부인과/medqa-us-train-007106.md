---
type: qbank
schema_version: 1
id: medqa-us-train-007106
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cf732f4e18ca9ed567f1858bc487c769eeec7c2a8bab85e236c033d999b959d9
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "조기 난소부전"
  - "원발성 난소기능부전"
  - "고FSH성 성선기능저하증"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-yhsOq4sOuCnOyGjOu2gOyghCAoUHJlbWF0dXJlIE92YXJpYW4gRmFpbHVyZSkubWQ
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 여성이 소아 백혈병으로 알킬화제 기반 항암치료를 받았다. 6개월째 무월경이고 안면홍조와 질 건조가 있다. 임신검사는 음성이다. 항암치료 후 조기 난소기능부전을 지지하는 소견은?

## 선택지

A. FSH 3 IU/L와 낮은 에스트라디올
B. 고프로락틴혈증과 낮은 FSH
C. 테스토스테론 상승과 정상 FSH
D. FSH 42 IU/L와 낮은 에스트라디올

## 해설

난포 기능이 저하되면 에스트라디올이 감소하고 되먹임 소실로 FSH가 상승한다. 40세 미만에서 4개월 이상 월경 장애와 FSH >25 IU/L가 진단을 지지하며, 불확실하면 FSH를 반복한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: FSH/LH를 LH/FSH로 뒤집은 해설과 골반 내 FSH라는 표현을 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007106
- https://academic.oup.com/hropen/article/2024/4/hoae065/7918369
