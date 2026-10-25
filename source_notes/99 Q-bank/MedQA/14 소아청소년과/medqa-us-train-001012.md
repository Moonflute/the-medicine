---
type: qbank
schema_version: 1
id: medqa-us-train-001012
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0d5a996cbda46e5253964a3460680421bf0960fdcbe918323cce34596445a38c
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "Anemia of prematurity"
question_type: mechanism
related_disease_slugs:
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
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

1개월 된 남아를 어머니가 '숨을 쉬지 않는' 증상으로 데려왔습니다. 어머니는 환아가 자는 동안 가끔 호흡을 멈추며, 이러한 증상이 더 빈번하게 발생하고 있다고 보고했습니다. 환아는 태반 기능 부전으로 인해 임신 32주에 태어났습니다. 환아는 인공호흡기 치료를 위해 신생아 집중치료실에 1일간 입원했습니다. 산전 검사 중 어머니가 풍진에 대한 면역이 없음이 밝혀졌으나, 그 외에는 합병증 없는 임신이었습니다. 어머니는 기저 질환이 없으며 산전 비타민만 복용했습니다. 환아에게는 건강한 3세 된 누나가 있습니다. 아버지는 '심장 질환'이 있습니다. 환아의 체온은 98°F(36.7°C), 혈압은 91/55 mmHg, 맥박은 207회/분, 호흡은 50회/분이며 실내 공기에서 산소 포화도는 97%입니다. 신체 검진에서 창백한 결막이 관찰됩니다. 아래와 같이 검사 결과가 확인되었습니다: 백혈구 수: 10,000/mm^3(정상 감별 계산), 혈색소(Hb): 8.2 g/dL, 헤마토크릿(Hct): 28%, 평균 적혈구 용적(MCV): 100 um^3, 혈소판 수: 300,000/mm^3, 망상적혈구 수: 0.8%(정상 범위: 2-6%), 젖산 탈수소효소(LDH): 120 U/L(정상 범위: 100-250 U/L). 말초 혈액 도말 검사에서 정구성 정색소성 적혈구가 관찰됩니다. 환아의 가장 가능성 높은 진단에 대한 기전은 무엇입니까?

## 선택지

A. 혈색소병증(Hemoglobinopathy)
B. 에리스로포이에틴(erythropoietin) 생성 장애
C. 소혈액형 불일치
D. 적혈구 막 결함

## 해설

미숙아에서 생후 수주 동안 상대적으로 낮은 EPO 생성과 저산소 자극에 대한 불충분한 반응이 적혈구 생성을 제한할 수 있다. 빈혈에 비해 낮은 망상적혈구 수와 뚜렷한 용혈 소견 부재가 이를 지지하므로 B가 가장 적절하다. 저산소증 그 자체가 정상적인 EPO 생성을 억제한다는 설명은 맞지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 저산소증 자체가 EPO를 감소시킨다는 역방향 설명을 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001012
