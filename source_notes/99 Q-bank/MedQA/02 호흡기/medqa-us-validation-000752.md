---
type: qbank
schema_version: 1
id: medqa-us-validation-000752
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:dce6355824f138174c60ec657624c1e4fcd6f623679afa67656a5f76d5afc159
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "사르코이드증"
  - "비타민 D 활성화"
  - "고칼슘혈증"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
question_type: mechanism
difficulty: standard
answer: A
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

34세 흑인 여성이 피로, 운동 시 호흡곤란, 마른기침으로 진료를 받으러 왔다. 고혈압으로 히드로클로로티아지드와 종합비타민을 복용한다. 혈청 칼슘은 11.5 mg/dL이고 흉부 X선에서 양측 폐문 림프절병증이 보인다. 고칼슘혈증의 가장 가능성 높은 원인은?

## 선택지

A. 1,25-디하이드록시비타민 D3 수치 상승
B. PTH 관련 단백질 생성
C. 티아지드로 인한 신장 칼슘 재흡수
D. 만성 신장질환

## 해설

양측 폐문 림프절병증과 호흡기 증상은 사르코이드증을 시사한다. 육아종 대식세포의 1α-hydroxylase가 1,25-디하이드록시비타민 D 생성을 증가시켜 장내 칼슘 흡수를 높이므로 A가 적합하다. 티아지드도 칼슘 상승에 기여할 수 있지만, 폐문 림프절병증을 포함한 전체 양상을 설명하는 대표 기전은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 사르코이드 고칼슘혈증의 대식세포 1α-hydroxylase를 명시하고 원문에 있는 티아지드 복용을 복원.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000752
