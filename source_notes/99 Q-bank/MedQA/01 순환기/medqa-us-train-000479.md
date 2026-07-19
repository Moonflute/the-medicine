---
type: qbank
schema_version: 1
id: medqa-us-train-000479
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ba2aa5bb15bcb93c8e617e25ff787b9e4a19c5be9dd54c9df2669c5aadc07d08
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "High-output heart failure"
  - "Arteriovenous fistula"
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

43세 남성이 1개월간 심해지는 호흡곤란으로 내원하였다. 환자는 밤에 베개 두 개를 사용하고 있으나 자주 숨이 막히는 느낌으로 잠에서 깬다. 5개월 전 왼쪽 상완에 동정맥루(arteriovenous fistula) 조성술을 받았다. 환자는 역류성 신병증(reflux nephropathy)으로 인한 고혈압과 만성 신장 질환이 있다. 주 3회 혈액투석을 받고 있다. 현재 복용 중인 약물은 에날라프릴(enalapril), 비타민 D3, 에리스로포이에틴(erythropoietin), 세벨라머(sevelamer), 아토르바스타틴(atorvastatin)이다. 체온은 37.1°C, 호흡수는 분당 22회, 맥박은 분당 103회로 강하게 뛰며(bounding), 혈압은 106/58 mm Hg이다. 하지 검사에서 양측 함요 부종(pitting pedal edema)이 관찰된다. 경정맥 팽대(jugular venous distention)가 있다. 상완두 동정맥루 위에서 뚜렷한 진동(thrill)이 들린다. 양측 폐 기저부에서 수포음(crackles)이 들린다. 심장 검사에서 S3 말발굽 리듬(S3 gallop)이 확인된다. 복부는 부드럽고 압통은 없다. 이 환자 증상의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 동정맥루 동맥류(AV fistula aneurysm)
B. 투석 불균형 증후군(Dialysis disequilibrium syndrome)
C. 교착성 심낭염(Constrictive pericarditis)
D. 고박출 심부전(High-output heart failure)

## 해설


동정맥루는 전신 순환에 큰 혈류를 제공해 심박출량을 증가시킨다. 환자는 고출력성 심부전의 전형적인 증상(양측 부종, JVD, S3, 호흡곤란)을 보이며, 혈압은 낮고 맥박은 강하게 뛰는다. 따라서 가장 가능성 높은 원인은 고출력성 심부전이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000479
