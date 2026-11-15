---
type: qbank
schema_version: 1
id: medqa-us-train-003255
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9bfa7ff4f5aa52ef0ef5b13fae6646f8d17ea5676f87b1b453b2c0c3869855a5
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "Waldenström macroglobulinemia"
  - "IgM monoclonal gammopathy"
  - "hyperviscosity syndrome"
  - "lymphoplasmacytic lymphoma"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qzoOygkOuPhCDspp3tm4TqtbAgKEh5cGVydmlzY29zaXR5IFN5bmRyb21lKS5tZA
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

65세 환자에게 피로, 비장비대와 림프절비대가 있고 혈청 면역고정에서 단클론 IgM이 검출됐다. 발덴스트룀 거대글로불린혈증과 IgM 단클론 감마병증을 구분하기 위한 핵심 검사는?

## 선택지

A. IgM 농도만 반복하고 특정 수치를 넘으면 확진한다
B. 골수 흡인·생검과 면역표현형으로 림프형질세포 침윤을 평가한다
C. 소변 시험지만으로 골수 침윤을 평가한다
D. 혈청 칼슘이 정상이면 골수 검사를 생략한다

## 해설


단클론 IgM만으로 발덴스트룀 거대글로불린혈증을 진단할 수 없다. 골수 조직과 면역표현형에서 림프형질세포 림프종에 해당하는 침윤을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003255 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 제시된 IgM 단클론 M-spike와 고점도 증상·신경병증·림프절병증은 Waldenstrom B를 가장 지지함을 직접 대조.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003255
- https://www.nature.com/articles/s41375-022-01762-3
