---
type: qbank
schema_version: 1
id: medqa-us-train-006730
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ac1c88a77792f2a4b11c8a1c7ebc5e6d3546efd05ef6ce21a2a63c16fcfb70c2
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "급성 경막하혈종"
  - "뇌탈출"
  - "동측 편마비"
question_type: prognosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4ztg4jstpwgKEJyYWluIGhlcm5pYXRpb24pLm1k
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 남성이 한 시간 전 아내에게 무반응 상태로 발견되어 응급실에 내원했다. 전날 저녁 계단에서 떨어졌고 4년 전 승모판 치환술을 받았다. 고혈압과 관상동맥질환이 있으며 아스피린, 와파린, 에날라프릴, 메토프롤롤 및 아토르바스타틴을 복용한다. 도착 당시 의식이 없고 체온은 37.3°C(99.1°F), 맥박은 분당 59회, 호흡수는 분당 7회로 불규칙하며 혈압은 200/102 mm Hg이다. 오른쪽 동공은 5mm로 고정되어 있고 왼쪽 동공은 4mm이며 빛에 반응한다. 통증 자극에 사지가 신전된다. 폐 청진은 깨끗하고 심장 진찰에서 수축기 클릭이 들린다. 복부는 부드럽고 압통이 없다. 기관삽관 후 기계환기를 시행하고 만니톨을 주입하기 시작했다. 비조영 두부 CT에서 오른쪽에 6cm 크기의 경막하혈종과 18mm 정중선 이동이 보인다. 다음 중 현재 상태의 초기 후유증으로 가장 가능성 높은 것은?

## 선택지

A. 오른쪽 눈 내사시와 거상
B. 양쪽 하지 마비
C. 왼쪽 안면신경 마비
D. 오른쪽 편마비

## 해설

심한 우측 경막하혈종과 뇌간 압박은 뇌탈출을 시사한다. 일반적으로 우측 상천막 병변은 좌측 마비를 만들지만, 반대쪽인 좌측 대뇌각이 천막 가장자리에 눌리는 Kernohan-Woltman 절흔 현상에서는 혈종과 같은 쪽인 우측 편마비(D)가 나타날 수 있다. 이는 피라미드 교차 위에서 좌측 피질척수로가 압박되는 거짓 국소화 징후이다. 단순히 우측 대뇌반구가 눌려 우측이 마비된다고 설명할 수는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 우측 경막하혈종과 같은 쪽 편마비 D의 근거를 Kernohan 절흔에 의한 반대쪽 대뇌각 압박으로 교정. 우반구 병변이 직접 우측 약화를 만든다는 오류 제거.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC3895529/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006730
