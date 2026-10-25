---
type: qbank
schema_version: 1
id: medqa-us-train-008148
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dc6f8780f953ddc1ec14a309addde87594cd5e1da198ad40db7e8c0f4277a65c
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "septic arthritis"
  - "inflammatory arthritis"
  - "synovial fluid analysis"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwkOyXvCDqtIDsoIjsl7wgKEluZmVjdGlvdXMgQXJ0aHJpdGlzKS5tZA
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y2xveGFjaWxsaW4ubWQ
---

# MedQA US 임상문제

## 문제

60세 남자가 몇 주 동안 지속된 좌측 무릎 통증으로 내원했다. 통증은 아침 뻣뻣함과 함께 약 한 시간 지속되며 하루 동안 활동하면 호전된다. 제2형 당뇨병, 고혈압, 소화성궤양질환, 허혈성심장질환이 있고 지난해 ST분절 상승 심근경색으로 혈관성형술을 받았다. 좌측 무릎이 부어 있고 따뜻하며 압통이 있고 통증 때문에 운동 범위가 감소되어 있다. 백혈구 14,000/mm³, ESR 40 mm/h이다. 가장 적절한 다음 처치는?

## 선택지

A. 좌측 무릎 X선
B. 활액 분석
C. 이부프로펜
D. 플루클록사실린

## 해설


따뜻하고 부은 단관절과 운동 제한에 백혈구·ESR 상승이 있어 관절액으로 감염성·결정유발성 관절염을 구별해야 하므로 B가 적절하다. 고열이 없거나 수주 경과라는 이유로 감염을 배제하지 않는다. 안정된 상황에서 관절천자로 배양 등 검체를 확보하고 결과 및 중증도에 맞춰 항생제 여부를 정한다. 기존 포충낭종·anaphylaxis 설명은 이 사례와 무관하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008148 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 무릎 활액검사 문항에 포충낭종·anaphylaxis/epinephrine 설명이 붙은 명백한 해설 오연결 교체.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9901514/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008148
