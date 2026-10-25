---
type: qbank
schema_version: 1
id: medqa-us-train-002009
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6b36a0ce255f5a6883be1b30d3487da7c39a79973fe34a75336f6e3d0e30c7f7
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Ebola virus disease"
  - "viral hemorrhagic fever"
  - "disseminated intravascular coagulation"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2MjOyihSDtmIjqtIDrgrQg7J2R6rOgIChEaXNzZW1pbmF0ZWQgSW50cmF2YXNjdWxhciBDb2FndWxhdGlvbiwgRElDKS5tZA
  - MDgg6rCQ7Je8L-uwlOydtOufrOyKpC5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

30세 여성 산림 조경 전문가가 토혈과 혼란으로 응급실에 왔다. 1주 전 발열, 심한 두통, 근육통, 고관절·어깨 통증과 반구진 발진으로 인플루엔자 진단을 받았으나 하루 정도 호전 후 복통, 구토와 설사가 발생했고 내원 전 토혈이 한 번 있었다. 2주 전 서아프리카 열대우림과 동굴을 방문하여 유인원을 포함한 동물과 직접 접촉했다. 심각한 질환이나 약물 복용력은 없다. 안절부절못하며 체온은 38.0°C (100.4°F), 맥박은 95회/분, 호흡수는 20회/분이고 누운 상태와 선 상태의 혈압은 각각 130/70, 100/65 mmHg이다. 결막 충혈과 하지의 반상출혈이 있고 정맥주사 부위에서 출혈이 있다. 말초혈액도말에서 병원체는 보이지 않는다. 혈색소 10 g/dL, 백혈구 1,000/mm³(분절호중구 65%, 림프구 20%), 혈소판 50,000/mm³, aPTT 60초, PT 25초, fibrin split product 양성, ALT 85 U/L, AST 120 U/L, GGT 83 U/L(정상 5–50), 크레아티닌 2 mg/dL이다. 가장 가능성 높은 원인 병원체는 무엇인가?

## 선택지

A. Ebola virus
B. Plasmodium falciparum
C. Yersinia pestis
D. Zika virus

## 해설


발열, 두통, 근육통, 반구진 발진 후 급성 출혈성 증상과 DIC 소견(혈소판 감소, aPTT·PT 연장, FDP 양성)이 나타난 점이 고위험 출혈성 바이러스 감염을 시사한다. 서아프리카 열대우림에서의 동물 접촉은 에볼라 바이러스 노출 위험을 높인다. 따라서 가장 가능성 높은 병원체는 에볼라 바이러스이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002009 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 영어 원문의 여성·활력징후·출혈/DIC 및 간검사 누락을 복구하며 에볼라 진단 해설은 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002009
