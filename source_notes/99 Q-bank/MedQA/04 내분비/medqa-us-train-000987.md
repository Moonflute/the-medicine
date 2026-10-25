---
type: qbank
schema_version: 1
id: medqa-us-train-000987
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9222070b5e028e06f5f846527ebb04e6c1965260295c204b98b72a313e7a16c5
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hypertension"
  - "gastroesophageal reflux disease"
  - "primary hyperaldosteronism"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITsi53rj4Qg7Jet66WYIOyniO2ZmCAoR0VSRCkgKEdhc3Ryb2Vzb3BoYWdlYWwgUmVmbHV4IERpc2Vhc2UpLm1k
  - MDQg64K067aE67mEL-yVjOuPhOyKpO2FjOuhoOymnSAoQWxkb3N0ZXJvbmlzbSkubWQ
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvU3Bpcm9ub2xhY3RvbmUubWQ
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 남성이 건강 검진을 위해 내원하였다. 6개월 전 방문 이후 전신 피로감과 근육통이 있었다. 고혈압과 위식도역류질환(GERD) 병력이 있다. 현재 복용 중인 약물은 암로디핀(amlodipine)과 오메프라졸(omeprazole)이다. 체온은 37.1°C, 맥박은 88회/분, 혈압은 156/102 mmHg이다. 신체 검진상 이상 소견은 없다. 혈청 검사 결과는 다음과 같다: Na+ 143 mEq/L, K+ 2.3 mEq/L, Cl- 100 mEq/L, HCO3- 31 mEq/L, 혈액요소질소(BUN) 14 mg/dL, 크레아티닌 1 mg/dL. 혈압약을 중단하였다. 1주일 후 혈장 알도스테론 농도는 35 ng/dL(정상: 3.6-24.0 ng/dL)이고 혈장 레닌 활성도는 0.4 ng/mL/h(정상: 0.3-4.2 ng/mL/h)이다. 3일간의 경구 나트륨 부하 검사에서 알도스테론이 감소하지 않았다. 복부 및 골반 조영 증강 CT 검사에서 3cm 크기의 균일한 우측 부신 종괴가 관찰되었으며 빠른 조영제 소실(washout)을 보였다. 환자는 치료 옵션에 대해 상담을 받았고 수술을 선택하였다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 스피로노락톤(spironolactone) 치료
B. 우측 부신절제술
C. 부신 정맥 채혈(adrenal vein sampling)
D. 양측 부신절제술

## 해설

정답은 C이다. 원발성 알도스테론증이 확인되고 42세에서 수술을 원하므로 AVS로 aldosterone 과분비의 편측성을 확인한다. CT의 우측 종괴가 기능성 원인인지, 양측 분비인지 구별하는 목적이며 양쪽에 종양이 있는지 해부학적으로 확인하는 검사가 아니다. 이 결과에 따라 수술 또는 MRA 치료를 결정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: AVS가 양쪽 종양 존재를 확인하는 검사라는 해설 교정.
- https://www.endocrine.org/clinical-practice-guidelines/primary-aldosteronism-2

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000987
