---
type: qbank
schema_version: 1
id: medqa-us-train-000124
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4bf9932f601afe20412ef114adc7c09af915ba3ab83c94a87816ee581faa4837
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "polycystic ovarian syndrome"
  - "Medial collateral ligament tear"
  - "Medial meniscus tear"
  - "Patellofemoral syndrome"
  - "Pes anserine bursitis"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-uLpOuCrSDrgpzshowg7Kad7ZuE6rWwIChQb2x5Y3lzdGljIE92YXJ5IFN5bmRyb21lKS5tZA
  - MjIg7KCV7ZiV7Jm46rO8L-yKrOqwnOuMgO2HtCDthrXspp0g7Kad7ZuE6rWwIChQYXRlbGxvZmVtb3JhbCBQYWluIFN5bmRyb21lKS5tZA
difficulty: complex
answer: D
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

23세 여성이 무릎 통증으로 일차 진료 의사를 방문하였다. 환자는 통증이 어제 시작되었으며 점차 악화되고 있다고 말한다. 그녀는 최근 건강을 위해 배구팀에 가입했는데, 지난 신체 검진에서 체중 감량이 도움이 될 것이라는 조언을 받았기 때문이다. 그녀는 배구를 하면서 무릎을 반복적으로 회전하고 비트는 동작을 했다고 말한다. 환자의 과거력상 다낭성 난소 증후군(polycystic ovarian syndrome)이 있으며 현재 경구 피임약을 복용 중이다. 체온은 98.5°F(36.9°C), 혈압은 137/88 mmHg, 맥박은 90회/분, 호흡수는 12회/분, 실내 공기에서의 산소 포화도는 98%이다. 신체 검진상 안면 다모증이 있는 비만 여성이다. 신체 검진에서 슬개골 바로 아래 경골 내측 부위를 촉진할 때 압통이 확인된다. BMI는 37 kg/m^2이다. 하지의 나머지 검진 결과는 특이 사항이 없다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 내측 측부 인대 파열(Medial collateral ligament tear)
B. 내측 반월상 연골 파열(Medial meniscus tear)
C. 슬개대퇴 통증 증후군(Patellofemoral syndrome)
D. 거위발 점액낭염(Pes anserine bursitis)

## 해설

정답은 D, 거위발 윤활낭염이다. 비만과 새로 시작한 반복 운동 후 생긴 통증, 슬개골 아래의 경골 안쪽에 국한된 압통은 거위발 부위의 과사용성 병변을 지지한다. 내측 반월상연골 손상은 관절선 압통이나 잠김 등 기계적 증상이, 내측 측부인대 손상은 외반 외상과 불안정성이 더 전형적이다. 슬개대퇴 통증증후군은 주로 슬개골 주변이나 뒤쪽의 통증으로 나타나므로 제시된 압통 위치와 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 유방암 위험 해설은 다른 증례. 비만·운동 후 내측 근위 경골 압통을 거위발 윤활낭염으로 설명. 원정답 D 유지.
- 공식/학회 근거: https://www.orthoinfo.org/diseases--conditions/pes-anserine-knee-tendon-bursitis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000124
