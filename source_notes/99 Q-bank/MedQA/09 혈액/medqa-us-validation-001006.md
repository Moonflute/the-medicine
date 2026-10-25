---
type: qbank
schema_version: 1
id: medqa-us-validation-001006
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:1e3492fb2c558e48e0db0e54bb1c290d550f4f15562643152a4f7c542b19e3bf
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "발열성 비용혈성 수혈반응"
  - "수혈 부작용"
  - "소화성 궤양 출혈"
related_disease_slugs:
  - MTEg7Jm46rO8L-yImO2YiOu2gOyekeyaqS5tZA
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITqtqTslpEgKEdhc3RyaWMgVWxjZXIpLm1k
question_type: diagnosis
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

45세 여성이 소화성 궤양 출혈로 대량 수혈과 내시경적 지혈을 받은 뒤 2시간 후 열감과 간헐적 오한을 호소했다. 체온은 38.3°C로 상승했지만 호흡기 증상이나 발진은 없고 폐 청진도 정상이다. 가장 가능성 높은 진단은?

## 선택지

A. 발열성 용혈성 수혈반응
B. 발열성 비용혈성 수혈반응
C. 수혈 관련 세균 오염
D. 수혈 관련 급성 폐손상

## 해설


수혈 뒤 새 발열과 오한이 있으나 호흡곤란·저산소증·발진이 없어 선택지 중 발열성 비용혈성 수혈반응(B)이 가장 부합한다. 수혜자의 항백혈구 항체 또는 혈액제제에 축적된 염증 cytokine이 관련된다. 발열만으로 확정할 수는 없으며 급성 용혈이나 세균 오염을 배제한 뒤 진단한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001006 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수혈 후 발열/오한·호흡보존에서 FNHTR B 유지. 수혜자 항백혈구 항체 또는 제제내 cytokine 기전과 배제 진단임을 정확히 설명.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.isbtweb.org/resources/educational-modules-on-clinical-use-of-blood/adverse-effects-of-transfusion.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001006
