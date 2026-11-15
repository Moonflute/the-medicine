---
type: qbank
schema_version: 1
id: medqa-us-train-005353
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:511671ad770e0b08e0f714c7156a8fb9049b49253ce84351b1744d5295113ba9
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "유방암"
  - "유방부분절제술"
  - "유방 보존 수술"
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
question_type: management
difficulty: standard
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

림프절 전이가 없는 48세 환자가 침윤성 유방암으로 유방보존수술을 받았다. 절제면은 음성이고 방사선치료 금기는 없다. 국소 재발 위험을 낮추기 위해 보통 추가할 치료는?

## 선택지

A. 전유방을 보존했으므로 추가 치료가 필요 없다
B. 항암치료 여부와 무관하게 즉시 전유방절제술을 다시 시행한다
C. 수술 흉터 부위에 항생제만 바른다
D. 남아 있는 유방에 보조 방사선치료를 시행한다

## 해설


유방보존수술 뒤 방사선치료는 국소 재발을 줄인다. 방사선 생략은 일부 저위험 환자에서 검토하는 예외이며 모든 수술 환자에 적용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005353 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수술명 정의 질문을 환자별 최선의 수술결정으로 바꿔 설명한 범위 오류 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005353
- https://www.cancer.go.kr/lay1/program/S1T211C217/cancer/view.do?cancer_seq=4757&menu_seq=4773
