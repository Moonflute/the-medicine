---
type: qbank
schema_version: 1
id: medqa-us-train-000488
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cd483a9dab05a22c6098270309e526ea6cae33381e66668b885852a62741c70a
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "watery diarrhea"
  - "gastroesophageal reflux disease"
  - "GERD"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITsi53rj4Qg7Jet66WYIOyniO2ZmCAoR0VSRCkgKEdhc3Ryb2Vzb3BoYWdlYWwgUmVmbHV4IERpc2Vhc2UpLm1k
question_type: investigation
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
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
---

# MedQA US 임상문제

## 문제

55세 남성이 5일간 지속된 물설사, 발열, 복부 팽만감을 주소로 내원하였다. 대변에서 혈변은 관찰되지 않았다. 최근 식단 변화는 없었으며, 집에서 직접 요리한 같은 음식을 먹은 가족들은 설사 증상이 없었다고 한다. 최근 미국 밖으로 여행한 적은 없다. 복용 중인 유일한 약물은 위식도역류질환(GERD) 완화를 위해 지난 몇 달간 매일 복용해 온 고용량 오메프라졸(omeprazole)이다. 이 환자의 증상에 대한 초기 검사로 가장 적절한 것은 무엇인가?

## 선택지

A. 대장내시경(Colonoscopy)
B. 대변 잠혈 검사(Fecal occult blood test)
C. 대변 기생충 및 충란 검사(Stool ova and parasite)
D. 대변 독소 검사(Stool toxin assay)

## 해설


급성 수양성 설사·발열·복부팽만에서 선택지 중 C. difficile 독소를 평가하는 대변검사(D)가 가장 적절하다. PPI 사용은 CDI와 역학적 연관이 있지만 그것만으로 감염을 확진하거나 직접적인 정상균총 억제로 단순화하지 않는다. 설명되지 않는 하루3회 이상의 무형성변 등 검사 적응증을 확인하고, 기관의 검체선별 기준에 따라 GDH/독소 및 NAAT를 조합한 알고리즘을 사용한다. 독소 EIA 단독은 민감도가 낮아 음성만으로 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000488 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: PPI가 정상균총을 직접 억제한다고 단정한 기전을 제거하고 C. difficile 진단 알고리즘을 보완했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/clostridium-difficile/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000488
