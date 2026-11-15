---
type: qbank
schema_version: 1
id: medqa-us-train-006490
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a6a420e366b57613ebafe8aed5f979f327ac15971d1f0e3666667c70e7f77ee7
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "청소년 피임 상담"
  - "환자 비밀보장"
  - "성 건강 상담"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-yekOq2geuCtOyepey5mCAoSW50cmF1dGVyaW5lIERldmljZSkubWQ
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

16세 청소년이 임신과 성매개감염을 모두 예방하고 싶다며 피임 상담을 요청했다. 적절한 설명은?

## 선택지

A. 경구피임약을 꾸준히 먹으면 성매개감염도 줄어든다
B. 자궁내장치를 선택하면 콘돔은 필요 없다
C. 선호에 맞는 효과적인 피임법과 함께 매회 콘돔 사용을 안내한다
D. 응급피임약만 미리 받아두면 두 가지를 모두 예방할 수 있다

## 해설

피임약이나 자궁내장치는 임신 위험을 낮추지만 성매개감염을 막지 않는다. 콘돔을 병행하고 피임법은 장단점과 환자의 선호에 맞춰 선택한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 포괄적 피임상담 B 유지. 부모 동의가 어디서나 법적으로 불필요하다는 단정 삭제.
- https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2020/04/confidentiality-in-adolescent-health-care

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006490
- https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=6538
