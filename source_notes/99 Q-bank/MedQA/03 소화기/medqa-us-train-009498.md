---
type: qbank
schema_version: 1
id: medqa-us-train-009498
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:472d2e17e061fe558a03b40ed72f5b67d3d403a3cb2d8d2d1ed5d525ee0e5de0
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "esophageal variceal bleeding"
  - "식도정맥류 출혈"
  - "upper gastrointestinal bleeding"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_si53rj4Qg7KCV66el66WYIChFc29waGFnZWFsIFZhcmljZXMpLm1k
  - MTEg7Jm46rO8L-ychOyepeq0gCDstpztmIggKEdhc3Ryb2ludGVzdGluYWwgQmxlZWRpbmcpLm1k
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
---

# MedQA US 임상문제

## 문제

61세 여성이 한 시간 동안 피를 토해 응급실에 왔다. 몇 시간 동안 구토하던 중 갑자기 흉통과 상복부 통증이 생겼고 구토물에서 피를 보았다. 어지럽지만 호흡곤란이나 기침은 없고 삼킬 때 통증이 악화되지 않는다. 최근 3개월 동안 쉽게 멍이 들었다. 오랜 알코올 사용으로 간경변이 진행되었고 식도정맥류가 있어 예방을 위해 프로프라놀롤을 복용한다. 체온 98.2°F(36.8°C), 혈압 94/60 mmHg, 맥박 103회/분, 호흡수 16회/분이다. 중등도의 고통 상태이고 구토 대야에 선홍색 피가 있다. 정맥 등장성 식염수, 판토프라졸, 세프트리악손, 옥트레오티드를 시작했다. 다음으로 가장 적절한 처치는 무엇인가?

## 선택지

A. 신선동결혈장 투여
B. 경정맥 간내 문맥전신 단락술(TIPS)
C. 비선택적 베타차단제 투여
D. 내시경 시행

## 해설


정답 D. 토혈 환자에게 이미 수액·PPI·항생제·octreotide 등 초기 처치를 시작했으며 혈역학적 소생과 필요 시 기도 보호 후 상부위장관내시경으로 출혈원을 확인하고 지혈한다. 간경변/정맥류 병력은 정맥류 출혈 가능성을 높이지만 반복 구토 후 Mallory-Weiss 열상 등도 가능하다. 혈압이 낮은 상태에서 소생 없이 바로 검사를 진행하라는 뜻이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009498 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 초기 소생 후 EGD D 유지; 간경변만으로 정맥류 출혈 확진·Mallory-Weiss 배제하지 않도록 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11090185/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009498
