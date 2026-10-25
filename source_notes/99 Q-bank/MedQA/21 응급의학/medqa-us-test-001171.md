---
type: qbank
schema_version: 1
id: medqa-us-test-001171
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:94a0484aa3aa7117d7a0177ab6b6b81a06f0c16999bfeec608518f55488ad5e8
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "운동 유발 열사병"
  - "고체온증"
  - "건설현장 열 노출"
  - "Heat stroke"
question_type: diagnosis
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yXtOyniO2ZmCAoSGVhdCBJbGxuZXNzKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9QaGVueXRvaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

33세 남성이 의식 변화로 응급실에 왔다. 건설 현장에서 쓰러진 채 발견되었고 수개월 전 충수절제술을 위해 마취를 받은 적이 있으며 과거 할로페리돌로 조절되는 조현병, 간질로 페니토인 복용, 불안과 갑상선기능항진증으로 프로프라놀롤 복용 중이다. 체온 106°F(41.1°C), 혈압 109/62 mmHg, 맥박 170회/분, 호흡 23회/분, 산소포화도 95%였고 글래스고 혼수척도 10점, 근긴장 저하, 발한과 혼돈이 있었다. 가장 가능성 높은 진단은?

## 선택지

A. 운동 유발 열사병
B. 악성 고체온증
C. 신경이완제 악성 증후군
D. 갑상선 폭풍

## 해설

건설 작업 중 쓰러진 환자의 41.1°C 고체온·중추신경계 이상·발한과 낮은 근긴장도는 선지 중 운동성 열사병(A)을 지지한다. 구체적 환경 온도·노출 시간은 명시되지 않았다. 수개월 전 마취는 현재의 급성 악성고열증을 설명하지 않고 NMS의 전형적 심한 강직도 없다. 다른 원인을 동시에 평가하되 열사병이 의심되면 신속한 적극 냉각을 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 열사병 A를 유지하고 본문에 없는 장시간 고온 노출을 확정하지 않으며 감별에 중요한 수개월 전 마취력을 원문대로 복원한다.
- 공식/학회 근거: https://sccm.org/clinical-resources/guidelines/guidelines/guideline-for-the-treatment-of-heat-stroke

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001171
