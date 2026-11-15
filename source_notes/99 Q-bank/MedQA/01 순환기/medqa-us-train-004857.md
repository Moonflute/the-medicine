---
type: qbank
schema_version: 1
id: medqa-us-train-004857
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:83eb6bd3d528c2cf192f419698ff506260f42c7678f63783e905a6f041f3b668
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "울프-파킨슨-화이트 증후군"
  - "심실조기흥분"
  - "방실결절 차단제 금기"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yauO2UhC3tjIztgqjsiqgt7ZmU7J207Yq4IOymne2bhOq1sCAoV1BXIFN5bmRyb21lKS5tZA
question_type: contraindication
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmVyYXBhbWlsLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 여성이 갑자기 시작된 심계항진으로 내원했다. 이전 심전도에서 짧은 PR과 델타파가 있었다. 현재 심전도는 분당 210회의 불규칙한 넓은 QRS 빈맥이며 혈압은 120/75 mmHg이다. 조기흥분성 심방세동이 의심될 때 피해야 할 처치는?

## 선택지

A. 프로카인아미드
B. 베라파밀
C. 이부틸리드
D. 전기적 심율동전환

## 해설

조기흥분성 심방세동에서 방실결절만 차단하면 부전도로 빠른 심실 전도가 촉진되어 심실세동이 생길 수 있다. 베라파밀은 피한다. 안정적이라면 프로카인아미드 또는 이부틸리드 등을 고려하고 불안정하면 동기화 심율동전환을 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 조기흥분성 빈맥에서 verapamil 위험을 방실차단 악화가 아닌 부전도로 전도로 교정.
- https://academic.oup.com/eurheartj/article/41/5/655/5556821

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004857
- ACC/AHA 심방세동 진료지침, 조기흥분성 심방세동: https://www.ahajournals.org/doi/10.1161/CIR.0000000000001193
