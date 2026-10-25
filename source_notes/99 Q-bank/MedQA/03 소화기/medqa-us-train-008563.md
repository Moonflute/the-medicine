---
type: qbank
schema_version: 1
id: medqa-us-train-008563
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:36bfd7b2d10f0e83a8803f0f59060ed9fa6ffe25d25d86aa4b33c2321fe2ee86
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "esophageal dysphagia"
  - "gastroesophageal reflux disease"
  - "esophageal cancer"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_si53rj4Qg7IK87YK06rOk656AIChFc29waGFnZWFsIER5c3BoYWdpYSkubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITsi53rj4Qg7Jet66WYIOyniO2ZmCAoR0VSRCkgKEdhc3Ryb2Vzb3BoYWdlYWwgUmVmbHV4IERpc2Vhc2UpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_si53rj4TslZQgKEVzb3BoYWdlYWwgQ2FuY2VyKS5tZA
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
---

# MedQA US 임상문제

## 문제

55세 남성이 삼키기 어려워 일차진료를 받으러 왔다. 음식을 충분히 씹지 않으면 먹기 힘들었는데, 이제는 가끔 액체도 삼키기 어렵다고 한다. 식사할 때마다 흉골 뒤가 타는 듯한 느낌이 있고, 눕거나 잠자리에 들면 목이 타는 느낌도 있다. 그 밖의 증상은 없다. 과거력으로 비만, 당뇨병, 변비, 불안이 있다. 현재 인슐린, 메트포르민, 리시노프릴을 복용한다. 최근 체중이 5파운드 감소했다. 22갑년 흡연력이 있고 저녁 식사 때 술을 마신다. 체온 99.5°F(37.5°C), 혈압 177/98mmHg, 맥박 90회/분, 호흡수 17회/분, 산소포화도 98%이다. 과체중이지만 현재 고통스러워 보이지 않는다. 복부검사는 정상이다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 바륨 삼킴검사
B. 내시경검사
C. 식도 내압검사
D. 오메프라졸 시험 치료

## 해설


진행성 연하곤란과 체중감소는 경고증상이므로 단순 PPI 시험보다 상부내시경(B)으로 협착·종양·점막병변을 평가한다. GERD에 의한 소화성 협착도 가능하고 암은 감별진단이다. 고혈압 자체를 이 사례의 식도암 진단 근거로 삼지 않는다. 내압검사는 기계적·점막 원인 평가 뒤 운동장애가 의심될 때 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008563 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 진행성 연하곤란·체중감소의 EGD B 유지. 고혈압을 식도암 주요 위험인자로 묶거나 암을 이미 확정한 표현 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.asge.org/home/resources/publications/guidelines/american-society-for-gastrointestinal-endoscopy-guideline-on-the-diagnosis-and-management-of-gerd--summary-and-recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008563
