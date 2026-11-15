---
type: qbank
schema_version: 1
id: medqa-us-test-001116
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:85fa4ee8a0c30f98df5df4199369d2579de320afeed1dd4cc5fc9cf29e179734
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "급성 용혈성 수혈반응"
  - "겸상적혈구병"
  - "수혈 중단"
related_disease_slugs:
  - MTEg7Jm46rO8L-q4ieyEsSDsmqntmIjshLEg7IiY7ZiIIOuwmOydkSAoQWN1dGUgSGVtb2x5dGljIFRyYW5zZnVzaW9uIFJlYWN0aW9uKS5tZA
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: management
difficulty: complex
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
---

# MedQA US 임상문제

## 문제

농축적혈구 수혈을 시작한 지 10분 만에 발열, 오한과 옆구리 통증이 생기고 혈압이 떨어졌다. 소변이 갑자기 붉어졌다. 우선 할 처치는?

## 선택지

A. 즉시 수혈을 중단하고 정맥로를 유지하면서 혈액은행에 알린다
B. 항히스타민제만 주고 같은 제제를 느린 속도로 계속 투여한다
C. 수혈을 모두 마친 뒤 용혈 검사를 한다
D. 수혈은 유지하고 혈압만 반복 측정한다

## 해설


급성 용혈성 수혈반응을 의심하면 즉시 수혈을 중단한다. 소생술과 함께 환자·제제 확인, 직접항글로불린검사와 용혈·세균오염 평가를 진행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-001116 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 급성 중증 수혈반응에서 D 유지. 수혈 중단만 하면 치료 완료라는 오해를 막고 응급 평가·혈액은행 통보 및 감별 필요 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.lifeblood.com.au/health-professionals/clinical-practice/adverse-events/management-of-suspected-reactions

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001116
- https://www.transfusion.or.kr/KOR/images/file/2022_5.pdf
- https://doi.org/10.1111/bjh.18789
