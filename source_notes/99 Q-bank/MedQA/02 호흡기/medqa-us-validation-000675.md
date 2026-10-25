---
type: qbank
schema_version: 1
id: medqa-us-validation-000675
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:58e25f45ac55c1c715113f5fc0c49a6bb49492d47d13256444e48643add28af3
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "급성 호흡곤란증후군"
  - "비심인성 폐부종"
  - "양측 폐침윤"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4ieyEsSDtmLjtnaHqs6TrnoAg7Kad7ZuE6rWwIChBUkRTKSAoQWN1dGUgUmVzcGlyYXRvcnkgRGlzdHJlc3MgU3luZHJvbWUpLm1k
question_type: investigation
difficulty: standard
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

48세 여성이 교통사고 후 36시간째 산소포화도 저하와 양측 폐의 광범위한 수포음이 발생했다. PaO₂/FiO₂가 낮고 심초음파는 정상이며 폐모세혈관 쐐기압은 11 mmHg이다. 흉부 방사선촬영에서 가장 가능성 높은 소견은?

## 선택지

A. 늑골횡격막각의 투과성 증가를 동반한 깊은 고랑 징후
B. 한쪽 폐문 주변 허탈과 반대쪽 종격동 이동
C. 주변부에 분포하는 양측 비대칭 폐침윤
D. 폐동맥의 갑작스러운 협착

## 해설

외상 뒤 발생한 저산소혈증과 양측 수포음, 정상 좌심실 평가 및 낮은 충만압은 비심인성 폐부종과 ARDS를 시사한다. 선택지 중 C의 양측 폐침윤이 적합하다. ARDS 침윤은 대칭성이나 비대칭성으로 다양하게 나타날 수 있어 주변부 분포가 반드시 있어야 하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ARDS 영상 C를 항상 일정한 비대칭 주변부 분포가 필수인 것처럼 일반화하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000675
