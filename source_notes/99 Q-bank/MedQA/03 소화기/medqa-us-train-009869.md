---
type: qbank
schema_version: 1
id: medqa-us-train-009869
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ce3e239f1e6c39f83cbb38c31f88e84b5c64e08d345b41067d8369dd7a9d11e5
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "셀리악병"
  - "포진상 피부염"
  - "IgA 조직 트랜스글루타미나제 항체"
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-uMgOyDgSDtj6zsp4QgKEhlcnBlcyBab3N0ZXIpLm1k
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shYDrpqzslYXrs5EgKENlbGlhYyBEaXNlYXNlKS5tZA
question_type: investigation
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

17세 여성이 6개월 동안 지속된 복통과 어깨의 가려운 피부 발진으로 부모와 함께 내원했다. 식후 복부 팽만감을 느낀다고 한다. 지난 3개월 동안 하루에 여러 차례 묽은 변을 보았다. 마른 체형이며 키는 20백분위수, 체중은 8백분위수이다. 체온 37°C, 맥박 분당 90회, 호흡수 분당 16회, 혈압 120/78 mmHg이다. 진찰에서 결막 창백과 구각염이 보인다. 양쪽 어깨에 팽팽하고 무리지어 있는 표피하 수포가 여러 개 있다. 복부는 부드럽고 전반적 압통이 있으나 경직이나 반발통은 없다. 추가 평가에서 다음 중 어떤 소견이 나타날 가능성이 가장 높은가?

## 선택지

A. 혈청 리파아제 증가
B. 식도막
C. IgA 조직 트랜스글루타미나제 항체
D. 산성 내성 염색에서 난포낭

## 해설


정답 C. 만성 설사·흡수장애와 소양성 신전부 발진은 셀리악병 및 포진상피부염을 시사한다. IgA-tTG는 적절한 혈청검사이며 gluten 섭취 중 total IgA와 함께 해석한다. IgA 결핍이면 IgG 기반 검사로 평가해야 한다. 증상 조합 자체나 항체 하나만으로 모든 환자에서 확진된다고 보지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009869 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 설사·흡수장애·포진상피부염에서 IgA-tTG C 취지 유지; 검사 조건과 IgA 결핍 한계 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pubmed.ncbi.nlm.nih.gov/36602836/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009869
