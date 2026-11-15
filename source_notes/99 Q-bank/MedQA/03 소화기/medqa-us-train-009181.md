---
type: qbank
schema_version: 1
id: medqa-us-train-009181
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:037f69aabc4a7702edf35c9cf9b1992a9a39c1458fc9e9770f0d2688b855fdca
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acute cholecystitis"
  - "급성 담낭염"
  - "cholelithiasis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7JO46rCc7Je8IChBY3V0ZSBDaG9sZWN5c3RpdGlzKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_sk7jqsJzrj4wgKEdhbGxzdG9uZSkubWQ
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzoxNCDqt7zqs6jqsqnCt-2GteymncK366eI7LeoL0tldG9yb2xhYy5tZA
---

# MedQA US 임상문제

## 문제

44세 여성이 담낭경부 결석에 의한 급성 담낭염으로 입원했다. 초음파에서 담낭벽이 두껍고 안쪽 막이 떨어져 나가 괴저성 변화가 의심된다. 총담관은 정상이다. 수액과 항생제 투여 뒤 혈역학적으로 안정적이고 수술을 견딜 수 있다. 감염원 조절 방법은?

## 선택지

A. ERCP로 총담관 배액
B. 항생제만 이어가고 외래 추적
C. 경피적 담낭배액만 시행하고 수술하지 않음
D. 이번 입원 중 신속히 담낭절제술

## 해설


괴저가 의심되는 담낭염에서 수술이 가능하면 조기에 담낭을 제거해 감염원을 조절한다. 항생제만으로 수주 기다리지 않는다. 수술을 감당할 수 없는 경우의 담낭배액이나 총담관 폐쇄에서의 ERCP와 구별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009181 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 항생제 B는 초기 처치로 유지하되 점막 박리는 괴저 가능성으로 조기 외과적 감염원 조절이 필요하며 단순 6주 지연 설명을 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/7643471/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009181
- https://pubmed.ncbi.nlm.nih.gov/29045062/
