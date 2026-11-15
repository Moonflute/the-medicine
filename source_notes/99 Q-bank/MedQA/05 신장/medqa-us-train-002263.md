---
type: qbank
schema_version: 1
id: medqa-us-train-002263
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:12800d9ab92d0a4ebfdcace6bfec4b2515f7cd53dac57ec7f03e0a1f5152d32d
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "hyperkalemia"
  - "rhabdomyolysis"
  - "insulin-glucose therapy"
  - "acute kidney injury"
related_disease_slugs:
  - MDUg7Iug7J6lL-qzoOy5vOulqO2YiOymnSAoSHlwZXJrYWxlbWlhKS5tZA
  - MDUg7Iug7J6lL-2aoeusuOq3vOycte2VtOymnSAoUmhhYmRvbXlvbHlzaXMpLm1k
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
question_type: management
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

횡문근융해가 있는 62세 남성의 K가 7.1 mmol/L이고 심전도 변화가 있어 정맥 칼슘을 투여했다. 체외 칼륨 제거도 준비 중이다. 지금 혈중 칼륨을 빠르게 세포 안으로 이동시키기 위한 표준 정맥요법은?

## 선택지

A. 정맥 포도당 단독
B. 정맥 인슐린과 포도당
C. 정맥 칼슘 반복 투여 단독
D. 경구 칼륨 결합제

## 해설

정맥 인슐린은 칼륨을 세포 안으로 이동시켜 혈중 농도를 낮춘다. 포도당을 함께 주고 저혈당과 칼륨 반등을 감시한다. 체내 칼륨 제거를 대신하지는 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 근육손상 횡격막 오역을 횡문근융해로 수정. Ca 후 K 이동 insulin/glucose B의 의미와 재평가를 명시.
- https://www.ukkidney.org/health-professionals/guidelines/treatment-acute-hyperkalaemia-adults-0

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002263
- https://guidelines.ukkidney.org/hyperkalaemia/
