---
type: qbank
schema_version: 1
id: medqa-us-test-000706
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:bb48847bd8af5725ad42ae96ae0543a39063ad8720fdc91795e09e3e86ad2f95
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "복압성 요실금"
  - "요도 과운동성"
  - "골반저 기능부전"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-yalOyLpOq4iCAoVXJpbmFyeSBJbmNvbnRpbmVuY2UpLm1k
difficulty: complex
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

35세 여성이 1년 동안 점점 심해지는 요 누출로 병원에 왔다. 처음에는 운동할 때만 소변이 샜으나 이제 웃거나 기침할 때도 발생한다. ‘젖지 않기’ 위해 화장실에 더 자주 가며 밤에 한 번 소변을 본다. 배뇨통, 혈뇨, 복통, 비정상 질분비물은 없다. 양극성 장애로 리튬을 복용한다. 10년 전 합병증 없는 질식분만과 4년 전 제왕절개를 받았고 다른 수술은 없었다. 하루 물 6잔 이상을 마시며 장거리 달리기 날에는 더 마실 수 있다. 아침과 집중이 필요할 때 한낮에도 커피를 마신다. 골반 및 질경검사는 정상이었고 발살바법에서 요 누출이 관찰되었다. 요검사와 비중은 정상이며 β-hCG는 음성이었다. 증상의 가장 가능성 높은 원인은?

## 선택지

A. 당뇨병성 다뇨
B. 일차성 다음증
C. 요도 과운동성
D. 방광질 누공

## 해설

운동·기침·웃음과 Valsalva 때 누출되는 양상은 복압성 요실금이다. 골반저와 요도 지지조직이 약해져 방광경부·요도가 과도하게 움직이고 복압 상승 때 폐쇄 기능이 유지되지 않는 C, 요도 과운동성이 가장 적절하다. 이는 요도의 과수축이나 방광 출구 저항 증가를 뜻하지 않는다. Lithium 관련 다뇨라면 소변량·비중 등의 맥락이 달라진다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 요도 과운동성을 과수축/배출저항으로 설명한 오류를 지지조직 약화 및 복압 전달 실패로 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000706
