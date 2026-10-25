---
type: qbank
schema_version: 1
id: medqa-us-train-008729
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9d32d6984a1973a43ae04aaad1a3950c1cdaf702c7cfac1001688cc15a4df061
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hypothyroidism"
  - "Hashimoto thyroiditis"
  - "primary thyroid lymphoma"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
  - MDQg64K067aE67mEL-2VmOyLnOuqqO2GoCDqsJHsg4Hsg5jsl7wgKEhhc2hpbW90bydzIFRoeXJvaWRpdGlzKS5tZA
question_type: prognosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQmlzb3Byb2xvbC5tZA
---

# MedQA US 임상문제

## 문제

51세 여성이 4개월 동안 다리가 부어 내원했다. 왼쪽 다리에서 먼저 변화를 느꼈고 이후 오른쪽도 부었다. 가끔 다리가 가렵다. 한 달 동안 목소리가 쉬었다. 8개월 전 멕시코 여행에서 돌아왔다. 고혈압, 변비, 관상동맥질환이 있고 초등학교 교사로 일한다. 어머니에게 제2형 당뇨병이 있다. 6년 동안 하루 반 갑을 피웠으나 11년 전 금연했다. 매일 와인 한 잔을 마시고 주말에는 가끔 더 마신다. 현재 아스피린, 비소프롤롤, 아토르바스타틴을 복용한다. 키 165cm, 체중 82kg, BMI 30.1kg/m²이다. 활력징후는 정상이다. 양쪽 정강이 앞쪽에 압흔이 없는 부종이 있고 피부는 단단하고 차갑고 건조하다. 양쪽 말초 맥박은 만져진다. 그 외 검사는 정상이다. 다음 중 이 환자에서 위험이 증가하는 질환은 무엇인가?

## 선택지

A. 신정맥 혈전증
B. 식도 정맥류 출혈
C. 코끼리병
D. 원발성 갑상선 림프종

## 해설


정답 D. 차고 건조한 피부의 비압흔부종, 변비와 쉰 목소리는 갑상선기능저하에 의한 점액부종을 시사한다. 원인이 Hashimoto 갑상선염이면 원발성 갑상선 림프종 위험이 증가한다. 본문에는 갑상선비대나 저혈압이 없고 활력징후는 정상이다. 비압흔부종만으로 Hashimoto가 확진된 것은 아니며 실제 갑상선 기능/항체 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008729 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 본문에 없는 갑상선비대·저혈압 삭제, 차고 건조한 비압흔부종·변비·쉰목소리를 hypothyroid 의심에 연결.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008729
