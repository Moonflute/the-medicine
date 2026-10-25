---
type: qbank
schema_version: 1
id: medqa-us-train-002856
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ffcc3e85663d4e6e66647b3b8a68ab39009aa240ffb79faa2aa6e3deb1dc0230
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "isoniazid-induced sideroblastic anemia"
  - "latent tuberculosis treatment"
  - "microcytic anemia with high iron"
  - "pyridoxine deficiency"
related_disease_slugs:
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
question_type: adverse_effect
difficulty: complex
answer: D
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
---

# MedQA US 임상문제

## 문제

39세 남성이 잠복결핵감염을 진단받은 지 3개월 후 추적 진료를 위해 내원했다. 6주 동안 전신 피로와 운동 시 호흡곤란이 있었고 결막은 창백하다. 혈색소 7.8 g/dL, 평균적혈구용적 72 μm³, 적혈구분포폭 17%, 망상적혈구 0.7%, 백혈구 6,800/mm³, 혈소판 175,000/mm³이다. 크레아티닌은 0.8 mg/dL, 철 246 μg/dL, 페리틴 446 ng/mL, 총 철결합능 212 μg/dL이다. 다음 중 이 환자 증상의 가장 가능성 높은 원인은?

## 선택지

A. 철결핍
B. 만성 염증
C. 베타 지중해빈혈 소지자
D. 약물의 이상반응

## 해설


높은 철·ferritin과 낮은 TIBC를 동반한 소구성 저망상적혈구 빈혈은 철적모구빈혈을 고려하게 한다. 잠복결핵 진단 후 isoniazid를 복용했다면 pyridoxine(B6) 이용 장애로 ALA synthase 및 heme 합성이 저하되어 이러한 빈혈이 생길 수 있어 D가 출제 의도에 부합한다. 이는 myoglobin 합성 장애나 철결핍이 아니다. 다만 원문에는 실제 처방 약명이 없으므로 복약 확인 없이 isoniazid 원인으로 확정해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002856 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: B6-heme 합성 장애를 myoglobin 합성 장애·유리성 빈혈로 부른 오류를 sideroblastic anemia로 교정; 실제 INH 복용은 원문에 미명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f0b46d1d-2300-457d-a7bd-a88a3f8d2235

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002856
