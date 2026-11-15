---
type: qbank
schema_version: 1
id: medqa-us-train-001146
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:84fbdecf78a99f9bd97eb56ca5ffdb925ed91f165bbb06b7dbdb7931778a977c
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "Boerhaave syndrome"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rtYjrpbTtlZjruIwg7Kad7ZuE6rWwIChCb2VyaGFhdmUgU3luZHJvbWUpLm1k
question_type: management
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

심한 구토 뒤 갑자기 흉통이 생긴 환자의 CT에서 흉부 식도 천공과 많은 흉막 오염이 확인됐다. 저혈압과 패혈증 소견이 있다. 수액과 광범위 항생제를 시작하면서 할 조치는?

## 선택지

A. 경구 수분을 허용하고 통증을 관찰한다
B. 종격동 감염이 가라앉을 때까지 항생제만 준다
C. 내시경으로 작은 열상처럼 닫고 배액은 생략한다
D. 흉부외과와 즉시 누출·흉막 오염을 조절하고 배액하는 응급 치료를 진행한다

## 해설


심한 오염과 패혈증을 동반한 식도 천공은 금식과 정맥 항생제에 더해 즉시 누출과 오염을 조절해야 한다. 안정적이고 작은 국한성 천공에서 고려하는 보존적 치료와 다르다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001146 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 조영 식도검사 C는 유지하되 항상 가장 정확하다는 비교 근거 없는 단정을 제거했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6544956/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001146
