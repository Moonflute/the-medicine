---
type: qbank
schema_version: 1
id: medqa-us-train-007332
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dbc19b9422fcdf00245678b32a7536ff4f7791f0ce72b569cd35001e9b9faecb
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "급성 사지 허혈"
  - "심방세동 색전"
  - "와파린"
  - "비타민 K 의존성 응고인자"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDrj5nrp6Ug7Y-Q7IOJIChBY3V0ZSBBcnRlcmlhbCBPY2NsdXNpb24pLm1k
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
question_type: prevention
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 여자가 3시간 동안 지속된 심한 오른쪽 하퇴 통증으로 응급실에 내원했다. 3시간 전부터 저림도 점점 심해졌다. 이전에는 이런 다리 통증이 없었다. 지난 몇 달 동안 간헐적으로 심계항진이 있었다. 고혈압과 제2형 당뇨병이 있으며 히드로클로로티아지드와 리시노프릴을 복용한다. 맥박은 88회/분, 혈압은 135/80 mmHg이다. 신체검사에서 오른쪽 다리가 차갑고 창백하며 모세혈관 재충만이 지연되어 있다. 오른쪽 종아리와 발의 근력과 긴장도가 감소되어 있고 양측 대퇴 맥박은 있으나 오른쪽 발 맥박은 없다. 다음 중 무엇을 억제했다면 이 환자의 상태를 예방했을 가능성이 가장 높은가?

## 선택지

A. 전압개폐성 심장 칼륨 통로
B. 혈소판 응집 수용체
C. 비타민 K 의존성 응고인자 합성
D. 전압개폐성 심장 나트륨 통로

## 해설

갑작스러운 사지 허혈과 심계항진 병력은 심방세동 관련 색전을 의심하게 한다. C의 비타민 K 의존 응고인자 합성 억제는 와파린의 항응고 기전이다. 이는 선택지의 약물 기전을 묻는 문항이지, 현재 모든 심방세동 환자에서 와파린이 DOAC보다 우월하다는 뜻은 아니다. 실제 급성 사지 허혈에는 즉각적인 혈관 평가와 치료가 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Warfarin기전 C는유지하되모든AF에서유일/최강예방약으로오용하지않음.
- https://www.jacc.org/doi/10.1016/j.jacc.2023.08.017

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007332
