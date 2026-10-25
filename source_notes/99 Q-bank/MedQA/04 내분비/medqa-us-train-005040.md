---
type: qbank
schema_version: 1
id: medqa-us-train-005040
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:06a6dc1201634162a401b2e42cee80840d09f83d12340587a0bd80bb26945c6c
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "대사증후군"
  - "인슐린 저항성"
  - "복부비만"
related_disease_slugs:
  - MDQg64K067aE67mEL-uMgOyCrOymne2bhOq1sCAoTWV0YWJvbGljIFN5bmRyb21lKS5tZA
question_type: mechanism
difficulty: complex
answer: C
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

57세 남자가 반복 측정한 혈압 159~161/95~102 mmHg로 내원했다. 최근 3년간 10 kg 체중이 증가했고 BMI는 42 kg/m²이다. 제2형 당뇨병이 있으며 총콜레스테롤 220 mg/dL, HDL 25 mg/dL, 중성지방 198 mg/dL, 공복혈당 120 mg/dL이다. 다음 중 이 환자 상태 발생에 가장 중요한 요인은?

## 선택지

A. 전염증성 사이토카인 분비
B. 내장지방 축적
C. 인슐린 저항성
D. 식이 염분 섭취 증가

## 해설

비만·고혈압·당뇨·높은 TG/낮은 HDL 군집에서 인슐린 저항성 C가 핵심 기전이다. 내장지방·염증이 저항성을 촉진하는 등 상호작용하며 모든 소견이 저항성 하나로만 생기는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 대사증후군 IR C는 유지하되 모든 소견의 단일원인이라는 인과 과장 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005040
