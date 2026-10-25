---
type: qbank
schema_version: 1
id: medqa-us-train-002699
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5ac2b866324a42f63f8e5f59a971e96f9c43c51bcc5bc9c1c94043d8f4cca7e1
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "glucocorticoid-induced myopathy"
  - "proximal muscle weakness"
  - "normal creatine kinase"
  - "giant cell arteritis treatment"
related_disease_slugs: []
question_type: adverse_effect
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

67세 여성이 왼쪽 관자놀이와 두피 부위의 두통, 목 경직, 간헐적인 시야 흐림, 씹을 때 턱 통증을 호소하며 내원했다. 적절한 약물치료를 시작했고, 이후 시행한 측두동맥 생검에서 동맥염이 확인되었다. 5개월 후 계단 오르기, 의자에서 일어나기, 머리 빗기가 어려울 정도의 근력저하로 다시 내원했다. 이 근력저하는 지난 2개월 동안 점차 악화되었다. 두통, 턱 통증, 시각 장애는 호전되었다고 한다. 신체검사에서 양측 고관절 굴곡·신전과 어깨 굴곡·신전·외전 근력이 4/5였다. 초기 검사에서 적혈구침강속도와 크레아틴키나아제 수치는 정상 범위였다. 다음 중 현재 증상에 대한 가장 가능성 높은 진단은?

## 선택지

A. 다발성 단일신경병증
B. 류마티스성 다발근통
C. 약물 유발 근병증
D. 다발근육염

## 해설


장기간 고용량 스테로이드 사용은 근위부 근력 저하와 근육 위축을 일으키며, 혈청 CK는 정상인 경우가 많다. 약물에 의한 근위축성 근병증은 스테로이드 유발 근병증이다. 따라서 현재 증상은 약물 유발 근병증에 해당한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002699 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: GCA 치료 수개월 후 근위부 근력저하·정상 CK/ESR와 원래 혈관염 증상 호전은 steroid 유발 근병증 C를 지지한다. 원문·해설 일치; 신규 치료 권고가 아닌 병인 대조.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002699
