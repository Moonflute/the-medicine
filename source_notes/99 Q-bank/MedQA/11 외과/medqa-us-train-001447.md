---
type: qbank
schema_version: 1
id: medqa-us-train-001447
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8af541db1c1336c92f5ff5708f03942c431785f6e8280631078e753add23edae
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "abdominal aortic aneurysm"
  - "smoking"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uzteu2gCDrjIDrj5nrp6XrpZggKEFiZG9taW5hbCBBb3J0aWMgQW5ldXJ5c20pLm1k
question_type: diagnosis
difficulty: standard
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
---

# MedQA US 임상문제

## 문제

75세 백인 남성이 복통으로 응급실에 내원했다. 집에서 저녁을 먹다가 심한 복통이 시작되었다고 한다. 당뇨병, 고혈압 및 죽상경화증 병력이 있다. 혼자 살며 담배를 피우고 매일 술 1–2잔을 마신다. 정맥 모르핀을 투여하고 초음파에서 복부 대동맥 확장이 보였다. 아버지도 비슷한 질환으로 사망해 예후를 걱정한다. 다음 중 이 상태의 가장 큰 위험인자는 무엇인가?

## 선택지

A. 죽상경화증
B. 백인 인종
C. 담배 흡연
D. 가족력

## 해설


복부대동맥 확장과 가족력·흡연력이 있는 고령 남성의 임상상은 복부대동맥류를 시사한다. 선택지 중 흡연(C)은 AAA 발생과 성장의 가장 중요한 수정 가능한 위험인자이다. 고령·남성·가족력 등도 관련된다. 이 질문의 답을 단순히 파열 위험만으로 설명하지 않으며, 실제 파열 위험은 최대 직경·성장속도·증상 등도 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001447 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 질문은 AAA 발생 위험인자인데 파열 위험으로만 해설한 범위를 바로잡았다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://esvs.org/wp-content/uploads/2024/02/ESVS-2024-AAA-Guidelines.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001447
