---
type: qbank
schema_version: 1
id: medqa-us-train-007703
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c5ed6fa214be932daf73aa2614835e51a573d7102bcdf76857651019f4d31edb
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "cavernous sinus thrombosis"
  - "orbital cellulitis"
  - "ophthalmoplegia"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yXsOyhsOyngeyXvCAoQ2VsbHVsaXRpcykubWQ
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
---

# MedQA US 임상문제

## 문제

부비동염 치료 중 고열과 심한 두통이 생긴 환자다. 처음 한쪽에만 있던 안구돌출과 외안근 마비가 반대쪽에도 나타났다. 이마와 뺨의 감각도 떨어졌다. 가장 가능성 높은 진단은?

## 선택지

A. 안와격막 앞 봉와직염
B. 급성 폐쇄각 녹내장
C. 고립성 외전신경 마비
D. 패혈성 해면정맥동 혈전증

## 해설


양쪽으로 진행하는 안구 운동 이상과 삼차신경 첫째·둘째 분지 감각저하는 해면정맥동 침범을 시사한다. 조영 MRI·정맥영상 등을 신속히 시행하고 정맥 항생제를 준비한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007703 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고열·안구돌출·안근마비·V1/V2 저하로 해면정맥동을 국소화하는 B와 해설을 원문 대조 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007703
- https://my.clevelandclinic.org/health/diseases/23520-cavernous-sinus-thrombosis
