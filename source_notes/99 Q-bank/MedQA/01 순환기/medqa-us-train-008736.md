---
type: qbank
schema_version: 1
id: medqa-us-train-008736
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9b0fb4a00ce4b1578b0fd68e993f46bb10e26d4eec02e6eedd61be3de85a7d74
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "statin adverse effect"
  - "transaminase elevation"
  - "stable angina"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yViOyglSDtmJHsi6zspp0gKFN0YWJsZSBBbmdpbmEpLm1k
question_type: prognosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

67세 여성이 4개월 동안 운동 시 발생하는 흉통으로 내원했다. 통증은 둔하며 5층 아파트 계단을 오를 때 흉골 뒤 압박감이 생긴다. 1분간 멈추면 곧 사라진다. 고혈압으로 매일 리시노프릴과 메토프롤롤을 복용한다. 흡연과 음주는 하지 않는다. 키 158cm, 체중 82kg, BMI 33kg/m²이다. 맥박 72회/분, 혈압 140/85mmHg이며 심장검사에서 잡음, 마찰음, 갤럽은 없다. 공복 지질검사에서 총콜레스테롤 196mg/dL, LDL 110mg/dL, HDL 50mg/dL이다. 안정 시 심전도는 정상이다. 아스피린을 시작한 지 일주일 후 아토르바스타틴을 시작했다. 이 환자에게 가장 가능성 높은 부작용은 무엇인가?

## 선택지

A. 복부 팽만
B. 트랜스아미나제 상승
C. 담석증
D. 홍조

## 해설

아토르바스타틴은 무증상 트랜스아미나제 상승을 일으킬 수 있어 제시된 선택지 중 B가 적합하다. 대부분의 경미한 상승이 임상적 간손상이나 즉시 중단을 뜻하지는 않는다. 이를 모든 스타틴 부작용 중 가장 흔한 것으로 일반화하지 않으며, 근육 증상 등 다른 이상반응과 구별한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 선지 중 간효소 상승 B는 가능하지만 이를 스타틴 전체의 가장 흔한 부작용으로 단정한 설명을 한정.
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a60cc18b-0631-4cf0-b021-9f52224ece65

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008736
