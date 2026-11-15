---
type: qbank
schema_version: 1
id: medqa-us-test-000746
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:c88632639b59625631a5788880df0fcb38bddccc3fa584a8e4bab2137da8b7fc
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "투석 중 저혈압"
  - "말기신부전"
  - "낙상 예방"
related_disease_slugs:
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
question_type: prevention
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

혈액투석 환자가 건체중과 초여과 속도를 재평가한 뒤에도 투석 중 반복해서 어지럽고 혈압이 떨어진다. 다음 회차부터 저혈압을 줄이는 데 고려할 투석 처방 변경은?

## 선택지

A. 개인 상태에 맞춰 투석액 온도를 낮춘다
B. 투석 시간을 줄이고 시간당 초여과를 높인다
C. 투석액 온도를 더 높인다
D. 어지럼이 시작되면 초여과를 늘린다

## 해설


투석 중 저혈압이 반복될 때 투석액 온도를 낮추면 혈압 유지에 도움이 될 수 있다. 건체중, 초여과 속도, 약제 등도 함께 검토한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 투석 후 증상성 혈압 하강에는 냉각 투석액 A가 혈역학적 내성을 개선할 수 있음. 초여과 증가/과식은 악화 가능.
- https://kdigo.org/wp-content/uploads/2017/05/KDIGO-BP-Volume-in-Dialysis-FINAL.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000746
- https://www.kjim.org/journal/view.php?number=170694
