---
type: qbank
schema_version: 1
id: medqa-us-train-003043
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:105182ee6c516a1aa8841de990018453b9c7e7292a763c8cf60b18d3f15db49b
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "fibromyalgia"
  - "widespread pain"
  - "tender points"
  - "normal inflammatory markers"
  - "Fibromyalgia"
related_disease_slugs: []
question_type: diagnosis
difficulty: standard
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Fc2NpdGFsb3ByYW0ubWQ
---

# MedQA US 임상문제

## 문제

39세 여성이 1년 넘게 몸통과 양쪽 팔·다리의 통증, 개운하지 않은 수면과 피로를 겪는다. 관절 종창과 근력 저하는 없고 ESR·CRP, CK, TSH는 정상이다. 가장 가능성 높은 진단은?

## 선택지

A. 류마티스성 다발근통
B. 섬유근육통
C. 염증성 근병증
D. 류마티스관절염

## 해설


만성 광범위 통증에 수면장애와 피로가 동반되고 객관적인 근력저하나 활막염이 없으면 섬유근육통을 고려한다. 압통점 개수만으로 진단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003043 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 장기간의 광범위 통증·여러 압통점·정상 근력·정상 ESR/TSH 및 영상은 섬유근육통 B를 지지한다. 본문·선지·원정답과 설명을 직접 대조했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003043
- https://doi.org/10.1136/annrheumdis-2015-208690
