---
type: qbank
schema_version: 1
id: medqa-us-train-009666
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:aaebcbe7682fc3864b153818444a3030b37a7160476b3f519492c75aad7ead7c
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "vesicovaginal fistula"
  - "방광질루"
  - "postoperative urinary incontinence"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-yalOyLpOq4iCAoVXJpbmFyeSBJbmNvbnRpbmVuY2UpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

골반 수술 2주 뒤부터 질로 소변이 계속 새는 49세 여성이다. 방광과 질 사이에 누공이 있는지 우선 확인할 검사는?

## 선택지

A. 기침 유발검사로 복압성 누출만 확인
B. 방광내에 색소를 주입하고 질 거즈가 착색되는지 확인
C. 배뇨 후 잔뇨량만 측정
D. 요류 속도만 측정

## 해설

방광에 주입한 색소가 질 거즈에 묻으면 방광질루를 지지한다. 음성이어도 지속 누출이 있으면 요관질루 등 다른 요로 손상을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 수술 후 질 내 소변 고임의 메틸렌블루 B 유지. 요도-방광 누공 오역을 방광질 누공으로 교정.
- https://www.exxcellence.org/list-of-pearls/postoperative-urinary-fistulae/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009666
- https://uroweb.org/guidelines/non-neurogenic-female-luts/chapter/disease-management
