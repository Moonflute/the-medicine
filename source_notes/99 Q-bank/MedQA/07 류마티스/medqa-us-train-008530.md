---
type: qbank
schema_version: 1
id: medqa-us-train-008530
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:96d0aeaee82284bd70d4005a3a358b640c51ff9c59eeeda68e51582105cd5f57
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "acute gout"
  - "monosodium urate crystals"
  - "gouty arthritis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-2Gte2SjSAoR291dCkubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

45세 남성이 오른손 세 번째 손가락의 근위 관절 통증과 부종으로 응급실에 내원했다. 통증이 너무 심해 오늘 아침 잠에서 깼다. 이런 증상은 처음이다. 하루 한 갑씩 25년 동안 담배를 피웠고 주말마다 과음한다. 어젯밤 친구가 연 파티에서 맥주 3~4잔을 마셔 운전해서 집에 갈 수 없었다. 과거력은 없다. 어머니는 55세에 췌장암으로 사망했고 아버지는 2년 전 뇌졸중으로 사망했다. 체온 37.7°C(100°F), 혈압 130/70mmHg, 맥박 104회/분, 호흡수 20회/분, BMI 25kg/m²이다. 통증으로 중등도의 불편감을 보인다. 오른손 세 번째 손가락의 근위지간관절은 심한 압통, 부종, 열감, 경미한 발적이 있다. 극심한 압통으로 운동 범위는 평가할 수 없다. 오른손 사진이 제시되어 있다.
혈액검사: 혈색소 14.5g/dL, 백혈구 16,000/mm³, 혈소판 150,000/mm³, ESR 55mm/h
관절에서 활액을 흡인했다. 혼탁하고 진한 노란색이며 백혈구 30,000/μL, 배양 음성이다. 음의 복굴절을 보이는 바늘 모양 결정이 관찰된다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 만성 통풍
B. 화농성 관절염
C. 급성 통풍
D. 반응성 관절염

## 해설


첫 급성 단관절 발작과 관절액의 음성 복굴절 바늘모양 monosodium urate 결정은 급성 통풍 C를 지지한다. 배양이 음성이지만 임상적으로 감염이 우려되면 별도로 평가하며 결정의 존재가 동시 감염을 절대 배제하는 것은 아니다. 이 케이스의 진단은 제공된 결정 결과에 근거하며 급성 관절염 전체에서 통풍이 항상 가장 흔하다는 주장에 근거하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008530 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 요산결정을 단핵결정이라 부르고 모든 급성 관절염에서 통풍이 최다라는 과장 제거. 실제 결정 형태가 본문에 있어 사진 없이C 선택 가능.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008530
