---
type: qbank
schema_version: 1
id: medqa-us-train-000925
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c09af41957925139a0f353fdcae31b5fe0a4e0c3e97da36285052c3dcaa9f902
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "Pyelonephritis"
  - "Ectopic pregnancy"
  - "Appendicitis"
  - "Pelvic inflammatory disease"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yekOq2geyZuCDsnoTsi6AgKEVjdG9waWMgUHJlZ25hbmN5KS5tZA
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_stqnsiJjsl7wgKEFwcGVuZGljaXRpcykubWQ
  - MTMg67aA7J246rO8L-qzqOuwmOuCtCDqsJDsl7wgKFBlbHZpYyBJbmZsYW1tYXRvcnkgRGlzZWFzZSkubWQ
  - MDUg7Iug7J6lL-q4ieyEsSDsi6DsmrDsi6Dsl7wgKEFjdXRlIFB5ZWxvbmVwaHJpdGlzKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

17세 환자가 하복부 통증과 점액고름성 자궁경부 분비물로 왔다. 임신검사는 음성이고 자궁경부 이동통과 양측 부속기 압통이 있다. 다른 원인은 뚜렷하지 않고 활력은 안정적이다. 임균·클라미디아 검사 결과를 기다리는 동안 처치는?

## 선택지

A. 결과가 나올 때까지 항생제를 모두 미룬다
B. 외음질 칸디다증으로 보고 항진균제를 투여한다
C. 진단 확인을 위해 자궁내막 소파술부터 한다
D. 골반염을 의심해 경험적 항생제를 시작한다

## 해설


상행 감염이 의심되고 자궁경부 이동통이나 자궁·부속기 압통이 있으면 검사 확정 전에 골반염 치료를 시작한다. 검체는 채취하되 결과를 기다리느라 치료를 늦추지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000925
- https://www.cdc.gov/std/treatment-guidelines/pid.htm
