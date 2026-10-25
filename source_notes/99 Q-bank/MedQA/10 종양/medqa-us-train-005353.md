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
answer: C
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

64세 여자가 최근 진단된 유방암의 수술적 치료를 상담하러 왔다. 오른쪽 유방 표면 가까이에 불규칙한 결절이 만져진다. 유방의 일부를 제거하는 수술은?

## 선택지

A. 정관절제술
B. 유방절제술
C. 유방부분절제술
D. 척추후궁절제술

## 해설


Lumpectomy(유방종괴절제술/유방보존수술)는 종양과 주변의 일부 정상 유방조직을 절제하는 수술을 뜻하므로 C이다. Mastectomy는 유방절제술, vasectomy는 정관절제술, laminectomy는 척추후궁절제술이다. 이 문항은 명칭의 정의를 묻는 것으로, 제시된 제한 정보만으로 이 환자의 최적 치료 전체를 정한 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005353 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수술명 정의 질문을 환자별 최선의 수술결정으로 바꿔 설명한 범위 오류 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005353
