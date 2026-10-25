---
type: qbank
schema_version: 1
id: medqa-us-train-006904
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:90f4dd2222cf4810cdcb1cab006c9a5ee74bf1177fa98a6878a07900b40ed8d3
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "다낭성 신장질환"
  - "중증 고칼륨혈증"
  - "응급 혈액투석"
related_disease_slugs:
  - MDUg7Iug7J6lL-qzoOy5vOulqO2YiOymnSAoSHlwZXJrYWxlbWlhKS5tZA
  - MDUg7Iug7J6lL-uLpOuCreyEsSDsvantjKUg7KeI7ZmYIChQb2x5Y3lzdGljIEtpZG5leSBEaXNlYXNlKS5tZA
question_type: management
difficulty: complex
answer: "A"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
curation_status: "revised"
curation_reason: "모든 중증 고K에 자동 투석이라는 일반화를 제거하고 제시된 선택지의 칼륨 제거 의미를 설명."
curation_reviewed_at: "2026-10-25"
medical_review_status: "content-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

39세 남성이 다음 날 예정된 오른쪽 서혜부 탈장 수술 전 평가를 위해 내원했다. 다낭성 신장질환과 고혈압이 있고 리시노프릴과 비타민 D3를 복용한다. 아버지도 같은 신장질환이 있었고 환자가 2세 때 뇌내동맥류로 사망했다. 체온은 37°C(98.6°F), 맥박은 분당 87회, 혈압은 108/68 mm Hg이다. 양쪽 다리에 함요부종이 있고 기침 충격이 있는 오른쪽 서혜부 탈장이 있다. 혈색소 9.0 g/dL, Na+ 132, K+ 6.5, Cl− 94, HCO3− 21 mEq/L, 포도당 86 mg/dL, 크레아티닌 2.9 mg/dL, 칼슘 8.7 mg/dL, 인 4.9 mg/dL이며 심전도에서 높은 T파가 보인다. 정맥 칼슘 글루콘산을 투여했다. 다음 중 이 환자의 확정적 치료는?

## 선택지

A. 혈액투석 시행
B. 소금과 칼륨 섭취 제한
C. 중탄산나트륨 투여
D. 농축 적혈구 수혈

## 해설

K6.5와 ECG 변화가 있어 calcium으로 심근을 안정화한 뒤에도 칼륨을 낮추는 처치가 필요하다. 제시된 선택지 중 혈액투석은 체내 칼륨을 신속히 제거하는 방법이다. 투석 준비 중 insulin·glucose 등 이동 치료와 원인 교정을 병행할 수 있으며 실제 투석 필요성은 신기능·재발·치료 반응을 함께 판단한다. Calcium 자체는 칼륨을 제거하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006904

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 모든 중증 고K에 자동 투석이라는 일반화를 제거하고 제시된 선택지의 칼륨 제거 의미를 설명.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
