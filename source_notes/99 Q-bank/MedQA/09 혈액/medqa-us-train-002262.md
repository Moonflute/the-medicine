---
type: qbank
schema_version: 1
id: medqa-us-train-002262
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6abe6fb2283bceac4c43f428b5371b2c96a31699cc1e2c05ee4d0bd52996fc9c
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "heparin-induced thrombocytopenia"
  - "HIT"
  - "PF4 antibody"
  - "thrombosis"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2XpO2MjOumsCDsnKDrsJwg7ZiI7IaM7YyQ6rCQ7IaM7KadIChIZXBhcmluLUluZHVjZWQgVGhyb21ib2N5dG9wZW5pYSwgSElUKS5tZA
question_type: investigation
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
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
---

# MedQA US 임상문제

## 문제

혈액투석을 받는 말기 신장질환 65세 여성이 오른쪽 다리와 발의 통증, 부종, 변색으로 내원했다. 2주 전부터 주 2회 혈액투석을 시작했고, 1주 전 투석을 마친 뒤 오른쪽 종아리와 발등에 따뜻하고 아픈 부종이 생기기 전까지는 문제가 없었다. 이후 증상이 악화되었고 최근 오른쪽 발이 변색되었다. 장기간 고혈압에 따른 말기 신장질환이 있으며 투석 중 비분획 헤파린을 투여받는다. 오른쪽 종아리는 붓고 따뜻하며 홍반이 있다. 혈소판 수는 이전 200,000/mm³에서 100,000/mm³로 감소했다. 다음 중 가장 적절한 진단의 다음 단계는?

## 선택지

A. 헤파린/PF4 효소면역측정법(ELISA)
B. 제8인자 기능검사
C. 세로토닌 방출검사
D. CD55 유세포분석

## 해설


헤파린 시작 약 1주 뒤 혈소판이 50% 감소하고 새 혈전이 의심되어 HIT의 임상 가능성이 높다. 4Ts로 사전확률을 평가한 뒤 보기 중 heparin/PF4 면역검사 A를 초기 검사로 선택한다. ELISA는 민감하지만 병적 혈소판 활성화 항체가 아닌 항체도 검출하여 특이도는 제한된다. 양성이면 상황에 따라 serotonin-release assay 같은 기능검사를 추가한다. 의심이 높으면 결과를 기다리며 헤파린을 계속 투여하는 것이 아니라 중단하고 적절한 비헤파린 항응고 치료를 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002262 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HIT ELISA가 가장 민감하고 특이하다는 오류를 4Ts 후 면역검사·필요시 기능검사 순서로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6258919/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002262
