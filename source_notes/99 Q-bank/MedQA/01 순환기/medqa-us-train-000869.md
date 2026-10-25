---
type: qbank
schema_version: 1
id: medqa-us-train-000869
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c85da72a2977da48b7c151f118a211e284ebf9e337537350b5813ca4026e8d78
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "shortness of breath"
  - "acute myocardial infarction"
  - "hyperlipidemia"
  - "left ventricular ejection fraction"
related_disease_slugs:
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2FwdG9wcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTml0cm9nbHljZXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmVyYXBhbWlsLm1k
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

78세 남성이 안정 시 및 운동 시 호흡곤란을 주소로 내원하였다. 환자는 또한 누웠을 때 숨쉬기 힘들다고 호소한다. 또한 수면 중 깜짝 놀라 깨며 질식할 것 같은 느낌이 든다고 걱정하고 있다. 이러한 증상은 지난 몇 주간 지속되었으며 점점 악화되고 있다. 발열은 없으며 알려진 감염원과의 접촉력도 없다. 6개월 전 급성 심근경색을 앓았으나 회복되었고 최근까지 건강하게 지냈다. 고지혈증 병력이 있어 아토르바스타틴(atorvastatin)을 복용 중이다. 체온은 37.0°C, 맥박은 85회/분, 호흡수는 14회/분, 혈압은 110/75 mm Hg이다. 신체 검진상 심박동은 규칙적이다. 양측 폐에서 수포음(crackles)이 들린다. 심초음파 검사 결과 좌심실 박출률(left ventricular ejection fraction)은 33%이다. 어떤 약물을 시작해야 하는가?

## 선택지

A. 캡토프릴(Captopril)
B. 베라파밀(Verapamil)
C. 레보플록사신(Levofloxacin)
D. 니트로글리세린(Nitroglycerin)

## 해설

정답은 A이다. MI 병력과 울혈 증상, EF33%는 HFrEF에 합당하다. 제시된 선택지에서는 ACE 억제제 captopril이 RAS 차단·후부하 감소 등을 통해 유익하다. 현대 HFrEF 치료에서는 ARNI/ACEI/ARB 선택과 함께 근거 기반 β차단제·MRA·SGLT2 억제제 등 전체 치료를 평가한다. 신장 혈류를 감소시키는 것 자체를 치료 목표로 설명하지 않고 신기능/K를 감시한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ACEI의 근거를 사구체혈류 감소가 아니라 HFrEF의 RAS차단/예후 개선으로 교정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000869
