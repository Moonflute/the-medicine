---
type: qbank
schema_version: 1
id: medqa-us-train-005905
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:db6b476a84e77c07e5e0cd539c4bf0c1b429ae4afed9af474725896834b8b1af
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "고콜레스테롤혈증"
  - "스타틴"
  - "심혈관 위험인자"
related_disease_slugs:
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

50세 남성이 정기 건강검진을 위해 내원했다. 건강하고 고혈압으로 리시노프릴을 복용한다. 20년 동안 하루 한 갑씩 흡연했고 주말에 맥주 5~6잔을 마신다. 키는 181cm, 체중은 80kg, BMI는 24.6kg/m²이다. 맥박은 분당 75회, 혈압은 140/85 mmHg, 호흡수는 분당 18회이며 신체검사는 정상이다. 검사에서 총 콜레스테롤 263 mg/dL, HDL 콜레스테롤 36 mg/dL, 중성지방 180 mg/dL이다. 식이 및 생활습관 교정과 함께 다음 중 어떤 약물을 투여하는 것이 관리의 가장 적절한 다음 단계인가?

## 선택지

A. 콜레스테롤 흡수 억제제
B. PCSK9 억제제
C. HMG-CoA 환원효소 억제제
D. 담즙산 수지

## 해설

총263·HDL36·TG180이면 전통적 Friedewald 추정 LDL은 약191mg/dL로 심한 고콜레스테롤혈증 범위에 해당하여 선택지 C statin이 적절하다. 실제 LDL 측정·이차원인·가족력과 위험도도 평가한다. 계산하지 않은 10년 위험도를 이미 중고위험이라고 확정할 필요는 없다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Statin C는 유지하되 계산 안 한 위험도를 중고위험 확정이라 표현한 오류 교정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001423

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005905
