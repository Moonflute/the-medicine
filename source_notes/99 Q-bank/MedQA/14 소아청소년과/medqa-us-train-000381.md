---
type: qbank
schema_version: 1
id: medqa-us-train-000381
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a362d0fdda426bc5bce3bbde055b5202e15a5fc09eeacf0501bba8d53ecc98dd
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "breastfeeding jaundice"
  - "Breast milk jaundice"
question_type: management
related_disease_slugs: []
difficulty: complex
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

6일 된 남자 신생아가 하루 전부터 시작된 피부와 눈의 황달에 대한 평가를 위해 어머니와 함께 내원하였다. 어머니는 아들에게 하루에 약 7회 모유 수유를 하고 있다고 보고하였다. 또한 어제 기저귀를 2번 적셨고 대변을 2번 보았다고 하였다. 아기는 재태 연령 38주에 3500g으로 태어났으며, 현재 체중은 3000g이다. 신생아 선별 검사는 정상이었다. 체온은 37°C, 맥박은 180회/분, 혈압은 75/45 mm Hg이다. 신체 검진상 공막 황달, 광범위한 황달, 건조한 점막이 관찰된다. 나머지 검진 결과는 이상이 없다. 혈청 검사 결과는 다음과 같다: 빌리루빈 총 9 mg/dL, 직접 0.7 mg/dL, AST 15 U/L, ALT 15 U/L. 이 환자의 관리에서 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 정맥 내 면역글로불린
B. 페노바르비탈
C. 모유 수유 빈도 증가
D. 복부 초음파

## 해설

출생체중 대비 약 14% 감소, 하루 젖은 기저귀 2개·마른 점막·빈맥은 섭취 부족과 탈수를 시사한다. 수유 횟수·젖 전달을 늘리고 평가하는 C가 보기 중 맞지만 즉시 수분·전해질 상태를 확인하고 필요시 보충수유/수액을 병행한다. 섭취 부족은 대변 배출 감소와 장간순환 증가로 간접 빌리루빈을 높이며 모유 속 배설 감소 때문이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 섭취부족 황달의 수유 지원 C 유지. 빌리루빈이 모유로 배설된다는 오류와 14% 체중감소·탈수 누락을 교정.
- https://www.healthychildren.org/English/ages-stages/baby/Pages/jaundice.aspx
- https://www.rch.org.au/clinicalguide/guideline_index/Hypernatraemia/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000381
