---
type: qbank
schema_version: 1
id: medqa-us-train-007653
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:21d1f2a40fa515d3db9fc7224a28ecc19e210297219977c3db0eefc6209d10fb
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "pulmonary embolism"
  - "pleuritic chest pain"
  - "D-dimer"
question_type: investigation
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

특별한 과거력이 없고 경구피임약을 복용 중인 23세 여성이 흉막성 흉통으로 응급실에 왔다. 오늘 시작된 통증이다. 전날 여행 후 비행기로 돌아왔다. 체온은 98°F(36.7°C), 혈압 117/66 mmHg, 맥박 105회/분, 호흡수 14회/분, 실내 공기 산소포화도 98%이다. 신체검사에서 빈맥, 정상 S1과 S2, 깨끗한 호흡음이 확인된다. 하지에는 압통이 없고 좌우 대칭이다. 체위 변화나 촉진으로 재현되지 않지만 깊게 숨쉴 때 악화된다. 다음 중 이 환자에게 가장 적절한 다음 검사는?

## 선택지

A. 흉부 방사선촬영
B. CT 혈관조영술
C. D-이합체
D. 하지 초음파

## 해설

흉막성 흉통, 빈맥, 경구피임약 복용과 최근 여행은 폐색전증의 평가가 필요한 단서이다. 이 환자는 쇼크가 없고 DVT 진찰 소견도 없어 임상 확률을 산정한 뒤 비고위험으로 판단되면 D-dimer(C)로 배제 여부를 평가한다. 빈맥과 에스트로겐 사용 때문에 PERC만으로 배제할 수는 없다. D-dimer가 양성이면 적절한 영상 검사가 필요하며 양성 자체가 확진은 아니다. 본문은 심부전증이 확인된 사례가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 폐색전증 의심 사례를 심부전증으로 잘못 연결한 해설을 교체한다. 낮은/비고위험 임상 확률에서 D-dimer C를 유지한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng158/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007653
