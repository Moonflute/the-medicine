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

50세 남성이 건강검진에서 LDL 콜레스테롤 196 mg/dL로 확인됐다. 다른 날 재검에서도 192 mg/dL이며 갑상샘 기능 등 이차 원인 평가에 특이사항은 없다. 생활습관 교정과 함께 먼저 시작할 약물 계열은?

## 선택지

A. 콜레스테롤 흡수 억제제 단독
B. PCSK9 억제제 단독
C. 스타틴
D. 피브레이트 단독

## 해설

반복 LDL 콜레스테롤이 190 mg/dL 이상이고 이차 원인이 없다면 생활습관 교정과 함께 스타틴이 기본이다. 반응과 환자의 위험도에 따라 다른 지질저하제를 추가할 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Statin C는 유지하되 계산 안 한 위험도를 중고위험 확정이라 표현한 오류 교정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001423

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005905
- 한국지질·동맥경화학회 이상지질혈증 치료: https://manage.lipid.or.kr/dtp/therapy.php
