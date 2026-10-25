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

22세 여자가 두근거림을 호소한다. 만성질환은 없고 대학 배구 선수이며 하루에 커피를 3잔 마신다. 형제 중 한 명에게 심장질환이 있다. 맥박은 분당 125회, 혈압은 90/75 mmHg이며 심전도에서 짧은 PR 간격과 넓은 QRS군이 보인다. 다음 중 피해야 할 약물은?

## 선택지

A. 프로카인아미드
B. 베라파밀
C. 카테터 절제술
D. 암로디핀

## 해설

짧은 PR·넓은 QRS는 조기흥분을 시사한다. 특히 조기흥분성 심방세동에서는 verapamil B 같은 방실결절 차단제가 부전도로 전도를 상대적으로 우세하게 해 위험한 심실반응/심실세동을 유발할 수 있어 피한다. 단순 방실차단이 악화되기 때문이라는 설명은 틀리다. 저혈압을 동반한 빈맥의 즉각적인 안정화 여부를 우선 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 조기흥분성 빈맥에서 verapamil 위험을 방실차단 악화가 아닌 부전도로 전도로 교정.
- https://academic.oup.com/eurheartj/article/41/5/655/5556821

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004857
