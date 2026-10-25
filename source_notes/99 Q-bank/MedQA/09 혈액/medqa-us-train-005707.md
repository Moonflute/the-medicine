---
type: qbank
schema_version: 1
id: medqa-us-train-005707
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4259eeff0b0146385d281a823dc90a50729b6d0dc8727a94c895eb8c8ce418d4
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "만성 신장질환 빈혈"
  - "기능적 철 결핍"
  - "에리트로포이에틴 치료"
related_disease_slugs:
  - MDkg7ZiI7JWhL-unjOyEsSDsp4jtmZgg67mI7ZiIIChBbmVtaWEgb2YgQ2hyb25pYyBEaXNlYXNlKS5tZA
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

고혈압, 고지혈증 및 투석 중인 말기 신장질환을 동반한 당뇨병 병력이 있는 69세 남성이 추적 진료를 위해 신장내과에 왔다. 몇 주 전 충분히 자고 균형 잡힌 식사를 하며 운동하려고 노력해도 피곤하다며 진료를 받았고, 당시 혈색소가 9.7 g/dL여서 재조합 인간 에리트로포이에틴(EPO)을 시작하기로 했다. 그 후 주 3회 정맥 내 EPO를 투여받고 있다. 오늘도 새 치료에도 불구하고 피곤하다고 한다. 체온은 98.0°F(36.7°C), 혈압은 134/83 mmHg, 맥박은 분당 65회, 호흡수는 분당 12회이다. 신체검사에서 결막 창백이 있고 혈색소는 9.8 g/dL이다. 현재 이 환자에게서 관찰될 검사 소견은 무엇인가?

## 선택지

A. 낮은 MCV, 증가한 RDW, 정상 페리틴, 정상 트랜스페린 포화도
B. 낮은 MCV, 증가한 RDW, 감소한 페리틴, 감소한 트랜스페린 포화도
C. 정상 MCV, 증가한 RDW, 증가한 페리틴, 증가한 트랜스페린 포화도
D. 정상 MCV, 정상 RDW, 증가한 페리틴, 증가한 트랜스페린 포화도

## 해설


ESA 뒤 조혈 수요 증가와 투석 관련 철 손실로 저장철 부족이 드러날 수 있어 선택지 B의 낮은 ferritin·TSAT와 소구성/높은 RDW가 출제의도에 부합한다. 이는 systemic/기존 absolute iron deficiency 패턴이다. Iron-restricted erythropoiesis(기존 functional)는 TSAT가 낮아도 ferritin이 정상/높을 수 있다. ESA 반응이 적다는 사실만으로 현재 철 상태를 확정하지 않으며 실제 ferritin/TSAT·출혈·염증 등을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005707 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 낮은 ferritin/TSAT의 B를 기능적 결핍이라고 부른 오류 교정; 검사 전 예측과 확인을 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://kdigo.org/wp-content/uploads/2026/04/KDIGO-2026-Anemia-in-CKD-Guideline.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005707
