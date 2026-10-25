---
type: qbank
schema_version: 1
id: medqa-us-train-003395
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0e795a65d18276c7deb64b39519c15664c43137e5044467e14b495d1a96b727a
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "chronic myeloid leukemia"
  - "leukocyte alkaline phosphatase"
  - "basophilia"
  - "splenomegaly"
related_disease_slugs:
  - MDkg7ZiI7JWhL-unjOyEsSDqs6jsiJjshLEg67Cx7ZiI67ORIChDTUwpIChDaHJvbmljIE15ZWxvaWQgTGV1a2VtaWEpLm1k
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
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

55세 남성이 정기 건강검진을 받으러 왔다. 가끔 왼쪽 복부 불편감과 왼쪽 어깨 통증이 있었고 20년간 하루 1갑의 담배를 피웠다. 복부는 부드럽고 압통이 없었지만 비장이 늑골연보다 5 cm 아래에서 만져졌다. 백혈구는 3만4천/mm3, 혈소판은 45만/mm3였고 혈액세포 세포유전학 검사는 진행 중이다. 추가 검사에서 가장 가능성 높게 발견될 소견은?

## 선택지

A. 낮은 백혈구 알칼리성 인산분해효소 점수
B. 호염기구 수 감소
C. 자가면역 용혈성 빈혈
D. 혈청 베타2 마이크로글로불린 상승

## 해설


백혈구·혈소판 증가와 비장비대는 CML(만성골수성백혈병)을 시사한다. 낮은 leukocyte alkaline phosphatase(LAP) 점수 A가 전통적인 보조소견이며, 반응성 leukemoid reaction에서는 대개 높다. 확진은 진행 중인 BCR::ABL1/Philadelphia 염색체 검사로 해야 하며 LAP만으로 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003395 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: CML 잘못된 한국어 병명을 만성골수성백혈병으로 교정; 낮은 LAP는 보조소견임을 명시.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003395
