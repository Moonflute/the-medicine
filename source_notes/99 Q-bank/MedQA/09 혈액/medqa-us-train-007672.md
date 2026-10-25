---
type: qbank
schema_version: 1
id: medqa-us-train-007672
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9907526912567fbb85b3d17c4670a24881032b58336d1eeef0736407c121f733
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "erythropoiesis-stimulating agent"
  - "anemia of chronic kidney disease"
  - "darbepoetin"
related_disease_slugs:
  - MDkg7ZiI7JWhL-unjOyEsSDsp4jtmZgg67mI7ZiIIChBbmVtaWEgb2YgQ2hyb25pYyBEaXNlYXNlKS5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

4기 만성콩팥병(CKD) 병력이 있는 63세 남자에게 치료에 반응하지 않는 빈혈이 발생하기 시작했다. 본인은 혈전 병력이 없지만 어머니가 과거 심부정맥혈전색전증 치료를 받았다고 한다. 제2형 당뇨병, 고혈압, 비정상피종 고환암, 고콜레스테롤혈증의 병력이 있다. 현재 하루 담배 한 갑을 피우고 매일 와인 한 잔을 마시며 불법 약물은 사용하지 않는다. 체온 36.7°C, 혈압 126/74 mm Hg, 심박수 87회/분, 호흡수 17회/분이다. 맥박은 강하고 안색은 창백하지만 호흡음은 깨끗하다. 처음 실내 공기 산소포화도는 91%였고 비강 캐뉼라로 산소 2 L가 새로 필요하다. 주치의가 혈액내과에 의뢰했으며 다베포에틴과 같은 적혈구생성자극제(ESA) 투여를 고려 중이다. 다음 중 ESA 사용에 대해 옳은 것은?

## 선택지

A. ESA는 유방암과 자궁경부암 환자의 생존율을 향상시킬 수 있다
B. 치유 목적이 예상되는 골수억제 화학요법을 받는 환자에게 ESA를 사용한다
C. 헤모글로빈 수치가 10 g/dL 미만일 때만 ESA를 사용해야 한다
D. 철분 수치가 낮아도 ESA는 효과가 있다

## 해설


미국 darbepoetin 허가사항의 성인 CKD 맥락에서 Hb<10g/dL 조건을 고려하는 C가 선택지 중 맞다. 비투석 CKD는 빈혈 증상·수혈 가능성 및 위험을 개별화하고 먼저 철 등 교정 가능한 원인을 평가한다. <10이면 무조건 투여하거나 Hb를 정상화한다는 뜻이 아니며 혈전·뇌졸중·암 관련 위험을 검토하여 최소 유효용량을 사용한다. 치료 목적이 근치인 항암 환자에게 routine ESA를 권하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007672 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Hb<10 조건 C를 자동 투여/모든 상황의 절대기준으로 일반화한 해설 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=0fd36cb9-c4f6-4167-93c9-8530865db3f9&type=display
- https://kdigo.org/wp-content/uploads/2026/04/KDIGO-2026-Anemia-in-CKD-Guideline.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007672
