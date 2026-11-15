---
type: qbank
schema_version: 1
id: medqa-us-train-001435
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7fb572866aecd66bdc1bb37611e803983d145de6a576f73cdd06ae4416cec030
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "normal pressure hydrocephalus"
  - "gait disturbance"
  - "urinary incontinence"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_soJXsg4HslZUg7IiY65GQ7KadIChOb3JtYWwgcHJlc3N1cmUgaHlkcm9jZXBoYWx1cykubWQ
  - MTMg67aA7J246rO8L-yalOyLpOq4iCAoVXJpbmFyeSBJbmNvbnRpbmVuY2UpLm1k
difficulty: complex
answer: B
publication_status: "withheld"
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

45세 남성이 수개월 동안 기억력이 떨어지고 소변을 자주 지린다. 발이 바닥에 붙은 듯 보폭이 작고 발을 넓게 벌려 걷지만 사지 근력과 감각은 정상이다. 가장 가능성 높은 진단은?

## 선택지

A. 조기 발병 알츠하이머병
B. 정상압 수두증
C. 파킨슨병
D. 진행성 핵상마비

## 해설

자석보행에 요실금과 인지저하가 동반되면 정상압 수두증을 의심한다. 영상으로 뇌실 확장과 다른 원인을 평가하고, 필요 시 뇌척수액 배액에 대한 반응도 살핀다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 자석보행·요실금·인지저하만으로 NPH B가 가장 적절하므로 사진 누락만으로 보류하지 않되 보지 못한 CT의 뇌실확대를 확인했다고 서술하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001435
