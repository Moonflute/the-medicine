---
type: qbank
schema_version: 1
id: medqa-us-train-000444
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2b8f84013b2328537af70a90ff11544895563b88b78745cd00583ac9552acae6
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "Multiple endocrine neoplasia type 1"
  - "Hyperparathyroidism"
  - "Zollinger-Ellison syndrome"
  - "Prolactinoma"
related_disease_slugs:
  - MDQg64K067aE67mEL-u2gOqwkeyDgeyDmCDquLDriqXtla3sp4Tspp0gKEh5cGVycGFyYXRoeXJvaWRpc20pLm1k
  - MDQg64K067aE67mEL-2UhOuhnOudve2LtCDrtoTruYQg7KKF7JaRIChQcm9sYWN0aW5vbWEpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsIDsiqTtirjrprDsooUgKEdhc3RyaW5vbWEpLm1k
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

40세 여성(임신 2회, 출산 2회)이 2개월간 지속된 피로, 메스꺼움, 관절통, 경미한 옆구리 통증으로 내원하였다. 환자는 오메프라졸(omeprazole)을 복용 중인 난치성 위산 역류와 위전정부 및 십이지장 소화성 궤양을 앓고 있다. 또한 만성적이고 악취가 나며 밝은 색의 설사를 한다. 5년 전 브로모크립틴(bromocriptine)으로 불임 치료를 성공적으로 받았다. 최근 직장에서 슬프고 의욕이 없다고 보고하였다. 흡연이나 음주는 하지 않는다. 키는 175cm, 체중은 100kg이며 체질량지수(BMI)는 32.7kg/m2이다. 체온은 37°C, 맥박은 분당 78회, 혈압은 150/90mmHg이다. 심폐 검사상 이상 소견은 없다. 복부는 중등도로 팽만되어 있고 촉진 시 전반적인 압통이 있다. 경미한 늑골척추각 압통이 있다. 혈청 칼슘 농도는 12mg/dL, 인 농도는 2mg/dL, 부갑상선 호르몬 수치는 900pg/mL이다. 복부 초음파상 양측 요관신우이행부에 음향 음영을 동반한 이동성 에코 발생 병소가 보인다. 이 환자에게 가장 가능성이 높은 유전자 돌연변이는 무엇인가?

## 선택지

A. NF2
B. C-Kit
C. RET
D. MEN1

## 해설

정답은 D이다. 고PTH성 고칼슘혈증과 결석은 부갑상샘 병변을, 난치성 궤양·설사는 gastrinoma를, bromocriptine으로 호전된 불임은 prolactinoma를 시사한다. 부갑상샘·췌장/십이지장 신경내분비·뇌하수체 병변의 조합은 MEN1 유전자 관련 증후군에 합당하다. 고칼슘혈증 하나만으로 MEN1과 MEN2를 구별하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: MEN1 판단 근거에 gastrinoma/prolactinoma 병력을 연결.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000444
