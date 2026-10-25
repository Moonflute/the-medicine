---
type: qbank
schema_version: 1
id: medqa-us-train-004659
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9ce32efa0b3f742c532a76856e3155f83a5af4705c4698f9fd57ea10b3212cc8
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "총동맥간"
  - "동맥간증"
  - "선천성 심장병"
  - "Truncus arteriosus"
question_type: association
related_disease_slugs: []
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

45일 된 남아가 일주일 동안 수유 곤란과 과도한 발한이 있어 부모와 함께 소아과에 왔다. 체온은 37.7°C (99.8°F), 맥박은 분당 190회, 호흡수는 분당 70회이다. 입술과 손발톱 바닥에 경한 청색증이 있다. 산소를 공급하고 산소포화도를 면밀히 모니터링한다. 침상 심초음파에서 정상적으로 형성된 두 심실에서 하나의 동맥간이 나오고, 이 동맥간은 하나의 반월판으로 심실과 분리되어 있다. 심실중격결손이 있고 동맥간이 결손을 걸쳐 있다. 다음 중 비슷한 임상 소견으로 나타날 수 있는 선천성 심장질환은 무엇인가?

## 선택지

A. 폐혈류가 막히지 않은 이중 유입 심실
B. 심장 아래형 전폐정맥환류이상
C. 중증 엡스타인 기형
D. 심실중격이 온전한 폐동맥 폐쇄

## 해설

두 심실에서 단일 반월판을 가진 하나의 동맥간이 나오고 VSD를 걸치는 것은 총동맥간이다. 이는 팔로사징(Tetralogy of Fallot, TOF)과 다른 기형이다. 폐혈류가 제한되지 않는 이중유입 단심실(A)도 혈액 혼합에 따른 경한 청색증과 폐혈관 저항 감소 후 과도한 폐혈류·심부전으로 수유곤란/발한/빈호흡을 보일 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 총동맥간을 팔로사징 TOF와 혼동한 약어를 교정하고 유사한 혈류역학을 설명했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004659
