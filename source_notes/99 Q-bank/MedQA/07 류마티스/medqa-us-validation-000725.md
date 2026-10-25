---
type: qbank
schema_version: 1
id: medqa-us-validation-000725
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:ea7333356e66803fc39ce6ae8cf3fc24ee830f12c3dd9eba4c50cf9902bafe72
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "다발근염"
  - "염증성 근병증"
  - "근위부 근력저하"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yXvOymneyEsSDqt7zrs5Hspp0gKEluZmxhbW1hdG9yeSBNeW9wYXRoeSkubWQ
question_type: management
difficulty: complex
answer: D
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
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
---

# MedQA US 임상문제

## 문제

40세 여성이 수개월간 악화되는 근육통과 전신 쇠약, 계단 오르기와 목 펴기 어려움, 일시적인 연하곤란과 호흡곤란으로 진료를 받으러 왔다. 근위부 근력은 2/5이고 CRP와 알돌라아제가 상승했다. 현재 기도 보호는 가능하다. 가장 적절한 치료는?

## 선택지

A. 정맥 면역글로불린
B. 메토트렉세이트
C. 나프록센
D. 프레드니손

## 해설


심한 근위위약과 elevated aldolase·CRP는 inflammatory myopathy를 시사하여 보기 중 prednisone D가 적절한 초기 면역치료이다. 원문에는 CK 결과가 없어 상승이 확인되었다고 적으면 안 된다. 현재 분비물을 삼키고 기도 보호가 되지만 최근 연하곤란·호흡곤란과2/5 근력은 긴급 호흡·연하 기능 평가가 필요한 소견이다. 중증도나 치료반응에 따라 정맥 steroid, 추가 면역억제제 또는 IVIG 등이 필요할 수 있어 경구 단독만으로 항상 충분한 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000725 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 미제공 CK상승을 창작한 부분 제거; 연하/호흡 증상의 중증도 평가와 steroid D의 초기치료 한계 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9398208/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000725
