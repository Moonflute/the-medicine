---
type: qbank
schema_version: 1
id: medqa-us-validation-000347
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:0e23b8890695fcbc506a70fbe2208bcdd224afb5604523763ef672ef64953dc0
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "고전적 열사병"
  - "체온조절 장애"
  - "시상하부 반응 저하"
  - "Heat stroke"
question_type: mechanism
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yXtOyniO2ZmCAoSGVhdCBJbGxuZXNzKS5tZA
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

73세 남성이 오후 관중석에서 여름 리그 미식축구 경기를 보던 중 5분간 의식을 잃어 응급실에 왔다. 도착 시 기면 상태이고 사람만 지남력이 있다. 3주 전 A형간염을 치료받았고 제2형 당뇨병과 갑상선기능저하증이 있다. 체온 41.5°C, 맥박 106회/분, 호흡수 26회/분, 혈압 128/70 mmHg이며 피부는 뜨겁고 건조하다. 신경학적 국소 소견은 없고 혈당은 160 mg/dL, 심전도는 정상 동리듬이다. 증상의 가장 가능성 높은 원인은?

## 선택지

A. 시상하부 반응 부족
B. 케톤을 동반한 대사성 산증
C. 혈청 티록신 수치 상승
D. 중추 도파민 수용체 차단

## 해설

여름 야외 노출 후 41.5°C 고체온과 의식 장애는 고전적 비운동성 열사병에 부합한다. 보기 A는 환경의 열 부하에 비해 열조절·열 방출 반응이 충분하지 못한 상태를 뜻한다. 이것이 반드시 시상하부의 구조적 파괴를 의미하지는 않으며, 모든 열사병 환자에서 땀이 완전히 없어야 하는 것도 아니다. 제시된 혈당과 노출 상황은 케톤산증보다 열질환을 지지한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 고전적 열사병에서 열 방출 실패라는 A를 유지하되 시상하부 파괴나 땀 분비 완전 소실이 모든 열사병의 필수 조건인 듯한 단정을 정리한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000347
