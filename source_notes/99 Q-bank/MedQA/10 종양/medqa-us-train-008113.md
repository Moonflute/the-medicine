---
type: qbank
schema_version: 1
id: medqa-us-train-008113
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c681777598d95ea67ae6e2c3b46e388a64fb6a10368645276bc9385c1454bab7
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "Lynch syndrome"
  - "MLH1 MSH2 mutation"
  - "endometrial and ovarian cancer prophylaxis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsrDsnqXsp4HsnqXslZQgKENvbG9yZWN0YWwgQ2FuY2VyKS5tZA
  - MTMg67aA7J246rO8L-yekOq2gSDrgrTrp4nslZQgKEVuZG9tZXRyaWFsIENhbmNlcikubWQ
question_type: prevention
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0NlbGVjb3hpYi5tZA
---

# MedQA US 임상문제

## 문제

34세 여성이 정기 건강검진을 위해 내원했다. 위식도역류질환이 있고 최근 새 도시로 이사했다. 아버지는 46세에 대장암을 진단받았고 큰아버지는 소장암, 친할아버지는 위암으로 사망했다. 대장내시경은 정상이며 DNA 염기서열검사에서 DNA 복구 유전자 MLH1과 MSH2 변이가 보인다. 이 환자가 일생 중 가장 필요할 가능성이 높은 처치는?

## 선택지

A. 자궁적출술과 양측 난관난소절제술
B. 셀레콕시브 또는 설린닥 치료
C. 예방적 양측 유방절제술
D. 회장항문문합을 동반한 예방적 전대장직장절제술

## 해설


MLH1/MSH2 관련 Lynch syndrome은 자궁내막암과 난소암 위험이 높아 장기계획에서 risk-reducing hysterectomy와 bilateral salpingo-oophorectomy A를 고려한다. 이는34세현재 모든 환자에게 즉시수술하라는 뜻이 아니다. 출산 완료, 유전자별위험·가족력, 폐경·동반질환과 수술로 인한 조기폐경의 위해를 함께 상의해 시기를 개별화한다. 정상 대장내시경이 이 유전위험을 없애지는 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008113 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Lynch 예방수술 A는일생중고려이나34세현재즉시일률시행아님. 출산계획·유전자·조기폐경위험에따른시기명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://integration.asrm.org/globalassets/_asrm/practice-guidance/practice-guidelines/pdf/reproductive_and_hormonal_considerations.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008113
