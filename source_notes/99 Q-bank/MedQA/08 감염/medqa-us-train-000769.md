---
type: qbank
schema_version: 1
id: medqa-us-train-000769
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:196f2073d1518f8c7813bea8702e3065d9c11805529e2ff419f85f9e0752a30b
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "type 1 diabetes mellitus"
  - "tuberculosis"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDHtmJUg64u564eo67ORIChUeXBlIDEgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDIg7Zi47Z2h6riwL-2PkOqysO2VtSAoUHVsbW9uYXJ5IFR1YmVyY3Vsb3NpcykubWQ
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
---

# MedQA US 임상문제

## 문제

24세 남성이 정기 건강 검진을 위해 내원하였다. 환자는 건강하다고 느끼며 제1형 당뇨병을 앓고 있다. 복용 중인 약물은 인슐린뿐이다. 2주 전 네팔에서 이주해 왔으며 보호소에서 거주하고 있다. 지난 5년간 매일 담배 한 갑을 피웠다. 소아기 예방접종은 받은 적이 없다. 환자는 건강하고 영양 상태가 양호해 보인다. 키는 172cm, 체중은 68kg이며 체질량지수(BMI)는 23kg/m2이다. 체온은 36.8°C, 맥박은 분당 72회, 혈압은 123/82mmHg이다. 진찰 결과 우측 대퇴부에 치유된 흉터가 관찰된다. 그 외 신체 검진상 이상 소견은 없다. 정제 단백질 유도체(PPD) 피부 반응 검사를 시행하였다. 3일 후 13mm의 경결이 확인되었다. 이 환자의 관리로 가장 적절한 초기 단계는 무엇인가?

## 선택지

A. 인터페론-γ 방출 분석(IGRA) 시행
B. 흉부 X선 촬영
C. 9개월간 이소니아지드(isoniazid) 투여
D. 배양을 위한 객담 검체 채취

## 해설


네팔 출생, 보호소 거주 및 당뇨병이 있어 TST 경결 10 mm 이상을 양성으로 판단한다. 13 mm 양성 결과 뒤에는 증상 평가와 흉부 X선으로 활동성 결핵을 평가하므로 B가 적절하다. TST만으로 잠복감염과 활동성 결핵을 구별하지 못한다. 증상·영상에 따라 객담 검사가 추가되며 활동성 질환을 배제하기 전에 잠복결핵 약제를 단독 시작하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000769 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 13 mm TST는 이민·보호소·당뇨 위험군에서 양성이다. 흉부 X선은 감염 자체 확인이 아니라 활동성 결핵 평가 단계임을 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/tb/hcp/testing-diagnosis/tuberculin-skin-test.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000769
