---
type: qbank
schema_version: 1
id: medqa-us-train-009311
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:16f060a657cb3d3159f18e7387224d98a564af6e609628961ddab64157342901
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "ureteral stone"
  - "요관결석"
  - "renal colic"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yalOyEnSAoVXJpbmFyeSB0cmFjdCBzdG9uZSkubWQ
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

48세 남성이 CT에서 7mm 원위 요관결석을 확인했다. 진통 후 통증이 조절되고, 발열·농뇨·급성 신손상은 없다. 즉시 제거 대신 면밀히 추적하며 자연 배출을 기다리기로 했다. 배출을 돕기 위해 추가로 고려할 약제는?

## 선택지

A. 구연산칼륨을 모든 결석에 투여
B. 푸로세미드로 강제 이뇨
C. 예방적 광범위 항생제
D. 탐술로신 등 알파차단제

## 해설

합병증 없이 관찰 가능한 원위 요관결석에서 알파차단제를 배출 보조로 고려한다. 특히 5mm를 넘는 원위 결석에서 도움이 될 수 있다. 발열, 조절되지 않는 통증, 신기능 악화가 생기면 다시 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 플루오로퀴놀론 건병증 해설을 급성 옆구리 통증의 요로결석 진단 영상으로 교체. 원정답 D 유지; 약물요구만으로 진단을 단정하거나 진통을 배제하지 않도록 수정.
- https://uroweb.org/guidelines/urolithiasis/chapter/guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009311
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10330415/
