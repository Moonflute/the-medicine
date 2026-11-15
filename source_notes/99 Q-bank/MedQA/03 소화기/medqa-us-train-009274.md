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

64세 남성이 수개월간 기름진 식사 뒤 반복되는 오른쪽 윗배 통증을 호소한다. 통증은 오른쪽 견갑골로 퍼지고 1~2시간이면 가라앉는다. 현재 통증과 발열은 없고 간기능 검사는 정상이다. 초음파에서 움직이는 담낭결석이 보이며 담낭벽 비후나 총담관 확장은 없다. 재발을 막기 위한 근본 치료는?

## 선택지

A. 계획 복강경 담낭절제술
B. 응급 내시경 역행 담췌관조영술(ERCP)
C. 필요할 때 케토롤락만 투여
D. 우르소데옥시콜산을 일률적으로 장기 투여

## 해설


담낭결석 때문에 전형적인 담도산통이 반복되면 담낭절제술이 근본 치료다. 간기능과 총담관이 정상이고 담관염 소견이 없어 응급 ERCP를 우선할 상황은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009274 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 반복 식후 담도산통에서 담낭절제 A 취지 유지; 누락 초음파를 실제 보았다고 주장하지 않고 담석 확인을 전제로 한 관리로 한정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://easl.eu/wp-content/uploads/2016/10/EASL-CPG-Gallstones.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009274
