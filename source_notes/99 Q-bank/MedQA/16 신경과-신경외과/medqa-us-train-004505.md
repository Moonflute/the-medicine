---
type: qbank
schema_version: 1
id: medqa-us-train-004505
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:68506d1f7c84192e7a77bec58d1ecaf4931c6895f1fcbe0148111c2317eefa58
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "경막하혈종"
  - "혈우병"
  - "두부 외상"
question_type: diagnosis
related_disease_slugs:
  - MDkg7ZiI7JWhL-2YiOyasOuzkSAoSGVtb3BoaWxpYSkubWQ
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 남성이 1주일 동안 악화되는 두통으로 응급실에 왔다. 지난 2일 동안 점점 혼란스러워지고 오심과 구토가 생겼다. 일주일 전 차에서 내리다가 머리를 부딪혔지만 의식 소실은 없었다. 외삼촌에게 출혈성 질환이 있다. 중등도의 고통스러운 상태로 보인다. 사람과 시간에 대해서는 지남력이 있지만 장소에 대해서는 그렇지 않다. 체온은 37.1°C (98.8°F), 맥박은 분당 72회, 호흡수는 분당 20회, 혈압은 128/78 mm Hg이다. 심폐 진찰은 정상이고 복부는 부드럽고 압통이 없다. 왼쪽 상지와 하지 근력은 5/5, 오른쪽 상지와 하지 근력은 3/5이다. 검사 결과는 다음과 같다.
백혈구 10,000/mm3
헤모글로빈 13.6 g/dL
헤마토크릿 41%
혈소판 150,000/mm3
PT 13초
aPTT 60초
혈청 나트륨 140 mEq/L, 칼륨 4.2 mEq/L, 염소 101 mEq/L, 중탄산염 24 mEq/L, 요소질소 15 mg/dL, 크레아티닌 1.0 mg/dL
두부 CT가 제시되어 있다. 이 환자 증상의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 두피하 출혈
B. 뇌정맥동 혈전증
C. 경막외혈종
D. 경막하혈종

## 해설

경미한 두부외상 후 일주일 동안 진행하는 두통·혼란과 편측위약은 경막하혈종(D)을 가장 시사한다. 외삼촌의 출혈질환과 단독 aPTT 연장은 선천 응고인자 이상 가능성을 높여 작은 외상 후 출혈 위험을 뒷받침한다. 두피하출혈은 진행성 국소 신경결손을 설명하기 어렵고 경막외혈종보다 지연 경과가 전형적이다. 실제 CT를 확인할 수 없어 고밀도 층·초승달 모양을 관찰된 사실로 추가하지 않는다. 실제 진료에서는 신속한 영상 및 출혈 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 사진에서 얇은 고밀도 층을 보았다는 추가 사실을 삭제했다. 작은 외상 후 지연 진행과 응고장애로 경막하혈종 D를 가장 시사하므로 그림 부재만으로 보류하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004505
