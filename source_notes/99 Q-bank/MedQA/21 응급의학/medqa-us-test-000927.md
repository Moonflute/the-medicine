---
type: qbank
schema_version: 1
id: medqa-us-test-000927
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:f05e329933524ba85c0f64bd47fdbbba4aa7b90a137428016b3436973e593587
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "폐색전증"
  - "당뇨병성 족부감염"
  - "절단 후 호흡곤란"
question_type: investigation
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PeHljb2RvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

말초신경병증이 합병된 제2형 당뇨병이 있는 48세 남성이 발의 상처로 응급실에 왔다. 통증, 발열, 오한은 없다고 했지만 체온 101°F(38.3°C), 혈압 150/80 mmHg, 맥박 80회/분, 호흡 22회/분이었다. 발에 홍반과 고름을 동반한 궤양이 있고 방사선촬영에서 골수염으로 진단되어 오른발 부분 절단을 위해 입원했다. 파상풍 예방을 하고 5일 후 항생제를 처방받아 퇴원했으나 일주일 후 호흡곤란으로 재방문했다. 체온 98°F(37°C), 혈압 100/70 mmHg, 맥박 130회/분, 호흡 27회/분, 실내공기 산소포화도 92%였고 절단단은 홍반과 부종이 있었지만 압통은 없었다. 심전도에서 동성 빈맥이 보였다. 다음 중 가장 적절한 처치는?

## 선택지

A. 전혈구검사, 혈액형 및 교차시험, 농축적혈구 1단위 주문
B. 흉부 CT 혈관조영술과 산소 투여
C. 심부 상처 배양과 피페라실린-타조박탐 시작
D. 적혈구침강속도 측정과 옥시코돈 투여

## 해설

최근 수술·입원 뒤 새 호흡곤란·저산소혈증·빈맥은 폐색전증을 우려하게 한다. 현재 이송·영상 평가가 가능한 상태에서 산소를 투여하고 CTPA로 확인하는 B가 적절하다. CT가 모든 환자에서 무조건 최선은 아니며 불안정성·조영제 금기·신기능 등을 고려한다. 상처의 발적·부종도 평가하지만 통증이 없다는 이유만으로 감염을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 수술 후 높은 PE 의심의 산소·CTPA B는 유지하고 가장 정확한 검사라는 무조건적 단정을 임상확률 기반으로 수정한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng158/chapter/recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000927
