---
type: qbank
schema_version: 1
id: medqa-us-train-006419
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:542ffd01dd853b313caec2744d6256ecb5f54e7948796297b2dc808b0ff3f066
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "유방 종괴"
  - "유방암 감별"
  - "유방촬영술"
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

32세 여성(Gravida 2, Para 2)이 일주일 전 처음 발견한 오른쪽 유방의 만져지는 종괴를 평가받기 위해 내원했다. 통증은 없다. 이전에 유방촬영술을 받은 적이 없다. 메트포르민으로 치료 중인 제2형 당뇨병이 있다. 유방암 가족력은 없다. 15년 동안 하루 반 갑의 담배를 피웠다. 체온은 37°C(98.6°F), 맥박은 분당 78회, 호흡수는 분당 14회, 혈압은 125/75 mm Hg이다. 진찰에서 오른쪽 유방 상외측에 단단하고 압통이 없으며 움직이지 않는 종괴가 만져진다. 유두 분비물은 없고 피부와 림프절 진찰은 정상이다. 왼쪽 유방에는 종괴가 만져지지 않는다. 다음 중 처치로 가장 적절한 다음 단계는?

## 선택지

A. 유방 MRI
B. 유방촬영술
C. BRCA 유전자 검사
D. 매월 유방 자가검진

## 해설


이 환자는 32세이며 새로 생긴 단단하고 고정된 유방종괴가 있어 진단적 영상이 필요하다. 30–39세에서는 diagnostic mammography/DBT와 초음파가 적절한 초기 검사에 해당하여 보기 중 B가 맞는다. 40대 이상이라고 연령을 바꿔 설명하면 안 되고, 영상 결과와 임상 의심도에 따라 표적 초음파 및 생검을 진행한다. MRI·유전자검사나 자가검진만으로 현재 종괴 평가를 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006419 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 32세를40대 이상으로 해설한 연령 불일치 교정; 진단유방촬영 B는30–39세에서도 적절하고 US와 보완.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.radiologyinfo.org/en/info/acs-palpable-breast-masses

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006419
