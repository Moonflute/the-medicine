---
type: qbank
schema_version: 1
id: medqa-us-train-000681
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:70ecbab22c7a000a13c93faf575c310407a20926f0b6a5d22672134d5460eb54
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "Coarctation of the aorta"
  - "Complete atrioventricular septal defect"
  - "Atrial septal defect"
  - "Double-outlet right ventricle with subaortic ventricular septal defect"
question_type: diagnosis
difficulty: complex
answer: C
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

7세 남아가 운동 중 진행성 피로감과 호흡곤란을 주소로 부모와 함께 소아과에 내원하였다. 그 외에는 건강하며 알려진 의학적 질환이나 다른 증상은 없다. 환아는 임신 39주에 자연 질식 분만으로 태어났다. 모든 예방접종은 최신 상태이며 모든 발달 이정표를 충족하고 있다. 신체 검진상 체온은 36.9ºC, 맥박수는 90회/분, 혈압은 100/70 mm Hg, 호흡수는 18회/분이다. 네 사지의 맥박은 모두 대칭적이고 정상적으로 촉지되며, 요골-대퇴 맥박 지연(radio-femoral delay)은 없다. 소아과 의사는 심장 청진 후 선천성 심장 질환을 의심하였다. 위에서 언급된 임상적 특징을 보일 가능성이 가장 높은 선천성 심장 질환은 무엇인가?

## 선택지

A. 대동맥 축착증(Coarctation of the aorta)
B. 완전 방실 중격 결손(Complete atrioventricular septal defect)
C. 심방 중격 결손(Atrial septal defect)
D. 대동맥하 심실 중격 결손을 동반한 양대혈관 우심실 기시증(Double-outlet right ventricle with subaortic ventricular septal defect)

## 해설


청소년기에 호흡곤란과 피로가 동반된 경우, 심방 중격 결손(ASD)으로 좌우 혈류 분리와 우심실 부하가 증가해 이러한 증상이 나타난다. 따라서 ASD가 정답이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000681
