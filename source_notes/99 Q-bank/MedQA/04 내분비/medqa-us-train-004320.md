---
type: qbank
schema_version: 1
id: medqa-us-train-004320
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:203f11695cc72327a776e7ae4aae05ac81c12062cb13139f34e326999344d177
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "소아 비만"
  - "이상지질혈증"
  - "인슐린 저항성"
related_disease_slugs:
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
question_type: 임상증례 객관식
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

15세 여자가 청소년 건강검진을 위해 내원했다. 본인은 건강하며 아버지는 관상동맥질환과 고혈압, 어머니는 제2형 당뇨병과 고콜레스테롤혈증이 있고 52세에 심근경색을 겪었다. 키는 25백분위수, 체중은 95백분위수 이상, BMI 32kg/m²이다. 체온 37°C, 맥박 99회/분, 혈압 140/88 mmHg이다. 무작위 혈청검사에서 포도당 160, 크레아티닌 0.8, 총콜레스테롤 212, HDL 32, LDL 134, 중성지방 230 mg/dL이다. 규칙적인 유산소 운동과 함께 가장 적절한 다음 관리는 무엇인가?

## 선택지

A. 나이아신 치료
B. 저열량 식이
C. 아토르바스타틴 치료
D. 메트포르민 치료

## 해설

선택지 B는 비만청소년의 적절한 영양섭취 조정과 가족중심의 체계적 생활/행동치료를 뜻한다. 운동과 함께 성장·영양·정서상태를 고려하고 극단적 제한식은 피한다. 고혈압·혈당/지질 이상도 확인하고 필요한 추가치료를 병행하며 생활요법만 무기한 시행하라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 15세를 영유아검진으로 오역. B를 극단열량제한이 아닌 가족중심영양/행동치료로 설명.
- https://publications.aap.org/pediatrics/article/151/2/e2022060640/190423/Clinical-Practice-Guideline-for-the-Evaluation

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004320
