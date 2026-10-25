---
type: qbank
schema_version: 1
id: medqa-us-test-000480
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:d976a09c8b36952aed151e379a51e78743cbdd4d34c7596af8c41f94dd8e4af3
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "급성 사지 허혈"
  - "동맥 색전"
  - "급성 동맥 폐색"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDrj5nrp6Ug7Y-Q7IOJIChBY3V0ZSBBcnRlcmlhbCBPY2NsdXNpb24pLm1k
question_type: diagnosis
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
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQmlzb3Byb2xvbC5tZA
---

# MedQA US 임상문제

## 문제

63세 환자가 30분 전 갑자기 시작된 심한 왼쪽 다리 통증과 저림으로 응급실에 왔다. 10년 동안 고혈압으로 비소프롤롤을 복용하고 있으며 담배와 술은 하지 않는다. 체온 37.1°C(98.7°F), 혈압 130/80 mmHg, 맥박 100회/분으로 불규칙했다. 심한 통증을 호소했고 왼쪽 다리는 창백하고 차가웠으며 왼쪽 오금동맥 맥박이 오른쪽보다 약했다. 다음 중 이 상태의 가장 흔한 원인은?

## 선택지

A. 혈관염
B. 고호모시스테인혈증
C. 동맥 색전
D. 동맥 외상

## 해설


갑작스러운 다리 통증·저림·창백·냉감과 맥박 저하는 급성 사지허혈을 시사한다. 불규칙한 맥박은 심방세동 관련 심장성 색전을 지지하므로 C가 가장 타당하다. 이는 모든 급성 사지허혈에서 색전이 가장 흔하다는 일반화는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-test-000480`와 직접 대조했다.
- 판정: 돌발 사지허혈·불규칙 맥박에서 심장성 동맥색전 C 유지. 모든 급성 사지허혈 원인이 색전이라는 과잉 일반화와 본문에 없는 청색증 제거.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000480
