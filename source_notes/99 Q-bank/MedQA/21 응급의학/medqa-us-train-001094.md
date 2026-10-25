---
type: qbank
schema_version: 1
id: medqa-us-train-001094
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9bf8ec7f4854b57de8d38ba8d78d31e721c647387dfb14d8da5d9ffeae1afb0f
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "Benign paroxysmal positional vertigo"
  - "Labyrinthitis"
  - "Vertebrobasilar stroke"
  - "Vestibular neuritis"
question_type: diagnosis
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-ydtOyEneymnSAoQmVuaWduIHBhcm94eXNtYWwgcG9zaXRpb25hbCB2ZXJ0aWdvKS5tZA
  - MTcg7J2067mE7J247ZuE6rO8L-yghOygleyLoOqyveyXvCAoVmVzdGlidWxhciBuZXVyaXRpcykubWQ
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
---

# MedQA US 임상문제

## 문제

27세 남성이 어지러움으로 응급실에 내원했다. 그는 오늘 아침부터 방이 빙글빙글 도는 느낌이 지속적이고 경미하게 계속된다고 말한다. 환자는 가끔 메스꺼움을 느끼며 증상 완화를 위해 수면 시 디펜히드라민(diphenhydramine)을 복용해 왔다. 환자는 전반적으로 건강하며 다른 기저 질환은 없고, 며칠 전 앓았던 감기를 낫게 하려고 최근 마늘을 더 많이 섭취한 것 외에는 특이 사항이 없다. 체온은 37.1°C, 혈압은 122/81 mmHg, 맥박은 분당 82회, 호흡수는 분당 15회, 실내 공기에서 산소 포화도는 99%이다. 신체 검진상 건강한 남성이다. 환자를 똑바로 앉힌 상태에서 머리를 오른쪽으로 약간 돌리고 빠르게 뒤로 눕혔다. 이 동작은 왼쪽으로 반복했을 때를 포함하여 어떠한 증상도 유발하지 않았다. 뇌신경 검사에서 안진(nystagmus)이 관찰되며 양측성 청력 저하가 있다. 환자의 일자 보행(tandem gait)은 불안정하나, 환자가 지속적인 불균형감을 호소함에도 불구하고 기저 보행 상태는 특이 사항이 없어 보인다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 양성 돌발성 체위성 현훈(Benign paroxysmal positional vertigo)
B. 미로염(Labyrinthitis)
C. 척추기저동맥 뇌졸중(Vertebrobasilar stroke)
D. 전정신경염(Vestibular neuritis)

## 해설

정답은 B, 미로염이다. 상기도감염 후 시작된 지속적인 현훈·안진에 청력저하가 동반된 점이 핵심이다. 미로는 평형기능과 청각에 관여하므로 미로염에서는 두 기능이 함께 영향을 받을 수 있고, 전정신경염은 일반적으로 청력저하를 일으키지 않는다. 양성 돌발성 체위성 현훈은 보통 특정 머리 움직임에 따른 짧은 반복 발작이어서 본문의 지속적 증상과 덜 맞는다. 체위유발검사가 음성이라는 이유만으로 BPPV나 중추성 원인을 완전히 배제할 수는 없다. 이 문항의 감염 선행력과 청각 증상을 종합하면 미로염이 가장 적절하지만, 실제 급성 지속 현훈에서는 중추 신경학적 징후와 보행 상태 등을 별도로 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문의 본문·선지·정답 및 한국어 해설을 개별 대조하였다. 원정답과 케이스를 유지하고 잘못 연결된 해설을 교체하였다.
- 공식/학회 근거: https://www.nhs.uk/conditions/labyrinthitis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001094
