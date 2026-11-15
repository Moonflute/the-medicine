---
type: qbank
schema_version: 1
id: medqa-us-validation-001090
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:dea10980ce7eab69f9f23fc4344bef5c1b45ec9626467740b01c8af3fe5c99bf
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "대량 객혈"
  - "폐암 의심 결절"
  - "기관지경검사"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-uLqOydvCDtj5DqsrDsoIggKFNQTikgKFNvbGl0YXJ5IFB1bG1vbmFyeSBOb2R1bGUpLm1k
question_type: management
difficulty: complex
answer: D
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

58세 남성이 계속되는 다량 객혈로 삽관됐다. 오른쪽에서 출혈이 나는 것으로 추정돼 오른쪽 폐를 아래로 두었다. 기도 안에 피가 고이면서 산소포화도가 계속 떨어져 CT실로 이동하기 어렵다. 지금 기도를 확보하기 위한 다음 조치는?

## 선택지

A. 상부위장관 내시경을 시행한다
B. 기도 처치를 보류하고 흉부 CT를 먼저 촬영한다
C. 호흡이 안정될 때까지 기도 내 혈전을 놔둔다
D. 침상 기관지경으로 혈액·혈전을 제거하고 출혈 부위를 확인한다

## 해설

생명을 위협하는 객혈에서 우선은 비출혈 폐를 보호하고 환기를 유지하는 것이다. 지속 출혈로 기도가 막히면 기관지경으로 혈액과 혈전을 제거하고 출혈 위치를 찾는다. 안정화 후 조영증강 CT와 기관지동맥 색전술 등을 검토한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 생명위협 객혈의 기관지경 D를 기도 확보·혈액 제거 맥락으로 명시하고 색전술의 역할도 구별.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10289864/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001090
- https://doi.org/10.3348/kjr.2018.19.5.866
