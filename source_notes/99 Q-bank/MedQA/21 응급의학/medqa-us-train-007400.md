---
type: qbank
schema_version: 1
id: medqa-us-train-007400
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:07c05c5420f5410fe8637cbd6075b9f52eb3a78c1b49cc2d4f5dcf02f265d0d4
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "분절성 폐색전증"
  - "헤파린-와파린 연결"
  - "항응고 치료"
  - "혈역학적 안정"
question_type: management
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

52세 남자가 갑자기 시작된 호흡곤란, 빈맥, 빈호흡, 흉통으로 응급실에 내원했다. 장거리 트럭 운전사이며 최근 테네시에서 서부 해안으로 돌아왔다. 통풍, 고혈압, 고지혈증, 제2형 당뇨병, 경미한 지적장애 병력이 있다. 현재 하루 담배 두 갑, 맥주 6팩을 마시며 과거 주사 약물 사용력이 있으나 현재 불법 약물은 부인한다. 체온은 36.7°C(98.0°F), 혈압 126/74 mmHg, 심박수 87회/분, 호흡수 23회/분이다. 폐기저부에 최소한의 수포음이 있고, 심첨부에서 2/6등급 전수축기 잡음이 들리며 복부검사는 정상이다. CT 혈관조영술에서 분절성 폐색전증이 확인되었다. 다음 중 가장 적절한 치료 계획은 무엇인가?

## 선택지

A. 와파린 항응고를 시작한다
B. 헤파린을 시작하고 와파린으로 연결한다
C. 조직 플라스미노겐 활성제를 투여한다
D. 중재영상의학과에 하대정맥 필터 삽입을 의뢰한다

## 해설

혈역학적으로 안정된 확진 폐색전증에는 항응고 치료가 필요하다. 제시된 선택지 중 헤파린과 와파린을 중첩하여 시작하는 B가 적절하며, 와파린 단독 시작은 초기 치료로 부적절하다. 와파린을 선택하면 비경구 항응고제를 적어도 5일간 함께 사용하고 INR이 치료 범위에 도달했는지 확인한 뒤 중단한다. 현재는 적합한 환자에서 DOAC도 널리 사용하지만 보기에는 없다. 불안정성이 없는 이 사례에서 일률적인 혈전용해나 하대정맥 필터를 우선하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 안정된 PE에서 보기 B를 유지하되 헤파린을 단순히 중단하고 와파린으로 바꾸는 것으로 오해하지 않게 중첩 치료를 명시한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng158/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007400
