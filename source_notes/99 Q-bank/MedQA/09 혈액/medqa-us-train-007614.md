---
type: qbank
schema_version: 1
id: medqa-us-train-007614
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bde2f5c8f5f75dccfb9b25deb434bf7d228b8302a67e3fa4d69387f45641d88e
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "온난 자가면역 용혈성 빈혈"
  - "IgG 직접 항글로불린 양성"
  - "세팔렉신 유발 용혈"
  - "프레드니손"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yekOqwgOuptOyXrSDsmqntmIjshLEg67mI7ZiIIChBdXRvaW1tdW5lIEhlbW9seXRpYyBBbmVtaWEpLm1k
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VwaGFsZXhpbi5tZA
---

# MedQA US 임상문제

## 문제

27세 남자가 일주일 전부터 시작된 심한 피로로 내원했다. 10일 전 봉와직염으로 경구 세팔렉신 치료를 마쳤다. 복용 약물은 없다. 체온은 37.5°C(99.5°F), 맥박 95회/분, 혈압 120/75 mmHg이다. 공막 황달과 피부·구강점막 창백이 보이고 비장 끝이 왼쪽 늑골연 아래 1cm에서 만져진다. 검사에서 헤모글로빈 10.5 g/dL, 헤마토크릿 32%, 망상적혈구 5%, LDH 750 IU/L, 합토글로빈 소실, 직접 항글로불린검사에서 IgG 양성이다. 말초혈액도말에서 구형적혈구가 보인다. 다음 중 가장 적절한 치료 단계는 무엇인가?

## 선택지

A. 비장절제술
B. 경구 프레드니손
C. 혈장교환
D. 정맥 면역글로불린

## 해설


용혈 지표·IgG DAT 양성·구형적혈구는 warm immune hemolysis에 부합한다. 선택지 중 prednisone B가 초기 면역치료에 해당하며 실제 용량/기간은 중증도와 반응을 따라 조절한다. 최근 cephalexin 노출로 약물 유발 면역용혈 가능성도 확인하고 의심약은 재투여하지 않는다. 반응/기저원인에 따라 추가 치료를 평가하며 무조건 즉시 비장절제부터 하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007614 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Warm IgG AIHA의 prednisone B 유지; 최근 약물 관련 원인 평가·회피를 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12891454/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007614
