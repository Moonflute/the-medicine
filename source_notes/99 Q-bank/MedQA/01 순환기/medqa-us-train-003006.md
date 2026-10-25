---
type: qbank
schema_version: 1
id: medqa-us-train-003006
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:43115a7031952475e77cce982c2022a20d273a98fc4bf6fa561d20da764bf45a
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "post-myocardial infarction ventricular septal rupture"
  - "cardiogenic shock"
  - "new holosystolic murmur"
  - "left-to-right shunt"
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
question_type: diagnosis
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2xvcGlkb2dyZWwubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

급성 흉골하 흉통과 호흡곤란으로 중환자실에 입원한 지 4일 후 80세 남성이 저혈압으로 평가받았다. 입원 당시 관상동맥조영술에서 좌전하행동맥 폐색이 보여 약물방출 스텐트를 성공적으로 삽입했다. 고혈압과 제2형 당뇨병이 있으며 아스피린, 클로피도그렐, 메토프롤롤, 리시노프릴, 아토르바스타틴을 복용한다. 체온 37.2°C, 맥박 112회/분, 호흡수 21회/분, 혈압 72/50 mmHg이다. 심장 진찰에서 정상 S1·S2와 함께 좌측 흉골연에서 새로 생긴 거친 범수축기 잡음이 들린다. 경정맥 팽창과 우측 흉골주위 융기가 있고 폐는 깨끗하다. 양측 무릎까지 함요부종이 있다. 심전도에서 하벽 유도에 Q파가 보인다. 다음 중 저혈압의 가장 가능성 높은 원인은?

## 선택지

A. 상행 대동맥 박리 파열
B. 심근경색 후 섬유소성 심낭염
C. 좌심실 자유벽 파열
D. 심실중격 파열

## 해설

MI 수일 후 새로 생긴 거친 좌흉골연 범수축기 잡음, 우심실 융기·JVD와 쇼크는 심실중격 파열 D에 의한 급성 좌우단락을 시사한다. 자유벽 파열은 주로 혈심낭·심장눌림증/무맥성 전기활동으로 나타나며 이 잡음의 설명이 아니다. 원답 D를 유지하면서 기계적 합병증의 해설 연결을 바로잡았다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: MI4일 후 새 LSB 거친 범수축기 잡음·우심부전은 중격파열 D인데 해설이 자유벽파열로 오연결.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003006
