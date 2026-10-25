---
type: qbank
schema_version: 1
id: medqa-us-train-004027
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:859516276d5f7277fa76b7e7e4b6a5563affffe93f8e61c197563c10b36cdc45
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "갑상샘기능저하증"
  - "고콜레스테롤혈증"
  - "주간 졸림"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
question_type: 임상증례 객관식
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: machine-generated
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

45세 여자가 주간 졸림과 피로를 호소하여 일차의료기관을 방문했다. 일을 몇 시간만 하면 낮잠을 자야 한다. 기억력 저하와 6.8kg 체중 증가도 있다. 호흡곤란, 흉통, 어지럼증 또는 혈변은 없다. 맥박 58회/분, 혈압 104/68 mmHg, 실내 공기 산소포화도 99%이다. 신체검사에서는 약간 건조한 피부만 보이고 전혈구검사는 정상이다. 다음 중 추가로 나타날 가능성이 높은 소견은 무엇인가?

## 선택지

A. 불안
B. 고콜레스테롤혈증
C. 심계항진
D. 떨림

## 해설


갑상선 기능 저하증 환자는 대사 저하로 고콜레스테롤혈증이 흔히 동반된다. 환자의 증상(피로, 체중 증가, 저심박수)과 검사 소견이 이를 시사한다. 다른 선택지는 주요 연관성이 적다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 저하증 임상상에 LDL대사 감소로 고콜레스테롤혈증 B가 연관.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004027
