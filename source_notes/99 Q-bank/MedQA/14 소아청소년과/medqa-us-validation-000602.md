---
type: qbank
schema_version: 1
id: medqa-us-validation-000602
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:afff6b409912db2915a3e3a6a1425c25e4c8dac8fc55412f0eb6ed786f9859d5
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "X연관 무감마글로불린혈증"
  - "B세포 결핍"
  - "모체 IgG 감소"
  - "X-linked agammaglobulinemia"
question_type: mechanism
related_disease_slugs: []
difficulty: complex
answer: D
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

10개월 남아가 반복되는 중이염, 폐렴, H. influenzae 수막염으로 진료를 받으러 왔다. 구개편도가 없고 유세포분석에서 B세포가 보이지 않는다. 이 환자에서 생후 늦게 증상이 나타난 것을 가장 잘 설명하는 것은?

## 선택지

A. 6개월까지 T세포 수용체 절제환 감소
B. 6개월부터 흉선 퇴축 시작
C. 6개월까지 비장 기능장애 발생
D. 6개월까지 모체 IgG 감소

## 해설

임신 중 태반을 통과한 모체 IgG는 출생 후 한동안 영아를 보호하지만 수개월에 걸쳐 감소한다. B세포가 없거나 매우 적은 X연관 무감마글로불린혈증 영아는 자체 항체를 충분히 만들지 못하므로 이 보호가 줄어드는 생후 수개월부터 감염이 두드러질 수 있어 D가 적절하다. 모체 IgG가 아예 전달되지 않았다는 뜻이 아니며 모유수유 종료가 태반 IgG를 없애는 것도 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: X연관 무감마글로불린혈증에서 모체 IgG가 태반을 통과하지 않는다는 잘못된 설명을 수동 전달 항체의 생후 소실로 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000602
