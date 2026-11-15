---
type: qbank
schema_version: 1
id: medqa-us-train-004992
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:37ddd5863e873b704e4ca31f1daa91c4c2fc080dc1c0ed409a4667e4f6d01758
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "철적아구성 빈혈"
  - "파펜하이머 소체"
  - "환상 철적아구"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yyoCDqsrDtlY0g67mI7ZiIIChJcm9uIERlZmljaWVuY3kgQW5lbWlhKS5tZA
question_type: investigation
difficulty: complex
answer: A
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

이소니아지드를 사용 중인 환자에게 소구성 빈혈이 생겼다. 철 저장은 감소하지 않았고 골수에서 철 과립이 핵 주위에 고리처럼 모인 적혈구 전구세포가 보인다. 이 소견을 확인하는 염색은?

## 선택지

A. 프러시안 블루 철염색
B. 항산균 염색
C. 수단 블랙 지방염색
D. 과요오드산-시프 염색

## 해설


골수 철염색은 핵 주위 미토콘드리아에 철이 축적된 고리철적모세포를 드러낸다. 약제·영양 결핍과 골수 질환 등 여러 원인이 있어 형태만으로 원인을 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004992 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 철 함유 Pappenheimer 소체를 철결핍으로 설명한 반대 오류 교정; 철염색 D 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004992
- https://www.rcpa.edu.au/Manuals/RCPA-Manual/Clinical-Presentations-and-Diagnoses/S/Sideroblastic-anaemia
