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

체중 2800 g (6 lb 3 oz)의 남아가 임신 39주에 22세 여성에게서 합병증 없이 태어났다. 산모는 산전진료를 받지 않았고 임신 1기에 브라질을 여행했다. 양극성장애로 리튬을 복용한다. 신생아는 키 50백분위수, 체중 25백분위수, 머리둘레 2백분위수이며 상하지 경직, 양측 손목 굴곡 고정, 심부건반사 4+, 국소 망막 색소 변화 및 이음향방사(otoacoustic emission) 검사 반응 부재이 있다. 다음 중 임신 중 어떤 조치가 이 상태를 예방했을 가능성이 가장 높은가?

## 선택지

A. 덜 익힌 고기 섭취 피하기
B. 모기 기피제 사용
C. 매일 산전비타민 복용
D. 기분안정제 중단

## 해설

임신 초기 브라질 여행 뒤 소두증·신경학적 이상·관절구축·망막 이상·청각 이상은 선천성 지카 증후군을 시사한다. 모기 기피제 사용(B) 등 모기 물림 예방이 위험을 낮춘다. 이 양상을 리튬 노출로 대체해 설명하거나 기분안정제를 임의 중단하도록 권하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 지카 선천감염 사례에 리튬 중단 해설을 연결한 오류 교정. 정답 B 유지.
- https://www.cdc.gov/zika/prevention/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001685
