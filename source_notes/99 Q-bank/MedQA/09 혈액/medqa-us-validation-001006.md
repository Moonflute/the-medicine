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
answer: C
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

수혈을 시작한 뒤 체온이 37.0°C에서 38.4°C로 오르고 오한이 생겼다. 수혈을 중단했고 혈압과 산소포화도는 안정적이다. 환자·제제가 일치하며 용혈과 세균오염은 평가에서 배제됐다. 가장 가능성 높은 반응은?

## 선택지

A. 급성 용혈성 수혈반응
B. 수혈 관련 순환과부하
C. 발열성 비용혈성 수혈반응
D. 수혈 관련 급성 폐손상

## 해설


수혈 중 또는 종료 후 수 시간 내 발생한 열과 오한에서 위험한 용혈과 세균오염을 배제했다면 발열성 비용혈성 수혈반응에 부합한다. 발열만으로 처음부터 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001006 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수혈 후 발열/오한·호흡보존에서 FNHTR B 유지. 수혜자 항백혈구 항체 또는 제제내 cytokine 기전과 배제 진단임을 정확히 설명.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.isbtweb.org/resources/educational-modules-on-clinical-use-of-blood/adverse-effects-of-transfusion.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001006
- https://www.transfusion.or.kr/KOR/images/file/2022_5.pdf
- https://profedu.blood.ca/en/transfusion/clinical-guide/transfusion-reactions
