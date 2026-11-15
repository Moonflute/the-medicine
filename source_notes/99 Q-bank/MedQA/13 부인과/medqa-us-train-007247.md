---
type: qbank
schema_version: 1
id: medqa-us-train-007247
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:da3059c100aca3be46915ed86bc963e2a138e6210ea5e0e99d0aa1bf02c050d3
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "수술 후 요폐"
  - "폴리 카테터 폐색"
  - "자궁절제술 후 합병증"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JqU66GcIOqwkOyXvCAoVXJpbmFyeSBUcmFjdCBJbmZlY3Rpb24pLm1k
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

자궁절제술 4시간 뒤 유치도뇨관으로 소변이 거의 나오지 않는다. 혈압은 정상이고 방광 스캔에서 290 mL가 남아 있다. 수액이나 이뇨제를 추가하기 전 먼저 할 일은?

## 선택지

A. 정맥 푸로세미드를 투여한다
B. 도뇨관과 배액관의 꺾임·막힘·위치를 확인한다
C. 바로 수술실로 돌아가 양쪽 요관을 확인한다
D. 저혈량으로 단정해 수액을 빠르게 반복 주입한다

## 해설

도뇨관이 들어 있는데 방광에 소변이 남아 있으면 우선 배액 경로의 문제를 확인한다. 배액이 정상인데도 저뇨가 지속되면 관류, 신기능과 수술 후 요로 손상을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 잔뇨를 동반한 수술 후 핍뇨의 카테터 점검 B 유지. 방광 역행 주입만으로 요관 개통을 증명한다는 원문 오류를 명시.
- https://www.exxcellence.org/list-of-pearls/postoperative-urinary-fistulae/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007247
- https://www.baus.org.uk/trainees/catheters_troubleshooting.aspx
