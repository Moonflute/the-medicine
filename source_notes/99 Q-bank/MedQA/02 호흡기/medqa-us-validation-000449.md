---
type: qbank
schema_version: 1
id: medqa-us-validation-000449
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:d690b125e402edec3a9ab62db642dff8d6b969307daaf39255c96cded91ac80f
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "폐성심"
  - "폐고혈압"
  - "우심부전"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOqzoO2YiOyVlSAoUHVsbW9uYXJ5IEh5cGVydGVuc2lvbikubWQ
question_type: investigation
difficulty: complex
answer: A
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

67세 남성이 4주간의 운동 시 호흡곤란과 하지 부종으로 진료를 받으러 왔다. 45년간 흡연했고 COPD가 있지만 약물 순응도가 낮다. 혈압 135/115 mmHg, 맥박 90회/분, 호흡수 22회/분, 산소포화도 92%이며 배럴흉, 경정맥 팽창, 양측 하지 3+ 함요부종, 압통성 간비대, 복압에 따른 경정맥 팽창이 있다. 흉부 X선에서 주폐동맥 확장, 심전도에서 우각차단과 우심실비대가 보인다. 이 상태를 진단하는 표준검사는?

## 선택지

A. 우심장도관술
B. 관상동맥조영술
C. 복수천자
D. 간 초음파

## 해설

COPD에 동반된 우심부전과 폐고혈압이 의심되며, 혈역학적 확진과 분류의 표준은 A의 우심장도관술이다. 실제로는 심초음파 등 비침습적 평가를 먼저 하고, 결과가 진단이나 치료 결정에 영향을 주는 환자를 선택해 숙련된 기관에서 시행한다. 모든 COPD 환자에게 일상적으로 도관술을 해야 한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: PH 확진의 표준검사 A와 모든 COPD 환자의 일상적 도관검사를 구별.
- https://doi.org/10.1183/13993003.00879-2022

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000449
