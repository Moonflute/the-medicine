---
type: qbank
schema_version: 1
id: medqa-us-train-009320
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8a7ccfead15814658ef1cc030b30b862994305bac15cf225953b3a03586d22d6
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "atrial fibrillation"
  - "심방세동"
  - "cardioembolic stroke"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
question_type: diagnosis
difficulty: complex
answer: A
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbHByYXpvbGFtLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 여성이 오른쪽 근력저하가 시작된 지 1시간 후 응급실에 왔다. 아침 식사 중 갑자기 숟가락을 들 수 없었고 남편에게 외쳤지만 말이 어눌했다. 지난 4개월 동안 평소보다 불안하고 피로했으며 운동 시 어지럼과 호흡곤란으로 3개월 전부터 운동을 중단했다. 고혈압이 있고 리시노프릴을 매일, 알프라졸람을 필요할 때 복용한다. 체온 37.2°C, 맥박 138회/분, 호흡수 14회/분, 혈압 146/86 mmHg이다. 폐는 양측 깨끗하고 S1의 강도가 변한다. 신경학적 검사에서 오른쪽 안면 처짐, 오른쪽 어깨·팔꿈치·손목·손가락 근력 2/5, 오른쪽 얼굴과 팔 감각저하가 있다. 추가 평가에서 가장 가능성 높은 소견은 무엇인가?

## 선택지

A. 심전도에서 P파가 없는 불규칙하게 불규칙한 리듬
B. 이중초음파에서 왼쪽 경동맥 협착
C. 두부 CT에서 뇌실질 고음영
D. 뇌파에서 측두부 극파와 예파

## 해설

빠른 맥박과 S1 강도의 변화, 이전 심계항진을 시사하는 증상은 심방세동을 의심하게 한다. 심방세동은 심장성 색전을 통해 갑작스러운 국소 신경학적 결손을 일으킬 수 있으며, A의 P파가 없는 불규칙하게 불규칙한 ECG가 예상된다. 모든 다른 뇌졸중 원인을 임상 소견만으로 배제하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: AF가 신경 결손 뒤에 발생한 것처럼 쓴 인과 방향을 심장성 색전 원인으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009320
