---
type: qbank
schema_version: 1
id: medqa-us-validation-000577
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:9d1a1fc92c2f31a14253e074fde33c6ce1a9be93398d3ef2971546f02d724935
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "유착태반"
  - "태반 만출 지연"
  - "산후출혈"
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L-yCsO2bhOy2nO2YiC5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 35주인 37세 여성(임신 4회, 출산 3회)이 활발한 진통으로 입원했다. 이전 세 번의 분만은 모두 하부 횡절개 제왕절개였으며 질식분만 한 시간 후에도 태반이 나오지 않았다. 태반을 수동으로 분리하자 다량의 질출혈이 발생했고 자궁저부는 단단하고 압통 없이 배꼽 높이에서 만져진다. 가장 가능성 높은 진단은?

## 선택지

A. 자궁파열
B. 전치태반
C. 유착태반
D. 태반조기박리

## 해설

반복 제왕절개 병력, 분리되지 않는 태반, 수동 분리 시 심한 출혈은 유착태반 스펙트럼을 시사한다. 자궁이 단단하므로 자궁이완에 의한 출혈보다 비정상적인 태반 부착이 더 적절하다. 정답 C의 유착태반은 태반이 자궁벽에 비정상적으로 부착된 상태로, 태반이 자궁경부 내구를 덮는 위치 이상인 전치태반과 같은 용어가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 유착태반과 전치태반을 동의어로 쓴 오류를 교정하고 제왕절개 반흔·태반 분리 곤란·견고한 자궁 단서를 연결했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000577
