---
type: qbank
schema_version: 1
id: medqa-us-train-008795
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c97ede630de22cba96331d211054d225f2a16a525b5fc23d0e24bd432592ed55
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Guillain-Barré syndrome"
  - "postinfectious polyneuropathy"
  - "spirometry"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_quLjrnpEt67CU66CIIOymne2bhOq1sCAoR3VpbGxhaW4tQmFycsOpIHN5bmRyb21lKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 여성이 피로와 쇠약으로 응급실에 내원했다. 지난 24시간 동안 평소 같지 않고 힘이 전혀 없다고 느꼈다. 과거력은 없고 일주일 전 피가 섞인 설사를 한 번 했으나 저절로 호전되었다. 체온 99.4°F(37.4°C), 혈압 124/62mmHg, 맥박 95회/분, 호흡수 29회/분, 산소포화도 95%이다. 하지 근력이 2/5이고 하지와 손끝 감각이 감소되어 있다. 다음 중 가장 적절한 초기 처치는 무엇인가?

## 선택지

A. 덱사메타손
B. 기관내 삽관
C. 피리도스티그민
D. 폐활량 측정

## 해설

설사 후 급성 진행성 하지 약화와 감각 증상은 GBS를 시사한다. 초기에는 폐활량 등 호흡기능(D)을 측정하고 반복 추적하여 호흡근 약화와 환기 필요성을 평가한다. 이는 GBS 확진검사가 아니라 중증도·호흡부전 위험 평가이다. 산소포화도가 비교적 유지되어도 신경근성 환기부전을 배제하지 못하며, 호흡기능 저하나 기도 보호 불능이면 삽관을 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 폐활량 측정을 GBS 확진검사로 설명한 오류 교정.
- 공식/학회 근거: https://onlinelibrary.wiley.com/doi/10.1111/ene.16073

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008795
