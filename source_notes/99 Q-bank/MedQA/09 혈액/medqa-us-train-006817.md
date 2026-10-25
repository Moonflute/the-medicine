---
type: qbank
schema_version: 1
id: medqa-us-train-006817
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c666dabdfed956c400b77adc72fc6cd8ed1a5509a08195e914e79cacb8625c97
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "백혈병양 반응"
  - "중증 백혈구증가증"
  - "백혈구 알칼리성 인산분해효소 상승"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uwse2YiOuzkSAoTGV1a2VtaWEpLm1k
question_type: diagnosis
difficulty: complex
answer: C
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

59세 남성이 피로감으로 주치의를 방문했다. 전반적으로 건강하지만 최근 체중 감소, 복통 및 전신 피로가 생겼다. 불안, 당뇨병, 넘어져 생긴 발 골절 및 일주일 결근을 유발한 최근 감기 병력이 있다. 메트포르민, 인슐린, 부스피론, 비타민 D, 칼슘 및 도쿠세이트 나트륨을 복용한다. 체온은 99.5°F(37.5°C), 혈압은 150/100 mmHg, 맥박은 분당 90회, 호흡수는 분당 18회, 산소포화도는 98%이다. 진찰에서 차분해 보이고 왼쪽 상흉골 부위에 경미한 수축기 잡음이 들린다. 혈색소 12 g/dL, 헤마토크릿 36%, 백혈구 66,500/mm³(감별계수 정상), 혈소판 177,000/mm³, 백혈구 알칼리성 인산분해효소 상승이다. 혈청 Na+ 139, Cl− 100, K+ 4.3 mEq/L, BUN 20 mg/dL, 포도당 120 mg/dL, 크레아티닌 1.1 mg/dL, 칼슘 10.9 mEq/L, AST 12 U/L, ALT 10 U/L이다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 급성 림프모구성 림프종
B. 만성 골수성 백혈병
C. 백혈병양 반응
D. 다발성 골수종

## 해설


백혈구66,500과 높은 LAP는 반응성 leukemoid reaction C를 지지하지만 확진 소견은 아니다. 감염·염증·악성종양 등 유발 원인을 찾고 도말·추적 및 필요시 BCR::ABL1 등으로 클론성 질환을 배제한다. 백혈병은 반드시 혈소판감소를 동반한다는 설명은 틀리다. 원문의 calcium10.9mEq/L는 일반 총칼슘mg/dL 표기와 다른 값이므로 단위를 확인해야 하며 정상 칼슘으로 간주하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006817 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: LAP 증가·혈소판 보존으로 백혈병을 배제할 수 있다는 해설 오류 교정; 반응성 증가 C의 한계 명시.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006817
