---
type: qbank
schema_version: 1
id: medqa-us-train-001313
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5399cb82d2b4a6124810ece672b917864c516664f2a86d49aa576ab2a44729d1
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "chronic mesenteric ischemia"
  - "intestinal angina"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rp4zshLEg7J6l6rCE66eJIO2XiO2YiCAoQ2hyb25pYyBNZXNlbnRlcmljIElzY2hlbWlhKS5tZA
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

관상동맥질환과 말초동맥질환이 있는 71세 남성이 수개월째 식후 30분쯤 복통이 생겨 식사를 피한다. 8 kg이 빠졌고 복부 진찰은 정상이다. 장간막 도플러가 장내 가스 때문에 비진단적이었다. 혈관의 협착을 평가할 다음 검사는?

## 선택지

A. 우상복부 일반 초음파
B. 복부 CT 혈관조영술
C. 내시경 역행 담췌관조영술
D. 복부 비조영 CT

## 해설


죽상경화 위험이 있는 사람의 반복되는 식후 통증, 식사 회피와 체중 감소는 만성 장간막 허혈의 단서다. CT 혈관조영술로 장간막 동맥의 협착 위치와 범위를 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 동맥경화 위험·식후통/food fear·체중감소의 만성 장간막허혈 의심에서 복부CTA B로 혈관 협착 평가. ERCP/일반 내시경과 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001313
- https://pubmed.ncbi.nlm.nih.gov/40513642/
