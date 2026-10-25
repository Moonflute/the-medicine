---
type: qbank
schema_version: 1
id: medqa-us-train-006343
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:69f80bfa52f88b02031a61ded8959928a4a44fe2ea260d9fef0d13291767c4af
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "크론병"
  - "말단회장염"
  - "직장주위 농양"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tgazroaDrs5EgKENEKSAoQ3JvaG4ncyBEaXNlYXNlIChDRCkpLm1k
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 여성이 만성 복부 불편감과 경련성 통증으로 내원했다. 가끔 작은 혈액 줄무늬가 섞이는 설사가 생겨 걱정되어 진료를 받으러 왔다. 과거력으로 유당불내증과 천식이 있다. 가족 중 밀 알레르기가 있으며 체중 감량을 위해 여러 차례 스스로 구토를 유발해 보았다고 한다. 폭식증의 위험성을 상담한 후 신체진찰에서 직장은 붉고 염증이 있으며 압통이 있고, 직장주위 농양에서 고름이 배출되고 있었다. 대장내시경에서 대장과 말단회장을 침범하는 산재한 점막 병변이 보였다. 전혈구검사 결과는 다음과 같다.
혈색소 10 g/dL
총 백혈구 수 12,500/mm³
호중구 50%, 림프구 40%, 단핵구 5%
적혈구침강속도 22 mm/hr
가장 가능성 높은 진단은?

## 선택지

A. 과민성장증후군
B. 셀리악병
C. 궤양성 대장염
D. 크론병

## 해설

회장·결장의 분절성 병변과 항문주위농양은 Crohn D를 지지한다. 장벽전층 염증이 누공/농양에 기여하는 것이지 암처럼 전이하는 염증을 의미하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Crohn D의 전이성염증 오역을 장벽전층/분절성염증으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006343
