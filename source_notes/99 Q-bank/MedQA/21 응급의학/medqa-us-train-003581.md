---
type: qbank
schema_version: 1
id: medqa-us-train-003581
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d094051912d34f0eedb73dfbfe7629499a62f80ce63c017be5b02a68338b3497
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "traumatic bronchial rupture"
  - "pneumomediastinum"
  - "Hamman sign"
  - "blunt chest trauma"
  - "Bronchial rupture"
question_type: diagnosis
related_disease_slugs: []
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 여성이 고속 자동차 충돌 사고 후 반의식 상태로 이송되었다. 청색증과 심한 호흡곤란이 있었고 오른쪽 흉곽에서 촉진 시 염발음, 오른쪽 호흡음 감소, 심장박동과 동기화된 전흉부의 으깨지는 소리가 들렸다. 동맥혈가스에서 pH 7.31, PCO2 55 mmHg, PO2 42 mmHg였다. 기관삽관과 기계환기를 시행하고 생리식염수를 주입했다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 기관지 파열
B. 연가양흉
C. 심근 파열
D. 폐색전증

## 해설

고에너지 흉부외상 후 피하 공기와 심박동에 동기화된 Hamman 징후는 종격동 공기를 시사한다. 심한 호흡부전·편측 호흡음 감소의 맥락에서 보기 중 기관지 파열(A)이 가장 적합하다. 촉진 염발음만으로 골절을 확인한 것은 아니며, 기도손상은 기관지경 등으로 평가한다. 원문 ABG의 일부 수치가 완벽히 일치하지 않으나 출제 핵심인 외상 후 공기누출 국소화 판단은 가능하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 피하 염발음을 골절음으로 단정한 오류 제거. Hamman 징후는 종격동 공기의 단서이지 단독 기관지 파열 확진이 아님.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC12522690/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003581
