---
type: qbank
schema_version: 1
id: medqa-us-train-000226
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1c65e39004b91173dd209ffcbd699ef9e7624d898d9ae3ce8f0745a8e7adacc0
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "ectopic pregnancy"
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2geyZuCDsnoTsi6AgKEVjdG9waWMgUHJlZ25hbmN5KS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 여성이 우하복부 통증과 질 점상 출혈을 주소로 응급실에 내원하였다. 설사, 변비, 혈변은 없다고 한다. 과거력상 특이 사항은 없다. 담배나 술은 하지 않는다. 남편과 성생활을 하고 있으며 피임을 위해 자궁내장치(IUD)를 사용 중이다. 체온은 37.2°C, 혈압은 110/70 mmHg, 맥박은 80회/분, 호흡수는 12회/분이다. 신체 검진상 우측 부속기(adnexa)에 국소적 압통이 관찰되나, 만져지는 종괴는 없다. 마지막 월경 시작일(LMP)은 8주 전이다. 이 환자의 진단과 가장 관련이 깊은 것은 무엇인가?

## 선택지

A. 신체 검진상 반발통(rebound tenderness)과 맥버니점(McBurney’s point) 압통이 관찰됨
B. 소변 베타-HCG 양성 및 자궁 내 종괴 없음
C. 바륨 관장 검사상 결장에 진성 게실(true diverticuli)이 보임
D. 소변 베타-HCG 양성 및 자궁 내 일부 임신 산물(products of conception)이 관찰됨

## 해설

무월경 8주, 출혈과 편측 부속기 압통은 자궁외임신을 의심하게 한다. 선택지 중 소변 β-hCG 양성이면서 자궁내 임신이 보이지 않는 B가 이에 가장 부합한다. 다만 임신 위치 미확인 상태만으로 자궁외임신을 확진할 수는 없어 hCG와 초음파를 임상 상태와 함께 해석한다. IUD는 전체 임신 위험을 낮추지만 사용 중 임신이 되면 자궁외임신 여부를 주의해 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 외부임신용어수정,소변양성인데혈중으로잘못서술한검체혼동제거. B는자궁외임신의심단서이지단독확진아님.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000226
