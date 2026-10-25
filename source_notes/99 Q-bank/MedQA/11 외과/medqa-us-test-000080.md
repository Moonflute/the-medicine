---
type: qbank
schema_version: 1
id: medqa-us-test-000080
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:e2a0090628990fa5ab3f23092b6abe222d3c93591e40890cfe0b89c895291ee6
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "우심실 관통상"
  - "심장 손상"
  - "심장 봉합"
related_disease_slugs:
  - MTEg7Jm46rO8L-2dieu2gCDsmbjsg4EubWQ
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

칼싸움에 휘말린 25세 남성이 흉부 관통상으로 내원했다. 의식이 없고 추가 병력은 알 수 없다. 체온 37.0°C, 혈압 85/55 mmHg, 맥박 분당 115회, 호흡수 분당 19회, 실내 공기 산소포화도 92%이다. 땀을 흘리며 반응이 없고 사지는 창백하고 차갑다. 왼쪽 제3~4늑간 사이에 3인치 길이의 관통상이 있고 다량 출혈 중이다. 경흉부 심초음파에서 우심실 자유벽 전층 관통 손상이 보이며 관상동맥이나 주요 분지 손상은 없다. 기관내 삽관과 적극적 수액·수혈을 시행했다. 다음 중 가장 적절한 확정적 수술 방법은?

## 선택지

A. 즉시 심장이식
B. 소생 수액을 시작하며 관찰
C. 지지성 패드를 사용한 2-0 폴리프로필렌 단속봉합
D. 제2늑간 바늘흉강천자

## 해설


쇼크를 동반한 우심실 자유벽 전층 관통상은 출혈을 신속히 제어하고 심실벽을 직접 봉합해야 한다. 제시된 선택지에서는 지지 패드를 이용한 2-0 폴리프로필렌 단속봉합(C)이 확정적 복구에 해당한다. 이식·관찰·바늘흉강천자는 이 손상을 복구하지 못한다. 실제 봉합사의 굵기, 봉합 형태와 패드 사용은 열상 위치·크기·조직 상태에 따라 선택한다. 본문에는 심장 열상의 정확한 크기가 제시되지 않았으므로 작다고 가정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000080 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 우심실 관통상 봉합이라는 원문 정답은 유지하되 창상 크기와 단일 봉합법의 보편적 표준이라는 단정을 제거했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://journals.lww.com/jtrauma/Documents/2024%20TA%20Online%20Issue%20Proof_V2.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000080
