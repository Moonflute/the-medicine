---
type: qbank
schema_version: 1
id: medqa-us-train-000741
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:326549ca876569ee1f9fa045cb24cc21c2130a96378f472cb6a72ff10e1e42e3
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "ectopic pregnancy"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2geyZuCDsnoTsi6AgKEVjdG9waWMgUHJlZ25hbmN5KS5tZA
difficulty: standard
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 노숙자 여성이 질 출혈을 주소로 응급 진료소에 내원하였다. 환자는 몇 시간 전부터 시작되어 강도가 점점 심해지는 모호한 우하복부 통증을 호소한다. 과거력상 만성 C형 간염이 있으며, '가끔씩' 약을 복용한다고 한다. 체온은 36.0°C, 혈압은 110/70 mmHg, 맥박은 80회/분이다. 복부 진찰에서 우측 부속기 압통이 확인되었으며, 반발 압통이나 근육 방어는 관찰되지 않는다. 경질 초음파 검사 결과 우측 난관에서 2.0 cm 크기의 임신낭이 확인되었다. 이 환자의 치료를 위한 다음 적절한 단계는 무엇인가?

## 선택지

A. 수술
B. 정맥 수액 공급 후 수술
C. 메토트렉세이트(Methotrexate)
D. 난관 결찰술

## 해설

이 환자는 난관임신이 확인되었고 통증이 증가하고 있다. 메토트렉세이트는 적합한 환자에서 가능하지만 이후 반복 hCG 검사와 안정적인 추적관찰이 필요하다. 이 사례에서는 불규칙한 치료 이용 및 추적 이행의 어려움, 만성 C형간염에 따른 간기능·약물 적합성 우려를 함께 고려하면 수술(A)이 가장 적합하다. 노숙 상태나 C형간염 진단 자체만으로 모든 환자의 선택을 단정해서는 안 되며 실제 간기능과 지원 가능한 추적 환경을 평가한다. 현재 활력징후는 안정적이므로 B의 소생 후 수술이 더 적합하다는 근거는 없다. 모든 난관임신이 무조건 즉시 수술 대상인 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- https://www.nice.org.uk/guidance/NG126/chapter/management-of-tubal-ectopic-pregnancy
- https://rightdecisions.scot.nhs.uk/media/rvbmcsna/medical-management-of-ectopic-pregnancy_1.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000741
