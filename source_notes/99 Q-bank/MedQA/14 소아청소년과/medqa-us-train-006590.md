---
type: qbank
schema_version: 1
id: medqa-us-train-006590
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c4cc40fcd23e895d13cb37f1b1bf9dd4616db971021a6dec967f6219c3c41f26
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "신생아 저혈당"
  - "베크위드-비데만 증후군"
  - "거대아"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-qxsOuMgOyVhCAoTWFjcm9zb21pYSkubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIOyggO2YiOuLueymnSAoTmVvbmF0YWwgSHlwb2dseWNlbWlhKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv67Kg7YGs7JyE65OcLeu5hOuNsOunjCDspp3tm4TqtbAgKEJlY2t3aXRoLVdpZWRlbWFubiBTeW5kcm9tZSkubWQ
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTmFsb3hvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

체중 4,300g(9lb 8oz)의 신생아가 출생 2일 후 수유 곤란과 점점 심해지는 기면을 보인다. 울음은 약해졌다. 만삭으로 태어났고 어머니는 정맥주사 약물 사용력이 있다. 체온은 36.4°C(96.5°F), 맥박은 분당 170회, 호흡수는 분당 62회, 혈압은 70/48 mm Hg이다. 진찰에서 중안면 저형성, 발한 및 하지 떨림이 보인다. 대설증이 있고 귓바퀴 뒤쪽 연골에 주름이 있다. 왼쪽 하지가 오른쪽보다 크고 배꼽탈장이 있다. 간은 오른쪽 늑골 아래 4cm까지 만져진다. 신경학적 진찰에서 모든 사지의 긴장도가 감소되어 있다. 다음 중 처치로 가장 적절한 것은?

## 선택지

A. 티록신 투여
B. 포도당 투여
C. 암피실린과 겐타마이신 투여
D. 날록손 투여

## 해설

거대아·대설증·귀 주름·편측 과성장·배꼽탈장은 Beckwith–Wiedemann 스펙트럼을 시사하며 과인슐린혈증성 저혈당 위험이 있다. 발한·떨림·기면에서 즉시 혈당을 확인하고 포도당(B)으로 교정한다. 채혈 때문에 증상성 저혈당 치료를 지연하지 않는다. 모체 약물 병력만으로 금단이나 날록손을 선택하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 저혈당의 핵심 원인을 모체 약물 사용으로 오연결한 해설을 Beckwith–Wiedemann 과인슐린혈증으로 교정.
- https://www.safercare.vic.gov.au/best-practice-improvement/clinical-guidance/neonatal/hypoglycaemia-in-neonates

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006590
