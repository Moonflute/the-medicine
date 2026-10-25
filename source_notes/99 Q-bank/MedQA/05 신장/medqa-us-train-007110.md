---
type: qbank
schema_version: 1
id: medqa-us-train-007110
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0f157f34681ff6b82cf14d02c372b991ce377ab105a904162273bf21122ad569
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "리튬 독성"
  - "리튬 중독"
  - "혈액투석"
  - "탈수"
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-umrO2KrCDspJHrj4UgKExpdGhpdW0gUG9pc29uaW5nKS5tZA
question_type: management
difficulty: complex
answer: "B"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbHByYXpvbGFtLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EaWF6ZXBhbS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PbGFuemFwaW5lLm1k
curation_status: "revised"
curation_reason: "미제시 저나트륨혈증을 삭제하고 장 세척의 절대 무효라는 오류 수정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

65세 남자가 하루 동안 지속된 의식 변화로 응급실에 내원했다. 2일 동안 두통, 심한 오심, 구토, 설사가 있었다. 고혈압, 불면증, 양극성 장애 병력이 있다. 리시노프릴, 플루옥세틴, 아토르바스타틴, 리튬, 올란자핀, 알프라졸람을 복용한다. 체온은 37.2°C(99.0°F), 맥박은 90회/분, 호흡수는 22회/분, 혈압은 102/68 mmHg이다. 졸리고 혼돈된 상태이며 점막이 건조하다. 신경학적 검사에서 구음장애, 전반적인 근력저하, 양손의 거친 떨림이 보인다. 나머지 진찰은 정상이다. 정맥 수액과 전해질 보충에 더해 가장 적절한 다음 치료는 무엇인가?

## 선택지

A. 장 세척
B. 혈액투석
C. 정맥 디아제팜
D. 정맥 단트롤렌

## 해설

Lithium 복용 중 탈수·GI 증상과 거친 떨림·구음장애·의식 저하는 중증 lithium 독성을 의심하게 한다. 의식 저하는 EXTRIP의 체외 제거 적응증이며 선택지 중 혈액투석이 적합하다. Lithium 중단·수액 및 농도/신기능 감시를 병행한다. 장 전체 세척은 일부 급성 서방형 과량 섭취에서 고려할 수 있지만 이미 발생한 만성 독성의 체내 lithium 제거를 대신하지 못한다. 본문에 Na 수치는 없다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007110

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 미제시 저나트륨혈증을 삭제하고 장 세척의 절대 무효라는 오류 수정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC4422246/
