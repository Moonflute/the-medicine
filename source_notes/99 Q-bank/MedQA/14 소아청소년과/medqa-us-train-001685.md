---
type: qbank
schema_version: 1
id: medqa-us-train-001685
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e1fe4923829afb4534b30563dd7cbaa6f8f5a3fb290f7bcb9521379d83c8661e
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "congenital Zika syndrome"
  - "microcephaly"
  - "Zika virus"
question_type: prevention
related_disease_slugs:
  - MDgg6rCQ7Je8L-yngOy5tOuwlOydtOufrOyKpCDqsJDsl7wgKFppa2EgVmlydXMgSW5mZWN0aW9uKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 10주인 여성이 지카바이러스 유행이 확인된 지역으로 여행할 계획이다. 일정 변경이 가능하다. 태아 감염 위험을 줄이기 위해 가장 적절한 상담은?

## 선택지

A. 황열 백신을 맞으면 지카바이러스도 예방되므로 그대로 간다
B. 임신 중에는 해당 여행을 미루고, 피할 수 없다면 모기 물림과 성접촉을 통한 전파 예방법을 함께 상담한다
C. 임신 중에는 기피제를 전혀 쓰지 않고 현지 일정만 줄인다
D. 귀국 뒤 증상이 없으면 노출 위험을 고려할 필요가 없다

## 해설

유행 지역으로 가는 임신부는 가능하면 여행을 미룬다. 꼭 가야 한다면 임신 중 사용 가능한 기피제 등 모기 물림 예방과 성접촉을 통한 전파 예방을 함께 안내한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 지카 선천감염 사례에 리튬 중단 해설을 연결한 오류 교정. 정답 B 유지.
- https://www.cdc.gov/zika/prevention/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001685
- https://www.cdc.gov/zika/travel/
- https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=6257
