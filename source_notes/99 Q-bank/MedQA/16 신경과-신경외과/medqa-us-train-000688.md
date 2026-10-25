---
type: qbank
schema_version: 1
id: medqa-us-train-000688
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5686ec2205dc5b975f617d3b4873abdb9f8ea135e360cbbee5a40f772d33cf13
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Tourette syndrome"
  - "tic disorder"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-2LsSDsnqXslaAgKFRpYyBEaXNvcmRlcikubWQ
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-uanOugmyDsnqXslaAgKFRvdXJldHRlIERpc29yZGVyKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BdG9tb3hldGluZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MZXZldGlyYWNldGFtLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

12세 소년이 지난 2년간 지속된 만성 기침을 주소로 소아청소년과에 내원하였다. 기침은 낮 동안, 특히 학교에서 돌아온 후에 나타난다. 학교 선생님은 아이가 학교에서는 기침을 하지 않는다고 말한다. 기침은 잠잘 때는 없으나, 시험을 보거나 지루함을 느낄 때 증가한다. 어머니는 아이가 한 달 동안 기침을 하지 않은 적이 있었는데, 그 기간 동안 아이가 스트레스를 받거나 피곤할 때 어깨를 자주 으쓱거리는 습관이 있었다고 보고하였다. 재채기, 콧물, 코막힘, 두통, 귀 증상 또는 호흡 곤란의 병력은 없다. 자세한 병력 청취 결과 기분 장애, 강박 장애 증상 또는 주의력결핍 과잉행동장애(ADHD)의 징후는 보이지 않는다. 알려진 신경학적 질환의 과거력은 없으며, 약물 남용의 병력도 없다. 신체 검진에서 활력 징후는 안정적이다. 호흡기 및 심혈관계 검진은 정상이다. 그러나 소아청소년과 의사는 반복적인 눈 깜빡임을 관찰하였고, 이에 대해 묻자 어머니는 아이가 8세 무렵부터 이러한 습관이 있었다고 보고하였다. 추가적인 질문을 통해 눈 깜빡임, 기침, 끙끙거리는 소리(grunting)가 특별한 이유 없이 몇 주간 사라졌다가 다시 나타난다는 사실을 확인하였다. 이 환자의 증상을 조절하는 데 가장 효과적일 것으로 생각되는 약물은 무엇인가?

## 선택지

A. Atomoxetine
B. Clonidine
C. Haloperidol
D. Levetiracetam

## 해설

18세 이전 시작한 여러 운동틱과 음성틱이 1년 넘게 증감하므로 투렛증후군에 합당하다. 선지 중 haloperidol(C)은 틱을 억제하는 효과가 있는 도파민 수용체 차단제이다. 그러나 보편적 첫 치료로 단정하지 않는다. 기능 영향·선호를 평가하고 가능하면 CBIT를 우선 제안하며, 약물이 필요하면 효과와 운동·대사·진정 부작용을 고려해 선택한다. Clonidine도 틱 감소 효과가 있어 무효한 약으로 취급하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 투렛증후군의 항틱 약물 C는 유효하지만 할로페리돌을 모든 환자의 일차 치료로 규정한 오류를 교정한다.
- 공식/학회 근거: https://www.aan.com/Guidelines/home/GetGuidelineContent/960

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000688
