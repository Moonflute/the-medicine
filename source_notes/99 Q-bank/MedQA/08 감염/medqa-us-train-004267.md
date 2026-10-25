---
type: qbank
schema_version: 1
id: medqa-us-train-004267
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:296aeb1c2ad32df109f3f96e304714b69db9b6441adfe4a2814de4644679b9d3
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "HIV 감염"
  - "거대세포바이러스 대장염"
  - "면역저하"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
question_type: 임상증례 객관식
difficulty: complex
answer: A
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2hsb3J0aGFsaWRvbmUubWQ
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
---

# MedQA US 임상문제

## 문제

45세 남자가 3주간 진행된 설사와 2.2kg 체중 감소로 내원했다. 지난주부터 매일 소량의 혈변을 6회 보았다. 영업 관리자로 남아메리카를 정기적으로 비행하며 HIV, 위식도역류질환, 고혈압이 있다. 클로르탈리돈, 오메프라졸, 엠트리시타빈, 테노포비르, 에파비렌즈를 복용하지만 에파비렌즈는 불규칙하게 복용한다. 키 175cm, 체중 64kg, BMI 22kg/m²이다. 체온 38.1°C, 맥박 91회/분, 혈압 116/69 mmHg이며 복부는 오목하다. CD4+ T 림프구 수 44/mm³, 백혈구 6,000/mm³, ESR 12 mm/h이다. 대장내시경에서 대장 전체에 염증 부위가 흩어져 있고 취약성, 과립상, 얕은 선형 궤양이 보이며 염증 부위 사이 점막은 정상이다. 생검 사진이 제시되어 있다. 이 증상의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 거대세포바이러스
B. A형 간염 바이러스
C. 약물 부작용
D. 크립토스포리디움 파르붐

## 해설


CD4 44/µL의 HIV 환자에서 혈성 설사·대장 궤양은 선택지 중 CMV 대장염 A를 가장 의심하게 한다. CMV는 cytomegalovirus이며 HSV와 다른 바이러스다. 다만 그림이 누락되어 특정 봉입체를 관찰했다고 단정하지 않고, 실제 확진에는 적합한 내시경 병변과 조직의 바이러스 세포병리/면역염색 등이 필요하다. 혈액 검출이나 CD4 수치만으로 장기침범을 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004267 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: CMV를 HSV라고 부르고 없는 조직 소견을 만들어낸 해설 교정; 진행 HIV 혈성 궤양성 대장염 A 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/cytomegalovirus

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004267
