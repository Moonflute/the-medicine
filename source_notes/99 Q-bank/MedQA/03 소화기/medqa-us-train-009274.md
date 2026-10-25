---
type: qbank
schema_version: 1
id: medqa-us-train-009274
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e8f590c5324ab4d5b5780f45980171284ed2ae40f91fe9e63b4f6f4b4198979d
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "symptomatic cholelithiasis"
  - "증상성 담석증"
  - "biliary colic"
  - "Cholelithiasis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_sk7jqsJzrj4wgKEdhbGxzdG9uZSkubWQ
question_type: management
difficulty: simple
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
  - ZHJ1ZzowNCDqsITri7Tst4wvVXJzb2Rlb3h5Y2hvbGljQWNpZC5tZA
  - ZHJ1ZzoxNCDqt7zqs6jqsqnCt-2GteymncK366eI7LeoL0tldG9yb2xhYy5tZA
---

# MedQA US 임상문제

## 문제

64세 남자가 복통으로 외래에 내원했다. 수개월 동안 식후 통증이 있었고 매운 음식으로 악화된다. 통증은 주로 오른쪽 상복부에 있으며 견갑골로 이동하는 느낌이다. 발작은 간헐적이고 예측하기 어렵다. 발열은 없다. 신체검사는 정상이다. 복부 초음파가 제시되었다. 이 상태의 가장 적절한 치료는 무엇인가?

## 선택지

A. 담낭절제술
B. 내시경적 역행성 담췌관 조영술(ERCP)
C. 케토롤락
D. 우르소데옥시콜산

## 해설


정답 A. 반복적인 식후 우상복부 통증과 우측 어깨로의 방사통, 발열이나 지속적 염증 소견의 부재는 담도산통에 부합한다. 증상성 담낭결석이 확인되면 선택지 중 담낭절제술이 근본적 치료다. 첨부 초음파 자체는 제공되지 않았으므로 결석의 실제 영상 형태를 판독했다고 할 수 없다. 본문만으로 급성 담낭염이나 담관염으로 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009274 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 반복 식후 담도산통에서 담낭절제 A 취지 유지; 누락 초음파를 실제 보았다고 주장하지 않고 담석 확인을 전제로 한 관리로 한정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://easl.eu/wp-content/uploads/2016/10/EASL-CPG-Gallstones.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009274
