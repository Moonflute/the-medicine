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
---

# MedQA US 임상문제

## 문제

겸상적혈구병이 있는 10세 흑인 여아가 감염 중 급성 빈혈이 발생했다. 수혈을 시작한 직후 발열, 오한, 정맥주사 부위 작열감, 갑작스러운 저혈압이 생겼다. 이 반응의 이름과 최선의 치료는?

## 선택지

A. 비용혈성 발열성 반응; 항히스타민제 투여
B. 경미한 알레르기 반응; 수혈 중단
C. 용혈성 수혈반응; 항히스타민제 투여
D. 용혈성 수혈반응; 수혈 중단

## 해설


수혈 직후 발열·오한·주입부 작열감·저혈압은 급성 용혈성 수혈반응을 강하게 의심하게 하므로 수혈을 즉시 중단하는 D가 맞다. 수혈을 재개하지 말고 응급 소생·혈액은행 통보·환자/제제 확인 및 용혈·오염 등 감별검사를 진행한다. 중단만으로 관리가 끝나는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-001116 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 급성 중증 수혈반응에서 D 유지. 수혈 중단만 하면 치료 완료라는 오해를 막고 응급 평가·혈액은행 통보 및 감별 필요 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.lifeblood.com.au/health-professionals/clinical-practice/adverse-events/management-of-suspected-reactions

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001116
