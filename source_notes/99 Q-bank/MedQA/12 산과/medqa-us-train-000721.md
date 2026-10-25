---
type: qbank
schema_version: 1
id: medqa-us-train-000721
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7fdda016decd0943255171896ca61c486791fcdc5fcf5c20373ea0fa79b89edc
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "Down syndrome"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-uLpOyatOymne2bhOq1sCAoRG93biBTeW5kcm9tZSkubWQ
difficulty: standard
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

36세 임산부(임신 4회, 출산 1회)가 임신 11주 차에 내원하였다. 현재 특별한 호소 증상은 없다. 28세에 첫 번째 임신을 하였으며 합병증 없이 질식 분만하였다. 아들은 건강하게 태어났으며 수년간 신체적, 심리적으로 정상 발달을 보였다. 이전 임신 중 2회는 임신 1분기에 자연 유산되었다. 환자의 친언니는 다운증후군 아이를 출산한 적이 있다. 환자는 흡연과 음주를 하지 않는다. 혈액 검사 결과는 다음과 같다: 측정값: 베타 인간 융모성 성선자극호르몬(beta-hCG) 높음, 임신 관련 혈장 단백질-A(PAPP-A) 낮음. 이 환자의 관리로 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 풍진 바이러스, 거대세포바이러스, 톡소플라스마 IgG에 대한 혈액 검사 권유
B. 목덜미 투명대(nuchal translucency) 및 머리엉덩길이(crown-rump length) 측정을 포함한 초음파 검사 시행
C. 융모막 융모 채취(chorionic villus sampling) 후 세포 배양 및 핵형 분석 권장
D. 임신 15주 차에 사중 표지자 검사(quadruple test) 예약

## 해설

hCG 상승과 PAPP-A 저하는 21번 삼염색체 위험 증가를 시사하는 선별 소견이다. 11주에는 상담 후 CVS로 진단 검사를 시행할 수 있어 C가 가장 직접적인 확진 선택지이다. 선별만으로 다운증후군이 확진된 것은 아니며 초음파 및 위험 산정, 검사의 장단점을 설명하고 환자 선택을 존중한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 1학기 오역과 선별/확진 구분 및 선택권 설명.
- https://www.acog.org/clinical/clinical-guidance/practice-advisory/articles/2026/01/screening-for-fetal-chromosomal-abnormalities

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000721
