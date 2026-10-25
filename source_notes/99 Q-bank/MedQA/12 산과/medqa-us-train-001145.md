---
type: qbank
schema_version: 1
id: medqa-us-train-001145
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:741bc9d5f5723d7e09a27cd71b9a6f8d01e75d705e01bfbd59a3ae8c73251a39
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "macrocytic anemia"
  - "folate deficiency"
  - "neural tube defects"
question_type: prognosis
related_disease_slugs:
  - MDkg7ZiI7JWhL-qxsOuMgOygge2YiOuqqOq1rCDruYjtmIggKE1lZ2Fsb2JsYXN0aWMgQW5lbWlhKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

21세 여성이 첫 임신을 시도하기 전 산전 상담을 위해 일차 진료 의사를 방문했다. 그녀는 열렬한 달리기 선수이며, 의사는 그녀의 체질량지수(BMI)가 17.5임을 확인했다. 환자는 만성 피로를 호소하며, 이를 바쁜 생활 방식 탓으로 돌리고 있다. 의사가 시행한 일반혈액검사(CBC) 결과 혈색소(Hgb) 10.2 g/dL(정상 12.1~15.1 g/dL), 평균적혈구용적(MCV) 102 µm^3(정상 78~98 µm^3)로 나타났다. 메티오닌(methionine)의 이화 산물에 대한 혈청 측정 결과 수치가 상승했다. 이 환자가 임신할 경우 가장 위험이 높은 합병증은 무엇인가?

## 선택지

A. 임신성 당뇨병
B. 전치 태반
C. 태반 조기 박리
D. 유착 태반

## 해설

메티오닌 대사산물인 호모시스테인의 상승과 대구성 빈혈은 엽산 결핍 등을 시사하며 B12 결핍도 감별해야 한다. 고호모시스테인혈증은 일부 관찰연구에서 태반조기박리와 연관되어, 제시된 선택지 중 C가 출제 의도에 가장 부합한다. 이는 인과관계나 개인의 절대 위험을 확정하는 결과는 아니며 일부 전향적 연구에서는 박리 연관이 확인되지 않았다. 신경관 결손도 관련되지만 본 문항의 선택지에는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 선택지에 없는 신경관 결손만 설명한 해설을 원문 C의 고호모시스테인혈증–태반조기박리 연관으로 수정하되 관찰연구의 한계 명시.
- https://pubmed.ncbi.nlm.nih.gov/8735754/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6381683/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001145
