---
type: qbank
schema_version: 1
id: medqa-us-train-008642
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:653ae11ce8a3f3ca8a87ae810208a72129125aa3314eb3d6808282478e5a64fd
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "steroid myopathy"
  - "systemic lupus erythematosus"
  - "glucocorticoid adverse effect"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDtmY3rsJgg66Oo7ZG47IqkIChTeXN0ZW1pYyBMdXB1cyBFcnl0aGVtYXRvc3VzKS5tZA
question_type: mechanism
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
---

# MedQA US 임상문제

## 문제

35세 여성이 6개월 동안 지속된 피로로 내원했다. 이 기간 동안 발열, 관절통, 얼굴의 반복적인 피부 발진도 있었다. 15년 동안 하루 한 갑을 피웠다. 체온 38.5°C(101.3°F), 맥박 90회/분, 혈압 130/80mmHg이다. 신체검사에서 비순구를 침범하지 않는 얼굴 발진과 여러 구강 궤양이 보인다. 상·하지 관절에 압통은 있으나 발적이나 부종은 없다. 항-dsDNA 항체가 확인되어 전신홍반루푸스로 진단하고 치료를 시작했다. 8개월 후 어깨와 엉덩이에 힘이 빠졌고, 근위부 근육에 경미한 근력 저하가 보였다. 심부건반사는 양측 2+이고 적혈구 침강속도와 크레아틴키나아제는 정상이다. 다음 중 이 환자 증상의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 시냅스 후 아세틸콜린 수용체에 대한 자가항체
B. 미엘린에 대한 자가항체
C. 상위 및 하위 운동신경세포 퇴행
D. 약물의 이상반응

## 해설


치료 시작8개월 뒤 정상 CK와 보존된 반사에 근위부 근력저하가 생겨 보기 중 약물이상반응 D가 가장 부합한다. Glucocorticoid를 사용했다면 steroid myopathy가 전형적이지만 본문에 실제 약명이 없어 사용 사실을 만들어 넣어서는 안 된다. Hydroxychloroquine 등도 근병증을 일으킬 수 있으므로 약명·용량·기간을 확인한다. 정상 CK만으로 모든 염증성 또는 약물성 근병증을 완전히 구분하지는 못한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008642 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 미명시 SLE 치료를 자동으로 장기 steroid라 확정하지 않고 약물성 근병증 D의 조건부 설명으로 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008642
