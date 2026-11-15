---
type: qbank
schema_version: 1
id: medqa-us-test-000009
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:31a3af94e4f83d6c8759993b60fe9e1a1d5a68fa89c21f718e499002d22782bb
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "구리 자궁내장치"
  - "골반염증성 질환"
  - "피임 금기"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geuCtOyepey5mCAoSW50cmF1dGVyaW5lIERldmljZSkubWQ
  - MTMg67aA7J246rO8L-qzqOuwmOuCtCDqsJDsl7wgKFBlbHZpYyBJbmZsYW1tYXRvcnkgRGlzZWFzZSkubWQ
difficulty: standard
answer: D
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

37세 여성이 구리 자궁내장치를 원하지만 오늘 발열과 골반통으로 활동성 골반염이 확인됐다. 지금 가장 적절한 계획은?

## 선택지

A. 삽입하고 골반염 치료는 생략한다
B. 항생제 첫 회와 동시에 바로 삽입한다
C. 과거 골반염이 있었으므로 평생 어떤 자궁내장치도 쓸 수 없다
D. 골반염을 먼저 치료하고 회복 후 삽입을 다시 검토한다

## 해설

활동성 골반염에서는 새 자궁내장치 삽입을 미룬다. 감염이 치료된 후에는 과거 골반염 병력만으로 장치 삽입이 영구적으로 금기인 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 미표시 실제 검수. 현재PID와 과거/재발병력만의 IUD 적격성 구별. B는 현재활동성에 해당할때 정답임 명시, 나머지원문유지.
- https://www.cdc.gov/mmwr/volumes/73/rr/rr7304a1_appendix.htm
- https://www.cdc.gov/contraception/hcp/usspr/intrauterine-contraception.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000009
- https://www.ncbi.nlm.nih.gov/books/NBK619474/table/ch5.tab4/
