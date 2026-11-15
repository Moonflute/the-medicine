---
type: qbank
schema_version: 1
id: medqa-us-test-000548
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:47d1c39cc42efd8b96d03e14f152669b0f3b0cdf3bbd71ac818b5592ef341624
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "급성 허혈성 뇌졸중"
  - "뇌졸중 초기 평가"
  - "경동맥 잡음"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4jtmIjshLEg64eM7KG47KSRIChJc2NoZW1pYyBzdHJva2UpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

62세 환자가 90분 전부터 왼쪽 얼굴과 팔다리의 힘이 떨어져 지금 혼자 걷지 못한다. 혈당과 응고검사는 정상이고 혈압은 170/100 mmHg다. 뇌 CT에 출혈이 없고 혈관영상에 치료 가능한 대혈관 폐색은 없다. 다른 금기가 없다면 가장 적절한 재관류 치료는?

## 선택지

A. 응급 경동맥 내막절제술
B. 응급 정맥 헤파린
C. 아스피린과 클로피도그렐만 투여
D. 정맥 혈전용해

## 해설

장애를 유발하는 급성 허혈성 뇌졸중이 표준 치료 시간창 안에 있고 금기가 없으면 정맥 혈전용해를 시행한다. 대혈관 폐색이 없다는 이유로 정맥 치료를 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 급성 편측 결손에 두부CT D 유지. 허혈성으로 확진하고 모든 환자 재관류 필요라고 단정한 해설을 출혈 배제 및 적격성 평가 설명으로 수정.
- 공식/학회 근거: https://www.strokebestpractices.ca/recommendations/acute-stroke-management

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000548
- https://www.ahajournals.org/doi/10.1161/STR.0000000000000513
