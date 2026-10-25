---
type: qbank
schema_version: 1
id: medqa-us-train-007805
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:34426a57090b0bbdde8c137e9ad359626de5f10cd6681fc646fe24f3ae155eff
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "17-alpha-hydroxylase deficiency"
  - "46,XX disorder of sex development"
  - "hypokalemic hypertension"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: diagnosis
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
---

# MedQA US 임상문제

## 문제

14세 여아가 무월경으로 산부인과에 의뢰되었다. 어머니는 아이에게 “은밀한 부위” 털이 전혀 나지 않은 것도 걱정한다. 환자는 고등학교에 적응 중이며 배구팀에 가입하고 싶지만 쇠약감과 두통 때문에 신체활동이 제한된다고 한다. 월경에 대한 어머니의 걱정은 공유하지 않는다. 부모가 외사촌 관계라고 밝힌다. 체온 98°F(37°C), 혈압 160/90 mm Hg, 맥박 70회/분, 호흡수 24회/분이다. 심장 진찰은 정상이고 복부에서 잡음은 없다. 동의를 얻어 시행한 골반검사에서 털이 없는 정상 모양의 질이 보이고 자궁경부는 촉지되지 않는다. 초기 검사에서 혈청 Na⁺ 143, Cl⁻ 110, K⁺ 2.9, HCO₃⁻ 26 mEq/L, BUN 40 mg/dL, 포도당 104 mg/dL, 크레아티닌 1.3 mg/dL이다. 가장 가능성 높은 진단은?

## 선택지

A. 3β-하이드록시스테로이드 탈수소효소 결핍
B. 5α-환원효소 결핍
C. 11β-수산화효소 결핍
D. 17α-수산화효소 결핍

## 해설


정답 D. 성호르몬 부족에 의한 사춘기 발달 지연/무월경과 저칼륨성 고혈압은 17α-hydroxylase/17,20-lyase 결핍에 부합한다. DOC 등 mineralocorticoid 작용을 가진 전구체가 증가하고 renin/aldosterone은 억제될 수 있다. 자궁경부가 촉지되지 않는다고 46,XX로 확정하면 안 되며, 46,XY에서도 여성형 외부생식기와 자궁 부재로 발현할 수 있어 핵형·호르몬·영상 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007805 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 경부 부재를 46XX로 확정한 오류 제거. CYP17A1 결핍은 DOC/corticosterone 증가로 저칼륨성 고혈압, 성호르몬 부족.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://medlineplus.gov/genetics/condition/17-alpha-hydroxylase-17-20-lyase-deficiency/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007805
