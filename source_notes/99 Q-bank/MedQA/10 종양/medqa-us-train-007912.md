---
type: qbank
schema_version: 1
id: medqa-us-train-007912
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0227c7974517c9928a604d6dc098ecb8791fe5670d37a31fd722e92639269762
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "chylous ascites"
  - "lymphoma"
  - "malignant ascites"
related_disease_slugs:
  - MTEg7Jm46rO8L-yVlOyjvSDrs7XsiJggKENoeWxvdXMgQXNjaXRlcykubWQ
  - MDkg7ZiI7JWhL-umvO2UhOyihSAoTHltcGhvbWEpLm1k
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
---

# MedQA US 임상문제

## 문제

54세 남자가 3주 동안 지속된 복부 팽만으로 응급실에 왔다. 오심과 식욕 감소를 동반한 전반적인 복부 불편감도 있다. 3개월 전 서혜부 탈장 수술 후 합병증 없이 퇴원했다. 제2형 당뇨병, 울혈성심부전, 치료받지 않은 C형간염이 있다. 복용 약물은 아스피린, 아토르바스타틴, 메토프롤롤, 리시노프릴, 메트포르민이다. 아버지는 알코올성 간질환이 있었고 30년간 하루 한 갑을 피우다 5년 전 금연했다. 매일 맥주 3~4병을 마신다. 악액질로 보이며 활력징후는 정상이다. 복부가 팽창하고 이동성 탁음이 있으나 압통이나 종괴는 없다. 우하복부에 잘 아문 수술 흉터가 있고 심폐 진찰은 정상이다. 양측 하지에 1+ 비함요성 부종이 있다. 진단적 복수천자를 시행했다. 혈액에서 알부민 3.5 g/dL, 총 단백 5.8 g/dL이고 복수는 탁하며 세포수 550/mm³(림프구 우세), 총 단백 3.5 g/dL, 알부민 2.6 g/dL, 포도당 60 mg/dL, 중성지방 360 mg/dL이다. 그람염색은 음성이고 배양과 세포검사는 대기 중이다. 이 환자 증상의 가장 가능성 높은 원인은?

## 선택지

A. 최근 수술
B. 림프종
C. 그람양성균 감염
D. 급성 비대상성 심부전

## 해설


복수 triglyceride360 mg/dL와 림프구 우세는 chylous ascites를 시사한다. SAAG는 혈청3.5−복수2.6=0.9 g/dL로 문맥고혈압성 복수보다 낮은 gradient이다. 악액질을 동반한 비외상성 chylous ascites에서 림프종의 림프 흐름 폐쇄가 보기 중 가장 부합하여 B이다. 간염·음주 병력만으로 간경변성 복수를 확정하지 않으며 최근 단순 서혜부 수술보다 전신 악성 원인을 우선 평가한다. 배양·cytology 및 영상으로 원인을 확인한다. 기존 무월경 설명은 이 사례와 무관하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007912 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 복수 문항에 무월경 FSH/estrogen 해설이 연결된 오류를 low-SAAG chylous ascites와 lymphoma 기전으로 교체.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007912
